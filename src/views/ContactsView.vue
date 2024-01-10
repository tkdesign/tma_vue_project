<template>
  <SecondaryHeader :currentPage="'/contacts'"/>
  <main class="container">
    <section class="p-5">
      <h1>Kontaktné a fakturačné údaje</h1>
      <h2 class="lead">Adresa ateliéru</h2>
      <p>Naš workshop na Slovensku nájdete na adrese Hollého 8, 949 01 Nitra.</p>
      <h2 class="lead">Kontaktné údaje</h2>
      <p>tel: <a href="tel:+421950445631">+421 950 445 631</a>, email: <a href="mailto:hello@tmarchitektura.sk">hello@tmarchitektura.sk</a>
      </p>
    </section>
    <hr/>
    <section class="p-5">
      <h2>Kontaktný formulár</h2>
      <form method="post" action="/confirmation"
            :class="['col-md-6','needs-validation', {'was-validated': wasValidated}]" ref="myForm">
        <label for="name" class="form-label">Meno a priezvisko</label>
        <input v-model="formData.name" type="text" id="name" placeholder="Meno a priezvisko" class="form-control"
               name="name" required>
        <br>
        <label for="mail" class="form-label">Emailová adresa</label>
        <input v-model="formData.email" type="email" id="mail" placeholder="Emailová adresa" class="form-control"
               name="email" required/>
        <br>
        <label for="phone" class="form-label">Telefónne číslo</label>
        <input v-model="formData.phone" type="tel" id="phone" placeholder="Telefónne číslo" class="form-control"
               name="phone" required/>
        <br>
        <label for="subject" class="form-label">Predmet</label>
        <select v-model="formData.subject" id="subject" class="form-select" name="subject" required>
          <option v-for="option in subjectOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
        <label for="question" class="form-label">Správa</label>
        <textarea v-model="formData.message" id="question" placeholder="Správa" class="form-control" name="request"
                  required></textarea>
        <input type="checkbox" id="check" class="form-check-input me-2" :checked="GDPRChecked" required><label
          for="check" class="form-label">Súhlasím <a class="link-secondary" href="#GDPRModalWnd" data-bs-toggle="modal">so
        spracovaním osobných údajov</a></label>
        <br>
        <button type="submit" class="btn btn-outline-secondary mt-4" @click.prevent="beforeSendQuestion">Odoslať
        </button>
      </form>
    </section>
  </main>
  <BModal title="Vážime si vaše súkromie" ref="gdpr_modal" id="GDPRModalWnd" noFade>
    <p>Vaše meno a e-mail použijeme len na naše interné účely.</p>
    <p>Na komunikáciu s vami budeme používať váš e-mail. Súhlas s vyššie uvedeným spracúvaním zo
      strany našej spoločnosti môžete poskytnúť kliknutím na príslušné tlačidlo.</p>
    <template #cancel>
      <button type="button" class="btn btn-link-secondary" data-bs-dismiss="modal"
              id="noBtn" @click.prevent="GDPROff">Nesúhlasím
      </button>
    </template>
    <template #ok>
      <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal"
              id="yesBtn" @click.prevent="GDPROn">Súhlasím
      </button>
    </template>
  </BModal>
  <SecondaryFooter :currentPage="'/contacts'"/>
</template>
<script>
import SecondaryHeader from '@/components/SecondaryHeader.vue';
import SecondaryFooter from '@/components/SecondaryFooter.vue';

export default {
  components: {
    SecondaryHeader,
    SecondaryFooter,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: null,
        message: '',
      },
      subjectOptions: [
        {value: null, text: 'Výber predmetu'},
        {value: 1, text: 'Architektonické služby'},
        {value: 2, text: 'Interiérové služby'},
        {value: 3, text: 'Vizuálizácia'},
        {value: 4, text: '3D modelovanie'},
        {value: 5, text: 'Iné'},
      ],
      isFormValidated: false,
      GDPRChecked: false,
      wasValidated: false
    };
  },
  computed: {
    queryString() {
      return `name=${encodeURIComponent(this.formData.name)}&email=${encodeURIComponent(this.formData.email)}&phone=${encodeURIComponent(this.formData.phone)}&subject=${encodeURIComponent(this.formData.subject)}&message=${encodeURIComponent(this.formData.message)}`;
    }
  },
  methods: {
    beforeSendQuestion(event) {
      this.isFormValidated = true;
      const isValid = this.$refs.myForm.checkValidity();
      this.wasValidated = true;
      if (isValid) {
        // alert(JSON.stringify(this.formData));
        this.$router.push(`/confirmation?${this.queryString}`);
      } else {
        event.stopPropagation();
        event.preventDefault();
        alert('Formulár nie je správne vyplnený!');
      }
    },
    GDPROn() {
      this.GDPRChecked = true;
    },
    GDPROff() {
      this.GDPRChecked = false;
    },
  },
};
</script>
<style>
</style>
