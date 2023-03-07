import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Forums',
      component: () => import('../views/Forum/Forum.vue')
    },
    {
    path: '/register/',
    name: 'Register',
    component: () => import('../views/Register/Register.vue')
    },
    {
      path: '/help/',
      name: 'Help',
      component: () => import('../views/Help/Help.vue')
      }
  ]
})

export default router
