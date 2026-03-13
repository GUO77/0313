<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

interface NavItem {
  name: string
  path: string
}

const navItems: NavItem[] = [
  { name: '首页', path: '/' },
  { name: 'ERP+', path: '/erp' },
  { name: '航空服务', path: '/aviation' },
  { name: '网货监管', path: '/supervision' },
  { name: '水运服务', path: '/shipping' },
  { name: '数据共享', path: '/platform' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav
    class="fixed top-0 w-full bg-white h-[72px] z-50 border-b border-gray-100 flex items-center"
  >
    <div class="max-w-[1200px] w-full mx-auto px-4 flex items-center justify-between">
      <router-link to="/" class="flex items-center">
        <img src="/logo.svg" alt="数联" class="h-9" />
      </router-link>
      <div class="flex items-center gap-[26px] md:gap-[34px] flex-wrap justify-end">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-base transition-all duration-300 hover:text-[#0060E6] py-2"
          :class="isActive(item.path) ? 'text-brand font-medium' : 'text-[#666666]'"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>
