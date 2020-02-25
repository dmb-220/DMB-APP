<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
          <b-field label="PAIEŠKA:" horizontal>
            <b-input placeholder="Paieška..." type="search" @keyup.native.enter="paieska_post" 
             v-model="ieskoti" icon="magnify"></b-input>    
          <div class="control">
            <b-button native-type="submit" type="is-primary" @click="paieska_post">Ieškoti</b-button>
          </div>
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
          <b-field label="RODYTI:" horizontal>
          <b-button :type="rodyti_lt ? 'is-primary' : 'is-dark'" @click="change_lt()">LIETUVA</b-button>
          <b-button :type="rodyti_lv ? 'is-warning' : 'is-dark'" @click="change_lv()">LATVIJA</b-button>
          <b-button :type="rodyti_ee ? 'is-danger' : 'is-dark'" @click="change_ee()">ESTIJA</b-button>
        </b-field>
        <b-field label="PREKĖS:" horizontal>
            <b-button :type="pirk ? 'is-info' : 'is-dark'" @click="change_pirk()">GAMYBA</b-button>
           <b-button :type="gam ? 'is-info' : 'is-dark'" @click="change_gam()">PIRKIMAI</b-button>
        </b-field>
        <b-field label="GRUPAVIMAS:" horizontal>
          <b-switch v-model="rikiuoti" @click.native="switch_post">
            Veikia su mūsų GAM gaminiais! 
          </b-switch>
        </b-field>
        </card-component>
        
        <card-component title="PARDAVIMAI" icon="account-multiple">
        <div  id="printMe">
        <div class="columns">
          <div class="column has-text-centered has-text-weight-bold">Rasta: {{likutis.length }}<br>{{paieska}}<br>{{grupes[grupe]}}</div>
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
        :mobile-cards="false"
        bordered
        hoverable
        :narrowed="true"
        :data="likutis"
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
          <b-table-column :visible='rodyti_lt' :style="{'background-color': 'greenyellow'}" label="LIETUVA"  field="LT_viso" sortable>
                {{ props.row.LT_viso }}
          </b-table-column>
           <b-table-column :visible='rodyti_lv' :style="{'background-color': 'GoldenRod'}" label="LATVIJA"  field="LV_viso" sortable >
                {{ props.row.LV_viso }}
          </b-table-column>
          <b-table-column :visible='rodyti_ee' :style="{'background-color': 'tomato'}" label="ESTIJA"  field="EE_viso" sortable>
                {{ props.row.EE_viso }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'WhiteSmoke'}" label="VISO" field="viso" sortable>
                {{ props.row.viso }}
          </b-table-column>
        </template> 

        <template slot="detail" slot-scope="props">
          <div class="columns">
          <div class="column" v-show='rodyti_lt' :style="{'border': '1px solid', 'background-color': 'greenyellow'}">
            <div class="has-text-centered">Lietuva:</div>
            <b-table
            :data="props.row.LT"
            default-sort-direction="desc"
            default-sort="kiekis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis">
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" v-show='rodyti_lv' :style="{'border': '1px solid', 'background-color': 'GoldenRod'}">
            <div class="has-text-centered">Latvija:</div>
            <b-table
            :data="props.row.LV"
            default-sort-direction="desc"
            default-sort="kiekis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis">
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" v-show='rodyti_ee' :style="{'border': '1px solid', 'background-color': 'tomato'}">
            <div class="has-text-centered">Estija:</div>
            <b-table
            :data="props.row.EE"
            default-sort-direction="desc"
            default-sort="kiekis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis">
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
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
      likutis: [],
      grupes: [],
      grupes_lv: [],
      defaultOpenedDetails: [1],
      ieskoti: '',
      paieska: '',
      rodyti_lt: true,
      rodyti_lv: true,
      rodyti_ee: true,
      salis: '',
      rikiuoti: false,
      grupe: '',
      gam: true,
      pirk: true,
      //mobile_card: true,
      paieska_big: false,
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
    change_lt(){
      this.rodyti_lt = !this.rodyti_lt;
      this.grupe = 0;
      this.ieskoti = this.paieska
      this.paieska_post();
    },
    change_lv(){
      this.rodyti_lv = !this.rodyti_lv;
      this.grupe = 0;
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_ee(){
      this.rodyti_ee = !this.rodyti_ee;
      this.grupe = 0;
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    switch_post(){
      //this.rikiuotic = !this.rikiuoti;
      if(this.ieskoti == ""){
        this.ieskoti = this.paieska;
      }
        axios
          .post(`/pardavimai/store`, {
            ieskoti: this.ieskoti,
            lt: this.rodyti_lt,
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
            rikiuoti: this.rikiuoti,
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            grupe: this.grupe
            })
          .then(response => {
            console.log(response.data)
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
          .post(`/pardavimai/store`, {
            ieskoti: this.ieskoti,
            lt: this.rodyti_lt,
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
            rikiuoti: "1",
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            grupe: this.grupe
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
      .get('/pardavimai')
      .then(response => {
        this.isLoading = false
        this.rikiuoti = response.data.rikiuoti ? false : true;
        this.likutis = response.data.prekes;
        this.paieska = response.data.paieska;

        this.paieska_big = response.data.paieska_big ? true : false
        this.grupes = response.data.grupes;
        this.grupes_lv = response.data.grupes_lv;
        this.grupe = response.data.grupe;

        this.gam = response.data.gam ? true : false
        this.pirk = response.data.pirk ? true : false
        
        this.rodyti_lt = response.data.salis.LT ? true : false
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
