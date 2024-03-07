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
        <tr class="bg-darken">
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="#"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.id"
              />
            </div>
          </th>
          <th scope="col">
            <div class="input-group">
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestType"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestType"
              />
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
              <input
                type="text"
                class="form-control text-center"
                placeholder="requestRegion"
                aria-label="Username"
                aria-describedby="basic-addon1"
                v-model="filters.requestRegion"
              />
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

export default {
  name: 'LogsTable',
  components: {},
  data: () => {
    return {
      loaded: false,
      filters: {
        id: '',
        requestType: '',
        requestUrl: '',
        requestIp: '',
        requestVpc: '',
        requestRegion: '',
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
      return this.$store.state.logs
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
          this.$store.commit('setLogs', body)
          const numberOfGetRequests = body.filter((log) => log.requestType === 'GET').length
          const numberOfPostRequests = body.filter((log) => log.requestType === 'POST').length
          this.$store.commit('setNumberOfGetRequests', numberOfGetRequests)
          this.$store.commit('setNumberOfPostRequests', numberOfPostRequests)
          this.$store.commit('setLoaded', true)

          this.loaded = true
        })
    },
    evaluateBoolean(value) {
      return value ? 'true' : 'false'
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
