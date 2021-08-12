<template>
  <header>
    <div class="header flex items-center justify-between p-2">
      <div class="nav flex font-bold">
        <router-link to="/" class="logo">
          <img src="@/assets/images/logo.png" />
        </router-link>
        <router-link to="/about" class="header-link">About</router-link>
        <router-link to="/tournaments" class="header-link"
          >Tournaments</router-link
        >
        <router-link to="/rules" class="header-link">Rules</router-link>
        <router-link to="/faq" class="header-link">FAQ</router-link>
      </div>
      <div class="login mr-4" v-if="!$auth.loading">
        <div v-if="$auth.isAuthenticated" class="flex">
          <p class="mr-4">{{ $auth.user.email }}</p>
          <button @click="logout">Log out</button>
        </div>
        <button
          v-if="!$auth.isAuthenticated"
          class="btn btn-signin mr-3"
          @click="login"
        >
          Sign In
        </button>
        <button
          v-if="!$auth.isAuthenticated"
          class="btn btn-signup"
          @click="login"
        >
          Sign Up
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style lang="scss">
header {
  background: #07070a;
  border-bottom: 1px solid #14171e;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
.header {
  height: 80px;
}
.logo {
  img {
    height: 80px;
    width: auto;
  }
}
.header-link {
  @apply px-8;
  font-size: 20px;
  height: 80px;
  display: flex;
  align-items: center;
  transition: color 0.4s ease-in-out;

  &.router-link-exact-active {
    color: $primary-color;
    border-bottom: 3px solid $primary-color;
  }

  &:hover {
    color: $primary-color;
  }
}
.login {
  color: #3d4752;

  button {
    color: #ccc;
  }
}
</style>
