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
      name: 'Likuciai',
      component: () => import('./views/Likuciai.vue'),
    },
    {
      path: '/pardavimai',
      name: 'Pardavimai',
      component: () => import('./views/Pardavimai.vue')
    },
    {
      path: '/CSV_sarasas',
      name: 'CSV_sarasas',
      component: () => import('./views/CSV_Sarasas.vue')
    },
    
    {
      path: '/prekes',
      name: 'Prekes',
      component: () => import('./views/Prekes.vue')
    },
    {
      path: '/sandeliai',
      name: 'sandeliai',
      component: () => import('./views/Sandeliai.vue')
    },
    /*{
      path: '/testas',
      name: 'testas',
      component: () => import('./views/Testas.vue')
    },*/

    

  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
