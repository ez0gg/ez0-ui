import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import './assets/css/main.scss';
import { SecretCodePlugin } from './auth';

Vue.config.productionTip = false;

Vue.use(SecretCodePlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
