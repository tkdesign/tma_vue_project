<template>
  <BaseHeader :currentPage="'/projects'"/>
  <main class="container">
    <section class="p-5">
      <h1 id="pagetitle">Projekty</h1>
      <p class="lead text-muted">Architektonické projekty a koncepty</p>
    </section>
    <section class="p-5">
      <div class="d-inline-block">
        <select @change="changeCategory" class="form-select" ref="categorySelector" name="category">
          <option value="">Všetky projekty</option>
          <option v-for="category in projectsStore.categories" :key="category.id" :value="category.id"
                  :selected="category.id === categoryId">{{ category.title }}
          </option>
        </select>
      </div>
    </section>
    <section class="p-5">
      <div class="container-fluid" id="cardsContainer">
        <div class="row">
          <ProjectsViewGallery :projects="filteredProjects"/>
        </div>
      </div>
    </section>
  </main>
  <BaseFooter :currentPage="'/projects'"/>
</template>
<script>
import BaseHeader from '@/components/BaseHeader.vue'
import ProjectsViewGallery from '@/components/ProjectsViewGallery.vue';
import BaseFooter from "@/components/BaseFooter.vue";
import {useProjectsStore} from "@/stores/projectsStore";

export default {
  components: {
    BaseHeader,
    ProjectsViewGallery,
    BaseFooter,
  },
  props: {
    categoryId: {
      type: String,
      default: null,
    },
  },
  data() {
    const projectsStore = useProjectsStore();
    return {
      projectsStore,
    };
  },
  computed: {
    filteredProjects() {
      const categoryId = this.categoryId;
      return categoryId ? this.projectsStore.getProjectsByCategory(categoryId) : this.projectsStore.projects;
    },
  },
  watch: {
    categoryId(newCategoryId) {
      if (newCategoryId) {
        this.$refs.categorySelector.value = newCategoryId;
      } else {
        this.$refs.categorySelector.value = '';
      }
    }
  },
  created() {
    if (this.projectsStore.projects.length === 0) {
      this.projectsStore.init();
    }
  },
  mounted() {
    if (this.categoryId) {
      this.$refs.categorySelector.value = this.categoryId;
      const category = this.projectsStore.getCategoryById(this.categoryId);
      if (category?.title) {
        document.title = `Projecty - ${category.title} - TM Architektura`;
      }
    } else {
      document.title = `Projekry - TM Architektura`;
    }
  },
  beforeUpdate() {
    if (this.categoryId) {
      this.$refs.categorySelector.value = this.categoryId;
      const category = this.projectsStore.getCategoryById(this.categoryId);
      if (category?.title) {
        document.title = `Projecty - ${category.title} - TM Architektura`;
      }
    } else {
      document.title = `Projekry - TM Architektura`;
    }
  },
  methods: {
    changeCategory(event) {
      const cid = event.target.value;
      if (cid) {
        this.$router.push({path: cid ? `/projects/${cid}` : '/projects'});
      } else {
        this.$router.push({path: '/projects'});
      }
    },
  },
}
</script>
<style>
</style>