import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import Prices from '@/views/Prices.vue';
import Contacts from '@/views/Contacts.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/prices', component: Prices },
  { path: '/contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;