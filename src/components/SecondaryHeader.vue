<template>
  <header class="navbar navbar-expand-lg bg-light sticky-top">
    <nav class="container flex-wrap py-3 px-5">
      <a class="navbar-brand mb-0" href="/">TM Architektura</a>
      <button class="navbar-toggler btn-lg" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapseContainer" aria-controls="navbarCollapseContainer" aria-expanded="false"
              aria-label="Toggle menu"><span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarCollapseContainer">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link" href="/">Domov</a></li>
          <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/projects') }]"
                                  href="/projects">Projekty</a></li>
          <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/prices') }]" href="/prices">Cenník</a>
          </li>
          <li class="nav-item"><a :class="['nav-link', { 'active': isActive('/contacts') }]"
                                  href="/contacts">Kontakt</a></li>
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