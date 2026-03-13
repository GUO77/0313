<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white flex flex-col">
    <NavBar />
    <main class="pt-[72px] flex-1">
      <router-view />
    </main>
    <PageFooter />
  </div>
</template>
