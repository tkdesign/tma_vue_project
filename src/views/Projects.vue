<template>
  <Header :currentPage="'/projects'"/>
  <h1>Projekty</h1>
  <Footer :currentPage="'/projects'"/>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style>
</style>