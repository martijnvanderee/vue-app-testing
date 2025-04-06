import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Header.vue';
import About from './components/Products.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    }
];
export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})