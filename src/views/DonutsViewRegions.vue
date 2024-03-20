<template>
  <main>
    <NavBar />
    <div id="donuts">
      <div class="row">
        <div class="container">
            <div v-if="isLoaded">
              <RequestType 
                isResponsive="true" 
                componentName="donutsRegions"
              />
            </div>
        </div>
        <div class="container">
            <div v-if="isLoaded">
              <DonutType 
                isResponsive="true"
                componentName="donutsRegions"
              />
            </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import RequestType from '../components/chart/RequestType.vue';
import DonutType from '../components/chart/DonutType.vue';
import axios from 'axios';

export default {
  components: {
    NavBar,
    RequestType,
    DonutType
  },
  created() {
    this.fetchLogs();
  },
  computed: {
    loaded: function() {
      this.checkLoaded();
    }
  },
  computed: {
    isLoaded() {
      return this.$store.getters.getLoaded;
    },
    eu1Regions() {
      return this.$store.getters.getEu1Region;
    },
    eu2Regions() {
      return this.$store.getters.getEu2Region;
    },
    euOtherRegions() {
      return this.$store.getters.getEuOtherRegion;
    }
  },
  methods: {
    async fetchLogs() {
      await axios.post('https://1drcv9w79l.execute-api.eu-central-1.amazonaws.com/development/logs').then((response) => {
        const data = response.data;
        this.$store.commit('setLogs', data);
        const regions_eu_1 = data.filter(log => log.requestRegion === 'eu-central-1').length;
        const regions_eu_2 = data.filter(log => log.requestRegion === 'eu-central-2').length;
        const regions_eu_others = data.filter(log => log.requestRegion !== 'eu-central-2' && log.requestRegion !== 'eu-central-1').length;


        this.$store.commit('setNumbersOfEu1Regions', regions_eu_1);
        this.$store.commit('setNumbersOfEu2Regions', regions_eu_2);
        this.$store.commit('setNumbersOfEuOtherRegions', regions_eu_others);
        this.$store.commit('setLoaded', true);
      }).catch((error) => {
        console.log(error);
      });
    },
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

#donuts {
  margin-top: 100px;
  min-height: 100vh;
  border-bottom: 2px solid #3ee70a;
}

#donuts .row {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.row .container {
  height: 100px;
  width: 35%;
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
