import { createWebHistory, createRouter } from 'vue-router'

import Home from './views/Home.vue';
import Cart from './views/Cart.vue';

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
    }, { path: '/:pathMatch(.*)*', name: 'not-found', component: Home },
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
})