// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import '@/assets/css/base.css'
import router from './router/router'
import myUtil from './utils/myUtil'

//将 myUtils 挂载到 vue 的原型上
Vue.prototype.myUtil = myUtil
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
