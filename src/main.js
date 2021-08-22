import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import './assets/css/main.scss';
import { domain, clientId } from './auth/authConfig.json';
import { Auth0Plugin } from './auth';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Toasted from 'vue-toasted';
import store from './store/store';

Vue.use(VueAxios, axios);
Vue.use(Vuex);

Vue.config.productionTip = false;

Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: (appState) => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  },
});

Vue.use(Toasted, {
  duration: 2500,
  position: 'top-center',
  fullWidth: true,
  // fitToScreen: true,
});

new Vue({
  store: new Vuex.Store(store),
  router,
  render: (h) => h(App),
}).$mount('#app');
