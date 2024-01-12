<template>
  <footer class="navbar navbar-expand-lg bg-light">
    <div class="container flex-wrap py-3 px-5 justify-content-md-start">
      <p class="pe-4 mb-0 text-muted"><strong>TM Architektura,</strong> {{ currentYear }}</p>
      <ul class="navbar-nav flex-column justify-content-end border-start ps-3">
        <li class="nav-item"><RouterLink class="nav-link" to="/">Domov</RouterLink></li>
        <li class="nav-item"><RouterLink :class="['nav-link', { 'active': isActive('/projects') }]" to="/projects">Projekty</RouterLink>
        </li>
        <li class="nav-item"><RouterLink :class="['nav-link', { 'active': isActive('/prices') }]" to="/prices">Cenník</RouterLink></li>
        <li class="nav-item"><RouterLink :class="['nav-link', { 'active': isActive('/contacts') }]" to="/contacts">Kontakt</RouterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    currentPage: String,
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    isActive(path) {
      return this.currentPage === path;
    },
  },
}
</script>
<style scoped>
</style>