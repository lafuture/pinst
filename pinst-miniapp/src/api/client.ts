import axios from 'axios'

const BASE = import.meta.env.VITE_API_URL ?? ''
const TOKEN_KEY = 'pinst_token'

export const saveToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
export const getToken = () => localStorage.getItem(TOKEN_KEY)

const client = axios.create({ baseURL: BASE })

client.interceptors.request.use(cfg => {
  const token = getToken()
  if (token) cfg.headers.Authorization = `Bearer ${token}`
  return cfg
})

export default client
