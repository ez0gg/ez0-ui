<template>
  <div class="footer">
    <div class="container text-gray-400 text-sm">
      <div class="grid grid-cols-3">
        <div class="text-left col-span-2">
          <p>&copy; 2021 Element Zer0 Gaming</p>
          <p>
            This competition is not affiliated with or sponsored by Riot Games,
            Inc. or VALORANT Esports.
          </p>
        </div>
        <div class="text-right socials flex">
          <a href="https://twitch.tv/ez0gg" target="_blank" class="mr-4"
            ><span class="icon-twitch"></span
          ></a>
          <a href="https://twitter.com/ez0gg" target="_blank"
            ><span class="icon-twitter"></span
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hi: true,
    };
  },
};
</script>

<style lang="scss">
.footer {
  background: #111;
  padding: 40px 0;

  .socials {
    height: 100%;
    justify-content: flex-end;
    align-items: center;
    span {
      font-size: 24px;
    }
  }
}
</style>
