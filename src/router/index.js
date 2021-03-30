<<<<<<< HEAD
import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      // component: Login
      component: () => import('../views/login/login.vue')
    }
  ]
});
=======
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
>>>>>>> d801b90c2335fe15fe1c5f6215c335c5d109ad34
