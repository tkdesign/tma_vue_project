<template>
  <footer class="navbar navbar-expand-lg bg-light">
    <div class="container flex-wrap py-3 px-5 justify-content-md-start">
      <p class="pe-4 mb-0 text-muted"><strong>TM Architektura,</strong> {{ currentYear }}</p>
      <ul class="navbar-nav flex-column justify-content-end border-start ps-3">
        <li class="nav-item"><a class="nav-link" href="/">Domov</a></li>
        <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/projects') }]" href="/projects">Projekty</a></li>
        <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/prices') }]"  href="/prices">Cenník</a></li>
        <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/contacts') }]"  href="/contacts">Kontakt</a></li>
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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    isActive(path) {
      return this.currentPage === path;
    },
  },
}
</script>
<style scoped>
</style>