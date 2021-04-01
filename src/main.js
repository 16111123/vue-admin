import Vue from "vue";
/* eslint-disable */
import App from "./App.vue";
import VueCompositionApi from '@vue/composition-api';
import router from "./router/index";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';



Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCompositionApi);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
