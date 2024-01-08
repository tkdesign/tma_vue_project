<template>
  <header class="navbar navbar-expand-lg bg-light sticky-top">
    <nav class="container flex-wrap py-3 px-5">
      <a class="navbar-brand mb-0" href="/">TM Architektura</a>
      <button class="navbar-toggler btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapseContainer" aria-controls="navbarCollapseContainer" aria-expanded="false" aria-label="Toggle menu"><span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarCollapseContainer">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/">Domov</a></li>
          <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/projects') }]" href="/projects">Projekty</a></li>
          <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/prices') }]"  href="/prices">Cenník</a></li>
          <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/contacts') }]"  href="/contacts">Kontakt</a></li>
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