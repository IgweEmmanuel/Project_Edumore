import axios from './axios'
import { isAccessTokenExpired, getRefreshedToken, setAuthUser } from './auth'
import Cookies from 'js-cookie'
import { API_BASE_URL } from './constants'

const useAxios = () => {
  const acccess_token = Cookies.get('access_token')
  const refresh_token = Cookies.get('refresh_token')

  const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      Authorization: `Bearer ${acccess_token}`,
    },
  })
  axiosInstance.interceptors.request.use(async (req) => {
    if (!isAccessTokenExpired) {
      return req
    }
    const response = getRefreshedToken(refresh_token)
    setAuthUser(response.access, response.refresh)
    req.headers.Authorization = `Bearer ${response.data?.access}`
    return req
  })
  return axiosInstance
}
export default useAxios
