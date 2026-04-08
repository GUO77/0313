<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface BannerSlide {
  title: string
}

const slides: BannerSlide[] = [
  { title: '中数联物流科技平台' },
  { title: '全覆盖物流解决方案' },
  { title: '丰富的生态伙伴应用' },
]

const currentIndex = ref(0)
const progress = ref(0)
const showGridOverlay = ref(false)
const activeMenu = ref<string | null>(null)
/** 下拉左侧：产品体系 / 服务类型 */
const megaLeftTab = ref<'system' | 'service'>('system')
const duration = 4000
let rafId = 0
let lastSwitchTime = 0

const navItems = [
  { key: 'product', label: '产品' },
  { key: 'solution', label: '行业解决方案' },
  { key: 'support', label: '支持与服务' },
]

const getItemProgressWidth = (idx: number) => {
  if (idx < currentIndex.value) return '100%'
  if (idx > currentIndex.value) return '0%'
  return `${progress.value}%`
}

const tick = (timestamp: number) => {
  if (!lastSwitchTime) lastSwitchTime = timestamp
  const elapsed = timestamp - lastSwitchTime
  const ratio = Math.min(elapsed / duration, 1)
  progress.value = ratio * 100

  if (ratio >= 1) {
    currentIndex.value = (currentIndex.value + 1) % slides.length
    progress.value = 0
    lastSwitchTime = timestamp
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
})

watch(activeMenu, (open) => {
  if (!open) megaLeftTab.value = 'system'
})
</script>

<template>
  <div class="site">
    <button class="grid-toggle" type="button" @click="showGridOverlay = !showGridOverlay">
      {{ showGridOverlay ? '关闭栅格对照' : '开启栅格对照' }}
    </button>
    <div v-if="showGridOverlay" class="grid-overlay" aria-hidden="true"></div>

    <header class="top-nav">
      <div
        class="nav-shell"
        :class="{ 'is-open': !!activeMenu }"
        @mouseleave="activeMenu = null"
      >
        <div class="container grid-row nav-grid">
          <div class="logo-wrap nav-logo">
            <img src="/logo.svg" alt="企业 Logo" class="top-logo" />
          </div>
          <nav class="center-tabs nav-tabs" aria-label="主导航">
            <a
              v-for="item in navItems"
              :key="item.key"
              href="#"
              class="tab"
              :class="{ 'is-open': activeMenu === item.key }"
              @mouseenter="activeMenu = item.key"
            >
              <span class="tab-inner">
                <span class="tab-text">{{ item.label }}</span>
                <span v-if="item.key !== 'support'" class="tab-arrow" aria-hidden="true"></span>
              </span>
            </a>
          </nav>
          <div class="nav-login">
            <button class="login-btn" type="button">登录</button>
          </div>
        </div>
        <div v-show="activeMenu" class="mega-menu" @mouseenter="activeMenu = activeMenu || 'product'">
          <div class="container mega-wrap">
            <aside class="mega-side">
              <button class="mega-side-title" type="button" @click.stop="megaLeftTab = 'system'">
                产品与服务
              </button>
              <p>提供六大产品体系和三大服务类型，满足物流行业全场景数字化需求。</p>
              <div class="mega-side-tabs" role="tablist" aria-label="产品与服务分类">
                <button
                  type="button"
                  role="tab"
                  :aria-selected="megaLeftTab === 'system'"
                  class="mega-side-tab"
                  :class="{ 'is-active': megaLeftTab === 'system' }"
                  @click.stop="megaLeftTab = 'system'"
                >
                  <span class="mega-side-tab__bg" aria-hidden="true"></span>
                  <span class="mega-side-tab__label">产品体系</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  :aria-selected="megaLeftTab === 'service'"
                  class="mega-side-tab"
                  :class="{ 'is-active': megaLeftTab === 'service' }"
                  @click.stop="megaLeftTab = 'service'"
                >
                  <span class="mega-side-tab__bg" aria-hidden="true"></span>
                  <span class="mega-side-tab__label">服务类型</span>
                </button>
              </div>
            </aside>
            <div class="mega-main-surface">
              <div v-show="megaLeftTab === 'system'" class="mega-main">
                <div class="mega-col">
                  <h4 class="mega-l2-title">物流行业场景解决方案</h4>
                  <div class="mega-l3-list">
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">物流行业场景解决方案</span>
                      <span class="mega-l3-desc">八大垂类行业定制方案</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">典型行业解决方案</span>
                      <span class="mega-l3-desc">重点物资、冷链、大宗商品等</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">物流行业级操作系统</span>
                      <span class="mega-l3-desc">运输管理、仓储管理、协同平台</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">行业咨询服务产品</span>
                      <span class="mega-l3-desc">网络规划、效率优化、转型咨询</span>
                    </a>
                  </div>
                </div>
                <div class="mega-col">
                  <h4 class="mega-l2-title">企业数智供应链产品</h4>
                  <div class="mega-l3-list">
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">企业数智慧供应链产品</span>
                      <span class="mega-l3-desc">智能驱动供应链优化</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">供应链核心管理系统</span>
                      <span class="mega-l3-desc">TMS/OMS/WMS一体化</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">企业供应链数字转型</span>
                      <span class="mega-l3-desc">数据诊断与系统部署</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">一体化智能SCM系统</span>
                      <span class="mega-l3-desc">全链路供应链管理</span>
                    </a>
                  </div>
                </div>
                <div class="mega-col">
                  <h4 class="mega-l2-title">物流供应链增值服务解决方案</h4>
                  <div class="mega-l3-list">
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">金融科技服务</span>
                      <span class="mega-l3-desc">供应链金融、信用服务</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">绿色供应链服务</span>
                      <span class="mega-l3-desc">碳足迹追踪、碳中和规划</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">交易撮合服务</span>
                      <span class="mega-l3-desc">运输与仓储交易服务</span>
                    </a>
                  </div>
                </div>
                <div class="mega-col">
                  <h4 class="mega-l2-title">物流行业要素产品</h4>
                  <div class="mega-l3-list">
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">物流行业数据要素产品</span>
                      <span class="mega-l3-desc">数据开发治理工具</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">物流要素资源产品</span>
                      <span class="mega-l3-desc">开发/公共/商业数据汇聚</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">行业数据应用产品</span>
                      <span class="mega-l3-desc">数据统计分析、监测</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">物流行业可信数据空间</span>
                      <span class="mega-l3-desc">区块链存证、隐私计算</span>
                    </a>
                  </div>
                </div>
                <div class="mega-col">
                  <h4 class="mega-l2-title">物流行业数智要素产品</h4>
                  <div class="mega-l3-list">
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">基础数据平台</span>
                      <span class="mega-l3-desc">大数据平台、共享云平台</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">AI模型服务</span>
                      <span class="mega-l3-desc">行业大模型、智能体</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">AI数据分析服务</span>
                      <span class="mega-l3-desc">智能查询、趋势分析</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">地图与定位系统</span>
                      <span class="mega-l3-desc">地图与路网、定位服务</span>
                    </a>
                  </div>
                </div>
                <div class="mega-col">
                  <h4 class="mega-l2-title">物流行业数字化基础设施</h4>
                  <div class="mega-l3-list">
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">公共服务平台</span>
                      <span class="mega-l3-desc">资源地图、标准体系、开放社区</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">感知接入基础设施</span>
                      <span class="mega-l3-desc">通信与网络、传感终端</span>
                    </a>
                    <a href="#" class="mega-l3-item">
                      <span class="mega-l3-name">智能化设施设备</span>
                      <span class="mega-l3-desc">自动化设备、智能仓储</span>
                    </a>
                  </div>
                </div>
              </div>
              <div v-show="megaLeftTab === 'service'" class="mega-main mega-main--service">
                <div class="mega-col mega-col--wide">
                  <h4>服务类型</h4>
                  <p class="mega-service-lead">以下为服务能力占位，后续替换为正式栏目与链接。</p>
                  <a href="#">咨询与规划服务</a>
                  <a href="#">实施与集成服务</a>
                  <a href="#">运维与托管服务</a>
                  <a href="#">培训与赋能服务</a>
                </div>
              </div>
            </div>
            <button class="mega-close" type="button" @click="activeMenu = null" aria-label="关闭菜单"></button>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="container hero-content hero-inner grid-row">
          <div class="hero-main">
            <h1>智联物流 数创未来</h1>
            <p>统一门户首页视觉占位，后续根据设计稿替换为正式文案与素材资源。</p>
          </div>
          <div class="banner-carousel">
            <div class="carousel-group">
              <div v-for="(slide, idx) in slides" :key="slide.title" class="carousel-item">
                <span class="carousel-title" :class="{ active: idx === currentIndex }">
                  {{ slide.title }}
                </span>
                <div class="carousel-track">
                  <span class="carousel-progress" :style="{ width: getItemProgressWidth(idx) }"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="stats">
        <div class="container grid-row stats-row">
          <article class="stat-item stat-col">
            <h3>11</h3>
            <p>平台子系统总量</p>
          </article>
          <article class="stat-item stat-col">
            <h3>52</h3>
            <p>服务覆盖场景</p>
          </article>
          <article class="stat-item stat-col">
            <h3>36K</h3>
            <p>企业用户规模</p>
          </article>
          <article class="stat-item stat-col">
            <h3>150T</h3>
            <p>累计处理数据</p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <h2>全方位数字化产品与服务</h2>
            <p>聚焦物流供应链核心环节，构建从管理到协同的一体化数字能力。</p>
          </div>
          <div class="grid-row">
            <article class="data-card">
              <h3>供应链协同管理</h3>
              <ul>
                <li>订单协同</li>
                <li>仓配联动</li>
                <li>多端追踪</li>
              </ul>
            </article>
            <article class="data-card">
              <h3>物流中台服务</h3>
              <ul>
                <li>节点监控</li>
                <li>时效预警</li>
                <li>智能调度</li>
              </ul>
            </article>
            <article class="data-card">
              <h3>大数据分析系统</h3>
              <ul>
                <li>经营画像</li>
                <li>趋势分析</li>
                <li>风险识别</li>
              </ul>
            </article>
            <article class="data-card">
              <h3>运营保障体系</h3>
              <ul>
                <li>安全防护</li>
                <li>权限管理</li>
                <li>服务可用性</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="section section-soft">
        <div class="container">
          <div class="section-head">
            <h2>八大基于行业解决方案</h2>
            <p>结合细分行业场景，提供覆盖规划、执行与优化的端到端能力。</p>
          </div>
          <div class="grid-row">
            <article v-for="n in 8" :key="n" class="data-card solution-card">
              <h3>行业方案 {{ n }}</h3>
              <ul>
                <li>方案说明条目一</li>
                <li>方案说明条目二</li>
                <li>方案说明条目三</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-head">
            <h2>最新资讯</h2>
          </div>
          <div class="grid-row news-layout">
            <article class="news-feature">
              <div class="thumb"></div>
              <h3>行业动态焦点占位标题</h3>
              <p>这是资讯摘要占位内容，后续替换为真实新闻简介与发布时间信息。</p>
            </article>
            <div class="news-list">
              <article v-for="n in 4" :key="`news-${n}`" class="news-item">
                <h3>资讯列表标题占位文案 {{ n }}</h3>
                <p>发布时间 · 来源渠道</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-soft">
        <div class="container">
          <div class="section-head">
            <h2>携手行业领军企业</h2>
          </div>
          <div class="grid-row partners">
            <div v-for="n in 12" :key="`partner-${n}`" class="partner-item">合作伙伴</div>
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="container cta-inner">
          <h2>立即开启物流数字化之旅</h2>
          <p>后续将替换为正式品牌主张与行动路径，引导客户快速接入平台能力。</p>
          <button type="button">了解更多</button>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container grid-row footer-inner">
        <div class="footer-brand">
          <img src="/logo.svg" alt="企业 Logo" class="footer-logo" />
          <p>打造可信赖的产业数字化服务平台。</p>
        </div>
        <div class="grid-row footer-links">
          <div class="footer-link-col">
            <h4>产品中心</h4>
            <a href="#">产品介绍</a>
            <a href="#">定价说明</a>
          </div>
          <div class="footer-link-col">
            <h4>解决方案</h4>
            <a href="#">物流行业</a>
            <a href="#">制造行业</a>
          </div>
          <div class="footer-link-col">
            <h4>支持服务</h4>
            <a href="#">帮助中心</a>
            <a href="#">联系我们</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
