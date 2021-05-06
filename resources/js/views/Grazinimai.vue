<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field  label="Bankas CSV:" horizontal>
          <file-picker-bankas @file-updated="file_info_bankas" v-model="file_bankas"/>
        </b-field>
        <b-field  label="Grazinimo CSV:" horizontal>
          <file-picker-grazinimai @file-updated="file_info_grazinimai" v-model="file_grazinimai"/>
        </b-field>
          <b-field  label=" " horizontal>
        <p class="control">
          <button class="button is-sark" @click="suformuoti">Suformuoti</button>
        </p>
        </b-field>
      </card-component>
      <card-component title="Grazinimai" icon="account-multiple">
        <div  id="printMe2">
        <b-table
         :checked-rows.sync="checkedRows"
        checkable
        :checkbox-position="checkboxPosition"
        bordered
        :narrowed="true"
        :data="graza"
        sort-icon="arrow-up"
        :loading="isLoading"
        default-sort-direction="asc"
        default-sort="saskaitos_nr">
        <template slot-scope="props">
          <b-table-column label="Data" field="data" sortable>
                {{props.row.data}}
          </b-table-column>
          <b-table-column label="Nr"  field="saskaitos_nr" sortable>
                {{ props.row.saskaitos_nr }}
          </b-table-column>
          <b-table-column class="has-text-right" label="SUMA"  field="suma">
                {{  parseFloat(props.row.suma).toFixed(2) }}
          </b-table-column>
           <b-table-column label="Unikalus"  field="unikalus">
                {{ props.row.unikalus }}
          </b-table-column>
          <b-table-column label="Saskaita"  field="bankas">
            <b-input type="text" v-model="props.row.bankas && props.row.bankas.saskaita"></b-input>
          </b-table-column>
          <b-table-column label="Pirkejas"  field="pirkejas">
          <b-input type="text" v-model="props.row.bankas && props.row.bankas.pavadinimas "></b-input>
          </b-table-column>
          <b-table-column label="Prestashop"  field="pirkejas">
                <small>( {{ props.row.pirkejas }} )</small>
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
              <th class="has-text-right">{{ gra_suma.toFixed(2) }}</th>
          </template>
      </b-table>
      <br>

      </div>
      <hr>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
        <b-button size="is-medium" icon-left="download" type="is-dark" v-if="checkedRows.length > 0" @click="xml">ATSISIŪSTI</b-button>
        <b-button size="is-medium" icon-left="download" type="is-dark" v-else disabled @click="xml">ATSISIŪSTI</b-button>
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

import FilePickerBankas from '@/components/FilePickerBankas'
import FilePickerGrazinimai from '@/components/FilePickerGrazinimai'

export default {
  name: "Grazinimai",
  components: {CardToolbar, CardComponent, FilePickerBankas, FilePickerGrazinimai },
  data () {
    return {
      checkboxPosition: 'left',
      checkedRows: [],
      showDetailIcon: false,
      isLoading: false,

      color: [
        'is-one',
        'is-two',
        'is-three'
      ],
      file_bankas: null,
      file_grazinimai: null,
      failas_bankas: "",
      failas_grazinimai: "",

      graza: [],

    }
  },
  computed: {
    gra_suma: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);
    },
    gra_suma2: function(){
      let total = [];
      Object.entries(this.checkedRows).forEach(([key, val]) => {
          total.push(val.suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);
    },
  },
  created () {
    this.getData();
  },
  methods: {
    file_info_bankas (value) {
      this.failas_bankas = value.name;
    },
    file_info_grazinimai (value) {
      this.failas_grazinimai = value.name;
    },
    print() {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper('printMe');
    },
    xml(){
    axios
      .post(`/grazinimai/sepa`, {
        list: this.checkedRows,
        all: this.gra_suma2.toFixed(2)
        })
      .then(response => {
        console.log(response.data)
        var blob = new Blob([response.data], { type: 'application/xml' } )

        var link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = 'grazinimai.xml'
        link.click()
    })
      .catch( err => {
        this.$buefy.toast.open({
          message: `Error: ${err.message}`,
          type: 'is-danger',
          queue: false
        })
      })
},

suformuoti(){
    axios
      .post(`/grazinimai/store`, {
        file_grazinimai: this.failas_grazinimai,
        file_bankas: this.failas_bankas,
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
      .get('/grazinimai')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.sarasas;  
        this.graza = response.data.graza;    
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
