import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            path: '/projects',
            component: () => import('../views/Projects.vue')
        },
        {
            path: '/about',
            component: () => import('../views/About.vue')
        },

    ]
})

export default router