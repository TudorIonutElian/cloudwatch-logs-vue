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
              <a class="nav-link active" aria-current="page" href="/home">Home Logs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/donuts">Donuts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/roles">Roles</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/types">Types</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ips">IPs</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.bg-darken {
  background-color: #343a40;
}
</style>
