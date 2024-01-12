<template>
  <BaseHeader :currentPage="'/confirmation'"/>
  <main class="container">
    <section class="p-5">
      <h1>Potvrdenie odoslania správy</h1>
      <p>Ďakujeme za Vašu správu. Odpovieme Vám čo najskôr.</p>
      <p>S pozdravom, <strong>TM Architektura</strong></p>
      <div v-if="confirmationData">
        <h2 class="mt-4">Údaje z formulára:</h2>
        <ul class="list-unstyled">
          <li><strong>Meno a priezvisko:</strong> {{ confirmationData.name }}</li>
          <li><strong>Emailová adresa:</strong> {{ confirmationData.email }}</li>
          <li><strong>Telefónne číslo:</strong> {{ confirmationData.phone }}</li>
          <li><strong>Predmet:</strong> {{ confirmationData.subject }}</li>
          <li><strong>Správa:</strong> {{ confirmationData.message }}</li>
        </ul>
      </div>
    </section>
  </main>
  <BaseFooter :currentPage="'/confirmation'"/>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import {useSubjectsStore} from "@/stores/subjectsStore.js";

export default {
  components: {BaseFooter, BaseHeader},
  data() {
    return {
      confirmationData: {
        name: this.$route.query.name,
        email: this.$route.query.email,
        phone: this.$route.query.phone,
        subject: useSubjectsStore().mapSubjectText(this.$route.query.subject),
        message: this.$route.query.message,
      },
    };
  },
};
</script>
<style>
</style>