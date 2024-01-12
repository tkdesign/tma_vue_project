<template>
  <header class="navbar navbar-expand-lg bg-light sticky-top">
    <nav class="container flex-wrap py-3 px-5">
      <BNavbarBrand to="/" class="mb-0">TM Architektura</BNavbarBrand>
      <BNavbarToggle target="nav-collapse" class="btn-sm" />
      <BCollapse id="nav-collapse" class="justify-content-end" is-nav>
        <BNavbarNav right>
          <BNavItem to="/">Domov</BNavItem>
          <BNavItem to="/projects" :active="isActive('/projects')">Projekty</BNavItem>
          <BNavItem to="/prices" :active="isActive('/prices')">Cenník</BNavItem>
          <BNavItem to="/contacts" :active="isActive('/contacts')">Kontakt</BNavItem>
        </BNavbarNav>
      </BCollapse>
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
<style scoped>
</style>