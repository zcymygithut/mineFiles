import commonApi from './commonApi'

export default {
  install (Vue) {
    Vue.prototype.commonApi = commonApi
  }
}