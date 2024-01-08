<template>
  <div v-for="(project, idx) in projects" :key="idx" class="card" :id="'card' + (idx + 1)">
    <div class="card-image-top">
      <img
          class="w-100 h-100"
          :src="'/img/preview/' + project.image"
          :alt="project.intro_text"
          @click="showLightBox(project.intro_text, project.image)"
      />
    </div>
    <h5 class="card-title text-muted">{{ project.title }}</h5>
    <p class="card-text text-muted">{{ project.intro_text }}</p>
  </div>
  <LightBoxForProjectGallery ref="lightBoxModalWindow"/>
</template>
<script>
import {ref} from "vue";
import {Modal} from "bootstrap";
import LightBoxForProjectGallery from "@/components/LightBoxForProjectGallery.vue";

export default {
  props: {
    projects: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    showLightBox(title, image) {
      this.$refs.lightBoxModalWindow.title = title;
      this.$refs.lightBoxModalWindow.image = image;
      let modal = ref(null);
      const modalElement = document.getElementById('LightBox');
      if (modalElement) {
        modal.value = new Modal(modalElement, {
          keyboard: true,
          backdrop: true,
          focus: true,
        });
        if (modal.value) {
          modal.value.show()
        }
      }
    },
  },
  components: {
    LightBoxForProjectGallery,
  },
}
</script>
<style scoped>
.card {
  padding: .75rem;
  margin-bottom: 2rem;
  border: 0;
  min-width: 280px;
  flex-basis: 32.6%;
}

@media screen and (max-width: 750px) {
  .card {
    margin: 0 auto 2rem;
    flex-basis: 100%;
  }
}

.card-image-top {
  height: 280px;
}

.card-image-top img {
  object-fit: cover;
}

.card-title {
  margin-top: .25rem;
  margin-bottom: .25rem;
  min-height: 1.5rem;
}

.card-text {
  font-size: .85rem;
  min-height: .85rem;
}
</style>