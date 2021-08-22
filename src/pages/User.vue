<template>
  <div class="user-profile">
    <div
      class="user-banner"
      :style="{ backgroundImage: `url(${user.bannerImageUrl})` }"
    >
      <div class="banner-overlay"></div>
    </div>
    <div class="container">
      <div class="user-top flex items-center">
        <img class="mr-8" :src="user.profileImageUrl" v-show="!loading" />
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
    </div>
  </div>
</template>

<script>
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
  watch: {
    '$route.params.id': function () {
      if (this.$route.name === 'User') {
        this.getUser();
      }
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style lang="scss">
.user-banner {
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center center;
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
  }
}
</style>
