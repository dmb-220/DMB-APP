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
          {
            to: '/prekes',
            label: 'Prekes',
            icon: 'cart',
          },
          {
            to: '/akcijos',
            label: 'Akcijos',
            icon: 'bell-ring',
          },
          {
            to: '/analize',
            label: 'Analizė',
            icon: 'bell-ring',
          },
          {
            to: '/sandeliai',
            label: 'Sandeliai',
            icon: 'archive',
          },
          {
            to: '/vaztarasciai',
            label: 'Važtarščių žurnalas',
            icon: 'bus',
          },
          {
            to: '/kelione',
            label: 'Kelionės lapas',
            icon: 'bus',
          },
          /*{
            to: '/generuoti',
            label: 'Generuoti duomenis',
            icon: 'bus',
          },*/
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
