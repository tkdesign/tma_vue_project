<template>
  <Header :currentPage="'/contacts'"/>
  <h1>Kontakt</h1>
  <Footer :currentPage="'/contacts'"/>
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
