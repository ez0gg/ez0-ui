import Vue from 'vue';
import VueRouter from 'vue-router';
import PageNotFound from '../components/PageNotFound';

Vue.use(VueRouter);

const routes = [
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
    path: '/tournaments',
    name: 'Events',
    component: () =>
      import(/* webpackChunkName: "events" */ '../pages/Events.vue'),
  },
  {
    path: '/teams',
    name: 'Teams',
    component: () =>
      import(/* webpackChunkName: "teams" */ '../pages/Teams.vue'),
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () =>
      import(/* webpackChunkName: "teams" */ '../pages/User.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () =>
      import(
        /* webpackChunkName: "user.createProfile" */ '../pages/user/CreateProfile.vue'
      ),
  },
  {
    path: '*',
    name: 'notFound',
    component: PageNotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
