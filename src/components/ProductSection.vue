<script setup lang="ts">
import { useRouter } from 'vue-router'

export interface ProductCard {
  id: string
  name: string
  description: string
  path: string
  image?: string
  isViewAll?: boolean
}

const router = useRouter()

const products: ProductCard[] = [
  {
    id: 'erp',
    name: 'ERP+',
    description: '货主全球端到端场景物流数据决策支持。',
    path: '/erp',
    image: '/ERP+.png',
  },
  {
    id: 'aviation',
    name: '航空物流服务平台',
    description: '航空货运行业运行监测与趋势预测的数智化信息平台。',
    path: '/aviation',
    image: '/航空物流服务平台.png',
  },
  {
    id: 'supervision',
    name: '网货监管平台',
    description: '解决网络货运平台企业税筹断裂难题，降低企业合规成本。',
    path: '/supervision',
    image: '/网货监管平台.png',
  },
  {
    id: 'shipping',
    name: '水运物流服务平台',
    description: '覆盖内河水运业务，提供基础信息、可视化、信用服务等多种数据服务。',
    path: '/shipping',
    image: '/水运物流服务平台.png',
  },
  {
    id: 'platform',
    name: '数据共享平台',
    description: '提供600余个场景的人工智能高质量数据集。',
    path: '/platform',
    image: '/数据共享平台.png',
  },
  {
    id: 'view-all',
    name: '查看全部产品',
    description: '探索更多数字供应链核心产品与服务',
    path: '#',
    isViewAll: true,
  },
]

const handleCardClick = (product: ProductCard) => {
  if (product.isViewAll) return
  router.push(product.path)
}
</script>

<template>
  <section id="product-section" class="max-w-[1200px] mx-auto py-20 px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="flex flex-col items-center text-center rounded border transition-all duration-300 overflow-hidden"
        :class="
          product.isViewAll
            ? 'bg-white border-gray-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer p-6 flex flex-col justify-center'
            : 'bg-white border-gray-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer pt-3'
        "
        @click="handleCardClick(product)"
      >
        <!-- 卡片上半部图片 350x160，距顶部 12px -->
        <div
          v-if="!product.isViewAll && product.image"
          class="flex-shrink-0 mx-auto overflow-hidden"
          style="width: 350px; height: 160px; max-width: 100%;"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-full object-cover"
          />
        </div>
        <div :class="product.isViewAll ? 'items-center justify-center' : 'p-6 pt-4 flex flex-col flex-1 items-start'" class="flex flex-col w-full">
        <h3 class="font-bold text-[#333333] text-lg" :class="product.isViewAll ? 'text-center' : ''">{{ product.name }}</h3>
        <p v-if="product.description" class="flex-1 text-justify mt-2" :class="product.isViewAll ? 'text-base text-[#666666] text-center' : 'text-sm text-[#666666]'">
          {{ product.description }}
        </p>
        </div>
      </div>
    </div>
  </section>
</template>
