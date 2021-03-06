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
    {
      path: '/vaztarasciai',
      name: 'vaztarasciai',
      component: () => import('./views/Vaztarasciai.vue')
    },
    {
      path: '/kelione',
      name: 'kelione',
      component: () => import('./views/Keliones.vue')
    },
    {
      path: '/akcijos',
      name: 'akcijos',
      component: () => import('./views/Akcijos.vue')
    },
    {
      path: '/analize',
      name: 'analize',
      component: () => import('./views/Analize.vue')
    },
    {
      path: '/perkelimai',
      name: 'perkelimai',
      component: () => import('./views/Perkelimai.vue')
    },
    {
      path: '/generuoti',
      name: 'generuoti',
      component: () => import('./views/Generuoti.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin/Admin.vue')
    },
    {
      path: '/uzsakymai',
      name: 'uzsakymai',
      component: () => import('./views/Uzsakymai.vue')
    },
    {
      path: '/testas',
      name: 'testas',
      component: () => import('./views/Testas.vue')
    },
    {
      path: '/inte',
      name: 'inte',
      component: () => import('./views/Inte.vue')
    },
    {
      path: '/inte_prekes',
      name: 'inte_prekes',
      component: () => import('./views/IntePrekes.vue')
    },

    {
      path: '/grazinimai',
      name: 'grazinimai',
      component: () => import('./views/Grazinimai.vue')
    },
    {
      path: '/grazinimai_lv',
      name: 'grazinimai',
      component: () => import('./views/Grazinimai_LV.vue')
    },

    {
      path: '/visi_likuciai',
      name: 'visi_likuciai',
      component: () => import('./views/VisiLikuciai.vue')
    },

    {
      path: '/replace',
      name: 'replace',
      component: () => import('./views/Replace.vue')
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
