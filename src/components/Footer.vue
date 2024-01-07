<template>
  <footer class="navbar navbar-expand-lg bg-light">
    <div class="container flex-wrap py-3 px-5 justify-content-md-start">
      <p class="pe-4 mb-0 text-muted"><strong>TM Architektura,</strong> {{ currentYear }}</p>
      <BNavbarNav right class="flex-column justify-content-end border-start ps-3">
        <BNavItem href="/">Domov</BNavItem>
        <BNavItem href="/projects" :active="isActive('/projects')">Projekty</BNavItem>
        <BNavItem href="/prices" :active="isActive('/prices')">Cenník</BNavItem>
        <BNavItem href="/contacts" :active="isActive('/contacts')">Kontakt</BNavItem>
      </BNavbarNav>
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