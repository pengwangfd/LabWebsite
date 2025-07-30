<template>
  <Layout>
    <!-- Hero Banner -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background -->
      <div 
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url(${homeData.hero?.backgroundImage})` }"
      >
        <div class="absolute inset-0 bg-black/40"></div>
        <!-- Animated particles background -->
        <div class="absolute inset-0">
          <div 
            v-for="i in 50" 
            :key="i"
            class="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            :style="{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (2 + Math.random() * 3) + 's'
            }"
          ></div>
        </div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {{ homeData.hero?.title || 'Fudan AIoT Lab' }}
        </h1>
        <p class="text-xl md:text-2xl mb-4 text-blue-100">
          {{ homeData.hero?.subtitle || '探索人工智能前沿，推动科技创新发展' }}
        </p>
        <p class="text-lg mb-8 text-blue-200 max-w-3xl mx-auto">
          {{ homeData.hero?.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/projects"
            class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            探索项目
          </router-link>
          <router-link 
            to="/members"
            class="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            了解团队
          </router-link>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown class="h-6 w-6" />
      </div>
    </section>



    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">研究方向</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            我们专注于人工智能前沿技术研究，致力于推动相关领域的创新发展
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="feature in homeData.features" 
            :key="feature.title"
            class="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <component :is="getIconComponent(feature.icon)" class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">探索更多</h2>
          <p class="text-xl text-gray-600">了解我们的研究成果、团队成员和最新动态</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <router-link 
            v-for="item in quickNavItems" 
            :key="item.name"
            :to="item.path"
            class="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
          >
            <div class="p-8">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <component :is="item.icon" class="h-6 w-6 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ item.name }}</h3>
              <p class="text-gray-600 mb-4">{{ item.description }}</p>
              <div class="flex items-center text-blue-600 font-medium">
                <span>了解更多</span>
                <ArrowRight class="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>


  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  ChevronDown, 
  Brain, 
  Users, 
  Lightbulb, 
  ArrowRight,
  Newspaper,
  GraduationCap,
  FileText,
  Briefcase,
  Eye,
  MessageSquare,
  Network
} from 'lucide-vue-next'
import Layout from '@/components/Layout.vue'

interface HomeData {
  hero: {
    title: string
    subtitle: string
    description: string
    backgroundImage: string
  }
  stats: {
    members: { count: number; label: string }
    papers: { count: number; label: string }
    projects: { count: number; label: string }
    news: { count: number; label: string }
  }
  features: Array<{
    icon: string
    title: string
    description: string
  }>
}

interface NewsItem {
  id: number
  title: string
  summary: string
  category: string
  date: string
}

const homeData = ref<HomeData>({
  hero: {
    title: 'Fudan AIoT Lab',
    subtitle: '探索人工智能前沿，推动科技创新发展',
    description: '',
    backgroundImage: ''
  },
  stats: {
    members: { count: 0, label: '研究成员' },
    papers: { count: 0, label: '发表论文' },
    projects: { count: 0, label: '研究项目' },
    news: { count: 0, label: '最新动态' }
  },
  features: []
})

const latestNews = ref<NewsItem[]>([])
const stats = ref({
  members: 0,
  papers: 0,
  projects: 0,
  news: 0
})

const quickNavItems = [
  {
    name: '新闻动态',
    path: '/news',
    icon: Newspaper,
    description: '了解实验室最新研究进展、获奖信息和重要公告'
  },
  {
    name: '团队成员',
    path: '/members',
    icon: GraduationCap,
    description: '认识我们的研究团队，包括导师、博士后和学生'
  },
  {
    name: '学术论文',
    path: '/papers',
    icon: FileText,
    description: '浏览我们发表的学术论文和研究成果'
  },
  {
    name: '研究项目',
    path: '/projects',
    icon: Briefcase,
    description: '探索我们正在进行的前沿研究项目'
  }
]

const getIconComponent = (iconName: string) => {
  const iconMap: Record<string, any> = {
    Brain,
    Eye,
    MessageSquare,
    Network,
    Users,
    Lightbulb
  }
  return iconMap[iconName] || Brain
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const loadHomeData = async () => {
  try {
    const response = await fetch('/data/home.json')
    const data = await response.json()
    homeData.value = data
  } catch (error) {
    console.error('Failed to load home data:', error)
  }
}

const loadStats = async () => {
  try {
    // Load members count
    const membersResponse = await fetch('/data/members.json')
    const membersData = await membersResponse.json()
    stats.value.members = membersData.length

    // Load papers count
    const papersResponse = await fetch('/data/papers.json')
    const papersData = await papersResponse.json()
    stats.value.papers = papersData.length

    // Load projects count
    const projectsResponse = await fetch('/data/projects.json')
    const projectsData = await projectsResponse.json()
    stats.value.projects = projectsData.length

    // Load news count and latest news
    const newsResponse = await fetch('/data/news.json')
    const newsData = await newsResponse.json()
    stats.value.news = newsData.length
    latestNews.value = newsData.slice(0, 3) // Get latest 3 news
  } catch (error) {
    console.error('Failed to load stats:', error)
  }
}

onMounted(() => {
  loadHomeData()
  loadStats()
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
</style>
