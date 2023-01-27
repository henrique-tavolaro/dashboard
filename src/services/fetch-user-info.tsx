import { api } from "./api"


const fetchUserInfo = async () => {
  const result = await api.get('/user')

  if (!result) {
    throw new Error()
  }

  return result.data
}

export default fetchUserInfo