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
          DMB-220
        </div>
        <a class="navbar-item is-desktop-icon-only" title="Profilis" @click="logout">
          <b-icon icon="account-edit" custom-size="default"/>
          <span>Profilis</span>
        </a>
        <a class="navbar-item is-desktop-icon-only" title="Nustatymai" @click="logout">
          <b-icon icon="settings" custom-size="default"/>
          <span>Nustatymai</span>
        </a>
        <a class="navbar-item is-desktop-icon-only" title="Pranešimai" @click="logout">
          <b-icon icon="email" custom-size="default"/>
          <span>Pranešimai</span>
        </a>
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
