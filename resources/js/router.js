import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/CSV_sarasas',
      name: 'CSV_sarasas',
      component: () => import(/* webpackChunkName: "tables" */ './views/CSV_Sarasas.vue')
    },
    {
      path: '/tables',
      name: 'tables',
      component: () => import(/* webpackChunkName: "forms" */ './views/Tables.vue')
    },
    {
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "forms" */ './views/Forms.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
    },
    {
      path: '/clients/index',
      name: 'clients.index',
      component: () => import(/* webpackChunkName: "client" */ './views/Clients/ClientsIndex.vue'),
    },
    {
      path: '/clients/new',
      name: 'clients.new',
      component: () => import(/* webpackChunkName: "client" */ './views/Clients/ClientsForm.vue'),
    },
    {
      path: '/clients/:id',
      name: 'clients.edit',
      component: () => import(/* webpackChunkName: "client" */ './views/Clients/ClientsForm.vue'),
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
