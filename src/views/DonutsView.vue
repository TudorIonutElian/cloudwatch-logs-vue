<template>
  <main >
    <NavBar />
    <div>
      <h1>Donuts</h1>
      <p>
        Donuts are a type of fried dough confection or dessert food. The doughnut is popular in many countries and prepared in various forms as a sweet snack that can be homemade or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.
      </p>
      </div>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
main {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
