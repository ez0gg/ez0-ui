<template>
  <div id="app">
    <app-header></app-header>
    <app-sidenav
      :expanded="sidenavExpanded"
      @click="toggleSidenav"
    ></app-sidenav>
    <div class="loading" v-if="loading">
      <p>loading...</p>
    </div>
    <div
      v-if="!loading"
      id="main"
      :class="{ 'sidenav-expanded': this.sidenavExpanded }"
    >
      <router-view :key="$route.fullPath" />
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppSidenav from '@/components/AppSidenav';
import AppFooter from '@/components/AppFooter';
import { mapGetters } from 'vuex';

export default {
  components: { AppHeader, AppSidenav, AppFooter },
  data() {
    return {
      sidenavExpanded: false,
    };
  },
  computed: {
    ...mapGetters(['loading', 'loggedIn', 'user']),
  },
  methods: {
    toggleSidenav() {
      this.sidenavExpanded = !this.sidenavExpanded;
    },
  },
  created() {
    this.$store.dispatch('checkAuth');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Mulish', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 80px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $primary-color;

    &.router-link-exact-active {
      color: #3d4752;
    }
  }
}

#main {
  min-height: calc(100vh - 200px);
  // transform: translateX(54px);
  transition: all 0.3s ease-in-out;
  // width: calc(100vw - 54px);

  // &.sidenav-expanded {
  //   transform: translateX(300px);
  //   width: calc(100vw - 300px);
  // }
}
</style>
