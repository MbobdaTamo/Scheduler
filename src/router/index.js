import { createWebHistory, createRouter } from 'vue-router'
import Schedule from '@/components/schedule/Schedule'
import Main from '@/components/main/Main'
import Amphi from '@/components/amphi/Amphi'
import Enseignant from '@/components/enseignant/Enseignant'
import Classe from '@/components/classe/Classe'
import Sceance from '@/components/sceance/Sceance'
const routes = [
   {
      path: '/schedule',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/salle',
      name: 'salle',
      component: Amphi
    },
    {
      path: '/enseignant',
      name: 'enseignant',
      component: Enseignant
    },
    {
      path: '/classe',
      name: 'classe',
      component: Classe
    },
    {
      path: '/sceance',
      name: 'sceance',
      component: Sceance
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
