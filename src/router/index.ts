import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: '首页' },
      },
      {
        path: 'erp',
        name: 'ERP',
        component: () => import('@/views/PlaceholderView.vue'),
        meta: { title: 'ERP+' },
      },
      {
        path: 'aviation',
        name: 'Aviation',
        component: () => import('@/views/PlaceholderView.vue'),
        meta: { title: '航空服务' },
      },
      {
        path: 'supervision',
        name: 'Supervision',
        component: () => import('@/views/PlaceholderView.vue'),
        meta: { title: '网货监管' },
      },
      {
        path: 'shipping',
        name: 'Shipping',
        component: () => import('@/views/PlaceholderView.vue'),
        meta: { title: '水运服务' },
      },
      {
        path: 'platform',
        name: 'Platform',
        component: () => import('@/views/PlaceholderView.vue'),
        meta: { title: '数据共享' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
