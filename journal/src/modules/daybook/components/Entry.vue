<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({name: 'entry', params:{id: 10}})"
  >
<!--    title-->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, Jueves</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dignissimos dolor dolore exercitationem fugit hic impedit, molestiae nemo nobis pariatur quidem quis, quos ullam voluptate voluptatibus? Accusantium amet animi blanditiis.
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry.vue"
}
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }
    .entry-description {
      font-size: 12px;
    }
  }

</style>