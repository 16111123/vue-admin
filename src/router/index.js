import { createRouter, createWebHashHistory } from 'vue-router'
// import Login from '../views/login/login.vue'

const routes = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    // component: Login
    component: () => import(/* webpackChunkName: "about" */ '../views/login/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
