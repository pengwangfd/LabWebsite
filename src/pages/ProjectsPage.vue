<template>
  <Layout>
    <div class="min-h-screen bg-gray-50">
      <!-- Page Header -->
      <div class="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold mb-4">研究项目</h1>
          <p class="text-xl opacity-90">探索我们正在进行的前沿研究项目和创新成果</p>
        </div>
      </div>

      <!-- Projects Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <!-- Projects List -->
        <div class="space-y-6">
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            @click="showProjectDetails(project)"
            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div class="flex flex-col lg:flex-row">
              <!-- Project Image -->
              <div v-if="project.imageUrl" class="lg:w-80 h-48 lg:h-auto bg-gradient-to-br from-green-500 to-green-600 relative flex-shrink-0">
                <img
                  :src="project.imageUrl"
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute top-4 left-4">
                  <span class="bg-white/90 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    项目
                  </span>
                </div>
              </div>
              
              <!-- Project Content -->
              <div class="flex-1 p-6">
                <div class="flex items-start justify-between mb-4">
                  <div class="flex-1">
                    <!-- Project Title -->
                    <h3 class="text-xl font-bold text-gray-900 mb-3 hover:text-green-600">
                      {{ project.title }}
                    </h3>
                    
                    <!-- Project Details -->
                     <div class="flex items-center text-sm text-gray-600 mb-3">
                       <Calendar class="h-4 w-4 mr-2" />
                       <span>{{ project.time }}</span>
                     </div>
                    
                    <!-- Description -->
                    <p class="text-gray-700 leading-relaxed mb-4 line-clamp-3">
                      {{ project.description }}
                    </p>
                    
                    <!-- Read More Button -->
                    <div class="flex items-center text-green-600 hover:text-green-700 font-medium text-sm mt-3">
                      <span>阅读更多</span>
                      <ChevronRight class="h-4 w-4 ml-1" />
                    </div>
                    
                    <!-- Links -->
                     <div v-if="project.links && project.links.length > 0" class="flex items-center gap-3 mt-4">
                       <a
                         v-for="link in project.links"
                         :key="link.url"
                         :href="link.url"
                         target="_blank"
                         @click.stop
                         class="inline-flex items-center bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg font-medium text-sm border border-blue-200 transition-colors"
                       >
                         <ExternalLink class="h-4 w-4 mr-1" />
                         {{ link.name }}
                       </a>
                     </div>
                  </div>
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="closeProjectModal"
    >
      <div
        class="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 class="text-xl font-bold text-gray-900">项目详情</h2>
          <button
            @click="closeProjectModal"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X :size="24" />
          </button>
        </div>
        
        <div class="p-6">
          <!-- Project Header -->
          <div class="mb-6">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ selectedProject.title }}</h3>
            
            <!-- Project Image -->
            <div class="mb-6">
              <img
                :src="selectedProject.imageUrl"
                :alt="selectedProject.title"
                class="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <!-- Project Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div class="flex items-center text-gray-600">
                <Calendar class="h-5 w-5 mr-2" />
                <span class="ml-1">{{ selectedProject.time }}</span>
              </div>
            </div>
            

          </div>
          
          <!-- Description -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">项目描述</h4>
            <p class="text-gray-700 leading-relaxed">{{ selectedProject.description }}</p>
          </div>
          
          <!-- Detailed Content -->
          <div v-if="selectedProject.details" class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">详细内容</h4>
            <p class="text-gray-700 leading-relaxed">{{ selectedProject.details }}</p>
          </div>
          

          
          <!-- Links -->
          <div v-if="selectedProject.links && selectedProject.links.length > 0" class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-3">相关链接</h4>
            <div class="flex flex-wrap gap-4">
              <a
                v-for="link in selectedProject.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <ExternalLink class="h-4 w-4 mr-1" />
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  Users, 
  Calendar, 
  ExternalLink, 
  Github, 
  X,
  FileText,
  ChevronRight 
} from 'lucide-vue-next'
import Layout from '@/components/Layout.vue'

interface Project {
  id?: number
  title: string
  description: string
  time: string
  imageUrl?: string
  details: string
  links: {
    name: string
    url: string
  }[]
}

const selectedProject = ref<Project | null>(null)
const projects = ref<Project[]>([])

const filteredProjects = computed(() => {
  return projects.value
})

const showProjectDetails = (project: Project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const loadProjects = async () => {
  try {
    const response = await fetch('/data/projects.json')
    const data = await response.json()
    projects.value = data
  } catch (error) {
    console.error('Failed to load projects:', error)
  }
}

onMounted(() => {
  loadProjects()
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