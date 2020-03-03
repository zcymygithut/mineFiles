import axiosInit from '../config'

const axios = axiosInit()
const urlMark = '/api'
const commonApi = {
  // demo
  demo (params) {
    return axios.post(urlMark + '/api-entity/entity/script/action/5e57298d2c8e5814807fb7b1/mine', params)
  }
}

export default commonApi