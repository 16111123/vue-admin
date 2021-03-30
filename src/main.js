<<<<<<< HEAD
import Vue from "vue";
/* eslint-disable */
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
=======
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

createApp(App).use(te)
createApp(App).use(ee)
createApp(App).use(le)
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
>>>>>>> d801b90c2335fe15fe1c5f6215c335c5d109ad34
