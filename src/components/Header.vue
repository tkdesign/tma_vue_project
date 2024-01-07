<template>
  <header class="navbar navbar-expand-lg bg-light sticky-top">
    <nav class="container flex-wrap py-3 px-5">
      <BNavbarBrand href="/" class="mb-0">TM Architektura</BNavbarBrand>
      <BNavbarToggle target="nav-collapse" class="btn-sm" />
      <BCollapse id="nav-collapse" class="justify-content-end" is-nav>
        <BNavbarNav right>
          <BNavItem href="/">Domov</BNavItem>
          <BNavItem href="/projects" :active="isActive('/projects')">Projekty</BNavItem>
          <BNavItem href="/prices" :active="isActive('/prices')">Cenník</BNavItem>
          <BNavItem href="/contacts" :active="isActive('/contacts')">Kontakt</BNavItem>
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
.navbar-top .navbar-brand {
  margin-bottom: 0;
  color: #000 !important;
  font-size: 1.75rem !important;
  font-weight: 400 !important;
}

.navbar-top .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  background-color: transparent;
  border-bottom: .25rem solid transparent;
  mix-blend-mode: difference;
  color: #000 !important;
}

.navbar-top .nav-link:hover,
.navbar-top .nav-link:focus {
  border-bottom-color: #999 !important;
}

.nanavbarv-top .nav-link+.nav-link {
  margin-left: 1rem;
}

.navbar-top .nav-link.active {
  text-shadow: none !important;
  mix-blend-mode: difference;
  color: #333 !important;
  border-bottom-color: #333;
}

.navbar-top {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>