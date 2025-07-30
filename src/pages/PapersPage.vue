<template>
  <Layout>
    <div class="min-h-screen bg-gray-50">
      <!-- Page Header -->
      <div class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold mb-4">学术论文</h1>
          <p class="text-xl opacity-90">浏览我们发表的学术论文和研究成果</p>
        </div>
      </div>

      <!-- Papers Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <!-- Papers List -->
        <div class="space-y-6">
          <div
            v-for="paper in filteredPapers"
            :key="paper.id"
            @click="openPaperDetail(paper)"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Paper Image -->
              <div v-if="paper.image" class="lg:w-80 h-48 lg:h-auto bg-gradient-to-br from-purple-500 to-purple-600 relative flex-shrink-0">
                <img
                  :src="paper.image"
                  :alt="paper.title"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute top-4 left-4">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90"
                    :class="{
                      'text-red-800': paper.type === 'Conference',
                      'text-blue-800': paper.type === 'Journal',
                      'text-green-800': paper.type === 'Workshop'
                    }"
                  >
                    {{ paper.type }}
                  </span>
                </div>
              </div>
              
              <!-- Paper Content -->
              <div class="flex-1 p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <!-- Paper Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600">
                      {{ paper.title }}
                    </h3>
                    
                    <!-- Authors -->
                    <div class="flex items-center text-gray-600 mb-2">
                      <Users class="h-4 w-4 mr-2" />
                      <span class="text-sm">{{ paper.authors.join(', ') }}</span>
                    </div>
                    
                    <!-- Venue and Year -->
                    <div class="flex items-center text-gray-600 mb-3">
                      <Calendar class="h-4 w-4 mr-2" />
                      <span class="text-sm font-medium text-purple-600">{{ paper.venue }}</span>
                      <span class="mx-2">•</span>
                      <span class="text-sm">{{ paper.year }}年</span>
                    </div>
                    
                    <!-- Description -->
                    <p class="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                      {{ paper.abstract }}
                    </p>
                    
                    <!-- Read More Button -->
                    <div class="flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm mt-3">
                      <span>阅读更多</span>
                      <ChevronRight class="h-4 w-4 ml-1" />
                    </div>
                    
                    <!-- Keywords -->
                    <div class="flex flex-wrap gap-2 mb-4">
                      <span
                        v-for="keyword in paper.keywords?.slice(0, 4)"
                        :key="keyword"
                        class="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full"
                      >
                        {{ keyword }}
                      </span>
                    </div>
                    
                    <!-- Links -->
                    <div class="flex items-center gap-4">
                      <a
                        v-if="paper.pdfUrl"
                        :href="paper.pdfUrl"
                        target="_blank"
                        @click.stop
                        class="inline-flex items-center bg-red-50 text-red-700 hover:bg-red-100 px-3 py-1.5 rounded-lg font-medium text-sm border border-red-200 transition-colors"
                      >
                        <FileText class="h-4 w-4 mr-1" />
                        PDF
                      </a>
                      <a
                        v-if="paper.codeUrl"
                        :href="paper.codeUrl"
                        target="_blank"
                        @click.stop
                        class="inline-flex items-center bg-gray-50 text-gray-700 hover:bg-gray-100 px-3 py-1.5 rounded-lg font-medium text-sm border border-gray-200 transition-colors"
                      >
                        <Github class="h-4 w-4 mr-1" />
                        代码
                      </a>
                      <a
                        v-if="paper.doiUrl"
                        :href="paper.doiUrl"
                        target="_blank"
                        @click.stop
                        class="inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg font-medium text-sm border border-blue-200 transition-colors"
                      >
                        <ExternalLink class="h-4 w-4 mr-1" />
                        DOI
                      </a>
                    </div>
                  </div>
                  
                  <!-- Paper Type Badge (when no image) -->
                  <div v-if="!paper.image" class="ml-4">
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                      :class="{
                        'bg-red-100 text-red-800': paper.type === 'Conference',
                        'bg-blue-100 text-blue-800': paper.type === 'Journal',
                        'bg-green-100 text-green-800': paper.type === 'Workshop'
                      }"
                    >
                      {{ paper.type }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Paper Detail Modal -->
    <div
      v-if="selectedPaper"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="closePaperDetail"
    >
      <div
        class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 class="text-xl font-bold text-gray-900">论文详情</h2>
          <button
            @click="closePaperDetail"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X :size="24" />
          </button>
        </div>
        
        <div class="p-6">
          <!-- Paper Header -->
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ selectedPaper.title }}</h3>
            
            <!-- Authors -->
            <div class="flex items-center text-gray-600 mb-3">
              <Users class="h-5 w-5 mr-2" />
              <span>{{ selectedPaper.authors.join(', ') }}</span>
            </div>
            
            <!-- Venue and Year -->
            <div class="flex items-center text-gray-600 mb-4">
              <Calendar class="h-5 w-5 mr-2" />
              <span class="font-medium text-purple-600">{{ selectedPaper.venue }}</span>
              <span class="mx-2">•</span>
              <span>{{ selectedPaper.year }}年</span>
            </div>
          </div>
          
          <!-- Abstract -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">摘要</h4>
            <p class="text-gray-700 leading-relaxed">{{ selectedPaper.abstract }}</p>
          </div>
          
          <!-- Keywords -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">关键词</h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="keyword in selectedPaper.keywords"
                :key="keyword"
                class="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full"
              >
                {{ keyword }}
              </span>
            </div>
          </div>
          
          <!-- Links -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">相关链接</h4>
            <div class="flex flex-wrap gap-4">
              <a
                v-if="selectedPaper.pdfUrl"
                :href="selectedPaper.pdfUrl"
                target="_blank"
                class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                <FileText class="h-4 w-4 mr-1" />
                PDF
              </a>
              <a
                v-if="selectedPaper.doiUrl"
                :href="selectedPaper.doiUrl"
                target="_blank"
                class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <ExternalLink class="h-4 w-4 mr-1" />
                DOI
              </a>
              <a
                v-if="selectedPaper.codeUrl"
                :href="selectedPaper.codeUrl"
                target="_blank"
                class="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                <Github class="h-4 w-4 mr-1" />
                代码
              </a>
              <button
                @click="showCitation(selectedPaper)"
                class="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium"
              >
                <Quote class="h-4 w-4 mr-1" />
                引用
              </button>
            </div>
          </div>
          
          <!-- BibTeX Citation -->
          <div v-if="selectedPaper.bibtex">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">BibTeX引用</h4>
            <div class="bg-gray-50 p-4 rounded-lg">
              <pre class="text-sm text-gray-800 whitespace-pre-wrap">{{ selectedPaper.bibtex }}</pre>
            </div>
            <button
              @click="copyCitation(selectedPaper.bibtex)"
              class="mt-2 text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              复制BibTeX
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { 
  Users, 
  Calendar, 
  FileText, 
  ExternalLink, 
  Quote, 
  Github, 
  X,
  ChevronRight 
} from 'lucide-vue-next'
import Layout from '@/components/Layout.vue'

interface Paper {
  id: number
  title: string
  authors: string[]
  venue: string
  year: number
  type: 'Conference' | 'Journal' | 'Workshop'
  abstract: string
  keywords: string[]
  pdfUrl?: string
  doiUrl?: string
  codeUrl?: string
  bibtex?: string
  image?: string
  category?: string
}

const selectedPaper = ref<Paper | null>(null)
const papers = ref<Paper[]>([])
const selectedCategory = ref('全部')

const categories = computed(() => {
  const cats = ['全部']
  const uniqueCategories = [...new Set(papers.value.map(paper => paper.category).filter(Boolean))]
  return cats.concat(uniqueCategories)
})

const filteredPapers = computed(() => {
  if (selectedCategory.value === '全部') {
    return papers.value
  }
  return papers.value.filter(paper => paper.category === selectedCategory.value)
})



const openPaperDetail = (paper: Paper) => {
  selectedPaper.value = paper
  document.body.style.overflow = 'hidden'
}

const closePaperDetail = () => {
  selectedPaper.value = null
  document.body.style.overflow = 'auto'
}

const showCitation = (paper: Paper) => {
  // 这里可以添加更多引用格式的显示逻辑
  console.log('Show citation for:', paper.title)
}

const copyCitation = async (citation: string) => {
  try {
    await navigator.clipboard.writeText(citation)
    // 这里可以添加一个toast提示
    console.log('Citation copied to clipboard')
  } catch (err) {
    console.error('Failed to copy citation:', err)
  }
}

const loadPapers = async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/papers.json`)
    const data = await response.json()
    papers.value = data
  } catch (error) {
    console.error('Failed to load papers:', error)
  }
}

onMounted(() => {
  loadPapers()
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>