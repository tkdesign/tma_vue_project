<template>
  <div class="site-wrapper w-100 h-100">
    <div class="site-wrapper-inner w-100 h-100 m-0 p-0">
      <MainHeader/>
      <div id="presentationCarousel" class="carousel carousel-dark slide carousel-fade w-100 h-100"
           data-bs-ride="carousel">
        <div class="carousel-inner h-100">
          <div class="carousel-item active w-100 h-100">
            <div class="w-100 h-100 slide-item" style="background-image: url('/img/covers/covertrub2.jpg');">
            </div>
            <h1 class="carousel-item-text py-3 px-5"><strong>Ateliér TM Architektúra. Project 1</strong>
            </h1>
          </div>
          <div class="carousel-item w-100 h-100">
            <div class="w-100 h-100 slide-item" style="background-image: url('/img/covers/covertrub3.jpg');">
            </div>
            <h1 class="carousel-item-text py-3 px-5"><strong>Ateliér TM Architektúra. Project 2</strong>
            </h1>
          </div>
          <div class="carousel-item w-100 h-100">
            <div class="w-100 h-100 slide-item" style="background-image: url('/img/covers/covertrub4.jpg');">
            </div>
            <h1 class="carousel-item-text py-3 px-5"><strong>Ateliér TM Architektúra. Project 3</strong>
            </h1>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#presentationCarousel"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Predchádzajúci</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#presentationCarousel"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Nasledujúci</span>
        </button>
      </div>
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
</style>