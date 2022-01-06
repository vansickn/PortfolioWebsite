import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/designs',
            component: () => import('../views/designs.vue')
        },
    ],
    mode: 'history',
})

export default router