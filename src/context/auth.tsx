import React, { createContext, useState, useEffect } from "react";
import loginService from "../services/login";
import { setCookie, parseCookies } from 'nookies'
import fetchUserInfo from "../services/fetch-user-info";
import { api } from "../services/api";
import changePasswordService from "../services/change-password";

interface IAuthContext {
  user: IUser | undefined;
  isAuthenticated: boolean;
  login: any;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  changePassword: any;
}

export const AuthContext = createContext({} as IAuthContext)

export interface LoginProps {
  email: string;
  password: string;
}

export interface ChangePasswordProps {
  password: string;
  confirmPassword: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  passwordChanged: boolean;
  role: string;
  company: string;
  createdAt?: Date;
  deletedAt?: Date;
}

export default function AuthProvider({ children }: any) {

  const [user, setUser] = useState<IUser>()

  const isAuthenticated = !!user

  useEffect(() => {
    async function navigateOnUser() {
      const { jwt } = parseCookies()

      if (jwt) {
        const response = await fetchUserInfo()

        setUser(response)
      }
    }

    navigateOnUser()
  }, [])



  const login = async ({ email, password }: LoginProps) => {
    const data = await loginService({ email, password })

    setCookie(undefined, 'jwt', data.jwt, {
      maxAge: 60 * 60 * 24 * 180 // 180 dias
    })

    api.defaults.headers['Authorization'] = `Beared ${data.jwt}`

    setUser(data.user)

    return data
  }

  const changePassword = async ({password, confirmPassword}: ChangePasswordProps) => {

    if(password !== confirmPassword){
      throw Error('Senhas não coincidem')
    }

    if(password.length < 8){
      throw Error('A senha precisa conter ao menos 8 caracteres')
    }

    const data = await changePasswordService({_id: user!._id, password, confirmPassword})

    setUser(data)

    return data
  }



  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, setUser, changePassword }}>
      {children}
    </AuthContext.Provider>)
}
