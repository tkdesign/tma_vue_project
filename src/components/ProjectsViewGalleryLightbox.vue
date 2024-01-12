<template>
  <BModal :title="title" fullscreen lazy ref="lightbox" @hidden="hiddenLightBox" id="LightBox" hideFooter noFade>
    <div class="container-fluid"><img :src="'/img/details/' + image" :alt="title"/></div>
  </BModal>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      image: "",
    }
  },
  methods: {
    hiddenLightBox() {
      this.$emit('hiddenLightBox');
    },
    showLightBox() {
      this.$refs.lightbox.show();
    },
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