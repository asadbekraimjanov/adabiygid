import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/dashboard/Dashboard.vue";

const routes = [
    { path: '/', component: Dashboard, name: 'Dashboard' },
    { path: '/news', component: () => import('/src/views/news-page/NewsAll.vue'), name: 'NewsAll' },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
