<template>
  <div class="container pt-4">
    <div class="subnav mb-6">
      <div class="subnav-item active">Ascent</div>
      <div class="subnav-item">Bind</div>
      <div class="subnav-item">Icebox</div>
      <div class="subnav-item">Breeze</div>
      <div class="subnav-item">Haven</div>
      <div class="subnav-item">Split</div>
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
