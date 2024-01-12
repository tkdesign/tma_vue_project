<template>
  <header class="container-fluid navbar-top-home navbar navbar-expand-sm navbar-top">
    <nav class="container-fluid flex-wrap py-3 px-5">
      <BNavbarBrand to="/" class="mb-0">TM Architektura</BNavbarBrand>
      <BNavbarToggle target="nav-collapse" class="btn-sm" />
      <BCollapse id="nav-collapse" class="justify-content-end" is-nav>
        <BNavbarNav right>
          <BNavItem class="nav-item-home" to="/" active>Domov</BNavItem>
          <BNavItem class="nav-item-home" to="/projects">Projekty</BNavItem>
          <BNavItem class="nav-item-home" to="/prices">Cenník</BNavItem>
          <BNavItem class="nav-item-home" to="/contacts">Kontakt</BNavItem>
        </BNavbarNav>
      </BCollapse>
    </nav>
  </header>
</template>
<script>
export default {}
</script>
<style scoped>
.navbar-top-home {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navbar-top-home .navbar-brand {
  margin-bottom: 0;
  color: rgba(0, 0, 0, .9) !important;
  font-size: 1.75rem !important;
  font-weight: 400 !important;
}

.navbar-toggler {
  color: rgba(0, 0, 0, .9) !important;
  border-color: rgba(0, 0, 0, .9) !important;
}

.nav-item-home .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  background-color: transparent;
  border-bottom: .25rem solid transparent;
  color: rgba(0, 0, 0, .6) !important;
}

.nav-item-home .nav-link:hover,
.nav-item-home .nav-link:focus {
  border-bottom-color: rgba(0, 0, 0, .6) !important;
}

.nav-item-home .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-item-home .nav-link.active {
  text-shadow: none !important;
  color: rgba(0, 0, 0, .9) !important;
  border-bottom-color: rgba(0, 0, 0, .9);
}
</style>