<template>
  <button class="btn btn-primary">
    <em
        class="fa fa-2x"
        :class="icon"
    ></em>
  </button>
</template>

<script>
export default {
  name: "Fab.vue",
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
</style>