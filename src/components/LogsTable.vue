<template>
  <div class="my-3">
    <table class="table text-center table-striped table-hover">
      <thead class="thead-dark bg-dark">
        <tr class="bg-darken">
          <th scope="col">#</th>
          <th scope="col">requestType</th>
          <th scope="col">requestUrl</th>
          <th scope="col">requestIp</th>
          <th scope="col">requestVpc</th>
          <th scope="col">requestRegion</th>
          <th scope="col">requestAvailabilityZone</th>
          <th scope="col">requestIamRole</th>
          <th scope="col">requestApiKey</th>
          <th scope="col">requestUsername</th>
          <th scope="col">requestAuthorizationPolicy</th>
          <th scope="col">requestScanned</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="logs in this.logs" v-bind:key="logs.id">
          <th scope="row">{{logs.id}}</th>
          <td>{{ logs.requestType }}</td>
          <td>{{ logs.requestUrl }}</td>
          <td>{{ logs.requestIp }}</td>
          <td>{{ logs.requestVpc }}</td>
          <td>{{ logs.requestRegion }}</td>
          <td>{{ logs.requestAvailabilityZone }}</td>
          <td>{{ logs.requestIamRole }}</td>
          <td>{{ logs.requestApiKey }}</td>
          <td>{{ logs.requestUsername }}</td>
          <td>{{ evaluateBoolean(logs.requestAuthorizationPolicy) }}</td>
          <td>{{ evaluateBoolean(logs.requestScanned) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LogsTable',
  components: {
  },
  data: () => {
    return {
      loaded: false
    }
  },
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  },
  created() {
    this.fetchLogs();
  },
  methods: {
    async fetchLogs() {
      await axios.post('https://i79w0r2zib.execute-api.eu-central-1.amazonaws.com/development/logs').then((response) => {
        const data = response.data;
        const body = JSON.parse(data.body);
        this.$store.commit('setLogs', body);
        const numberOfGetRequests = body.filter(log => log.requestType === 'GET').length;
        const numberOfPostRequests = body.filter(log => log.requestType === 'POST').length;
        this.$store.commit('setNumberOfGetRequests', numberOfGetRequests);
        this.$store.commit('setNumberOfPostRequests', numberOfPostRequests);
        this.$store.commit('setLoaded', true);

        this.loaded = true;
      });
    },
    evaluateBoolean(value) {
      return value ? 'true' : 'false';
    }
  },
}
</script>

<style scoped>
.bg-darken {
  background-color: #343a40!important;
}
</style>
