<template>
  <SecondaryHeader :currentPage="'/prices'"/>
  <main class="container">
    <section class="p-5">
      <h1>Cenník</h1>
      <p>Tu nájdete orientačné ceny našich architektonických a dizajnérskych prác. Skutočná cena dizajnérskej
        práce závisí od jej zloženia a faktorov, ktoré uľahčujú alebo zvyšujú časovú náročnosť tvorivého a
        pracovného procesu.</p>
      <p>Cenník našich prác je rozdelený do nasledujúcich skupín:</p>
      <ul>
        <li v-for="(group, index) in priceGroups" :key="index">{{ group.title }}</li>
      </ul>
      <div class="accordion accordion-flush" id="pricesAccordion">
        <div class="accordion-item" v-for="(group, index) in priceGroups" :key="index">
          <h2 class="accordion-header" :id="'heading' + index">
            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                    :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index"
                    @click="setActiveTab(index)">
              {{ group.title }}
            </button>
          </h2>
          <div :id="'collapse' + index" :class="['accordion-collapse', 'collapse', { 'show': index === activeTab }]"
               :aria-labelledby="'heading' + index" data-bs-parent="#pricesAccordion">
            <div class="accordion-body">
              {{ group.desc }}
              <table class="table">
                <tbody>
                <tr class="table-light">
                  <th>OBSAH PRÁCE</th>
                  <th>CENA</th>
                  <th>DOBA DODANIA</th>
                  <th>INFO</th>
                </tr>
                <tr v-for="(price, idx) in group.prices" :key="idx">
                  <td><strong>{{ price.title }}</strong></td>
                  <td>{{ price.price }}</td>
                  <td>{{ price.duration }}</td>
                  <td>{{ price.desc }}</td>
                </tr>
                </tbody>
              </table>
              <p class="text-muted">*Ceny neobsahujú dph.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <SecondaryFooter :currentPage="'/prices'"/>
</template>
<script>
import SecondaryHeader from '@/components/SecondaryHeader.vue';
import SecondaryFooter from '@/components/SecondaryFooter.vue';
import axios from 'axios';
import {usePriceGroupsStore} from "@/stores/priceGroupsStore.js";

export default {
  data() {
    const priceGroupsStorage = usePriceGroupsStore();
    return {
      priceGroupsStorage,
      dataLoaded: false,
      priceGroups: [],
    };
  },
  created() {
    axios.get('/prices.json').then(response => {
      this.priceGroups = response.data.priceGroups;
      this.dataLoaded = true;

    }).catch(error => {
      console.error('Nie je možné načítať údaje.', error);
    });
  },
  components: {
    SecondaryHeader,
    SecondaryFooter,
  },
  computed: {
    activeTab() {
      return this.priceGroupsStorage.activeGroup || 0;
    },
  },
  methods: {
    setActiveTab(index) {
      this.priceGroupsStorage.setActiveGroup(index);
    },
  },
}
</script>
<style>
.accordion {
  --bs-accordion-btn-focus-border-color: #dee2e6;
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(73, 80, 87, 0.25);
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-active-color: #212529;
  --bs-accordion-active-bg: #e9ecef;
}
</style>