<template>
  <modal-box :is-active.sync="isActive" @confirm="confirm" @cancel="cancel" confirm-type="is-success" confirm-label="Uždaryti">
    <div>{{viewSubject}}</div>
      <hr>
      duomenis statistika
  </modal-box>
</template>

<script>
import ModalBox from "./ModalBox";

export default {
  name: "ModalPardavimaitBox",
  components: {ModalBox},
  data(){
    return{
    }
  },
  props:{
    isActive: {
      type: Boolean,
      default: false
    },
    viewSubjectP: {
      type: String,
      default: []
    },
    viewPardavimai: {
      type: Array,
      default: null
    }
  },
  computed: {
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

