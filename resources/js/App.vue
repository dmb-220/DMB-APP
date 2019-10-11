<template>
  <div id="app">
    <nav-bar/>
    <aside-menu :menu="menu"/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import AsideMenu from '@/components/AsideMenu'
import FooterBar from '@/components/FooterBar'

export default {
  name: 'home',
  components: {
    FooterBar,
    AsideMenu,
    NavBar
  },
  computed: {
    menu () {
      return [
        'PAGRINDINIS',
        [
          {
            to: '/',
            icon: 'desktop-mac',
            label: 'Į pradžią'
          }
        ],
        'DUOMENYS',
        [
          {
            to: '/statistika',
            label: 'Statistika',
            icon: 'chart-bar',
          },
          {
            to: '/likuciai',
            label: 'Likučiai',
            icon: 'buffer',
          },
          {
            to: '/pardavimai',
            label: 'Pardavimai',
            icon: 'currency-eur',
          },
        ],
        'VEIKSMAI',
        [
          {
            to: '/csv_sarasas',
            label: 'CSV failų įkėlimas',
            icon: 'view-list'
          },
        ]
      ]
    }
  },
  created () {
  }
}
</script>
