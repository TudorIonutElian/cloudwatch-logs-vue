<template>
  <div class="my-3">
    <table class="table">
      <thead class="thead-dark bg-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import axios from 'axios';

export default {
  name: 'LogsTable',
  data: () => {
    return {
      logs: []
    }
  },
  created() {
    this.fetchLogs();
  },
  methods: {
    async fetchLogs() {
        const response = await axios.post('https://i79w0r2zib.execute-api.eu-central-1.amazonaws.com/development/logs');
        this.logs = response.data;
    }
  },
}
</script>
