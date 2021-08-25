<template>
  <div class="welcome text-center">
    <h1 class="text-3xl mt-8 font-bold">Welcome to Element Zer0</h1>
    <p class="text-xl mb-4">Choose a username:</p>
    <input type="text" v-model="username" />
    <button class="btn ml-4" @click="register()" :disabled="loading">
      Submit
    </button>
    <p class="error mt-4" v-if="showError">{{ error }}</p>
    <div>
      <button class="btn" @click.prevent="uploadImage()">
        Upload Profile Image
      </button>
      <img :src="uploadedImgUrl" v-if="uploadedImgUrl !== ''" />
    </div>
  </div>
</template>

<script>
import uploadcare from 'uploadcare-widget';

export default {
  data() {
    return {
      loading: false,
      username: '',
      showError: false,
      error: '',
      uploadedImgUrl: '',
    };
  },
  methods: {
    uploadImage() {
      console.log('???');
      const dialog = uploadcare.openDialog(null, '', {
        publicKey: '9bf6f709f65ed66722b0',
        imagesOnly: true,
        crop: '1200x400',
        tabs: 'file',
      });

      console.log('d', dialog);

      dialog.done((res) => {
        console.log('done?', res);
        if (res) {
          res.done((info) => {
            console.log(info.cdnUrl);
            this.uploadedImgUrl = info.cdnUrl;
          });
        }
      });
    },
    async register() {
      const apiUrl = this.$store.state.apiUrl;
      this.showError = false;
      this.loading = true;
      try {
        await this.$http.post(
          `${apiUrl}/users/create`,
          { username: this.username },
          {
            headers: {
              Authorization: 'Bearer ' + this.$store.state.token,
            },
          }
        );
        this.$toasted.success('Account created');
        this.loading = false;
        this.$router.push('/profile/edit');
      } catch (error) {
        if (error.response.status === 409 || error.response.status === 400) {
          if (error.response.data.message === 'User already created') {
            this.$toasted.error('You already chose a username');
            this.$router.push('/');
          } else {
            this.error = error.response.data.message;
            this.showError = true;
            this.loading = false;
          }
        } else {
          this.loading = false;
          this.$toasted.error(
            error.response.status + ' - ' + error.response.data.message
          );
        }
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: #e73049;
}
</style>
