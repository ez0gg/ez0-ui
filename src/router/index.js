import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '../components/PageNotFound';
import { authGuard, useSecretCode } from '../auth';
import Login from '../pages/Login.vue';

const auth = useSecretCode({ secretCode: 'cool2' });

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  },
  {
    path: '/strats',
    name: 'Strats',
    component: () =>
      import(/* webpackChunkName: "events" */ '../pages/Strats.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '*',
    name: '404',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

auth.setRouter(router);

export default router;
