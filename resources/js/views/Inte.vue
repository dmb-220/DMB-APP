<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field label="Pasirinkti datą" horizontal>
          <b-datepicker
              placeholder="Spauskite kad pasirinkti"
              v-model="dates"
              range>
          </b-datepicker>
        </b-field>
          <b-field  label=" " horizontal>
        <p class="control">
          <button class="button is-sark" @click="paieska_post">Suformuoti</button>
        </p>
        </b-field>
      </card-component>
      <card-component title="Apyvarta" icon="account-multiple">
        <div  id="printMe">
        <div class="has-text-centered">
          <b>UAB Sidonas ir Ko</b>
        </div>
        <div class="has-text-centered">
          Įm. kodas: 180886050
        </div>
        <div class="has-text-centered">
          Kęstučio 20-1, LT-87120, Telšiai, Lietuva
        </div>
        <br>
        <div class="has-text-centered is-size-5">
          <b>Internetinė parduotuvė</b>
        </div>
        <br>
        {{dates}}
        <br>
        <b-table
        bordered
        :narrowed="true"
        :data="sarasas"
        sort-icon="arrow-up"
        :loading="isLoading"
        default-sort-direction="asc"
        default-sort="saskaitos_nr">
        <template slot-scope="props">
          <b-table-column label="Nr.">
             {{props.index + 1}}
          </b-table-column>
          <b-table-column label="Data" field="data" sortable>
                {{props.row.data}}
          </b-table-column>
          <b-table-column label="Saskaitos nr."  field="saskaitos_nr" sortable>
                {{ props.row.saskaitos_nr }}
          </b-table-column>
          <b-table-column label="Apyvarta su PVM"  field="suma">
                {{  parseFloat(props.row.suma).toFixed(2) }}
          </b-table-column>
          <b-table-column label="Apyvarta be PVM"  field="pardavimo_suma">
                {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
          </b-table-column>
          <b-table-column label="PVM 21%"  field="pvm_suma">
                {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
          </b-table-column>
          <b-table-column label="Pristatymas"  field="pristatymas">
                {{ parseFloat(props.row.pristatymas).toFixed(2) }}
          </b-table-column>
          <b-table-column label="Per banka, Eur"  field="">
                {{ parseFloat(props.row.pristatymas + props.row.suma).toFixed(2) }}
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
      <br>

      </div>
      <hr>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
      </div>
      </card-component>
    </section>
  </div>

</template>

<style  scoped>
    
</style>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import CardToolbar from '@/components/CardToolbar'

export default {
  name: "Prekes",
  components: {CardToolbar, CardComponent},
  data () {
    return {
      dates: [],
      showDetailIcon: false,
      isLoading: false,
      sarasas: [],
    }
  },
  computed: {
  },
  created () {
    this.getData();
  },
  methods: {
      print() {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper('printMe');
    },
    paieska_post(){
        axios
          .post(`/inte/store`, {
            dates: this.dates,
            })
          .then(response => {
            console.log(response.data.data)
            this.getData()
        })
          .catch( err => {
            this.$buefy.toast.open({
              message: `Error: ${err.message}`,
              type: 'is-danger',
              queue: false
            })
          })
    },
  getData () {
      this.isLoading = true
      this.axios
      .get('/inte')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.sarasas;    
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
