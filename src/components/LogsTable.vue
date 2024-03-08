<template>
  <div class="my-3 mx-3">
    <div class="mb-2">
      <button type="button" class="btn btn-danger" @click="resetFilters">Reset filters</button>
      <button type="button" class="btn btn-primary mx-2" @click="fetchLogs">Update logs</button>
    </div>
    <table class="table text-center table-striped table-hover">
      <thead class="thead-dark bg-dark">
        <TableRow :columns="tables.rows.headerRow"/>
        <tr class="bg-darken">
          <th scope="col">
            <div class="input-group">
              <select class="form-select" aria-label="Default select example" v-model="filters.id" @change="filterById">
                <option v-for="(requestId, index) in filters.requestIds" :key="index" :value="requestId">{{requestId}}</option>
              </select>
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <select class="form-select" aria-label="Default select example" v-model="filters.requestType" @change="filterByRequestTypes">
                <option v-for="(requestType, index) in filters.requestTypes" :key="index" :value="requestType">{{requestType}}</option>
              </select>
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestUrl"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestUrl"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestIp"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestIp"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestVpc"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestVpc"
              />
            </div>
          </th>
          <th scope="col">
             <div class="input-group">
              <select class="form-select" aria-label="Default select example" v-model="filters.requestRegion" @change="filterByRegion">
                <option v-for="(region, index) in filters.requestRegions" :key="index" :value="region">{{region}}</option>
              </select>
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestAvailabilityZone"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestAvailabilityZone"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestIamRole"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestIamRole"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestApiKey"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestApiKey"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestUsername"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestUsername"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestAuthorizationPolicy"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestAuthorizationPolicy"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestScanned"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestScanned"
              />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="logs in this.logs" v-bind:key="logs.id">
          <th scope="row">{{ logs.id }}</th>
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
import axios from 'axios'
import TableRow from './table/TableRow.vue'

export default {
  name: 'LogsTable',
  components: {
    TableRow
  },
  data: () => {
    return {
      tables: {
        rows: {
          headerRow: [
            '#',
            'requestType',
            'requestUrl',
            'requestIp',
            'requestVpc',
            'requestRegion',
            'requestAvailabilityZone',
            'requestIamRole',
            'requestApiKey',
            'requestUsername',
            'requestAuthorizationPolicy',
            'requestScanned'
          ]
        }
      },
      loaded: false,
      filters: {
        id: '',
        requestIds: [],
        requestType: '',
        requestTypes: [],
        requestUrl: '',
        requestIp: '',
        requestVpc: '',
        requestRegion: '',
        requestRegions:[],
        requestAvailabilityZone: '',
        requestIamRole: '',
        requestApiKey: '',
        requestUsername: '',
        requestAuthorizationPolicy: '',
        requestScanned: ''
      }
    }
  },
  computed: {
    logs() {
      return this.$store.state.filteredLogs
    }
  },
  created() {
    this.fetchLogs()
  },
  methods: {
    async fetchLogs() {
      await axios
        .post('https://i79w0r2zib.execute-api.eu-central-1.amazonaws.com/development/logs')
        .then((response) => {
          const data = response.data
          const body = JSON.parse(data.body)
          this.$store.commit('setLogs', body);
          const numberOfGetRequests = body.filter((log) => log.requestType === 'GET').length
          const numberOfPostRequests = body.filter((log) => log.requestType === 'POST').length
          this.$store.commit('setNumberOfGetRequests', numberOfGetRequests)
          this.$store.commit('setNumberOfPostRequests', numberOfPostRequests)
          this.$store.commit('setLoaded', true)

          this.loaded = true

          this.setRequestTypeFilters();
          this.setRequestIds();
          this.setRequestRegions();
        })
    },
    resetStoreFilters() {
      this.$store.commit('resetFilteredLogs');
    },
    evaluateBoolean(value) {
      return value ? 'true' : 'false'
    },
    setRequestTypeFilters() {
      const requestTypes = this.logs.map((log) => log.requestType)
      const uniqueRequestTypes = [...new Set(requestTypes)]
      this.filters.requestTypes = uniqueRequestTypes
    },
    setRequestIds(listOfIds) {
      if (listOfIds) {
        this.filters.requestIds = listOfIds
      } else {
        const requestIds = this.logs.map((log) => log.id)
        const uniqueRequestIds = [...new Set(requestIds)]
        this.filters.requestIds = uniqueRequestIds
      }
    },
    setRequestRegions() {
      const requestRegions = this.logs.map((log) => log.requestRegion)
      const uniqueRequestRegions = [...new Set(requestRegions)]
      this.filters.requestRegions = uniqueRequestRegions
    },
    filterById() {
      const filteredLogs = this.$store.getters.getLogs.filter((log) => log.id === this.filters.id);
      this.resetStoreFilters();
      this.$store.commit('setFilteredLogs', filteredLogs)
    },
    filterByRequestTypes() {
      const filteredLogs = this.$store.getters.getLogs.filter((log) => log.requestType === this.filters.requestType);
      const requestIds = filteredLogs.map((log) => {
        if (log.requestType === this.filters.requestType) {
          return log.id
        }
      });

      this.setRequestIds(requestIds);
      this.$store.commit('setFilteredLogs', filteredLogs)
    },
    filterByRegion() {
      const filteredLogs = this.$store.getters.getLogs.filter((log) => log.requestRegion === this.filters.requestRegion);
      this.$store.commit('setFilteredLogs', filteredLogs)
    },
    resetFilters() {
      this.resetStoreFilters();
    }
  }
}
</script>

<style scoped>
.bg-darken {
  background-color: #343a40 !important;
}
.bordered-hover:hover {
  border: 1px solid #15e442;
  border-radius: 0.25rem;
  transition: all 0.3s;
  box-sizing: border-box;
}
</style>
