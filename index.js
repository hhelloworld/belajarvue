import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'

import BDAlogin from '../views/BDAlogin.vue'
import BDAinbox from '../views/BDAinbox.vue'


export const routes = [
  {
    path: '/',
    redirect:'/bda_login',
    name: '/',
    component: App,

  },
  {
    path: '/bda_login',
    name: 'login',
    component: BDAlogin,

  },
  {
    path: '/bda_inbox',
    name: 'inbox',
    component: BDAinbox,
  }
]

const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
