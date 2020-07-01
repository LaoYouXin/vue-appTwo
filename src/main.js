import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
Vue.use(Vant)

import 'vant/lib/index.css'
// import { Dialog } from 'vant';



require('./mock/index')

import axios from "axios"
axios.defaults.baseURL="/"
// axios.defaults.baseURL="http://127.0.0.1:3000/"
axios.defaults.withCredentials=true
Vue.prototype.axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
