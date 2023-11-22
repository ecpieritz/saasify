import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('../views/SolutionsView.vue')
  },
  {
    path: '/clients',
    name: 'clients',
    component: () => import('../views/ClientsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
