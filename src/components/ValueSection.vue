<script setup lang="ts">
import { Zap, Lock, Globe, BarChart3 } from 'lucide-vue-next'

interface ValueCard {
  icon: typeof Zap
  title: string
  description: string
}

const values: ValueCard[] = [
  {
    icon: Zap,
    title: '政府',
    description: '提供数据驱动的决策支持，助力政策制定与监管效率提升，实现产业数字化治理',
  },
  {
    icon: Lock,
    title: '制造企业',
    description: '优化供应链管理，降低运营成本，实现精准化生产与智能化决策',
  },
  {
    icon: Globe,
    title: '金融企业',
    description: '提供物流数据交叉核验，动态风险监控“五流合一”数据全链路穿透式监管',
  },
  {
    icon: BarChart3,
    title: '物流企业',
    description: '实现物流全程可视化，优化路由规划，提升配送效率，降低物流成本',
  },
]
</script>

<template>
  <section class="bg-[#F9FAFB] py-20">
    <div class="max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in values"
          :key="index"
          class="flex flex-col items-center text-center"
        >
          <component
            :is="item.icon"
            :size="32"
            class="text-brand mb-4"
          />
          <h3 class="font-bold text-[#333333] text-base mb-2">{{ item.title }}</h3>
          <p class="text-sm text-[#999999]">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
