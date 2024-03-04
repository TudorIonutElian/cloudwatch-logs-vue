<template>
  <main>
    <NavBar />
    <LogsTable />
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LogsTable from '../components/LogsTable.vue'


export default {
  components: {
    NavBar,
    LogsTable
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
