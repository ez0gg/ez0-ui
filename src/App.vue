<template>
  <div id="app">
    <app-header></app-header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-sidenav
      :expanded="sidenavExpanded"
      @click="toggleSidenav"
    ></app-sidenav>
    <div id="main" :class="{ 'sidenav-expanded': this.sidenavExpanded }">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppSidenav from '@/components/AppSidenav';

export default {
  components: { AppHeader, AppSidenav },
  data() {
    return {
      sidenavExpanded: false,
    };
  },
  methods: {
    toggleSidenav() {
      this.sidenavExpanded = !this.sidenavExpanded;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
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
  min-height: calc(100vh - 155px);
  // transform: translateX(54px);
  transition: all 0.3s ease-in-out;
  // width: calc(100vw - 54px);

  // &.sidenav-expanded {
  //   transform: translateX(300px);
  //   width: calc(100vw - 300px);
  // }
}
</style>
