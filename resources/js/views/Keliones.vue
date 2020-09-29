<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field label='Valstybė' horizontal>
          <b-button :type="rodyti_lv ? 'is-warning' : 'is-dark'" @click="change_lv()">LATVIJA</b-button>
          <b-button :type="rodyti_ee ? 'is-danger' : 'is-dark'" @click="change_ee()">ESTIJA</b-button>
        </b-field>
        <b-field label="Miestai" class="has-check" horizontal>
          <checkbox-picker v-if="rodyti_lv" :options="miestai['LV']" v-model="checkbox" type="is-black"/>
          <checkbox-picker v-if="rodyti_ee" :options="miestai['EE']" v-model="checkbox" type="is-black"/>
        </b-field>
        <b-field label="Data:" horizontal>
            <b-input type="date" v-model="data" icon="calendar-month"></b-input>    
        </b-field>
        <b-field label="Numeris:" horizontal>
            <b-input type="input" v-model="nr" icon="variable"></b-input>    
        </b-field>
        <b-field label="..." horizontal>
          <b-switch type="is-info" v-model="nr_rodyti">
            Rašyti antrą numerį
          </b-switch>
        </b-field>
        <b-field v-if="nr_rodyti" label="Numeris 2:" horizontal>
            <b-input type="input" v-model="nr2" icon="variable"></b-input>    
        </b-field>
        <div class="buttons">
            <b-button type="is-black" @click="paieska" expanded>Skaičiuoti</b-button>
        </div>
      </card-component>

      <card-component title="SANDELIS" icon="account-multiple">
        <div  id="printMe">
          <div v-if="nr_rodyti" class="has-text-centered">
            Serija GAB  Nr. {{nr}}
            <br>
            Serija GAB  Nr. {{nr2}}
            <br> 
            {{date}}
            </div>
            <div v-else class="has-text-centered">
            Serija GAB  Nr. {{nr}}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{{date}}
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
              <div v-if="rodyti_ee" class="column has-text-left">
                <b>Sidonas" Group OŪ</b><br>
                PVM kodas (VET code): EE 101043995<br>
                Kiisa 8-27, Tallinn 10416, ESTIJOS RESPUBLIKA
              </div>
              <div v-else-if="rodyti_lv" class="column has-text-left">
                <b>"SIA "Sidonas"</b><br>
                PVM kodas (VET code): LV 40003558478<br>
                Matīsa iela 25, Rīga, LATVIJAS RESPUBLIKA
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
          <b-table-column class="has-text-right" label="Suma, Eur">
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
              <th class="has-text-right">{{ total_suma.toFixed(2) }}</th>
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
import CheckboxPicker from '@/components/CheckboxPicker'

export default {
  name: "Testas",
  components: {CardComponent, CheckboxPicker},
  data () {
    return {
      isLoading: false,
      duomenys: [],
      sk_lt: "",
      centai: "",
      miestai: [],
      checkbox: [],
      rodyti_lv: true,
      rodyti_ee: false,
      rodo: '',
      data: '2020',
      nr: '20200',
      nr_rodyti: false,
      nr2: '20200',
      date: '',
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
      return total.reduce(function(total, num){ return parseFloat(total) + parseFloat(num) }, 0);

    },
    
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
         change_lv(){
      this.rodyti_lv = true;
      this.rodyti_ee = false;
      this.rodo = 'LV';
      this.checkbox = [];
      //this.paieska_post()
    },
    change_ee(){
      this.rodyti_ee = true;
      this.rodyti_lv = false;
      this.rodo = 'EE';
      this.checkbox = [];
      //this.paieska_post()
    },
    paieska(){
        axios
          .post(`/kelione/store`, {
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
            miestai: this.checkbox,
            data: this.data,
            //nr: this.nr
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
      .get('/kelione')
      .then(response => {
        this.isLoading = false
        //this.sandelis = response.data.sandelis;
        this.duomenys= response.data.likutis;
        this.sk_lt = response.data.sk_lt;
        this.centai = response.data.centai;
        this.miestai = response.data.miestai;
        this.date = response.data.data;
        //this.checkbox = response.data.check;
        //this.rodyti_lt = response.data.salis.LT ? true : false
        this.rodyti_lv = response.data.salis.LV ? true : false
        this.rodyti_ee = response.data.salis.EE ? true : false
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
