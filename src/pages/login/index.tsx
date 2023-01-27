
import { Container, Content, Input, InputButton, Label, LabelError } from "./style";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IUser } from "../../context/auth";

export function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { register, handleSubmit } = useForm()
  const { login, user } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    navigateAfterLogin(user!)
  })

  const navigateAfterLogin = (user: IUser) => {
    if(user && user.company === "MeteoIA"){
      navigate("/admin")
    } 

    if(user && !user.passwordChanged){
      
      navigate("/changepassword")

    }

    if(user && user.passwordChanged){
      
      navigate("/index")

    }
  }


  const handleLogin = async (data: any) => {

    const result = await login(data)

    if (!result) {
      console.log(`ERROR`)
      return
    }

  }

  return (
    <Container>
      <Label>Faça seu login</Label>
      <Content>
        <form
          onSubmit={handleSubmit(handleLogin)}

        >
          <Input
            {...register("email")}
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            {...register("password")}
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <LabelError>{error}</LabelError>
          <InputButton
            type='submit'></InputButton>

        </form>
      </Content>

    </Container >
  )
}
