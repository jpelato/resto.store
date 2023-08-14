import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
        },

        {
          path: 'sales-entry',
          component: () => import('../pages/sales-entry.vue'),
        },
        {
          path: 'stock-in',
          component: () => import('../pages/stock-in.vue'),
        },
        {
          path: 'stock-out',
          component: () => import('../pages/stock-out.vue'),
        },
        {
          path: 'inventories',
          component: () => import('../pages/inventories.vue'),
        },
        {
          path: 'sales-records',
          component: () => import('../pages/sales-records.vue'),
        },
        {
          path: 'pt-cash',
          component: () => import('../pages/pt-cash.vue'),
        },
        {
          path: 'reports',
          component: () => import('../pages/reports.vue'),
        },
        {
          path: 'resto-menu-settings',
          component: () => import('../pages/resto-menu-settings.vue'),
        },
        {
          path: 'account-settings',
          component: () => import('../pages/account-settings.vue'),
        },
        {
          path: 'typography',
          component: () => import('../pages/typography.vue'),
        },
        {
          path: 'icons',
          component: () => import('../pages/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/cards.vue'),
        },
        {
          path: 'tables',
          component: () => import('../pages/tables.vue'),
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/form-layouts.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

export default router
