import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "@/views/dashboard/Dashboard.vue";

const routes = [
    { path: '/', component: Dashboard, name: 'Dashboard' },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
