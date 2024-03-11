<template>
  <div class="bg-darken">
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logs</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button class="nav-link" @click="setComponent('TableLogs')">Home Log</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="setComponent('Donuts')">Donuts</button>
            </li>
            <li class="nav-item">
              <button class="nav-link" @click="setComponent('DonutsRegions')">Donuts Regions</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    setComponent(component) {
      if (component === 'TableLogs') {
        window.location.reload();
      }
      this.$emit('setComponent', component);
    }
  }
}
</script>

<style scoped>
.bg-darken {
  background-color: #343a40;
}
</style>
