<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        
      </card-component>
      <card-component title="..." icon="account-multiple">
        <div  id="printMe">
        <b-table
        focusable
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys"
        sort-icon="arrow-up"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column>
           <b-table-column field="kaina" label="Kaina" sortable>
                  {{ props.row.kaina }} ({{ props.row.pirk_kaina }})
              </b-table-column>
              <b-table-column field="kiek" label="Kiekis" sortable>
                <small>{{ props.row.kiekis }} - {{ props.row.kiek }}</small>
              </b-table-column>
              <b-table-column field="pardavimas" label="DATA" sortable>
                <small>{{ props.row.pardavimas }}</small>
              </b-table-column>
        </template> 
        <section class="section" slot="empty">
          <div class="content has-text-centered">
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
      </div>
      <hr>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
      </div>
      </card-component>
    </section>
  </div>

</template>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import RadioPicker from '@/components/RadioPicker'

export default {
  name: "Testas",
  components: {CardComponent, RadioPicker},
  data () {
    return {
      isLoading: false,
      duomenys: [],
      defaultOpenedDetails: [1],
    }
  },
  computed: {
  },
  created () {
    //this.paieska_post()
    this.getData()
  },
  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    getData () {
      this.isLoading = true
      this.axios
      .get('/testas/idx')
      .then(response => {
        this.isLoading = false
        //this.sandelis = response.data.sandelis;
        this.duomenys= response.data.d;
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
  }
}
</script>
