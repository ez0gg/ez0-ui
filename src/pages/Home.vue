<template>
  <div class="home">
    <div class="hero-home flex items-center justify-center">
      <h1>Next event:</h1>
    </div>
    <div class="container mx-auto">
      <h1 class="mt-8 text-4xl font-bold">Element Zer0 Gaming</h1>
      <p class="text-xl">
        Hosting weekend tournaments every Friday &amp; Satuday.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.hero-home {
  background: url('../assets/images/bg.jpg') no-repeat center center fixed;
  background-size: cover;
  height: 300px;
}
</style>
