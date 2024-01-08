import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/main.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import {usePriceGroupsStore} from '@/stores/priceGroupsStore'

const app = createApp(App)
const pinia = createPinia()
pinia.use((context) => {
    const storeId = context.store.$id;
    const fromStorage = JSON.parse(localStorage.getItem(storeId));
    if (fromStorage) {
        context.store.$patch(fromStorage);
    }
    context.store.$subscribe((mutation, state) => {
        localStorage.setItem(storeId, JSON.stringify(state));
    });
});
app.use(pinia)
app.use(router)
app.provide('priceGroupsStore', usePriceGroupsStore())
app.mount('#app')