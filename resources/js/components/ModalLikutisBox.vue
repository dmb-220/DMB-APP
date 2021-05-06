<template>
  <modal-box :is-active.sync="isActive" @confirm="confirm" @cancel="cancel" confirm-type="is-success" confirm-label="Atnaujinti">
    <b-field  label="Likučiai LT:" horizontal>
      <file-picker-LT @file-updated="file_info_LT" v-model="file_LT"/>
    </b-field>
    <b-field  label="Likučiai LV:" horizontal>
      <file-picker-LV @file-updated="file_info_LV" v-model="file_LV"/>
    </b-field>
    <b-field  label="Likučiai EE:" horizontal>
      <file-picker-EE @file-updated="file_info_EE" v-model="file_EE"/>
    </b-field>
  </modal-box>
</template>

<script>
import ModalBox from "./ModalBox";
import FilePickerLT from './FilePickerLT'
import FilePickerLV from './FilePickerLV'
import FilePickerEE from './FilePickerEE'

export default {
  name: "ModalLikutisBox",
  components: {ModalBox, FilePickerLT, FilePickerLV, FilePickerEE },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      file_LT: null,
      file_LV: null,
      file_EE: null,
      failas_LT: '',
      failas_LV: '',
      failas_EE: ''
    }
  },
  methods: {
    file_info_LT (value) {
      this.failas_LT = value.name;
    },
    file_info_LV (value) {
      this.failas_LV = value.name;
    },
    file_info_EE (value) {
      this.failas_EE = value.name;
    },

    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      let arr = [];
      arr['LT'] = this.failas_LT;
      arr['LV'] = this.failas_LV;
      arr['EE'] = this.failas_EE;

      this.$emit('confirm', arr)
    }
  }
}
</script>

