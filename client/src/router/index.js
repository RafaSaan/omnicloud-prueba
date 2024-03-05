import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/features/realTimeChat/views/HomeView.vue'
import GuestView from '@/features/realTimeChat/views/GuestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guest',
      name: 'guest',
      component: GuestView
    },
  ]
})

export default router
