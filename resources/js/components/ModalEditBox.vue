<template>
  <modal-box :is-active.sync="isActive" @confirm="confirm" @cancel="cancel" confirm-type="is-success" confirm-label="Atnaujinti">
    <p>Įkelti duomenis iš failo <b>{{ editSubject }}</b>?</p>
    <p>Pasirinkite:</p>
    <b-select v-model="valstybe" @input="edit_data" placeholder="Valstybė" icon="earth" expanded required>
        <option value="1">Lietuva</option>
        <option value="2">Latvija</option>
        <option value="3">Estija</option>
    </b-select>
    <br>
    <b-select v-model="tipas" @input="edit_data"  placeholder="Failo tipas" icon="earth" expanded required>
        <option value="1">Pardavimai</option>
        <option value="2">Likutis</option>
    </b-select>
  </modal-box>
</template>

<script>
import ModalBox from "./ModalBox";

export default {
  name: "ModalEditBox",
  components: {ModalBox},
  data(){
    return{
      valstybe: '',
      tipas: ''
    }
  },
  props:{
    isActive: {
      type: Boolean,
      default: false
    },
    editSubject: {
      type: String,
      default: null
    }
  },

  methods: {
    edit_data(){
      this.$emit('edit', this.valstybe, this.tipas)
    },
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

