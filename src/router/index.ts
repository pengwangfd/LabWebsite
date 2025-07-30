import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import NewsPage from '@/pages/NewsPage.vue'
import MembersPage from '@/pages/MembersPage.vue'
import PapersPage from '@/pages/PapersPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/news',
      name: 'news',
      component: NewsPage
    },
    {
      path: '/members',
      name: 'members',
      component: MembersPage
    },
    {
      path: '/papers',
      name: 'papers',
      component: PapersPage
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsPage
    },

  ]
})

export default router
