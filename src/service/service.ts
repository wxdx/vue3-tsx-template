import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

/**
 * @description Log and display errors
 * @param {Error} error Error object
 */
const handleError = (res: AxiosResponse<any, any>) => {
  window.$message.error(res.data.msg)
}

const baseRequestConfig: AxiosRequestConfig = {
  baseURL:
    import.meta.env.MODE === 'development'
      ? '/xxx'
      : import.meta.env.VITE_APP_PROD_WEB_URL + '/xxx',
  timeout: 20000
}

const service = axios.create(baseRequestConfig)

const err = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err)
}

service.interceptors.request.use((config: AxiosRequestConfig<any>) => {
  return config
}, err)

// The response to intercept
service.interceptors.response.use((res: AxiosResponse) => {
  // No code will be processed
  if (res.data.code === undefined) {
    return res.data
  }

  switch (res.data.code) {
    case '200':
      window.$message.success(res.data.msg)
      return res.data.data
    default:
      handleError(res)
      throw new Error()
  }
}, err)

export { service as axios }