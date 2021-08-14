<template>
  <header>
    <div class="header flex items-center justify-between p-2">
      <div class="nav flex font-bold">
        <router-link to="/" class="logo flex items-center">
          <img class="mr-4" src="@/assets/images/logo2.png" />
          <span class="teamname mr-4">[teamname]</span>
        </router-link>
        <router-link to="/" class="header-link">Home</router-link>
        <router-link to="/about" class="header-link">About</router-link>
        <router-link to="/strats" class="header-link">Strats</router-link>
      </div>
      <div class="login mr-4">
        <button
          class="btn btn-signup"
          @click="login()"
          v-if="$auth && !$auth.isAuthenticated"
        >
          Log In
        </button>
        <div class="loggedin flex" v-if="$auth && $auth.isAuthenticated">
          <p class="mr-4">You are logged in.</p>
          <a href="/logout" @click.prevent="logout()">Logout</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: 'Login' });
    },
    logout() {
      this.$auth.logout();
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
    height: auto;
    width: 165px;
    position: absolute;
    top: 10px;
    left: 12px;
  }
}
.header-link {
  @apply px-8;
  font-size: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  transition: color 0.4s ease-in-out;
  color: #f1f1f1;
  font-weight: bold;

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
.teamname {
  color: #f1f1f1;
  margin-left: 185px;
  margin-right: 24px;
}
</style>
