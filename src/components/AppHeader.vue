<template>
  <header>
    <div class="flex justify-between p-2">
      <div class="nav flex font-bold">
        <div class="logo mx-4"><router-link to="/">Logo</router-link></div>
        <router-link to="/tournaments" class="mr-4">Tournaments</router-link>
        <router-link to="/teams" class="mr-4">Teams</router-link>
      </div>
      <div class="login" v-if="!$auth.loading">
        <div v-if="$auth.isAuthenticated" class="flex">
          <p class="mr-4">{{ $auth.user.email }}</p>
          <button @click="logout">Log out</button>
        </div>
        <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
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
  background: #1a1f28;
  border-bottom: 1px solid #14171e;
}
.login {
  color: #3d4752;

  button {
    color: #ccc;
  }
}
</style>
