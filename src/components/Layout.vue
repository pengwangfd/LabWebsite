<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Navbar />
    
    <!-- Main Content -->
    <main class="pt-16 flex-1">
      <slot />
    </main>
    
    <!-- Footer -->
    <footer class="bg-gray-900 text-white mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Lab Info -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">AIoT</span>
              </div>
              <span class="text-xl font-bold">Fudan AIoT Lab</span>
            </div>
            <p class="text-gray-300 mb-4">
              {{ footerData?.description || '致力于人工智能与物联网前沿技术研究，推动科技创新与产业应用的深度融合' }}
            </p>
            <div class="flex space-x-4">
              <a 
                :href="footerData?.contact?.github || '#'" 
                target="_blank"
                class="text-gray-300 hover:text-white transition-colors"
              >
                <Github class="h-5 w-5" />
              </a>
              <a 
                :href="`mailto:${footerData?.contact?.email || 'pengwang5@fudan.edu.cn'}`" 
                class="text-gray-300 hover:text-white transition-colors"
              >
                <Mail class="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold mb-4">联系我们</h3>
            <div class="space-y-2 text-gray-300">
              <div class="flex items-center space-x-2">
                <MapPin class="h-4 w-4" />
                <span class="text-sm">{{ footerData?.contact?.address || '复旦大学江湾校区交叉二号楼D3013' }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Mail class="h-4 w-4" />
                <span class="text-sm">{{ footerData?.contact?.email || 'pengwang5@fudan.edu.cn' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Github, Mail, MapPin } from 'lucide-vue-next'
import Navbar from './Navbar.vue'

interface FooterData {
  description: string
  contact: {
    email: string
    address: string
    github: string
  }
}

const footerData = ref<FooterData | null>(null)

onMounted(async () => {
  try {
    const response = await fetch(`${import.meta.env.BASE_URL}data/home.json`)
    const data = await response.json()
    footerData.value = data.footer
  } catch (error) {
    console.error('Failed to load footer data:', error)
  }
})
</script>