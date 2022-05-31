import { createWebHistory, createRouter } from 'vue-router'
import Schedule from '@/components/schedule/Schedule'
import Main from '@/components/main/Main'
import Amphi from '@/components/amphi/Amphi'
const routes = [
 {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/salles',
      name: 'salles',
      component: Amphi
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
