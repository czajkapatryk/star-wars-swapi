import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    common: {},
  },
})

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.error('Error 404: Resource not found')
          break
        case 422:
          console.error('Error 422: Unprocessable Entity')
          break
        case 500:
          console.error('Error 500: Internal Server Error')
          break
        default:
          console.error(
            `Error ${error.response.status}: ${error.response.statusText}`,
          )
      }
    } else if (error.request) {
      console.error('Network error: No response received from server')
    } else {
      console.error('Error', error.message)
    }
    return Promise.reject(error)
  },
)

export default api
