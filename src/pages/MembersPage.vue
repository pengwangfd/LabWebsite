<template>
  <Layout>
    <div class="min-h-screen bg-gray-50">
      <!-- Page Header -->
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-4xl font-bold mb-4">团队成员</h1>
          <p class="text-xl opacity-90">认识我们优秀的研究团队</p>
        </div>
      </div>

      <!-- Members Content -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Role Filter -->
        <div class="mb-8">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="role in roles"
              :key="role"
              @click="selectedRole = role"
              :class="[
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                selectedRole === role
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              ]"
            >
              {{ role }}
            </button>
          </div>
        </div>

        <!-- Members by Category -->
        <div class="space-y-12">
          <div v-for="category in orderedCategories" :key="category" class="">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-200 pb-2">
              {{ getCategoryDisplayName(category) }}
            </h2>
            
            <!-- High-level members (教授, 博士后) -->
            <div v-if="isHighLevelCategory(category)" class="space-y-4">
              <div
                v-for="member in getMembersByCategory(category)"
                :key="member.name"
                @click="openMemberDetail(member)"
                class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100"
              >
                <div class="flex flex-col lg:flex-row">
                  <!-- Member Photo - 扩大头像区域 -->
                  <div class="lg:w-64 h-64 lg:h-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative flex-shrink-0 flex items-center justify-center">
                    <div v-if="member.avatar" class="w-full h-full">
                      <img
                        :src="member.avatar"
                        :alt="member.name"
                        class="w-full h-full object-cover"
                      />
                    </div>
                    <div v-else class="text-white text-5xl font-bold">
                      {{ member.name.charAt(0) }}
                    </div>
                    <!-- 职位徽章 -->
                    <div class="absolute top-4 right-4">
                      <span :class="[
                      'px-3 py-1 rounded-full text-xs font-bold shadow-lg',
                      getCategory(member.position) === 'professor' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white'
                    ]">
                      {{ member.position }}
                    </span>
                    </div>

                  </div>
                  
                  <!-- Member Content - 紧凑设计 -->
                  <div class="flex-1 p-5">
                    <div class="flex items-start justify-between mb-3">
                      <div class="flex-1">
                        <!-- Member Name & Position -->
                        <div class="flex items-center gap-3 mb-3">
                          <h3 class="text-2xl font-bold text-gray-900">{{ member.name }}</h3>
                          <div class="flex gap-2">
                            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                              {{ member.position }}
                            </span>
                          </div>
                        </div>
                        
                        <!-- Contact Info - 紧凑排列 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm">
                          <div v-if="member.email" class="flex items-center text-gray-600">
                            <Mail :size="14" class="mr-2 text-blue-500" />
                            <span class="truncate">{{ member.email }}</span>
                          </div>
                          <div v-if="member.office" class="flex items-center text-gray-600">
                            <MapPin :size="14" class="mr-2 text-green-500" />
                            <span>{{ member.office }}</span>
                          </div>
                        </div>
                        
                        <!-- Research Areas -->
                        <div v-if="member.research && member.research.length > 0" class="mb-3">
                          <div class="flex flex-wrap gap-1">
                            <span
                              v-for="area in member.research.slice(0, 4)"
                              :key="area"
                              class="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium border border-blue-200"
                            >
                              {{ area }}
                            </span>
                          </div>
                        </div>
                        
                        <!-- Bio - 简化 -->
                        <p v-if="member.bio" class="text-gray-700 text-sm leading-relaxed line-clamp-2 mb-3">
                          {{ member.bio }}
                        </p>
                        
                        <!-- Education - 紧凑显示 -->
                        <div v-if="member.education && member.education.length > 0">
                          <h4 class="text-xs font-bold text-gray-900 mb-1 uppercase tracking-wide">教育背景</h4>
                          <div class="space-y-1">
                            <p v-for="edu in member.education.slice(0, 2)" :key="edu" class="text-xs text-gray-600">
                              {{ edu }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Regular members (学生等) - 更小的卡片 -->
            <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              <div
                v-for="member in getMembersByCategory(category)"
                :key="member.name"
                @click="openMemberDetail(member)"
                class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group border border-gray-100"
              >
                <!-- Member Avatar - 更小 -->
                <div class="relative h-32 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <div v-if="member.avatar" class="w-full h-full">
                    <img
                      :src="member.avatar"
                      :alt="member.name"
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div v-else class="text-white text-2xl font-bold">
                    {{ member.name.charAt(0) }}
                  </div>
                  <div class="absolute top-2 right-2">
                    <span class="bg-white/90 text-purple-800 px-1.5 py-0.5 rounded text-xs font-medium">
                      {{ member.position }}
                    </span>
                  </div>
                </div>
                
                <!-- Member Info - 紧凑 -->
                <div class="p-3">
                  <h3 class="text-sm font-semibold text-gray-900 mb-1 truncate">{{ member.name }}</h3>
                  <p class="text-purple-600 text-xs font-medium mb-2">{{ member.position }}</p>
                  <div v-if="member.research && member.research.length > 0" class="flex flex-wrap gap-1">
                    <span
                      v-for="area in member.research.slice(0, 2)"
                      :key="area"
                      class="bg-gray-100 text-gray-700 text-xs px-1.5 py-0.5 rounded"
                    >
                      {{ area }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Member Detail Modal -->
    <div
      v-if="selectedMember"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      @click="closeMemberDetail"
    >
      <div
        class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <div class="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 class="text-2xl font-bold text-gray-900">{{ selectedMember.name }}</h2>
          <button
            @click="closeMemberDetail"
            class="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X :size="24" />
          </button>
        </div>
        
        <div class="p-6">
          <div class="flex flex-col lg:flex-row gap-8">
            <!-- Member Photo -->
            <div class="lg:w-80 flex-shrink-0">
              <div class="w-full h-80 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 relative">
                <div v-if="selectedMember.avatar" class="w-full h-full rounded-xl overflow-hidden">
                  <img
                    :src="selectedMember.avatar"
                    :alt="selectedMember.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div v-else class="text-white text-6xl font-bold">
                  {{ selectedMember.name.charAt(0) }}
                </div>
                <!-- 职位徽章 -->
                <div class="absolute top-4 right-4">
                  <span :class="[
                    'px-3 py-1 rounded-full text-xs font-bold shadow-lg',
                    getCategory(selectedMember.position) === 'professor' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white'
                  ]">
                    {{ selectedMember.position }}
                  </span>
                </div>
              </div>
              
              <!-- Contact Info -->
              <div class="space-y-3">
                <div v-if="selectedMember.email" class="flex items-center text-gray-600">
                  <Mail :size="16" class="mr-3 text-blue-500" />
                  <span>{{ selectedMember.email }}</span>
                </div>
                <div v-if="selectedMember.office" class="flex items-center text-gray-600">
                  <MapPin :size="16" class="mr-3 text-green-500" />
                  <span>{{ selectedMember.office }}</span>
                </div>
                <div v-if="selectedMember.phone" class="flex items-center text-gray-600">
                  <Phone :size="16" class="mr-3 text-orange-500" />
                  <span>{{ selectedMember.phone }}</span>
                </div>
                <div v-if="selectedMember.homepage" class="flex items-center text-gray-600">
                  <ExternalLink :size="16" class="mr-3" />
                  <a :href="selectedMember.homepage" target="_blank" class="text-blue-600 hover:underline">
                    个人主页
                  </a>
                </div>
                <div v-if="selectedMember.github" class="flex items-center text-gray-600">
                  <Github :size="16" class="mr-3" />
                  <a :href="selectedMember.github" target="_blank" class="text-blue-600 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Member Details -->
            <div class="flex-1">
              <!-- Basic Info -->
              <div class="mb-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ selectedMember.name }}</h3>
                <div class="flex items-center gap-2 mb-4">
                  <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {{ selectedMember.position }}
                  </span>
                  <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {{ getCategoryDisplayName(getCategory(selectedMember.position)) }}
                  </span>
                </div>
                
                <div v-if="selectedMember.bio" class="text-gray-700 leading-relaxed">
                  <p>{{ selectedMember.bio }}</p>
                </div>
              </div>
              
              <!-- Research Interests -->
              <div v-if="selectedMember.research && selectedMember.research.length > 0" class="mb-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">研究方向</h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="interest in selectedMember.research"
                    :key="interest"
                    class="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {{ interest }}
                  </span>
                </div>
              </div>
              
              <!-- Education -->
              <div v-if="selectedMember.education && selectedMember.education.length > 0" class="mb-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">教育背景</h4>
                <div class="space-y-2">
                  <p v-for="edu in selectedMember.education" :key="edu" class="text-gray-700">
                    🎓 {{ edu }}
                  </p>
                </div>
              </div>
              
              <!-- Achievements -->
              <div v-if="selectedMember.achievements && selectedMember.achievements.length > 0" class="mb-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">主要荣誉</h4>
                <div class="space-y-2">
                  <p v-for="achievement in selectedMember.achievements" :key="achievement" class="text-gray-700">
                    🏅 {{ achievement }}
                  </p>
                </div>
              </div>
              
              <!-- Publications -->
              <div v-if="selectedMember.publications && selectedMember.publications.length > 0" class="mb-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">近期发表</h4>
                <div class="space-y-3">
                  <div v-for="pub in selectedMember.publications" :key="pub.title" class="border-l-4 border-purple-500 pl-4">
                    <h5 class="font-medium text-gray-900">{{ pub.title }}</h5>
                    <p class="text-sm text-gray-600">{{ pub.venue }} ({{ pub.year }})</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Mail, Phone, MapPin, ExternalLink, Github, X } from 'lucide-vue-next'
import Layout from '@/components/Layout.vue'

interface Member {
  name: string
  position: string
  email: string
  phone?: string
  office?: string
  research: string[]
  bio: string
  education?: string[]
  achievements?: string[]
  avatar?: string
  joinDate?: string
  homepage?: string
  github?: string
  interests?: string[]
  publications?: {
    title: string
    venue: string
    year: number
  }[]
}

const selectedRole = ref('全部')
const selectedMember = ref<Member | null>(null)
const members = ref<Member[]>([])

// 获取成员类别
const getCategory = (position: string): string => {
  if (position.includes('教授')) return 'professor'
  if (position.includes('博士后')) return 'postdoc'
  
  // 提取年级信息
  const gradeMatch = position.match(/(\d{4})级/)
  if (gradeMatch) {
    return `grade_${gradeMatch[1]}`
  }
  
  if (position.includes('博士生') || position.includes('博士')) return 'phd'
  if (position.includes('硕士生') || position.includes('硕士')) return 'master'
  if (position.includes('本科生') || position.includes('本科')) return 'undergraduate'
  return 'other'
}

// 获取所有角色
const roles = computed(() => {
  const categories = [...new Set(members.value.map(m => getCategory(m.position)))]
  const displayNames: Record<string, string> = {
    'professor': '教授',
    'postdoc': '博士后',
    'phd': '博士生',
    'master': '硕士生',
    'undergraduate': '本科生'
  }
  
  const displayRoles = categories.map(cat => {
    if (cat.startsWith('grade_')) {
      const year = cat.replace('grade_', '')
      return `${year}级`
    }
    return displayNames[cat] || cat
  }).filter(role => role !== 'other') // 过滤掉"其他"分类
  
  return ['全部', ...displayRoles]
})

const visibleRoles = computed(() => {
  if (selectedRole.value === '全部') {
    return orderedCategories.value.filter(cat => cat !== '全部')
  }
  return [selectedRole.value]
})

// 按类别排序
const orderedCategories = computed(() => {
  const existingCategories = [...new Set(members.value.map(m => getCategory(m.position)))]
  
  // 分离年级和其他类别
  const gradeCategories = existingCategories.filter(cat => cat.startsWith('grade_'))
    .sort((a, b) => {
      const yearA = parseInt(a.replace('grade_', ''))
      const yearB = parseInt(b.replace('grade_', ''))
      return yearB - yearA // 降序排列，最新年级在前
    })
  
  const otherCategories = ['professor', 'postdoc', 'phd', 'master', 'undergraduate']
    .filter(cat => existingCategories.includes(cat))
  
  if (selectedRole.value === '全部') {
    return [...otherCategories, ...gradeCategories]
  }
  
  // 处理选中的角色
  if (selectedRole.value.endsWith('级')) {
    const year = selectedRole.value.replace('级', '')
    return [`grade_${year}`]
  }
  
  const categoryMap: Record<string, string> = {
    '教授': 'professor',
    '博士后': 'postdoc',
    '博士生': 'phd',
    '硕士生': 'master',
    '本科生': 'undergraduate'
  }
  return [categoryMap[selectedRole.value] || selectedRole.value]
})

const getCategoryDisplayName = (category: string) => {
  if (category.startsWith('grade_')) {
    const year = category.replace('grade_', '')
    return `${year}级`
  }
  
  const displayNames: Record<string, string> = {
    'professor': '教授',
    'postdoc': '博士后',
    'phd': '博士生',
    'master': '硕士生',
    'undergraduate': '本科生'
  }
  return displayNames[category] || category
}

const getMembersByCategory = (category: string) => {
  return members.value.filter(member => {
    const memberCategory = getCategory(member.position)
    if (selectedRole.value === '全部') {
      return memberCategory === category
    }
    
    // 处理年级选择
    if (selectedRole.value.endsWith('级')) {
      const year = selectedRole.value.replace('级', '')
      const gradeCategory = `grade_${year}`
      return memberCategory === category && memberCategory === gradeCategory
    }
    
    // 将显示名称转换为category值
    const displayToCategory: Record<string, string> = {
      '教授': 'professor',
      '博士后': 'postdoc',
      '博士生': 'phd',
      '硕士生': 'master',
      '本科生': 'undergraduate'
    }
    const selectedCategory = displayToCategory[selectedRole.value] || selectedRole.value
    return memberCategory === category && memberCategory === selectedCategory
  })
}

const isHighLevelCategory = (category: string) => {
  return ['professor', 'postdoc'].includes(category)
}

const openMemberDetail = (member: Member) => {
  selectedMember.value = member
  document.body.style.overflow = 'hidden'
}

const closeMemberDetail = () => {
  selectedMember.value = null
  document.body.style.overflow = 'auto'
}

const loadMembers = async () => {
  try {
    const response = await fetch('/data/members.json')
    const data = await response.json()
    members.value = data
  } catch (error) {
    console.error('Failed to load members:', error)
  }
}

onMounted(() => {
  loadMembers()
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