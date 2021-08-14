<template>
  <div class="login-page">
    <div class="container text-center">
      <h3 class="text-2xl mb-4">Enter the secret pass phrase</h3>
      <input type="password" v-model="pw" />
      <button class="ml-2 btn btn-primary" @click.prevent="login()">
        Submit
      </button>
      <p class="error mt-4" v-if="showError">Incorrect Password</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pw: '',
      showError: false,
    };
  },
  methods: {
    login() {
      if (!this.$auth.attempt(this.pw)) {
        this.showError = true;
      } else {
        this.$router.push('/strats');
      }
    },
  },
};
</script>

<style lang="scss">
.login-page {
  padding-top: 100px;
}
h3 {
  color: #f1f1f1;
}
.error {
  color: #e73049;
}
</style>
