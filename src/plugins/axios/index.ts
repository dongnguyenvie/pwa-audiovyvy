import axios from 'axios'
import * as types from './types'
import _ from 'lodash'
const baseDomain = 'https://audiovyvy.com/'
const baseURL = `${baseDomain}/graphql`

// https://github.com/axios/axios#custom-instance-defaults
const axiosInstance = axios.create({
  baseURL,
  timeout: 60000
})

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export const useQuery: types.IUseQuery<any> = (query, variables) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post('', { query: query, variables })
      .then((response) => {
        const { data }: { data: types.IData } = response
        if (data.errors && data.errors.length) {
          const message = data.errors.map((error) => error.message).join(' ')
        }
        debugger
        resolve({ data: _.isEmpty(data.errors) ? data.data : {}, errors: data.errors })
      })
      .catch((errors) => {
        resolve({
          data: {},
          error: [{ category: 'graphql', message: 'Server error!', code: 404 }]
        })
      })
  })
}

export default axiosInstance
