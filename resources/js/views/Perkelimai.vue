<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
          <b-field label="PAIEŠKA:" horizontal>
            <b-input placeholder="Paieška..." type="search" @keyup.native.enter="paieska_post" 
             v-model="ieskoti" icon="magnify"></b-input> 
        </b-field>
        <b-field label=" " horizontal>
            <b-checkbox :value="false" v-model="paieska_big" type="is-info">Aktivuoti išplėstinę paieška</b-checkbox>
        </b-field>
        <b-field label="GRUPĖ:" horizontal>
            <b-select placeholder="Pasirinkite..." @change.native="keisti_grupe" v-model="grupe" icon="earth" expanded>
              <option v-for="(grup, index) in grupes" :key="index" :value="index">
                {{ grup }} - {{ grupes_lv[grup] }}
              </option>
            </b-select>
          </b-field>
          <b-field label="PERKELTI Į:" horizontal>
            <b-input type="text" v-model="perkelti"></b-input> 
        </b-field>
          <b-field label="SANDELIAI IŠ:" horizontal>
            <b-input type="text" v-model="sandeliai" @keyup.native.enter="switch_post"></b-input> 
        </b-field>
        <b-field label="PREKĖS:" horizontal>
          <b-button :type="pirk? 'is-info' : 'is-dark'" @click="change_pirk()">GAMYBA</b-button>
          <b-button :type="gam ? 'is-info' : 'is-dark'" @click="change_gam()">PIRKIMAI</b-button>
        </b-field>
        <b-field label="PERKĖKIMAI IKI:" horizontal>
            <b-input type="date" v-model="date" icon="calendar-month"></b-input>    
        </b-field>
        <hr>
        <b-field  label=" " horizontal>
        <div class="buttons">
          <b-button type="is-dark" @click="paieska_post">Suformuoti</b-button>
        </div>
        </b-field>
        </card-component>
        <card-component title="Analizė" icon="account-multiple">
        <div  id="printMe">
        <div class="columns">
          <div class="column has-text-centered has-text-weight-bold">
            Rasta: {{sarasas.length }}<br>{{paieska}}<br>{{grupes[grupe]}}
            </div>
        </div>
        <b-field grouped group-multiline>
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="50">50 įrašų puslapyje</option>
                <option value="100">100 įrašų puslapyje</option>
                <option value="150">150 įrašų puslapyje</option>
                <option value="200">200 įrašų puslapyje</option>
            </b-select>
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Puslapiai</b-switch>
            </div>
        </b-field>
        <b-table
        :paginated="isPaginated"
        :per-page="perPage"
        :pagination-position="paginationPosition"
        :mobile-cards="mobile_card"
        bordered
        :narrowed="true"
        :data="sarasas"
        sort-icon="arrow-up"
        :loading="isLoading"
        :row-class="onRowClass"
        default-sort-direction="asc"
        default-sort="preke">
        <template slot-scope="props">
          <b-table-column label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column>
          <b-table-column label="Sandelis" field="sandelis" sortable>
                {{props.row.sandelis}}
          </b-table-column>
          <b-table-column label="Parduota" field="parduota" sortable>
                {{props.row.parduota}}
          </b-table-column>
          <b-table-column label="Likutis" field="likutis" sortable>
               {{props.row.likutis}}
          </b-table-column>
          <b-table-column label="Perkelimas" field="data" sortable>
               {{props.row.data}} - {{props.row.kiekis}}
          </b-table-column>
          <b-table-column :style="{'background-color': '#b8b894'}" label="PARD" field="pard" sortable>
                {{props.row.pard}}
          </b-table-column>
          <b-table-column :style="{'background-color': '#b8b894'}" label="LIKUT" field="yra" sortable>
                {{props.row.yra}}
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
      color: [
        'is-one',
        'is-two',
        'is-three'
      ],
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 100,
      isLoading: false,
      sarasas: [],
      grupes: [],
      grupes_lv: [],
      grupe: '',
      ieskoti: '',
      paieska: '',
      sandeliai: '',
      perkelti: '',
      date: '',
     salis: '',
     rikiuoti: false,
     gam: true,
     pirk: true,
     mobile_card: true,
     paieska_big: false,
     viso: [],
    }
  },
  computed: {
    explode: function(){
      return this.sandeliai.split("::");
    }
  },
  created () {
    this.getData();
  },
  methods: {
    onRowClass: function (row, index) {
      var i;
      for(i=0; i < this.explode.length; i++){
        if(row.sandelis.toUpperCase() == this.explode[i]){
          return this.color[i];
        }
      }
      
    },
      print() {
      // Pass the element id here
      this.mobile_card = false;
      this.$htmlToPaper('printMe');
    },
    change_gam(){
      this.gam = !this.gam
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_pirk(){
      this.pirk = !this.pirk
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    
    keisti_grupe(){
      if(!this.ieskoti){
      this.ieskoti = this.paieska;
      }
      this.paieska_post();
    },
    switch_post(){
      //this.rikiuotic = !this.rikiuoti;
      if(this.ieskoti == ""){
        this.ieskoti = this.paieska;
      }
        axios
          .post(`/perkelimai/store`, {
            ieskoti: this.ieskoti,
            rikiuoti: this.rikiuoti,
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            grupe: this.grupe,
            sandeliai: this.sandeliai,
            perkelti: this.perkelti,
            date: this.date
            })
          .then(response => {
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
    paieska_post(){
        axios
          .post(`/perkelimai/store`, {
            ieskoti: this.ieskoti,
            rikiuoti: "1",
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            grupe: this.grupe,
            sandeliai: this.sandeliai,
            perkelti: this.perkelti,
            date: this.date
            })
          .then(response => {
            console.log(response.data.data)
            this.rikiuoti = false;
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
      .get('/perkelimai')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.sold;
        this.paieska = response.data.paieska;
        this.sandeliai = response.data.sandeliai;
        this.perkelti = response.data.perkelti;
        this.date = response.data.date;

        this.rikiuoti = response.data.rikiuoti ? false : true;
        this.grupes = response.data.grupes;
        this.grupes_lv = response.data.grupes_lv;
        this.grupe = response.data.grupe;

        this.gam = response.data.gam ? true : false
        this.pirk = response.data.pirk ? true : false

        this.paieska_big = response.data.paieska_big? true : false
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
