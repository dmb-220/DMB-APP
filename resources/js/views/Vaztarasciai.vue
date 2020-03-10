<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
          <b-field label="PAIEŠKA:" horizontal>
            <b-input placeholder="Paieška..." type="search" @keyup.native.enter="paieska_post" 
             v-model="ieskoti" icon="magnify"></b-input> 
            <b-button native-type="submit" type="is-primary" @click="paieska_post" outlined>Ieškoti</b-button>
        </b-field>
        </card-component>
        <card-component title="Analizė" icon="account-multiple">
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
          <b>VAŽTARAŠČIŲ REGISTRAVIMO ŽURNALAS</b>
        </div>
        <br>
        <div class="has-text-left">
          <b>Pradėta pildyti 2020m. {{menesiai[2]}} 1d.</b>
        </div>
        <div class="has-text-left">
          <b>baigta pildyti 2020m. {{menesiai[2]}} {{new Date(2020, 2, 0).getDate()}}d.</b>
        </div>
        <br>
        <b-table
        bordered
        :narrowed="true"
        :data="sarasas"
        sort-icon="arrow-up"
        :loading="isLoading"
        default-sort-direction="asc"
        default-sort="data">
        <template slot-scope="props">
          <b-table-column label="Nr.">
             {{props.index + 1}}
          </b-table-column>
          <b-table-column label="Numeris"  field="numeris" sortable>
                {{ props.row.numeris }}
          </b-table-column>
          <b-table-column label="Išvežimo data" field="data" sortable>
                {{props.row.data}}
          </b-table-column>
          <b-table-column label="Isvesta" field="sandelis_is" sortable>
                {{props.row.sandelis_is}}
          </b-table-column>
          <b-table-column label="Pavadinimas" field="sandelis_i" sortable>
                {{props.row.sandelis_i}}
          </b-table-column>
          <b-table-column label="Adresas" field="adresas" sortable>
                {{props.row.adresas}}
          </b-table-column>
          <b-table-column label="Atsakingo asmens parašas">

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
      <br>
      <div class="has-text-left">
          Šiame žurnale sunumeruota, perverta virvele ir užantspauduota ________ lapų.<br>
          20___m. ___________________________  ____d.
      </div>
      <br><br>
      <div class="columns">
        <div class="column">
          <div class="has-text-left is-size-7">(pareigų pavadinimas)
          </div>
        </div>
        <div class="column">
          <div class="has-text-left is-size-7">(parašas)
          </div>
        </div>
        <div class="column">
          <div class="has-text-left is-size-7">(vardas, pavardė)
          </div>
        </div>
      </div>
      <div class="has-text-centered">
         ____________________________________________________
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
      menesiai: ['Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio', 'Liepos', 
                'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'],
      showDetailIcon: false,
      isLoading: false,
      ieskoti: '',
      sarasas: [],
      menesis: '',
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
      this.$htmlToPaper('printMe');
    },
    paieska_post(){
        axios
          .post(`/vaztarasciai/store`, {
            ieskoti: this.ieskoti,
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
      .get('/vaztarasciai')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.sarasas;
        this.ieskoti = response.data.ieskoti;
        this.menesis = response.data.menesis;      
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
