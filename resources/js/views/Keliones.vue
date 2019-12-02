<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        
      </card-component>

      <card-component title="SANDELIS" icon="account-multiple">
        <div  id="printMe">
        <b-table
        focusable
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys"
        :opened-detailed="defaultOpenedDetails"
        detailed
        sort-icon="arrow-up"
        detail-key="preke"
        @details-open="(row, index) => $buefy.toast.open(`Išskleista ${ row.preke } prekė!`)"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column>
        </template> 

        <template slot="detail" slot-scope="props">
          <b-table
          :data="props.row.sarasas"
          :bordered="true"
          :striped="true"
          :narrowed="true"
          sort-icon="arrow-up">
          <template slot-scope="props">
              <b-table-column :style="{'background-color': 'silver'}" field="sandelis" label="Sandelis" sortable>
                  {{ props.row.sandelis }}
              </b-table-column>
              <b-table-column field="kiekis" label="Likuciai" sortable>
                  {{ props.row.kiekis }}
              </b-table-column>
          </template>
          </b-table>
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
      .get('/kelione')
      .then(response => {
        this.isLoading = false
        //this.sandelis = response.data.sandelis;
        this.duomenys= response.data.likutis;
        //this.store = response.data.store;

        //this.rodyti_lt = response.data.salis.LT ? true : false
        //this.rodyti_lv = response.data.salis.LV ? true : false
        //this.rodyti_ee = response.data.salis.EE ? true : false
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
