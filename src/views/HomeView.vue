<template>
  <main>
    <NavBar @setComponent="setComponent"/>
    <LogsTable 
      :isTableVisible="isTableVisible" 
      :isDonutVisible="isDonutVisible"
    />
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import LogsTable from '../components/LogsTable.vue'

export default {
  components: {
    NavBar,
    LogsTable
  },
  data() {
    return {
    }
  },
  computed: {
    isTableVisible() {
      return this.$store.getters.getIsTableVisible;
    },
    isDonutVisible() {
      return this.$store.getters.getIsDonutVisible;
    }
  },
  methods: {
    setComponent(component) {
      if (component === 'TableLogs') {
        this.$store.commit('setIsTableVisible', true);
        this.$store.commit('setIsDonutVisible', false);
      } else if (component === 'Donuts') {
        this.$store.commit('setIsTableVisible', false);
        this.$store.commit('setIsDonutVisible', true);
      }
    }
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
