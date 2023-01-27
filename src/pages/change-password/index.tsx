
import { Container, Content, Input, InputButton, Label, LabelError } from "./style";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { IUser } from "../../context/auth";

export function ChangePasswordPage() {

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const { register, handleSubmit } = useForm()
  const { user, changePassword } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    navigateAfterChangePassword(user!)
  },[ user])

  const navigateAfterChangePassword = (user: IUser) => {
      
    if (user && user.company === "MeteoIA") {
      navigate("/admin")
    }

    if (user.passwordChanged) {
      
      navigate("/index")
    }
  }


  const handleChangePassword = async (data: any) => {

    const result = await changePassword(data)

    if (!result) {
      setError(result)
      return
    }
  }

  return (
    <Container>
      <Label>Redefina sua senha</Label>
      <Content>
        <form
          onSubmit={handleSubmit(handleChangePassword)}

        >
          <Input
            {...register("password")}
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
               <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="confirme sua senha"
            value={confirmPassword}
            onChange={(e) => [setConfirmPassword(e.target.value), setError("")]}
          />
          <LabelError>{error}</LabelError>
          <InputButton
            type='submit'></InputButton>

        </form>
      </Content>

    </Container >
  )
}
