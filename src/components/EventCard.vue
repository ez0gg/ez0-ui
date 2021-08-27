<template>
  <div class="event-card w-96">
    <div
      class="card-header"
      :style="{ background: cardbg, backgroundSize: 'cover' }"
    >
      Friday Night Brawl
    </div>
    <div class="card-middle">
      <p class="mb-2">
        <span class="icon-calendar"></span> Friday Aug 27
        <span class="text-gray-500">(TONIGHT!)</span>
      </p>
      <p>
        <span class="icon-clock"></span> 6:00 pm
        <span class="text-gray-500">(duration approx. 3 hours)</span>
      </p>
    </div>
    <div class="card-main text-left">
      <div class="grid grid-cols-2">
        <div class="mb-4">
          <p class="text-gray-500 uppercase font-bold text-sm">prize</p>
          <p class="text-xl prize-pool font-bold">$100.00</p>
        </div>
        <div class="mb-4">
          <p class="text-gray-500 uppercase font-bold text-sm">max teams</p>
          <p class="text-xl font-bold">8</p>
        </div>
        <div>
          <p class="text-gray-500 uppercase font-bold text-sm">Entry Fee</p>
          <p class="text-lg">Free</p>
        </div>
        <div>
          <p class="text-gray-500 uppercase font-bold text-sm">Format</p>
          <p class="text-lg">Single Elimination, Best of 1</p>
        </div>
      </div>
      <p class="text-center mt-8 mb-2">
        <router-link to="/event/1" class="btn">Full details</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cardbg() {
      return 'linear-gradient(rgba(0, 0, 50, 0.35), rgba(0, 0, 0, 0.9)), url("https://ucarecdn.com/23d6cb50-d7b1-4564-93a3-9ddeee2e7c65/-/crop/2560x852/0,442/-/resize/500x125/") no-repeat bottom center';
    },
  },
};
</script>

<style lang="scss">
.event-card {
  border: 1px solid #555;
  border-radius: 5px;

  .card-header {
    @apply py-12 text-2xl font-bold text-center;
    background-size: cover;
  }

  .card-middle {
    @apply bg-gray-900 p-4 text-left text-lg;
    border-top: 1px solid #555;
    border-bottom: 1px solid #555;

    span {
      @apply mr-1 text-sm;
      color: #999;
    }
  }

  .card-main {
    @apply p-4;
  }

  .prize-pool {
    color: $cool-green;
  }

  .btn {
    color: $primary-color;

    &:hover {
      color: #fff;
    }
  }
}
</style>
