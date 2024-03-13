import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Careers from '../views/careers.vue'
import Info from '../views/info.vue'
import Health from '../views/health.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/careers',
      name: 'careers',
      component: Careers
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/health',
      name: 'health',
      component: Health
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return {
        el: to.hash,
        top: 50,
        behavior: 'smooth',
        }
    }else{
        return {top: 0}
    }
  }
})

export default router
