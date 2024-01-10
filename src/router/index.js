import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import PricesView from '@/views/PricesView.vue';
import ContactsView from '@/views/ContactsView.vue';
import ConfirmationView from "@/views/ConfirmationView.vue";

const routes = [
    {path: '/', component: HomeView, meta: {title: 'Domov'}},
    {path: '/projects', component: ProjectsView, meta: {title: 'Projekty'}},
    {path: '/projects/:categoryId', component: ProjectsView, props: true, meta: {title: 'Projekty'}},
    {path: '/prices', component: PricesView, meta: {title: 'Cenník'}},
    {path: '/contacts', component: ContactsView, meta: {title: 'Kontakt'}},
    {path: '/confirmation', component: ConfirmationView, meta: {title: 'Potvrdenie'}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta?.title) {
        if (!to.path.startsWith('/projects')) {
            document.title = to.meta.title + ' - TM Architektura';
        }
    } else {
        document.title = 'TM Architektura';
    }
    next();
});

export default router;