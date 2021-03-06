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
