<template>
  <header class="navbar navbar-expand-lg bg-light sticky-top">
    <nav class="container flex-wrap py-3 px-5">
      <RouterLink to="/" class="navbar-brand mb-0">TM Architektura</RouterLink>
      <button class="navbar-toggler btn-lg" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapseContainer" aria-controls="navbarCollapseContainer" aria-expanded="false"
              aria-label="Toggle menu"><span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarCollapseContainer">
        <ul class="navbar-nav">
          <li class="nav-item"><RouterLink to="/" class="nav-link">Domov</RouterLink></li>
          <li class="nav-item"><RouterLink :class="['nav-link', { 'active': isActive('/projects') }]"
                                  to="/projects">Projekty</RouterLink></li>
          <li class="nav-item"><RouterLink :class="['nav-link', { 'active': isActive('/prices') }]" to="/prices">Cenník</RouterLink>
          </li>
          <li class="nav-item"><RouterLink :class="['nav-link', { 'active': isActive('/contacts') }]"
                                  to="/contacts">Kontakt</RouterLink></li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  props: {
    currentPage: String,
  },
  methods: {
    isActive(path) {
      return this.currentPage === path;
    },
  },
}
</script>
<style>
</style>