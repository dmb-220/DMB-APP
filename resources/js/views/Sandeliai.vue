<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field label="RODYTI:" horizontal>
          <b-button :type="rodyti_lt ? 'is-primary' : 'is-dark'" @click="change_lt()">LIETUVA</b-button>
          <b-button :type="rodyti_lv ? 'is-warning' : 'is-dark'" @click="change_lv()">LATVIJA</b-button>
          <b-button :type="rodyti_ee ? 'is-danger' : 'is-dark'" @click="change_ee()">ESTIJA</b-button>
        </b-field>
        <b-field label="RINKTIS:" horizontal>
            <b-select placeholder="Pasirinkite..." @change.native="keisti_sandelis()" v-model="sandelis" icon="earth" expanded>
              <option v-for="(sandeli, index) in sandeliai" :key="index" :value="index">
                {{ sandeli }}
              </option>
            </b-select>
          </b-field>
          <b-field label="PREKĖS:" horizontal>
            <b-button :type="pirk ? 'is-info' : 'is-dark'" @click="change_pirk()">GAMYBA</b-button>
           <b-button :type="gam ? 'is-info' : 'is-dark'" @click="change_gam()">PIRKIMAI</b-button>
        </b-field>
      </card-component>

      <card-component title="SANDELIS" icon="account-multiple">
        <div v-show="sandeliai[sandelis]" class="columns">
          <div class="column has-text-centered has-text-weight-bold">
            Sandelis:<br>{{ sandeliai[sandelis] }}
            </div>
        </div>
        <b-table
        focusable
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys"
        :opened-detailed="defaultOpenedDetails"
        detailed
        sort-icon="arrow-up"
        detail-key="pavadinimas"
        @details-open="(row, index) => $buefy.toast.open(`Išskleista ${ row.pavadinimas } grupė!`)"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Pavadinimas"  field="pavadinimas" sortable>
                {{ props.row.pavadinimas }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'silver'}" label="Likuciai"  field="likutis_sk" sortable>
                {{ props.row.likutis_sk }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'silver'}" label="Pardavimai"  field="pardavimai_sk" sortable>
                {{ props.row.pardavimai_sk }}
          </b-table-column>
        </template> 

        <template slot="detail" slot-scope="props">
          <b-table
          :data="props.row.grupe"
          :bordered="true"
          :striped="true"
          :narrowed="true"
          :opened-detailed="defaultOpened"
          detailed
          sort-icon="arrow-up"
          detail-key="pavadinimas"
          @details-open="(row, index) => $buefy.toast.open(`Išskleista ${ row.pavadinimas } grupė!`)">
          <template slot-scope="props">
              <b-table-column :style="{'background-color': 'silver'}" field="pavadinimas" label="Pavadinimas" sortable>
                  {{ props.row.pavadinimas }}
              </b-table-column>
              <b-table-column field="lik_sk" label="Likuciai" sortable>
                  {{ props.row.lik_sk }}
              </b-table-column>
              <b-table-column field="pard_sk" label="Pardavimai" sortable>
                  {{ props.row.pard_sk }}
              </b-table-column>
          </template>
          <template slot="detail" slot-scope="props">
            <b-table
            :data="props.row.list"
            :bordered="true"
            :striped="true"
            :narrowed="true">
            <template slot-scope="props">
                <b-table-column field="pavadinimas" label="Pavadinimas" sortable>
                    {{ props.row.preke }}
                </b-table-column>
                <b-table-column field="lik_kiekis" label="Likuciai" sortable>
                    {{ props.row.lik_kiekis }}
                </b-table-column>
                <b-table-column field="pard_kiekis" label="Pardavimai" sortable>
                    {{ props.row.pard_kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </template>

          </b-table>
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
      </card-component>
    </section>
  </div>

</template>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import RadioPicker from '@/components/RadioPicker'

export default {
  name: "Sandeliai",
  components: {CardComponent, RadioPicker},
  data () {
    return {
      isLoading: false,
      duomenys: [],
      sandeliai: {},
      store: {},
      defaultOpenedDetails: [1],
      defaultOpened: [1],
      gam: true,
      pirk: true,
      rodyti_lt: false,
      rodyti_lv: false,
      rodyti_ee: false,
      salis: '',
      rikiuoti: false,
      sandelis: 0
    }
  },
  computed: {
  },
  created () {
    //this.paieska_post()
    //this.getData()
  },
  methods: {
    //print() {
      // Pass the element id here
     // this.$htmlToPaper('printMe');
    //},
    keisti_sandelis(){
      //this.sandelis = 1;
      this.paieska_post();
    },
    change_gam(){
      this.gam = !this.gam
      //this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_pirk(){
      this.pirk = !this.pirk
      //this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_lt(){
      this.rodyti_lt = true;
      this.rodyti_lv = false;
      this.rodyti_ee = false;
      this.sandeliai = this.store.LT;
      this.sandelis = 0;
      this.paieska_post();
    },
    change_lv(){
      this.rodyti_lt = false;
      this.rodyti_lv = true;
      this.rodyti_ee = false;
      this.sandeliai = this.store.LV;
      this.sandelis = 0;
      this.paieska_post()
    },
    change_ee(){
      this.rodyti_lt = false;
      this.rodyti_lv = false;
      this.rodyti_ee = true;
      this.sandeliai = this.store.EE;
      this.sandelis = 0;
      this.paieska_post()
    },
    getData () {
      this.isLoading = true
      this.axios
      .get('/sandeliai')
      .then(response => {
        this.isLoading = false
        //this.sandelis = response.data.sandelis;
        this.duomenys= response.data.duomenys;
        this.store = response.data.store;

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
    paieska_post(){
    axios
      .post(`/sandeliai/store`, {
        lt: this.rodyti_lt,
        lv: this.rodyti_lv,
        ee: this.rodyti_ee,
        sandelis: this.sandelis,

        gam: this.gam,
        pirk: this.pirk,
        })
      .then(response => {
        console.log(response.data.data)
        //this.rikiuoti = false;
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
  }
}
</script>
