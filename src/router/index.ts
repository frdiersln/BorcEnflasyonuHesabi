import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/enflasyon-bazli-hesap'
    },
    {
      path: '/enflasyon-bazli-hesap',
      name: 'enflasyonBazliHesap',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EnflasyonBazliHesapView.vue')
    },
    {
      path: '/dolar-bazli-hesap',
      name: 'DolarBazliHesap',
      component: () => import('../views/DolarBazliHesapView.vue')
    }
  ]
})

export default router
