import { getInstance } from '@/auth';
import axios from 'axios';
import router from '../router/index';

const state = {
  apiUrl: process.env.VUE_APP_BASE_URL,
  username: '',
  token: null,
  loading: true,
  loggedIn: false,
  user: {},
};

const getters = {
  user(state) {
    return { ...state.user, token: state.token };
  },
  loading(state) {
    return state.loading;
  },
  loggedIn(state) {
    return state.loggedIn;
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setLoggedIn(state, loggedIn) {
    state.loggedIn = loggedIn;
  },
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {
  checkAuth(context) {
    return new Promise((resolve, reject) => {
      const instance = getInstance();
      instance.$watch('loading', (loading) => {
        if (loading === false) {
          if (instance.isAuthenticated === false) {
            context.commit('setLoggedIn', false);
            context.commit('setLoading', false);
          } else {
            instance
              .getTokenSilently()
              .then((authToken) => {
                context.commit('setToken', authToken);
                context.commit('setLoggedIn', true);
                axios
                  .get(`${state.apiUrl}/users/userdata`, {
                    headers: {
                      Authorization: 'Bearer ' + authToken,
                    },
                  })
                  .then((resp) => {
                    console.log('userdata', resp);
                    context.commit('setUser', resp.data);
                    context.commit('setLoading', false);
                    resolve(authToken);
                  })
                  .catch((e) => {
                    if (e.response.status === 418) {
                      console.log(e.response);
                      context.commit('setLoading', false);
                      router.push('/register');
                    }
                  });
              })
              .catch((error) => {
                console.log('err', error);
                reject(error);
              });
          }
        }
      });
    });
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
