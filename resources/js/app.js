// Axios & Echo global
require('./bootstrap');

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

import VueHtmlToPaper from 'vue-html-to-paper';
 
const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
  ],
  styles: [
    'http://app.test/css/print.css',
  ]
}
 
Vue.use(VueHtmlToPaper, options);
// or, using the defaults with no stylesheet
//Vue.use(VueHtmlToPaper);


/* Router & Store */
import router from './router'
import store from './store'

/* Vue. Main component */
import App from './App.vue'

/* Vue. Component in recursion */
import AsideMenuList from '@/components/AsideMenuList'

/* Collapse mobile aside menu on route change */
router.afterEach(() => {
  store.commit('asideMobileStateToggle', false)
})

Vue.config.productionTip = false

/* These components are used in recursion algorithm */
Vue.component('AsideMenuList', AsideMenuList)

/* Main component */
Vue.component('App', App)

/* Buefy */
Vue.use(Buefy)

/* This is main entry point */

new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    document.documentElement.classList.remove('has-spinner-active')
  }
}).$mount('#app')
