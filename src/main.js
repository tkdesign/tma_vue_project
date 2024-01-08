import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
// import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import { useProjectsStore } from "@/stores/projectsStore";

const app = createApp(App)

const pinia = createPinia()
// const store = useProjectsStore(pinia);
// app.config.globalProperties.$store = store;
app.use(pinia)

app.use(router)
app.mount('#app')
// store.init();