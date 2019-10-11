import Vue from 'vue'
import Router from 'vue-router'
import Pagrindinis from './views/Pagrindinis.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'pagrindinis',
      component: Pagrindinis
    },
    {
      path: '/statistika',
      name: 'Statistika',
      component: () => import('./views/Statistika.vue')
    },
    {
      path: '/likuciai',
      name: 'plikuciai',
      component: () => import('./views/Likuciai.vue'),
    },
    {
      path: '/pardavimai',
      name: 'pardavimai',
      component: () => import('./views/Pardavimai.vue')
    },
    {
      path: '/CSV_sarasas',
      name: 'CSV_sarasas',
      component: () => import('./views/CSV_Sarasas.vue')
    },
    
    {
      path: '/forms',
      name: 'forms',
      component: () => import('./views/Forms.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue')
    },
    

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
