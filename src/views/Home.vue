<template>
  <div class="site-wrapper w-100 h-100">
    <div class="site-wrapper-inner w-100 h-100 m-0 p-0">
      <MainHeader />
      <BCarousel controls class="w-100 h-100" fade>
        <BCarouselSlide class="w-100 h-100" id="carouselExampleFade">
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
import MainHeader from '@/components/MainHeader.vue'
export default {
  components: {
    MainHeader,
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

.carousel-item-image {
  position: absolute;
  top: 0;
  left: 0;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}

.carousel-item-text {
  position: absolute;
  bottom: 0;
  left: 0;
}

#carouselExampleFade {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
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