import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home.vue'
import cart from '../components/cart.vue'
import productList from '../components/productList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart 
  },
  {
    path: '/pList',
    name: 'productList',
    component: productList
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
