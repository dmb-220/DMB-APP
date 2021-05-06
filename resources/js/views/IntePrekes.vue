<template>
  <div>
   <modal-likutis-box :is-active="isModalLikutis" @confirm="likutisConfirm" @cancel="likutisCancel"/>

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
        <b-field label="PREKĖS:" horizontal>
          <b-button :type="pirk? 'is-info' : 'is-dark'" @click="change_pirk()">GAMYBA</b-button>
          <b-button :type="gam ? 'is-info' : 'is-dark'" @click="change_gam()">PIRKIMAI</b-button>
        </b-field>
        <hr>
        <button class="button is-primary" type="button" @click.prevent="likutisModal">
              ĮKELTI LIKUČIUS
              </button>
        </card-component>

      <card-component title="Prekės" icon="account-multiple">
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
        <vue-excel-xlsx :data="LTtoLV.GAM" :columns="columns" :filename="'perkelimai_GAM_LT'" :sheetname="'LT'" >
          ATSISIŪSTI GAM
        </vue-excel-xlsx>
        <vue-excel-xlsx :data="LTtoLV.PIRK" :columns="columns" :filename="'perkelimai_PIRK_LT'" :sheetname="'LT'" >
          ATSISIŪSTI PIRK
        </vue-excel-xlsx>
      </div>
      <hr>
        <div  id="printMe">
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
        bordered
        :narrowed="true"
        :data="sarasas"
        sort-icon="arrow-up"
        :loading="isLoading"
        default-sort-direction="asc"
        :checked-rows.sync="checkedRows"
        checkable
        :checkbox-position="checkboxPosition"
        default-sort="preke">
        <template slot-scope="props">
          <b-table-column label="Preke" field="preke" sortable>
                {{props.row.preke}}
          </b-table-column>
          <b-table-column :style="{'background-color': 'silver'}" label="Viso">
                {{ (props.row.liko_LT ? props.row.liko_LT : 0) + (props.row.liko_LV ? props.row.liko_LV : 0) + (props.row.liko_EE ? props.row.liko_EE : 0) }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'greenyellow'}" label="LIETUVA"  field="liko_LT" sortable>
                BUVO: {{ props.row.liko_LT ? props.row.liko_LT : 0 }} / YRA: {{ props.row.new_LT }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'GoldenRod'}" label="LATVIJA"  field="liko_LV" sortable>
                BUVO: {{ props.row.liko_LV ? props.row.liko_LV : 0 }} / YRA: {{ props.row.new_LV }}
          </b-table-column>
          <b-table-column :style="{'background-color': 'tomato'}"  label="ESTIJA"  field="liko_EE" sortable>
                {{ props.row.liko_EE ? props.row.liko_EE : 0 }}
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
              <th class="has-text-right"></th>
              <th class="has-text-right"></th>
              <th class="has-text-right"></th>
          </template>
      </b-table>
      <br>

      </div>
      <hr>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
        <vue-excel-xlsx :data="LTtoLV.GAM" :columns="columns" :filename="'perkelimai_GAM_LT'" :sheetname="'LT'" >
          ATSISIŪSTI GAM
        </vue-excel-xlsx>
        <vue-excel-xlsx :data="LTtoLV.PIRK" :columns="columns" :filename="'perkelimai_PIRK_LT'" :sheetname="'LT'" >
          ATSISIŪSTI PIRK
        </vue-excel-xlsx>
      </div>
      </card-component>
    </section>
  </div>

</template>

<style  scoped>
    
</style>

<script>
import CardComponent from '@/components/CardComponent'
import CardToolbar from '@/components/CardToolbar'

import ModalLikutisBox from '@/components/ModalLikutisBox'

export default {
  name: "Prekes",
  components: {CardToolbar, CardComponent, ModalLikutisBox},
  data () {
    return {
      isModalLikutis: false,
      columns : [
        {
            label: "Blanko nr.",
            field: "blankas",
        },
        {
            label: "Prekė",
            field: "preke",
        },
        {
            label: "Perkelti",
            field: "kiekis",
        },
        {
            label: "Nuolaida",
            field: "procentas",
        },
        {
            label: "Pradine kaina",
            field: "kaina",
        },
        {
            label: "Savikaina",
            field: "savikaina",
        },
      ],
      checkboxPosition: 'left',
      checkedRows: [],
      ieskoti: 'TSF-',
      paieska_big: '',
      gam: '',
      pirk: '',
      check_list: [],
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 50,
      dates: [],
      showDetailIcon: false,
      isLoading: false,
      sarasas: [],
      LTtoLV: [],
      failas_LT: '',
      failas_LV: '',
      failas_EE: ''
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
      this.isvezta = false;
      this.$htmlToPaper('printMe');
    },

    paieska_post(){
      axios
        .post(`/intepreke2/store`, {
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
      .get('/intepreke')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.sarasas; 
        this.LTtoLV = response.data.LTtoLV;  
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

    likutisModal () {
      this.isModalLikutis = true
    },

    likutisConfirm (failai) {
      this.isModalLikutis = false
      axios
        .post(`/intepreke/store`, {
        file_LT: failai.LT,
        file_LV: failai.LV,
        file_EE: failai.EE,
        })
        .then(response => {
          console.log(response.data.data)
          this.getData()
          this.$buefy.toast.open({
            message: `Likučiai atnaujinti!`,
            queue: false
          })
      })
        .catch( err => {
          this.$buefy.toast.open({
            message: `Error: ${err.message}`,
            type: 'is-danger',
            queue: false
          })
        })
    },
    likutisCancel () {
      this.isModalLikutis = false
    },
  }
}
</script>
