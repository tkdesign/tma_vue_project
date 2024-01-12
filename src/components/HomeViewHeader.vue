<template>
  <header class="container-fluid navbar-top-home navbar navbar-expand-sm navbar-top">
    <nav class="container-fluid flex-wrap py-3 px-5">
      <BNavbarBrand to="/" class="navbar-brand-home mb-0">TM Architektura</BNavbarBrand>
      <BNavbarToggle target="nav-collapse" class="navbar-toggler-home btn-sm" />
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
</style>