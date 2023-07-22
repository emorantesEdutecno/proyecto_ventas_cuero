import Vue from 'vue'
import VueRouter from 'vue-router'
import ChaquetasView from '@/views/ChaquetasView.vue';
import BilleterasView from '@/views/BilleterasView.vue';
import CorreasView from '@/views/CorreasView.vue';
import EjemploView from '@/views/EjemploView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'chaquetas',
    component: ChaquetasView
  },
  {
    path:'/billeteras',
    name: 'billeteras',
    component: BilleterasView
  },
  {
    path:'/correas',
    name: 'correas',
    component: CorreasView
  },
  {
    path:'/ejemplo',
    name: 'ejemplo',
    component: EjemploView
  },
  {
    path:'/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
