import { useContext } from "react"
import { AuthContext } from "../context/auth"


const useAuth = () => {
  const { user, login, isAuthenticated, setUser, changePassword } = useContext(AuthContext)

  return {
    user,
    login,
    isAuthenticated,
    setUser,
    changePassword
  }
}

export default useAuth