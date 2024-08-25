import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/MainPageView.vue';
import OldTerminalView from './views/OldTerminalView.vue';

const routes = [
    { 
        path: '/', 
        component: HomeView,
        name: 'Fullstack developer CV', 
     },
    { 
        path: '/old-terminal', 
        component: OldTerminalView,
        name: 'Old terminal',
    },
];

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
