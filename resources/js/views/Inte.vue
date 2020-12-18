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
          <b-table-column class="has-text-right" label="Apyvarta su PVM"  field="suma">
                {{  parseFloat(props.row.suma).toFixed(2) }}
          </b-table-column>
          <b-table-column class="has-text-right" label="Apyvarta be PVM"  field="pardavimo_suma">
                {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
          </b-table-column>
          <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
          </b-table-column>
          <b-table-column class="has-text-right" label="Pristatymas"  field="pristatymas">
                {{ parseFloat(props.row.pristatymas).toFixed(2) }}
          </b-table-column>
          <b-table-column class="has-text-right" label="Per banka, Eur"  field="">
                {{ parseFloat(props.row.pristatymas + props.row.suma).toFixed(2) }}
          </b-table-column>
          <b-table-column label="Pirkėjas" field="pirkejas" sortable>
                {{props.row.pirkejas}}
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
        <template slot="footer">
              <th class="has-text-right">VISO:</th>
              <th> </th>
              <th> </th>
              <th class="has-text-right">{{ apy_suma.toFixed(2) }}</th>
              <th class="has-text-right">{{ apy_suma2.toFixed(2) }}</th>
              <th class="has-text-right">{{ apy_pvm.toFixed(2) }}</th>
              <th class="has-text-right">{{ apy_pristatymas.toFixed(2) }}</th>
              <th class="has-text-right">{{ parseFloat(apy_suma+apy_pristatymas).toFixed(2) }}</th>
          </template>
      </b-table>
      <br>

      </div>
      <hr>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
      </div>
      </card-component>
      <hr>
      <card-component title="Grazinimai" icon="account-multiple">
        <div  id="printMe2">
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
        <br>
        <b-table
        bordered
        :narrowed="true"
        :data="graza"
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
          <b-table-column class="has-text-right" label="Apyvarta su PVM"  field="suma">
                {{  parseFloat(props.row.suma).toFixed(2) }}
          </b-table-column>
          <b-table-column class="has-text-right" label="Apyvarta be PVM"  field="pardavimo_suma">
                {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
          </b-table-column>
          <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
          </b-table-column>
          <b-table-column label="Pirkejas"  field="pirkejas">
                {{ props.row.pirkejas }}
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
        <template slot="footer">
              <th class="has-text-right">VISO:</th>
              <th> </th>
              <th> </th>
              <th class="has-text-right">{{ gra_suma.toFixed(2) }}</th>
              <th class="has-text-right">{{ gra_suma2.toFixed(2) }}</th>
              <th class="has-text-right">{{ gra_pvm.toFixed(2) }}</th>
          </template>
      </b-table>
      <br>

      </div>
      <hr>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print2">SPAUSDINTI</b-button>
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
      graza: [],

    }
  },
  computed: {
    apy_suma: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_suma2: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pvm: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pristatymas: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.pristatymas) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    gra_suma: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    gra_suma2: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    gra_pvm: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
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
    print2() {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper('printMe2');
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
        this.graza = response.data.graza;    
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
