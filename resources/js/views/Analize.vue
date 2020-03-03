<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
          <b-field label="PAIEŠKA:" horizontal>
            <b-input placeholder="Paieška..." type="search" @keyup.native.enter="paieska_post" 
             v-model="ieskoti" icon="magnify"></b-input> 
            <b-button native-type="submit" type="is-primary" @click="paieska_post" outlined>Ieškoti</b-button>
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
          <b-field label="SANDELIAI:" horizontal>
            <b-input type="text" v-model="sandeliai"></b-input> 
        </b-field>
        <b-field label="PREKĖS:" horizontal>
          <b-button :type="pirk? 'is-info' : 'is-dark'" @click="change_pirk()">GAMYBA</b-button>
          <b-button :type="gam ? 'is-info' : 'is-dark'" @click="change_gam()">PIRKIMAI</b-button>
        </b-field>
        <b-field label="GRUPAVIMAS:" horizontal>
          <b-switch type="is-info" v-model="rikiuoti" @click.native="switch_post">
            Veikia TIK su mūsų GAM gaminiais! 
          </b-switch>
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
        hoverable
        :narrowed="true"
        :data="sarasas"
        sort-icon="arrow-up"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column v-if="props.row.sandelis == sandeliai.split('::')[0]" :style="{'background-color': 'greenyellow'}" label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column>
          <b-table-column v-else-if="props.row.sandelis == sandeliai.split('::')[1]" :style="{'background-color': 'GoldenRod'}" label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column>
          <b-table-column v-else :style="{'background-color': 'tomato'}" label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column>
          <b-table-column label="Likutis" field="likutis" sortable>
                {{props.row.likutis}}
          </b-table-column>
          <b-table-column label="Parduota" field="parduota" sortable>
                {{props.row.parduota}}
          </b-table-column>
          <b-table-column label="Sandelis" field="sandelis" sortable>
                {{props.row.sandelis}}
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
import CardToolbar from '@/components/CardToolbar'

export default {
  name: "Prekes",
  components: {CardToolbar, CardComponent},
  data () {
    return {
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 50,
      isLoading: false,
      sarasas: [],
      grupes: [],
      grupes_lv: [],
      grupe: '',
      ieskoti: '',
      paieska: '',
      sandeliai: 'NORF::MARI::KEDA',
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
  },
  created () {
    this.getData()
  },
  methods: {
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
          .post(`/analize/store`, {
            ieskoti: this.ieskoti,
            rikiuoti: this.rikiuoti,
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            grupe: this.grupe,
            sandeliai: this.sandeliai
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
          .post(`/analize/store`, {
            ieskoti: this.ieskoti,
            rikiuoti: "1",
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            grupe: this.grupe,
            sandeliai: this.sandeliai
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
      .get('/analize')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.sarasas;
        this.paieska = response.data.paieska;
        this.sandeliai = response.data.sandeliai;

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
