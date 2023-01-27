
import { api } from './api';

interface Props {
  email: string;
  password: string;
}

const loginService = async ({ email, password }: Props) => {

  const json = {
    email,
    password
  }

  const result = await api.post('/login', json)

  if (!result) {
    throw new Error()
  }

  return result.data
}

export default loginService

