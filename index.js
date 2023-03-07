import { createRouter, createWebHashHistory } from 'vue-router'
import App from '../App.vue'
import BDAlogin from '../views/BDAlogin.vue'
import BDAinbox from '../views/BDAinbox.vue'

import suratMasuk from '../views/suratMasuk.vue'
import drafSurat from '../views/drafSurat.vue'
import pesanMasuk from '../views/pesanMasuk.vue'
import kalenderPeta from '../views/kalenderPeta.vue'
import suratTerkirim from '../views/suratTerkirim.vue'

import detailSurat from '../views/detailSurat.vue'

import pinSurat from '../views/pinSurat.vue'



export const routes = [
  {
    path: '/',
    name: 'app',
    redirect: 'login',
    component: App

  },
  {
    path: '/login',
    name: 'login',
    component: BDAlogin

  },
  {
    path: '/bda_inbox',
    name: 'inbox',
    component: BDAinbox,
    redirect: 'suratMasuk',
    children:[
      {path: '/suratMasuk', name: 'suratMasuk', component: suratMasuk, children:[ {path: '/pinSurat', name: 'pinSurat', component: pinSurat,}]},
      {path: '/drafSurat', name: 'drafSurat', component: drafSurat},
      {path: '/pesanMasuk', name: 'pesanMasuk', component: pesanMasuk},
      {path: '/kalenderPeta', name: 'kalenderPeta', component: kalenderPeta},
      {path: '/suratTerkirim', name: 'suratTerkirim', component: suratTerkirim},
    ]
  },
  {path: '/detail_surat', name: 'detailSurat', component: detailSurat}
  ]

const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

export default router