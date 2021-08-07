import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/tailwind.css';
import './assets/css/main.scss';
import { domain, clientId } from './auth/authConfig.json';
import { Auth0Plugin } from './auth';

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

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
