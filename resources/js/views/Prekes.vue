<template>
  <div>
    <section class="section is-main-section">
      <card-component title="PREKES" icon="account-multiple">
          <b-field label="PAIEŠKA:" horizontal>
            <b-input placeholder="Paieška..." type="search" @keyup.native.enter="paieska_post" 
            required v-model="ieskoti" icon="magnify"></b-input>    
          <div class="control">
            <b-button native-type="submit" type="is-primary" @click="paieska_post" outlined>Ieškoti</b-button>
          </div>
        </b-field>
        <b-field label="GRUPAVIMAS:" horizontal>
      <b-switch v-model="rikiuoti" @click.native="switch_post">
        Veikia TIK su mūsų GAM gaminiais! 
      </b-switch>
    </b-field>
    <hr>
        <div class="columns">
          <div class="column has-text-centered" :style="{'background-color': 'greenyellow'}">
            <b-button :type="rodyti_lt ? 'is-primary' : 'is-dark'" @click="change_lt()">LIETUVA</b-button>
            </div>
          <div class="column has-text-centered" :style="{'background-color': 'GoldenRod'}">
            <b-button :type="rodyti_lv ? 'is-warning' : 'is-dark'" @click="change_lv()">LATVIJA</b-button>
            </div>
          <div class="column has-text-centered" :style="{'background-color': 'tomato'}">
            <b-button :type="rodyti_ee ? 'is-danger' : 'is-dark'" @click="change_ee()">ESTIJA</b-button>
            </div>
        </div>
        <hr>
        <div  id="printMe">
        <div class="columns">
          <div class="column has-text-centered has-text-weight-bold">
            Rasta: {{sarasas.length }}<br>{{paieska}}
            </div>
        </div>
        <b-table
        :mobile-cards="mobile_card"
        bordered
        hoverable
        :narrowed="true"
        :data="sarasas"
        :opened-detailed="defaultOpenedDetails"
        detailed
        sort-icon="arrow-up"
        detail-key="preke"
        @details-open="(row, index) => $buefy.toast.open(`Išskleista ${ row.preke } prekė!`)"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column v-if="props.row.pavadinimas == 'Liemenė'" :style="{'background-color': 'gold'}"  label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column>
          <b-table-column v-else  label="Preke"  field="preke" sortable>
                {{ props.row.preke }}
          </b-table-column> 
          <b-table-column :visible='rodyti_lt' :style="{'background-color': 'greenyellow'}" label="LT likučiai" field="likutis.LT_viso" sortable>
                {{props.row.likutis && props.row.likutis.LT_viso}}
          </b-table-column>
          <b-table-column :visible='rodyti_lt' :style="{'background-color': 'greenyellow'}" label="LT pardavimai" field="pardavimai.LT_viso" sortable>
                {{props.row.pardavimai && props.row.pardavimai.LT_viso}}
          </b-table-column>
          <b-table-column :visible='rodyti_lv' :style="{'background-color': 'GoldenRod'}" label="LV likučiai" field="likutis.LV_viso" sortable>
                {{props.row.likutis && props.row.likutis.LV_viso}}
          </b-table-column>
          <b-table-column :visible='rodyti_lv' :style="{'background-color': 'GoldenRod'}" label="LV pardavimai" field="pardavimai.LV_viso" sortable>
                 {{props.row.pardavimai && props.row.pardavimai.LV_viso}}
          </b-table-column>
          <b-table-column :visible='rodyti_ee' :style="{'background-color': 'tomato'}" label="EE likučiai" field="likutis.EE_viso" sortable>
                {{props.row.likutis && props.row.likutis.EE_viso}}
          </b-table-column>
          <b-table-column :visible='rodyti_ee' :style="{'background-color': 'tomato'}" label="EE pardavimai" field="pardavimai.EE_viso" sortable>
                {{props.row.pardavimai && props.row.pardavimai.EE_viso}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'WhiteSmoke '}" label="LIKUČIAI" field="likutis.viso" sortable>
                {{props.row.likutis && props.row.likutis.viso}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'WhiteSmoke '}" label="PARDAVIMAI" field="pardavimai.viso" sortable>
                {{props.row.pardavimai && props.row.pardavimai.viso}}
          </b-table-column>
        </template> 

        <template slot="detail" slot-scope="props">
          <div v-show='rodyti_lt' class="columns">
          <div class="column" :style="{'border': '1px dotted', 'background-color': 'greenyellow'}">
            <div class="has-text-centered">LIETUVA:</div>
            <br>
            <b-table
            :data="props.row.list.LT"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column :style="{'background-color': 'LightGray'}" field="likutis.kiekis" label="Likuciai">
                    {{ props.row.likutis && props.row.likutis.kiekis }}
                </b-table-column>
                <b-table-column :style="{'background-color': 'LightGray'}" field="pardavimai.kiekis" label="Pardavimai">
                    {{ props.row.pardavimai && props.row.pardavimai.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div v-show='rodyti_lv' class="column" :style="{'border': '1px dotted', 'background-color': 'GoldenRod'}">
            <div class="has-text-centered">LATVIJA:</div>
            <br>
            <b-table
            :data="props.row.list.LV"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column :style="{'background-color': 'LightGray'}" field="likutis.kiekis" label="Likuciai">
                    {{ props.row.likutis && props.row.likutis.kiekis }}
                </b-table-column>
                <b-table-column :style="{'background-color': 'LightGray'}" field="pardavimai.kiekis" label="Pardavimai">
                    {{ props.row.pardavimai && props.row.pardavimai.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div v-show='rodyti_ee' class="column" :style="{'border': '1px dotted', 'background-color': 'tomato'}">
            <div class="has-text-centered">ESTIJA:</div>
            <br>
            <b-table
            :data="props.row.list.EE"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column :style="{'background-color': 'LightGray'}" field="likutis.kiekis" label="Likuciai">
                    {{ props.row.likutis && props.row.likutis.kiekis }}
                </b-table-column>
                <b-table-column :style="{'background-color': 'LightGray'}" field="pardavimai.kiekis" label="Pardavimai">
                    {{ props.row.pardavimai && props.row.pardavimai.kiekis }}
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
        <template slot="footer">
            <th> </th>
            <th> </th>
            <th>{{ viso.lt_lik }}</th>
            <th>{{ viso.lt_pard }}</th>
            <th>{{ viso.lv_lik }}</th>
            <th>{{ viso.lv_pard }}</th>
            <th>{{ viso.ee_lik }}</th>
            <th>{{ viso.ee_pard }}</th>
            <th> </th>
        </template>
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
      isLoading: false,
      rodyti_lt: true,
     rodyti_lv: true,
     rodyti_ee: true,
      sarasas: [],
      defaultOpenedDetails: [1],
      ieskoti: '',
      paieska: '',
      rodyti_lt: true,
     rodyti_lv: true,
     rodyti_ee: true,
     salis: '',
     rikiuoti: false,
     mobile_card: true,
     viso: []
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
    change_lt(){
      this.rodyti_lt = !this.rodyti_lt
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_lv(){
      this.rodyti_lv = !this.rodyti_lv
     this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_ee(){
      this.rodyti_ee = !this.rodyti_ee
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    switch_post(){
      //this.rikiuotic = !this.rikiuoti;
      if(this.ieskoti == ""){
        this.ieskoti = this.paieska;
      }
        axios
          .post(`/prekes/store`, {
            ieskoti: this.ieskoti,
            lt: this.rodyti_lt,
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
            rikiuoti: this.rikiuoti
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
      if(this.ieskoti != ""){
        axios
          .post(`/prekes/store`, {
            ieskoti: this.ieskoti,
            lt: this.rodyti_lt,
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
            rikiuoti: "1"
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
        }else{
          this.$buefy.toast.open({
              message: `KLAIDA: įveskite paieškos raktažodį!`,
              type: 'is-danger',
              queue: false
            })
          }
    },
  getData () {
      this.isLoading = true
      this.axios
      .get('/prekes')
      .then(response => {
        this.isLoading = false
        this.rikiuoti = response.data.rikiuoti ? false : true;
        this.sarasas = response.data.sarasas;
        this.paieska = response.data.paieska;
        this.viso = response.data.viso;
        //console.log(JSON.stringify(this.parduotuves));

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
