<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    :isResponsive="false"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'RequestType',
  components: { Bar },
  props: [
    'isResponsive',
    'componentName'
  ],
  data() {
    return {
      requests: {
        numberOfGetRequests: 0,
        numberOfPostRequests: 0,
        numberOfPutRequests: 0
      },
      chartData: {
        labels: [ 'eu-central-1', 'eu-central-2', 'other'],
        title: 'Requests',
        datasets: this.getDataSets(),
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  methods: {
    getDataSets() {
      if (this.componentName === "donutsRegions") {
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
    getEu1RegionRequest() {
      return this.$store.getters.getEu1RegionRequest;
    },
    getEu2RegionRequest() {
      return this.$store.getters.getEu2RegionRequest;
    },
    getEuOtherRegionRequest() {
      return this.$store.getters.getEuOtherRegionRequest;
    },
    getNumberOfGetRequests() {
      return this.$store.getters.getNumberOfGetRequests;
      
    },
    getNumberOfPostRequests() {
      return this.$store.getters.getNumberOfPostRequests;
    },
    getNumberOfPutRequests() {
      return this.$store.getters.getNumberOfPutRequests;
    }
  },
  
}
</script>