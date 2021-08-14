import Vue from 'vue';

let instance;

export const getInstance = () => instance;

export const useSecretCode = ({ secretCode }) => {
  if (instance) return instance;

  instance = new Vue({
    data() {
      return {
        secretCode,
        isAuthenticated: false,
      };
    },
    methods: {
      attempt(pw) {
        if (pw === this.secretCode) {
          this.isAuthenticated = true;
          localStorage.setItem('secretCode', pw);
          return true;
        } else {
          return false;
        }
      },
      redirectToLogin() {
        this.router.push({ name: 'Login' });
      },
      logout() {
        localStorage.setItem('secretCode', '');
        this.isAuthenticated = false;
        this.router.push('/');
      },
      setRouter(router) {
        this.router = router;
      },
    },
    created() {
      const localCode = localStorage.getItem('secretCode');
      this.isAuthenticated = localCode === this.secretCode;
    },
  });

  return instance;
};

export const SecretCodePlugin = {
  install(Vue) {
    Vue.prototype.$auth = getInstance();
  },
};
