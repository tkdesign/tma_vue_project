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
          <ProjectsGallery />
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
export default {
  data() {
    return {
      projects: [],
      currentPage: 1,
      isNextPage: true,
      lightBox: null,
    };
  },
  created() {
    axios.get('/api/projects?page=' + this.currentPage).then(response => {
      this.projects = response.data;
      this.isNextPage = response.data.length > 0;
    }).catch(error => {
      console.error('Error loading projects', error);
    });
  },
  mounted() {
    this.initializeLightBox();
  },
  methods: {
    initializeLightBox() {
      this.lightBox = new bootstrap.Modal("#LightBox");
      if (this.lightBox) {
        this.lightBox._element.addEventListener('hidden.bs.modal', () => {
          const lbBody = this.lightBox._element.querySelector('.modal-body .container-fluid');
          if(lbBody) {
            try {
              const lbHeader = this.lightBox._element.querySelector('.modal-header h1');
              if(lbHeader){
                lbHeader.innerText="";
              }
              lbBody.innerHTML="";
            }
            catch (err) {
              console.log('LightBox error:' + err);
            }
          }
        });
      }
    },
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