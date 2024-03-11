<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'DonutType',
  props: ['isResponsive', 'componentName'],
  components: {
    Doughnut
  },
  data() {
    return {
      chartData: {
        labels: this.getLabels(),
        datasets: this.getDataSets()
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    getLabels() {
      if (this.componentName === 'donutsRegions') {
        return ['eu-central-1', 'eu-central-2', 'other']
      } else {
        return ['POST Requests', 'GET Requests', 'PUT Requests']
      }
    },
    getDataSets() {
      if (this.componentName === 'donutsRegions') {
        return [
          {
            label: 'Regions requests',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [
              this.getEu1RegionRequest(),
              this.getEu2RegionRequest(),
              this.getEuOtherRegionRequest()
            ]
          }
        ]
      } else {
        return [
          {
            label: 'REQUESTS TYPES',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [
              this.getNumberOfGetRequests(),
              this.getNumberOfPostRequests(),
              this.getNumberOfPutRequests()
            ]
          }
        ]
      }
    },
    getNumberOfGetRequests(): number {
      return this.$store.getters.getNumberOfGetRequests
    },
    getNumberOfPostRequests(): number {
      return this.$store.getters.getNumberOfPostRequests
    },
    getNumberOfPutRequests(): number {
      return this.$store.getters.getNumberOfPutRequests
    },
    getEu1RegionRequest() {
      return this.$store.getters.getEu1RegionRequest
    },
    getEu2RegionRequest() {
      return this.$store.getters.getEu2RegionRequest
    },
    getEuOtherRegionRequest() {
      return this.$store.getters.getEuOtherRegionRequest
    }
  }
}
</script>