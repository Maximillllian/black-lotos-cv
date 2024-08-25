import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/MainPageView.vue';
import OldTerminalView from './views/OldTerminalView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/old-terminal', component: OldTerminalView },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
