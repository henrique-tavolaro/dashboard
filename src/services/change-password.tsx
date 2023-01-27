
import { api } from './api';

interface Props {
  _id: string;
  password: string;
  confirmPassword: string
}

const changePasswordService = async ({ _id, password, confirmPassword}: Props) => {

  const result = await api.post('/changepassword', {
    _id,
    password,
    confirmPassword
  })

  if (!result) {
    throw new Error()
  }

  return result.data
}

export default changePasswordService 

