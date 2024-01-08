import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import PricesView from '@/views/PricesView.vue';
import ContactsView from '@/views/ContactsView.vue';

const routes = [
    {path: '/', component: HomeView},
    {path: '/projects', component: ProjectsView},
    {path: '/projects/:categoryId', component: ProjectsView, props: true},
    {path: '/prices', component: PricesView},
    {path: '/contacts', component: ContactsView},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;