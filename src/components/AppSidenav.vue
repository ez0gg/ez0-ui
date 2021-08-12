<template>
  <div
    class="sidenav"
    :class="{ expanded: expanded }"
    @click="$emit('click', $event)"
  ></div>
</template>

<script>
export default {
  props: ['expanded'],
};
</script>

<style lang="scss">
.sidenav {
  position: fixed;
  top: 80px;
  left: 0;
  width: 54px;
  height: calc(100vh - 80px);
  background: rgb(16, 15, 20);
  border-right: 1px solid $primary-color;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 5;

  display: none;

  &.expanded {
    width: 300px;
  }
}
</style>
