<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'RequestType',
  components: { Bar },
  data() {
    return {
      requests: {
        numberOfGetRequests: 0,
        numberOfPostRequests: 0
      },
      chartData: {
        labels: [ 'GET', 'POST'],
        datasets: [ 
          {
            label: 'GET/POST requests',
            backgroundColor: ["#f87979"],
            data: [this.getNumberOfGetRequests(), this.getNumberOfPostRequests()]
          } 
        ],
      },
      chartOptions: {
        responsive: false
      }
    }
  },
  methods: {
    getNumberOfGetRequests() {
      return this.$store.getters.getNumberOfGetRequests;
      
    },
    getNumberOfPostRequests() {
      return this.$store.getters.getNumberOfPostRequests;
    }
  },
  
}
</script>