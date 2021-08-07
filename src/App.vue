<template>
  <div id="app">
    <app-header></app-header>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
  components: { AppHeader },
  data() {
    return {
      test: 'true',
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
}
</style>
