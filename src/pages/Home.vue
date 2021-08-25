<template>
  <div class="home">
    <div class="hero-home">
      <div class="container flex flex-col items-center justify-center h-full">
        <h2 class="long-logo">Element Zer0</h2>
        <h1 class="font-bold mb-8 text-center max-w-3xl">
          Valorant Tournaments Every Weekend
        </h1>
        <div class="home-buttons" v-if="!$auth.loading">
          <div class="mb-16" v-if="!$auth.isAuthenticated">
            <button class="btn btn-big btn-signin mr-4" @click="login">
              Sign In
            </button>
            <button class="btn btn-big btn-signup" @click="login">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="event-section">
      <div class="container text-center">
        <h1>Next Tournament</h1>
        <EventCard class="mx-auto" />
      </div>
    </div>
    <div class="big-section bg-blue">
      <div class="container text-center">
        <h1>Why we started Element Zer0</h1>
        <p class="mb-4">
          We built ez0 because we loved watching streamers and pros compete in
          tournaments, and wanted to make that experience accessible to
          everyone. Get the full tournament experience at ez0 competing with
          other amateurs and casual gamers.
        </p>
        <p>
          Besides competing in tournaments, we also want to give an opportunity
          for players to watch their own games or their friends compete live on
          Twitch with live casters and realistic stream production. If you want
          to get involved in the production side of the tournament, join our
          Discord and get in touch!
        </p>
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
        <a
          href="https://discord.gg/d988Brt85R"
          target="_blank"
          class="btn btn-big"
          >Join Now</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import EventCard from '../components/EventCard.vue';
export default {
  name: 'Home',
  components: { EventCard },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    async getToken() {
      const x = await this.$auth.getTokenSilently();
      console.log(x);
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
    font-size: 64px;
  }

  img {
    height: 96px;
    width: auto;
  }
}

.bg-blue {
  @apply bg-gray-900;
}

.join-discord {
  position: relative;
  overflow: hidden;

  .cypher {
    width: 280px;
    height: auto;
    position: absolute;
    left: 8px;
    bottom: -24px;
    z-index: -1;
  }
}

.long-logo {
  @apply text-3xl;
  color: $primary-color;
}
</style>
