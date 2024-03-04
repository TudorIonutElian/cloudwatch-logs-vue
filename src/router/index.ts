import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DonutsView from '../views/DonutsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/donuts',
      name: 'donuts',
      component: DonutsView
    },
    {
      path: '/roles',
      name: 'roles',
      component: HomeView
    }
  ]
})

export default router
