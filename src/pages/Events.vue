<template>
  <div class="container mx-auto pt-4">
    <div class="subnav">
      <div class="subnav-item active">Current Tournament</div>
      <div class="subnav-item">Upcoming Tournaments</div>
      <div class="subnav-item">Past Tournaments</div>
    </div>
    <p>hi</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentEvents: [],
      upcomingEvents: [],
      recentEvents: [],
    };
  },
};
</script>

<style lang="scss">
.subnav {
  @apply flex;
}
.subnav-item {
  @apply uppercase py-3 px-6;
  cursor: pointer;
  color: #777;
  border-bottom: 1px solid #888;

  &.active {
    border-bottom: 3px solid $primary-color;
    color: #eee;
  }

  &:hover {
    color: #fff;
  }
}
</style>
