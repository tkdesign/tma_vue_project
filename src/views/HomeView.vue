<template>
  <div class="site-wrapper w-100 h-100">
    <div class="site-wrapper-inner w-100 h-100 m-0 p-0">
      <HomeViewHeader/>
      <BCarousel controls class="w-100 h-100" fade>
        <BCarouselSlide class="w-100 h-100">
          <template #img>
            <div class="w-100 h-100 slide-item" style="background-image: url('/img/covers/covertrub2.jpg');">
            </div>
          </template>
          <h1 class="carousel-item-text py-3 px-5"><strong>Ateliér TM Architektúra. Project 1</strong></h1>
        </BCarouselSlide>
        <BCarouselSlide class="w-100 h-100">
          <template #img>
            <div class="w-100 h-100 slide-item" style="background-image: url('/img/covers/covertrub3.jpg');">
            </div>
          </template>
          <h1 class="carousel-item-text py-3 px-5"><strong>Ateliér TM Architektúra. Project 2</strong></h1>
        </BCarouselSlide>
        <BCarouselSlide class="w-100 h-100">
          <template #img>
            <div class="w-100 h-100 slide-item" style="background-image: url('/img/covers/covertrub4.jpg');">
            </div>
          </template>
          <h1 class="carousel-item-text py-3 px-5"><strong>Ateliér TM Architektúra. Project 3</strong></h1>
        </BCarouselSlide>
      </BCarousel>
    </div>
  </div>
</template>
<script>
import HomeViewHeader from '@/components/HomeViewHeader.vue'

export default {
  components: {
    HomeViewHeader,
  },
}
</script>
<style>
html,
body {
  height: 100%;
}

body {
  color: rgba(0, 0, 0, .9);
}

a,
a:focus,
a:hover {
  color: rgba(0, 0, 0, .9);
}

.site-wrapper {
  min-height: 100%;
  overflow: hidden;
  clear: both;
  height: 100%;
  width: 100%;
  position: absolute;
}

.site-wrapper-inner {
  position: fixed;
  left: 0;
  top: 0;
}

.navbar-top-home {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand-home {
  color: rgba(0, 0, 0, .9) !important;
  font-size: 1.75rem !important;
  font-weight: 400 !important;
}

.navbar-toggler-home {
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

.carousel-item-text {
  position: absolute;
  bottom: 0;
  left: 0;
}

.slide-item {
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
}

.carousel-inner {
  height: 100%;
}

.carousel-caption {
  position: absolute;
  left: 0 !important;
  right: unset !important;
  bottom: 0 !important;
  padding: 0 !important;
  color: unset !important;
  width: 100%;
  text-align: unset !important;
}
</style>