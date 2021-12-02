<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola mundo</h1>

    <button @click="goToDaybook" class="btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn-success">Success</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({name: 'no-entry'});
    }
  }
}
</script>