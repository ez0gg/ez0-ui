<template>
  <div class="user-profile">
    <div
      class="user-banner"
      :style="{
        backgroundImage: user.bannerImageUrl
          ? `url(${user.bannerImageUrl})`
          : 'linear-gradient(180deg, rgba(5,5,27,1) 0%, rgba(2,2,4,1) 100%)',
      }"
    >
      <div class="banner-overlay"></div>
    </div>
    <div class="container">
      <div class="user-top flex items-center">
        <img class="mr-8" :src="user.profileImageUrl" />
        <h1 class="text-5xl">{{ $route.params.id }}</h1>
      </div>
      <div class="profile-info ml-32">
        <div
          class="edit-profile mb-4"
          v-if="user._id === $store.state.user._id"
        >
          <router-link to="/profile/edit" class="btn">Edit Profile</router-link>
        </div>
        <p v-if="user.location">
          <span class="icon-location"></span> {{ user.location }}
        </p>
        <p v-if="user.age">Age: {{ user.age }}</p>
        <p v-if="user.rank">Rank: {{ user.rank }}</p>
        <p v-if="user.valorantUsername">
          Valorant Username: {{ user.valorantUsername }}
        </p>
        <p v-if="user.discordUsername">
          Discord Username: {{ user.discordUsername }}
        </p>
        <p v-if="user.twitterLink">
          <span class="icon-twitter"></span> {{ user.twitterLink }}
        </p>
        <p v-if="user.twitchLink">
          <span class="icon-twitch"></span> {{ user.twitchLink }}
        </p>
        <p v-if="user.bio" class="mt-4">{{ user.bio }}</p>
      </div>
      <div class="grid grid-cols-2 mt-16 bg-gray-900 p-16">
        <div class="team-info">
          <h2 class="text-gray-400 uppercase">Team</h2>
          <p class="text-lg text-gray-500" v-if="!user.team">
            User is not on a team
          </p>
          <p class="text-lg font-bold" v-else>{{ user.team.name }}</p>

          <div class="teammates" v-if="user.team">
            <h3 class="mt-4 text-gray-400 uppercase">Teammates</h3>
            <div class="flex flex-col">
              <div
                class="teammate flex items-center my-2"
                v-for="player in teammates"
                :key="player.username"
              >
                <img class="mr-3" :src="player.profileImageUrl" />
                <router-link :to="`/user/${player.username}`">
                  {{ player.username }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="stats">
          <h1>Stats</h1>
          <p>Member Since: {{ memberSince }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';

export default {
  data() {
    return {
      user: {},
      loading: true,
    };
  },
  methods: {
    async getUser() {
      this.loading = true;
      const id = this.$route.params.id;
      if (!id) return;
      try {
        const user = await this.$http.get(
          `${this.$store.state.apiUrl}/users/user/${id}`
        );
        this.user = user.data;
        this.loading = false;
      } catch (e) {
        console.log(e.response);
        this.$toasted.error(
          e.response.status + ' - ' + e.response.data.message
        );
        this.loading = false;
      }
    },
  },
  computed: {
    teammates() {
      return this.user.team.players.filter(
        (player) => player.username !== this.$route.params.id
      );
    },
    memberSince() {
      const timeAgo = DateTime.fromISO(this.user.createdAt).toRelative();
      const calDate = DateTime.fromISO(this.user.createdAt).toLocaleString({
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      });
      return `${calDate} (${timeAgo})`;
    },
  },
  watch: {
    $route(to, from) {
      console.log('to', to);
      console.log('from', from);
      if (to.name === 'User' && from.name === 'EditProfile') {
        this.getUser();
      }
    },
  },
  mounted() {
    console.log('mounted');
    this.getUser();
  },
};
</script>

<style lang="scss">
.user-banner {
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  position: relative;
  z-index: -1;

  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(3, 4, 9, 0.7);
  }
}
.user-top {
  margin-top: -50px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid $primary-color;
  }
}
.teammate img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
