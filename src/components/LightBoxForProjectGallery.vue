<template>
  <div class="modal" id="LightBox">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">{{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container-fluid"><img :src="'/img/details/' + image" :alt="title"/></div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      image: "",
    }
  },
}
</script>
<style scoped>
.modal-body .container-fluid {
  display: flex;
  justify-content: center;
}

.modal-body img {
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
}
</style>