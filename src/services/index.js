import axios from 'axios'

export const getProducts = async () => {
  const res = await axios.get(`${import.meta.env.VITE_URL}`)
  return res
}
