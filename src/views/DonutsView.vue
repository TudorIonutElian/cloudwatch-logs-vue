<template>
  <main>
    <NavBar />
    <div id="donuts">
      <div class="row">
        <div class="container">
            <div v-if="isLoaded">
              <RequestType isResponsive="true"/>
            </div>
        </div>
        <div class="container">
            <div v-if="isLoaded">
              <DonutType isResponsive="true"/>
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
    }
  },
  methods: {
    async fetchLogs() {
      await axios.post(
        "https://r5zvwg1vrb.execute-api.eu-central-1.amazonaws.com/staging/logs",
          null,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        ).then((response) => {
        const data = response.data;
        const body = JSON.parse(data.body);
        this.$store.commit('setLogs', body);
        const numberOfGetRequests = body.filter(log => log.requestType === 'GET').length;
        const numberOfPostRequests = body.filter(log => log.requestType === 'POST').length;
        const numberOfPutRequests = body.filter(log => log.requestType === 'PUT').length;
        this.$store.commit('setNumberOfGetRequests', numberOfGetRequests);
        this.$store.commit('setNumberOfPostRequests', numberOfPostRequests);
        this.$store.commit('setNumberOfPutRequests', numberOfPutRequests);
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
