<template>
  <modal-box :is-active.sync="isActive" @confirm="confirm" @cancel="cancel" confirm-type="is-success" confirm-label="Atnaujinti">
    <p>Įkelti duomenis iš failo <b>{{ editSubject }}</b>?</p>
    <hr>
    <b-field label="Pasirinkite:" class="has-check" horizontal>
      <radio-picker @input="edit_data" :options="{1:'LIETUVA', 2:'LATVIJA', 3:'ESTIJA'}" v-model="valstybe"></radio-picker>
    </b-field>  
    <br>
    <b-field label="Pasirinkite:" class="has-check" horizontal>
      <radio-picker @input="edit_data" :options="{1:'PARDAVIMAI', 2:'LIKUTIS'}" v-model="tipas"></radio-picker>
    </b-field>
    <br>
    <b-field label="Switch" horizontal>
      <b-switch v-model="trinti" @input="edit_data">
        Ištrinti senus duomenis iš DB, ir ikelti naujus?
      </b-switch>
    </b-field>
  </modal-box>
</template>

<script>
import ModalBox from "./ModalBox";
import RadioPicker from '@/components/RadioPicker'
import CheckboxPicker from '@/components/CheckboxPicker'

export default {
  name: "ModalEditBox",
  components: {ModalBox, RadioPicker, CheckboxPicker},
  data(){
    return{
      valstybe: '',
      tipas: '',
      trinti: ''
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
      this.$emit('edit', this.valstybe, this.tipas, this.trinti)
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

