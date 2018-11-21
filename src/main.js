// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import axios from 'axios'
import cookies from 'vue-cookies'
import '@/assets/css/base.css'
import apiConfig from '../config/api.config' 
import myUtil from './utils/myUtil'

Vue.config.productionTip = false

Vue.use(cookies)
//将 myUtils 挂载到 vue 的原型上
Vue.prototype.myUtil = myUtil
Vue.prototype.$axios = axios

// 如果这配置 'api/' 会默认读取本地的域
// axios.defaults.baseURL = 'api'
axios.defaults.baseURL = apiConfig.baseUrl


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  cookies,
  components: { App },
  template: '<App/>'
})
