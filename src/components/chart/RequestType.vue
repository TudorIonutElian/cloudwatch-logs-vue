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
  data() {
    return {
      requests: {
        numberOfGetRequests: 0,
        numberOfPostRequests: 0
      },
      chartData: {
        labels: [ 'GET', 'POST'],
        title: 'Requests',
        datasets: [ 
          {
            label: 'GET/POST requests',
            backgroundColor: ['#41B883', '#E46651'],
            data: [this.getNumberOfGetRequests(), this.getNumberOfPostRequests()]
          } 
        ],
      },
      chartOptions: {
        responsive: true
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