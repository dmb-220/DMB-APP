<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <section>
        <b-field>
          <div v-for="estas in estai" :key="estas.id">
            <b-checkbox-button v-model="checkboxGroup"
            native-value='estas'
                type="is-danger">
                <span>{{ estas }}</span>
            </b-checkbox-button>
            </div>
        </b-field>
        <p class="content">
            <b>Selection:</b>
            {{ checkboxGroup }}
        </p>
    </section>
      </card-component>

      <card-component title="SANDELIS" icon="account-multiple">
        <div  id="printMe">
          <div class="has-text-centered">
            Serija GAB  Nr. 20190380&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2019-11-19
            </div>
            <br>
            <div class="columns">
              <div class="column is-one-third">
                <div class="has-text-right"><b>Siuntėjas:</b></div>
              </div>
              <div class="column has-text-left">
                <b>UAB "Sidonas" ir ko</b>, Įmonės reg. NR. AB2003-5<br>
                Įmonės kodas (VET code): LT 808860515
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <div class="has-text-right"><b>Pirkėjas:</b></div>
              </div>
              <div class="column has-text-left">
                <b>"Sidonas" Group OŪ</b><br>
                PVM kodas (VET code): EE 101043995<br>
                Kiisa 8-27, tallinn 10416, ESTIJOS RESPUBLIKA
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <div class="has-text-right"><b>Bankas:</b></div>
              </div>
              <div class="column has-text-left">
                AB bankas " Swedbank", A/s  LT02 7300 0100 7710 3089<br>
                Banko kodas: 73000
              </div>
            </div>
            <div class="columns">
              <div class="column is-one-third">
                <div class="has-text-right"><b>Adresas:</b></div>
              </div>
              <div class="column has-text-left">
                Kęstučio 20-1, LT-87120, Telšiai, Lietuva
              </div>
            </div>
            <br>
        <b-table
        focusable
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys"
        sort-icon="arrow-up"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column :style="{'background-color': 'silver'}" label="Pavadinimas"  field="pavadinimas">
                {{ props.row.pavadinimas }}
          </b-table-column>
          <b-table-column label="MATO, Vnt.">
                Vnt.
          </b-table-column>
          <b-table-column class="has-text-right" label="Kiekis"  field="kiekis">
                {{ props.row.kiekis }}
          </b-table-column>
          <b-table-column class="has-text-right" label="Kaina"  field="kaina">
                {{ props.row.kaina }}
          </b-table-column>
          <b-table-column class="has-text-centered" label="Suma, Eur">
                {{ props.row.suma  }}
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
              <th class="has-text-right">{{total_kiekis}}</th>
              <th> </th>
              <th class="has-text-centered">{{ total_suma }}</th>
          </template>
      </b-table>
      <br>
      <br>
      <div class="columns">
        <div class="column">
          <div class="has-text-left"><b>Suma  žodžiais EUR:</b>&emsp;&emsp;&emsp;{{sk_lt}} eur, {{ centai }} cent.</div>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="has-text-left"><b>Direktorius:</b>
          </div>
        </div>
        <div class="column">
          <div class="has-text-left"><b>Antanas Dargis</b>
          </div>
        </div>
      </div>
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
      sk_lt: "",
      centai: "",
      estai: [],
      checkboxGroup: []
    }
  },
  computed: {
    total_kiekis: function(){
      let total = [];
      Object.entries(this.duomenys).forEach(([key, val]) => {
          total.push(val.kiekis) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    total_suma: function(){
      let total = [];
      Object.entries(this.duomenys).forEach(([key, val]) => {
          total.push(val.suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    }
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
        this.sk_lt = response.data.sk_lt;
        this.centai = response.data.centai;
        this.estai = response.data.estai;

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

<style scoped>

</style>
