<template>
  <div class="home">
    <div class="hero-home">
      <div class="container flex flex-col items-center justify-center h-full">
        <img src="@/assets/images/logo2.png" />
        <h1 class="mb-8 text-center max-w-4xl">
          Valorant Club Focused on Running Strats
        </h1>
        <div class="home-buttons mb-16">
          <router-link to="/about" class="btn btn-big btn-signin mr-4">
            Learn More
          </router-link>
        </div>
      </div>
    </div>
    <div class="big-section join-discord">
      <img class="cypher" src="@/assets/images/cypher.png" />
      <div class="container text-center">
        <h1>Join our Discord</h1>
        <p class="mb-8">
          Come be a part of our community to stay updated on events and feature
          launches, get involved in tournament production, make new friends, and
          more!
        </p>
        <button class="btn btn-big">Join Us</button>
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

.bg-blue {
  background: darken($primary-color, 40%);
}

.join-discord {
  position: relative;
  overflow: hidden;

  .cypher {
    width: 700px;
    height: auto;
    position: absolute;
    left: 0;
    bottom: -280px;
  }
}
</style>
