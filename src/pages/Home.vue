<template>
  <div class="home">
    <div class="hero-home">
      <div class="container flex flex-col items-center justify-center h-full">
        <img src="@/assets/images/logo.png" />
        <h1 class="font-bold mb-8 text-center max-w-4xl">
          Valorant Tournaments and Weekend Events
        </h1>
        <div class="home-buttons mb-16">
          <button
            v-if="!$auth.isAuthenticated"
            class="btn btn-big btn-signin mr-4"
            @click="login"
          >
            Sign In
          </button>
          <button
            v-if="!$auth.isAuthenticated"
            class="btn btn-big btn-signup"
            @click="login"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <h1 class="mt-8 text-4xl font-bold">Element Zer0 Gaming</h1>
      <p class="text-xl mb-8">
        Hosting weekend tournaments every Friday &amp; Satuday.
      </p>
      <div class="card">
        <h2>Card Title</h2>
        <p>Card Text</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
.hero-home {
  background: url('../assets/images/homebg.jpg') no-repeat center center;
  background-size: cover;
  height: 560px;

  h1 {
    font-size: 72px;
  }

  img {
    height: 96px;
    width: auto;
  }
}
</style>
