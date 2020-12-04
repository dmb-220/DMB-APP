<template>
  <nav v-show="isNavBarVisible" id="navbar-main" class="navbar is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item is-hidden-desktop" @click.prevent="menuToggleMobile">
        <b-icon :icon="menuToggleMobileIcon"/>
      </a>
    </div>
    <div class="navbar-brand is-right">
      <a class="navbar-item navbar-item-menu-toggle is-hidden-desktop" @click.prevent="menuNavBarToggle">
        <b-icon :icon="menuNavBarToggleIcon" custom-size="default"/>
      </a>
    </div>
    <div class="navbar-menu fadeIn animated faster" :class="{'is-active':isMenuNavBarActive}">
      <div class="navbar-end">
        <div class="navbar-item is-desktop-icon-only">
          SIDONAS
        </div>
        <router-link tag="a" to="/csv_sarasas" class="navbar-item is-desktop-icon-only" title="CSV failų įkėlimas">
          <b-icon icon="view-list" custom-size="default"/>
          <span>CSV failų įkėlimas</span>
        </router-link>
        
        <router-link tag="a" to="/generuoti" class="navbar-item is-desktop-icon-only" title="Generuoti duomenis">
          <b-icon icon="calculator" custom-size="default"/>
          <span>Generuoti duomenis</span>
        </router-link>

        <router-link tag="a" to="/admin" class="navbar-item is-desktop-icon-only" title="Administravimas">
          <b-icon icon="bullhorn" custom-size="default"/>
          <span>Administravimas</span>
        </router-link>
        <a class="navbar-item is-desktop-icon-only" title="Atsijungti" @click="logout">
          <b-icon icon="logout" custom-size="default"/>
          <span>Atsijungti</span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import NavBarMenu from '@/components/NavBarMenu'
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'NavBar',
  components: {
    UserAvatar,
    NavBarMenu
  },
  data () {
    return {
      isMenuNavBarActive: false
    }
  },
  computed: {
    menuNavBarToggleIcon () {
      return (this.isMenuNavBarActive) ? 'close' : 'dots-vertical'
    },
    menuToggleMobileIcon () {
      return this.isAsideMobileExpanded ? 'backburger' : 'forwardburger'
    },
    ...mapState([
      'isNavBarVisible',
      'isAsideMobileExpanded',
      'userName'
    ])
  },
  methods: {
    menuToggleMobile () {
      this.$store.commit('asideMobileStateToggle')
    },
    menuNavBarToggle () {
      this.isMenuNavBarActive = (!this.isMenuNavBarActive)
    },
    logout () {
      document.getElementById('logout-form').submit()
    }
  }
}
</script>
