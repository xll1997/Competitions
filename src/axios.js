import axios from 'axios'
axios.defaults.baseURL = 'http://192.168.1.15:9527/socket'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    // var token = window.sessionStorage.getItem('token')
    // if (token !== null) {
    //   config.headers.Authorization = token
    // }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.resolve(error)
  }
)

export default axios
