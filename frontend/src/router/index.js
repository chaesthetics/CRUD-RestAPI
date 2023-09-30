import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/students',
      name: 'StudentIndex',
      component: () => import('../views/Students/StudentIndex.vue'),
    },
    {
      path: '/students/create',
      name: 'StudentCreate',
      component: () => import('../views/Students/StudentCreate.vue'),
    },
    {
      path: '/students/:id/edit',
      name: 'StudentEdit',
      component: () => import('../views/Students/StudentEdit.vue'),
      props: true,
    }
  ]
})

export default router
