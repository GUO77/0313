<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const title = route.meta?.title ?? '产品'
</script>

<template>
  <div class="min-h-[60vh] flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-[#333333]">{{ title }}</h1>
      <p class="text-[#666666] mt-2">页面开发中...</p>
    </div>
  </div>
</template>
