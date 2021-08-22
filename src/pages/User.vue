<template>
  <div>
    <h1>User {{ $route.params.id }}</h1>
    <p>{{ user.username }}</p>
    <button class="btn" @click="getUser()">Get</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    async getUser() {
      const id = this.$route.params.id;
      try {
        const user = await this.$http.get(
          `${this.$store.state.apiUrl}/users/user/${id}`
        );
        console.log('user', user);
        this.user = user;
      } catch (e) {
        console.log(e.response);
        this.$toasted.error(
          e.response.status + ' - ' + e.response.data.message
        );
      }
    },
  },
  created() {
    this.getUser();
  },
};
</script>
