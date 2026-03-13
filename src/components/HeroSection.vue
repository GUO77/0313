<script setup lang="ts">
const scrollToProducts = () => {
  const section = document.getElementById('product-section')
  section?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <!-- 背景容器 -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#0060E6]/90 to-[#0047B3]/90">
      <video
        class="w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="" type="video/mp4" />
      </video>
      <!-- 渐变遮罩 -->
      <div class="absolute inset-0 bg-black/30" />
    </div>

    <!-- 内容区 -->
    <div class="relative z-10 max-w-[1200px] mx-auto px-4 text-center -mt-5">
      <h1 class="text-4xl md:text-5xl font-bold text-white">
        数据驱动 · 智联产业 · 链通全球
      </h1>
      <p class="text-lg text-white/90 mt-4 max-w-2xl mx-auto">
        致力于为客户提供安全、可靠的数字供应链解决方案
      </p>
      <a-button
        type="primary"
        size="large"
        class="mt-8 !bg-white !text-[#0060E6] !border-0 font-medium transition-all duration-300 hover:!text-[#1E7CFF]"
        @click="scrollToProducts"
      >
        探索解决方案
      </a-button>
    </div>
  </section>
</template>
