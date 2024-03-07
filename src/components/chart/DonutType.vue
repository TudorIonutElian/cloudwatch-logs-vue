<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'DonutType',
    components: {
        Doughnut
    },
    data() {
        return {
            chartData: {
                labels: ['POST Requests', 'GET Requests'],
                datasets: [
                    {
                    backgroundColor: ['#41B883', '#E46651'],
                    data: [this.getNumberOfGetRequests(), this.getNumberOfPostRequests()]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
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