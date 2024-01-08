<template>
  <SecondaryHeader :currentPage="'/projects'"/>
  <main class="container">
    <section class="p-5">
      <h1 id="pagetitle">Projekty</h1>
      <p class="lead text-muted">Architektonické projekty a koncepty</p>
    </section>
    <section class="p-5">
      <div class="container-fluid" id="cardsContainer">
        <div class="row">
          <ProjectsGallery :projects="filteredProjects" />
        </div>
      </div>
    </section>
  </main>
  <SecondaryFooter :currentPage="'/projects'"/>
</template>
<script>
import SecondaryHeader from '@/components/SecondaryHeader.vue'
import ProjectsGallery from '@/components/ProjectsGallery.vue';
import SecondaryFooter from "@/components/SecondaryFooter.vue";
import { useProjectsStore } from "@/stores/projectsStore";
export default {
  data() {
    const projectsStore = useProjectsStore();
    return {
      projectsStore,
      lightBox: null,
    };
  },
  props: {
    categoryId: {
      type: String,
      default: null,
    },
  },
  computed: {
    filteredProjects() {
      const categoryId = this.categoryId;
      return categoryId ? this.projectsStore.getProjectsByCategory(categoryId) : this.projectsStore.projects;
    },
  },
  created() {
    if (this.projectsStore.projects.length === 0) {
      this.projectsStore.init();
    }
  },
  components: {
    SecondaryHeader,
    ProjectsGallery,
    SecondaryFooter,
  },
}
</script>
<style>

</style>