import axios from 'axios'

const axiosInit = (obj) => {
  const axios = axios.create({
    // 默认地址 可以添加一个默认地址
    baseURL: obj.url ? obj.url : '',
    headers: {
      // 默认formData请求头
      'Content-Type': obj.contentType ? obj.contentType : 'multipart/form-data',
    },
    withCredentials: true
  })
  // 请求预处理
  axios.interceptors.request.use((config) => {
    // 默认将所有参数转换为formData格式
    // true: formData格式  false: 非formData 格式
    let formData = obj.formData ? obj.formData : true
    if (formData) {
      let formData = new FormData()
      for (let key in config.data) {
        formData.append(key, config.data[key])
      }
      formData.append('c', null)
      config.data = formData
    }
    // token
    let token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = 'Bearer '+ token
    }
    return config
  }, (error) => {
    return new Promise.reject(error)
  })
  // 响应预处理
  axios.interceptors.response.use((res) => {
    if (res.data.flag == true) {
      return res
    } else {
      return new Promise.reject(res)
    }
  }, (error) => {
    return new Promise.reject(error)
  })
}
export default axiosInit