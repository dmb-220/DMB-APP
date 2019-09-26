<template>
  <div>
    <hero-bar>
      Forms
      <router-link slot="right" to="/" class="button">
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Sąrašas" icon="ballot">
        <modal-trash-box :is-active="isModalActive" :trash-subject="trashObjectName" @confirm="trashConfirm" @cancel="trashCancel"/>
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
              <router-link :to="{name:'clients.edit', params: {id: props.row.id}}" class="button is-small is-primary">
                <b-icon icon="account-edit" size="is-small"/>
              </router-link>
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
              <p>Fetching data...</p>
            </template>
            <template v-else>
              <p>
                <b-icon icon="emoticon-sad" size="is-large"/>
              </p>
              <p>Nothing's here&hellip;</p>
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
import RadioPicker from '@/components/RadioPicker'
import FilePicker from '@/components/FilePicker'
import HeroBar from '@/components/HeroBar'
import ModalTrashBox from '@/components/ModalTrashBox'

export default {
  name: 'Forms',
  components: { HeroBar, FilePicker, RadioPicker, CardComponent, ModalTrashBox  },
  data () {
    return {
      books: [],
      ats: [],
      isLoading: false,
      ikelimas: {
        salis: null,
        paskirtis: null,
        csv: null
        },
      isModalActive: false,
      trashObject: null,
      }
  },
  created() {
    this.getData()
    },
  computed: {
    trashObjectName () {
      if (this.trashObject) {
        return this.trashObject.name
      }

      return null
    }
  },
  methods: {
    submit () {

    },
    getData () {
      this.axios
      .get('http://app.test/csv')
      .then(response => {
          this.books = response.data;
      });
    },
    reset () {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })

      this.$buefy.snackbar.open({
        message: 'Reset successfully',
        queue: false
      })
    },
    trashModal (trashObject) {
      this.trashObject = trashObject
      this.isModalActive = true
    },
    trashConfirm () {
      this.isModalActive = false

      axios
        .delete(`http://app.test/csv/${this.trashObject}/destroy`)
        .then(response => {
          this.getData()
          this.ats = response.data;
          console.log(JSON.stringify(this.ats));
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
    }
  }
}
</script>

