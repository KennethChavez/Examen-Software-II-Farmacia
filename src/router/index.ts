import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/Inventory.vue')
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('../views/Clients.vue')
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('../views/Sales.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('../views/History.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/Reports.vue')
    }
  ]
})

export default router