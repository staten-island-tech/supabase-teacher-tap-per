import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/upgrades',
      name: 'UpgradesView',
      component: () => import('../views/UpgradesView.vue'),
    },
    {
      path: '/login',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router