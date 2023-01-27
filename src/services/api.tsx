import axios from 'axios'
import { parseCookies } from 'nookies'

const { jwt } = parseCookies()

export const api = axios.create({
  baseURL: 'http://localhost:3333'
})

if (jwt) {
  api.defaults.headers['Authorization'] = `Bearer ${jwt}`
}

