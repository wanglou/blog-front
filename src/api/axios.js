import axios from 'axios'
import querystring from 'querystring'
const service = axios.create({
  baseURL: 'http://124.70.88.47:8082'
})

// 拦截器
service.interceptors.request.use(config => {
  if (
    config.method === 'post' ||
    config.method === 'put' ||
    config.method === 'delete'
  ) {
    config.data = querystring.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default service
