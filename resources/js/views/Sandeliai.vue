<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
          Valdymas
      </card-component>

      <card-component title="SANDELIS" icon="account-multiple">
        <b-table
        focusable
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys"
        :opened-detailed="defaultOpenedDetails"
        detailed
        sort-icon="arrow-up"
        detail-key="pavadinimas"
        @details-open="(row, index) => $buefy.toast.open(`Išskleista ${ row.pavadinimas } grupė!`)"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Pavadinimas"  field="pavadinimas" sortable>
                {{ props.row.pavadinimas }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'silver'}" label="Likuciai"  field="likuciai" sortable>
                {{ props.row.likuciai && props.row.likuciai.length }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'silver'}" label="Pardavimai"  field="pardavimai" sortable>
                {{ props.row.pardavimai && props.row.pardavimai.length }}
          </b-table-column>
        </template> 

        <template slot="detail" slot-scope="props">
          <div class="columns">
          detaliai
        </div>
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
      </card-component>
    </section>
  </div>

</template>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'

export default {
  name: "Sandeliai",
  components: {CardComponent},
  data () {
    return {
      isLoading: false,
      duomenys: [],
      defaultOpenedDetails: [1],
      ieskoti: '',
      paieska: '',
      rodyti_lt: true,
     rodyti_lv: true,
     rodyti_ee: true,
     salis: '',
     rikiuoti: false,
    }
  },
  computed: {

  },
  created () {
    this.getData()
  },
  methods: {
    //print() {
      // Pass the element id here
     // this.$htmlToPaper('printMe');
    //},
    
  getData () {
      this.isLoading = true
      this.axios
      .get('/sandeliai')
      .then(response => {
        this.isLoading = false
        //this.rikiuoti = response.data.rikiuoti ? false : true;
        this.duomenys= response.data.duomenys;
        //this.paieska = response.data.paieska;
        
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
