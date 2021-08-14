import Vue from 'vue';

let instance;

export const getInstance = () => instance;

export const useSecretCode = ({ secretCode, router }) => {
  if (instance) return instance;

  instance = new Vue({
    data() {
      return {
        secretCode,
        isAuthenticated: false,
      };
    },
    router,
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
        this.$router.push({ name: 'Login' });
      },
      logout() {
        localStorage.setItem('secretCode', '');
        this.isAuthenticated = false;
        this.$router.push('/');
      },
    },
    created() {
      const localCode = localStorage.getItem('secretCode');
      console.log('secretCode', this.secretCode);
      console.log('localCode', localCode);
      this.isAuthenticated = localCode === this.secretCode;
    },
  });

  return instance;
};

export const SecretCodePlugin = {
  install(Vue, options) {
    Vue.prototype.$auth = useSecretCode(options);
  },
};
