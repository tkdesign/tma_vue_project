<template>
  <div v-for="(project, idx) in projects" :key="idx" class="card" :id="'card' + (idx + 1)">
    <div class="card-image-top">
      <img
          class="w-100 h-100"
          :src="'/img/preview/' + project.image"
          :data-src="'/img/details/' + project.image"
          :alt="project.intro_text"
      />
    </div>
    <h5 class="card-title text-muted">{{ project.title }}</h5>
    <p class="card-text text-muted">{{ project.intro_text }}</p>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
</style>