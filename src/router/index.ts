import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DonutsViewRequests from '../views/DonutsViewRequests.vue'
import DonutsViewRegions from '../views/DonutsViewRegions.vue'

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
      component: DonutsViewRequests
    },
    {
      path: '/donuts-regions',
      name: 'donuts-regions',
      component: DonutsViewRegions
    }
  ]
})

export default router
