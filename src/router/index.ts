import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Forums',
      component: () => import('../views/ForumsView.vue')
    },
    {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
    }
  ]
})

export default router
