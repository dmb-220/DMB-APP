<template>
  <b-modal full-screen :active.sync="isModalActive" has-modal-card>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">PARDAVIMAI</p>
      </header>
      <section class="modal-card-body">
        <slot/>
      </section>
      <footer class="modal-card-foot">
        <button :class="confirmButtonClass" @click="confirm">{{ confirmLabel }}</button>
      </footer>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'ModalBoxFull',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    confirmLabel: {
      type: String,
      default: 'Patvirtinti'
    },
    confirmType: {
      type: String,
      default: 'is-info'
    }
  },
  data () {
    return {
      isModalActive: false
    }
  },
  computed: {
    confirmButtonClass () {
      return `button ${this.confirmType}`
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
    }
  },
  watch: {
    isActive (newValue) {
      this.isModalActive = newValue
    },
    isModalActive (newValue) {
      if (!newValue) {
        //this.cancel()
      }
    }
  }
}
</script>
