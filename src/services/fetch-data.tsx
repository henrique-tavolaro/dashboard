
import { api } from "./api"

const dataFetch = async (company: String) => {
  const result = await api.post(
    "http://localhost:3333/try",
    {
      data: {
        company
      }
    },
  )

  if (!result) {
    throw new Error()
  }

  return result.data
}

export default dataFetch