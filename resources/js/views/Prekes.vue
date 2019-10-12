<template>
  <div>
    <section class="section is-main-section">
      <card-component title="PREKES" icon="account-multiple">
          <b-field horizontal>
            <b-input placeholder="Paieška..." type="search" @keyup.native.enter="paieska_post" 
            required v-model="ieskoti" icon="magnify"></b-input>    
          <div class="control">
            <b-button native-type="submit" type="is-primary" @click="paieska_post">Ieškoti</b-button>
          </div>
        </b-field>
        <hr>
        <div  id="printMe">
        <div class="columns">
          <div class="column has-text-centered has-text-weight-bold">
            Rasta: {{sarasas.length }}<br>{{paieska}}
            </div>
        </div>
        <b-table
        :mobile-cards="false"
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
          <b-table-column :style="{'background-color': 'greenyellow'}" label="LT likučiai" field="likutis.LT_viso" sortable>
                {{props.row.likutis && props.row.likutis.LT_viso}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'greenyellow'}" label="LT pardavimai" field="pardavimai.LT_viso" sortable>
                {{props.row.pardavimai && props.row.pardavimai.LT_viso}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'GoldenRod'}" label="LV likučiai" field="likutis.LV_viso" sortable>
                {{props.row.likutis && props.row.likutis.LV_viso}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'GoldenRod'}" label="LV pardavimai" field="pardavimai.LV_viso" sortable>
                 {{props.row.pardavimai && props.row.pardavimai.LV_viso}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'tomato'}" label="EE likučiai" field="likutis.EE_viso" sortable>
                {{props.row.likutis && props.row.likutis.EE_viso}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'tomato'}" label="EE pardavimai" field="pardavimai.EE_viso" sortable>
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
          <div class="columns">
          <div class="column" :style="{'border': '1px dotted', 'background-color': 'greenyellow'}">
            <div class="has-text-centered">LT likučiai:</div>
            <b-table
            :data="props.row.likutis.LT"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" :style="{'border': '1px dotted', 'background-color': 'greenyellow'}">
            <div class="has-text-centered">LT pardavimai:</div>
            <b-table
            :data="props.row.pardavimai.LT"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" :style="{'border': '1px dotted', 'background-color': 'GoldenRod'}">
            <div class="has-text-centered">LV likučiai:</div>
            <b-table
            :data="props.row.likutis.LV"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" :style="{'border': '1px dotted', 'background-color': 'GoldenRod'}">
            <div class="has-text-centered">LV pardavimai:</div>
            <b-table
            :data="props.row.pardavimai.LV"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" :style="{'border': '1px dotted', 'background-color': 'tomato'}">
            <div class="has-text-centered">EE likučiai:</div>
            <b-table
            :data="props.row.likutis.EE"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
                    {{ props.row.sandelis }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" :style="{'border': '1px dotted', 'background-color': 'tomato'}">
            <div class="has-text-centered">EE pardavimai:</div>
            <b-table
            :data="props.row.pardavimai.EE"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="sandelis" label="Sandelis" sortable>
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
      isLoading: false,
      //parduotuves: [],
      sarasas: [],
      defaultOpenedDetails: [1],
      ieskoti: '',
      paieska: '',
      rodyti_lt: true,
     rodyti_lv: true,
     rodyti_ee: true,
     salis: ''
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
    paieska_post(){
      if(this.ieskoti != ""){
        axios
          .post(`/prekes/store`, {
            ieskoti: this.ieskoti,
            lt: this.rodyti_lt,
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
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
        //this.parduotuves = response.data.parduotuves;
        this.sarasas = response.data.sarasas;
        this.paieska = response.data.paieska;
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
