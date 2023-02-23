import { createRouter, createWebHashHistory } from 'vue-router'
import BDAlogin from '../views/BDAlogin.vue'
import BDAinbox from '../views/BDAinbox.vue'


export const routes = [
  {
    path: '/',
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
