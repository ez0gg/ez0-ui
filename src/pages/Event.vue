<template>
  <div class="event-page">
    <div
      class="event-hero"
      :style="{ background: bgString, backgroundSize: 'cover' }"
    ></div>
    <div class="container event-wrapper">
      <h1 class="text-center mb-12">Friday Night Brawl</h1>
      <div class="event-main">
        <p class="mb-2">
          <span class="icon-calendar"></span> Friday Aug 27
          <span class="text-gray-500">(2 days from now)</span>
        </p>
        <p>
          <span class="icon-clock"></span> 6:00 pm
          <span class="text-gray-500">(duration approx. 3 hours)</span>
        </p>
        <div class="event-more mt-8">
          <div class="grid grid-cols-4">
            <div class="mb-4">
              <p class="text-gray-500 uppercase font-bold text-sm">prize</p>
              <p class="text-xl font-bold">$100.00</p>
              <p class="text-sm">Winner take all</p>
            </div>
            <div class="mb-4">
              <p class="text-gray-500 uppercase font-bold text-sm">Max Teams</p>
              <p class="text-xl font-bold">8</p>
              <p class="text-sm">(3 rounds)</p>
            </div>
            <div class="mb-4">
              <p class="text-gray-500 uppercase font-bold text-sm">Format</p>
              <p class="text-xl font-bold">Single Elimination</p>
              <p class="text-sm">(Best of 1)</p>
            </div>
            <div class="mb-4">
              <p class="text-gray-500 uppercase font-bold text-sm">Servers</p>
              <p class="text-xl font-bold">Central</p>
              <p class="text-sm">Chicago/Texas</p>
            </div>
          </div>
        </div>
        <div class="event-more mt-8">
          <h2>Other notes</h2>
          <p>Map pool will be decided by vote from all participating teams.</p>
        </div>
        <div class="event-signup mt-8">
          <h2>Register</h2>
          <p>
            To register your team, please create an account and notify an admin
            on discord that you wish to participate.
          </p>
          <p class="text-sm">
            Note: We are still working on the website and will add tournament
            signups soon.
          </p>
        </div>
        <div class="event-more mt-8">
          <h2>Rules &amp; Info</h2>
          <p>
            Please review the
            <router-link to="/info">info page</router-link> for rules and
            qualifications. If you have any other questions, please ask on
            discord.
          </p>
        </div>
        <div class="event-more mt-8">
          <h2>Don't have a team?</h2>
          <p>
            Join our discord server to use the looking-for-team and
            looking-for-player channels.
          </p>
          <p>
            You can also register yourself as a <strong>free agent</strong> for
            a tournament. If we don't have enough teams on the night of the
            tournament we will create temporary teams from the free agent pool.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    bgString() {
      return 'linear-gradient(rgba(0, 0, 50, 0.35), rgba(0, 0, 0, 0.9)), url("https://ucarecdn.com/23d6cb50-d7b1-4564-93a3-9ddeee2e7c65/-/crop/2560x852/0,442/-/resize/1200x400/") no-repeat bottom center';
    },
  },
};
</script>

<style lang="scss">
.event-hero {
  background: #000;
  height: 300px;
}

.event-page {
  h1 {
    font-size: 48px;
  }

  .event-wrapper {
    margin-top: -200px;
  }

  .event-main {
    @apply bg-black p-8 text-lg;

    span {
      @apply mr-1 text-sm;
      color: #999;
    }
  }
}
</style>
