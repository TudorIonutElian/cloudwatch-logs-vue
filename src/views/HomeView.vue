<template>
  <main>
    <NavBar @setComponent="setComponent"/>
    <LogsTable 
      :isTableVisible="isTableVisible" 
      :isDonutVisible="isDonutVisible"
      :isDonutRegionsVisible="isDonutRegionsVisible"
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
      isTableVisible: true,
      isDonutVisible: false,
      isDonutRegionsVisible: false
    }
  },
  methods: {
    setComponent(component) {
      if (component === 'TableLogs') {
        this.isTableVisible = true;
        this.isDonutVisible = false;
      } else if (component === 'Donuts') {
        this.isTableVisible = false;
        this.isDonutVisible = true
      } else if (component === 'DonutsRegions') {
        this.isTableVisible = false;
        this.isDonutVisible = false;
        this.isDonutRegionsVisible = true;
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
