<template>
  <modal-box :is-active.sync="isActive" @confirm="confirm" @cancel="cancel" confirm-type="is-danger" confirm-label="Uždaryti">
    <p>Informacija</p>
    <ul id="example-1">
  <li v-for="item in infoSubject">
    {{ item.kaina }}
  </li>
</ul>
  </modal-box>
</template>

<script>
import ModalBox from "./ModalBox";
export default {
  name: "ModalInfoBox",
  components: {ModalBox},
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    infoSubject: {
      type: Array,
      default: null
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

