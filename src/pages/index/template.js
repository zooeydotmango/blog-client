import request from '@/helpers/request.js'

window.request = request

export default {
  name: 'index',
  data () {
    return {
      msg: '首页'
    }
  }
}
