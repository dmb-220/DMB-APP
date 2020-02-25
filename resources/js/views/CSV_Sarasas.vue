<template>
  <div>
    <section class="section is-main-section">
      <card-component title="CSV įkėlimas" icon="ballot">
        <b-field label="CSV failas:" horizontal>
          <file-picker @file-updated="file_info" v-model="file"/>
        </b-field>
      </card-component>
      <card-component title="Sąrašas" icon="ballot">
        <modal-trash-box :is-active="isModalActive" :trash-subject="trashObjectName" @confirm="trashConfirm" @cancel="trashCancel"/>
        <modal-edit-box :is-active="isModalEdit" :edit-subject="editObjectName" @confirm="editConfirm" @cancel="editCancel" @edit="val"/>
        <b-table
        :data="books"
            :bordered="false"
            :striped="false"
            :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Pavadinimas" field="vardas" sortable>
            {{ props.row.vardas }}
          </b-table-column>
          <b-table-column label="Dydis" field="dydis" sortable>
            {{ props.row.dydis }}
          </b-table-column>
          <b-table-column label="Modifikuota" field="modifikuota" sortable>
            {{ props.row.modifikuota }}
          </b-table-column>
          <b-table-column custom-key="actions" class="is-actions-cell">
            <div class="buttons is-right">
              <button class="button is-small is-primary" type="button" @click.prevent="editModal(props.row.vardas)">
                <b-icon icon="account-edit" size="is-small"/>
              </button>
              <button class="button is-small is-danger" type="button" @click.prevent="trashModal(props.row.vardas)">
                <b-icon icon="trash-can" size="is-small"/>
              </button>
            </div>
          </b-table-column>
        </template>

        <section class="section" slot="empty">
          <div class="content has-text-grey has-text-centered">
            <template v-if="isLoading">
              <p>
                <b-icon icon="dots-horizontal" size="is-large"/>
              </p>
              <p>Gaunami duomenys...</p>
            </template>
            <template v-else>
              <p>
                <b-icon icon="emoticon-sad" size="is-large"/>
              </p>
              <p>Duomenų nerasta &hellip;</p>
            </template>
          </div>
        </section>
      </b-table>
      </card-component>
    </section>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import mapValues from 'lodash/mapValues'
import ModalTrashBox from '@/components/ModalTrashBox'
import ModalEditBox from '@/components/ModalEditBox'
import each from 'lodash/each'
import FilePicker from '@/components/FilePicker'

export default {
  name: 'Forms',
  components: {CardComponent, ModalTrashBox, ModalEditBox, FilePicker },
  data () {
    return {
      file: null,
      books: [],
      isLoading: false,
      isModalActive: false,
      trashObject: null,
      isModalEdit: false,
      editObject: null,
      valstybe: '',
      tipas: '',
      trinti: ''
      }
  },
  created() {
    this.getData()
    },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject
      }
      return null
    },
    editObjectName () {
      if (this.editObject) {
        return this.editObject
      }
      return null
    },
  },
  methods: {
    val(valstybe, tipas){
      this.valstybe = valstybe
      this.tipas = tipas
    },
    file_info (value) {
      this.getData()
      console.log(value)
      this.failas = value.name;
    },
    getData () {
      this.isLoading = true
      this.axios
      .get('/csv')
      .then(response => {
        this.isLoading = false
        this.books = response.data.data;
      })
      .catch( err => {
            this.isLoading = false
            this.$buefy.toast.open({
              message: `Error: ${err.message}`,
              type: 'is-danger',
              queue: false
            })
          })
    },
    
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false

      axios
        .delete(`/csv/${this.trashObject}/destroy`)
        .then(response => {
          this.getData()
          this.$buefy.snackbar.open({
            message: `Ištrintas ${this.trashObject}`,
            queue: false
          })
      })
        .catch( err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: 'is-danger',
            queue: false
          })
        })
    },
    trashCancel () {
      this.isModalActive = false
    },
    //Edit modal
    editModal (editObject) {
      this.editObject = editObject
      this.isModalEdit = true
    },
    editConfirm () {
      this.isModalEdit = false
      this.isLoading = true
      axios
        .post(`/csv/CSV_store`, {
          failas: this.editObject,
          valstybe: this.valstybe,
          tipas: this.tipas
          })
        .then(response => {
          console.log(response.data.ats)
          this.isLoading = false
          this.getData()
          this.$buefy.snackbar.open({
            message: `Duomenys iš ${this.editObject} failo įkelti`,
            queue: false
          })
      })
        .catch( err => {
          this.isLoading = false
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: 'is-danger',
            queue: false
          })
        })
    },
    editCancel () {
      this.isModalEdit = false
    },
  }
}
</script>

