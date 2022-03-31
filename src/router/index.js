import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/update',
    name: 'update',
    component: () => import('../views/UpdateView.vue')
  },
  {
    path: '/validate',
    name: 'validate',
    component: () => import('../views/ValidateView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
