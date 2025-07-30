<template>
  <Layout>
    <div class="min-h-screen bg-gray-50">
      <!-- Page Header -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold mb-4">实验室新闻</h1>
          <p class="text-xl opacity-90">了解我们的最新动态和重要消息</p>
        </div>
      </div>

      <!-- News Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- News List - 横向全宽卡片布局 -->
        <div class="space-y-6">
          <article
            v-for="(news, index) in filteredNews"
            :key="index"
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            @click="openNewsDetail(news)"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- News Image -->
              <div class="lg:w-80 h-48 lg:h-auto bg-gradient-to-br from-blue-500 to-blue-600 relative flex-shrink-0">
                <img
                  v-if="news.image"
                  :src="news.image"
                  :alt="news.title"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute top-4 left-4">
                  <span class="bg-white/90 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
                    新闻
                  </span>
                </div>
              </div>
              
              <!-- News Content -->
              <div class="flex-1 p-6">
                <div class="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar class="h-4 w-4 mr-1" />
                  {{ formatDate(news.date) }}
                  <span class="mx-2">•</span>
                  <User class="h-4 w-4 mr-1" />
                  {{ news.author }}
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {{ news.title }}
                </h3>
                
                <p class="text-gray-600 mb-4 line-clamp-3">
                  {{ news.excerpt }}
                </p>
                
                <div class="flex items-center text-blue-600 font-medium text-sm">
                  <span>阅读更多</span>
                  <ArrowRight class="h-4 w-4 ml-1" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- News Detail Modal -->
    <div
      v-if="selectedNews"
      class="fixed inset-0 z-50 overflow-y-auto"
      @click="closeNewsDetail"
    >
      <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div class="fixed inset-0 bg-black/50 transition-opacity"></div>
        
        <div
          class="relative bg-white rounded-xl max-w-4xl w-full mx-auto shadow-xl transform transition-all"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <div class="flex items-center space-x-3">
              <span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                新闻
              </span>
              <span class="text-gray-500 text-sm">{{ formatDate(selectedNews.date) }}</span>
            </div>
            <button
              @click="closeNewsDetail"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X class="h-6 w-6" />
            </button>
          </div>
          
          <!-- Modal Content -->
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">{{ selectedNews.title }}</h2>
            
            <div class="flex items-center text-sm text-gray-500 mb-6">
              <User class="h-4 w-4 mr-1" />
              <span class="mr-4">{{ selectedNews.author }}</span>
            </div>
            
            <!-- News Image -->
            <div v-if="selectedNews.image" class="h-64 rounded-lg mb-6 overflow-hidden">
              <img
                :src="selectedNews.image"
                :alt="selectedNews.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div v-else class="h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6"></div>
            
            <!-- News Content -->
            <div class="prose max-w-none text-left">
              <div v-html="selectedNews.content" class="leading-relaxed text-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Calendar, User, ArrowRight, X } from 'lucide-vue-next'
import { format } from 'date-fns'
import { zhCN } from 'date-fns/locale'
import Layout from '@/components/Layout.vue'

interface NewsItem {
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image?: string
  readTime?: string
}

const selectedNews = ref<NewsItem | null>(null)
const newsData = ref<NewsItem[]>([])

const filteredNews = computed(() => {
  return newsData.value
})

const formatDate = (dateString: string) => {
  return format(new Date(dateString), 'yyyy年MM月dd日', { locale: zhCN })
}

const openNewsDetail = (news: NewsItem) => {
  selectedNews.value = news
  document.body.style.overflow = 'hidden'
}

const closeNewsDetail = () => {
  selectedNews.value = null
  document.body.style.overflow = 'auto'
}

const loadNewsData = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/news.json`)
    newsData.value = await response.json()
  } catch (error) {
    console.error('Failed to load news data:', error)
  }
}

onMounted(() => {
  loadNewsData()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose {
  color: #374151;
  line-height: 1.75;
}

.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #111827;
}

.prose ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.prose li {
  margin: 0.5rem 0;
}

.prose p {
  margin: 1rem 0;
}
</style>