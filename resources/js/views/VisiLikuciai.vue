<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field label="Sandelis:" horizontal>
            <b-select  placeholder="Pasirinkite" expanded>
                <option v-for='(idx, id) in sandeliai' :key='idx' :value="id">{{ idx }}</option>
            </b-select>
        </b-field>
          <b-field  label=" " horizontal>
            <p class="control">
              <button class="button is-sark" @click="paieska_post">Suformuoti</button>
            </p>
        </b-field>
      </card-component>

      <card-component title="Prekės" icon="account-multiple">
        <div  id="printMe">
        <div class="is-size-2">{{ sandelis }}</div>

          <b-table
          bordered
          :narrowed="true"
          :data="sarasas"
          sort-icon="arrow-up"
          :loading="isLoading"
          default-sort-direction="asc"
          default-sort="pavadinimas">
          <template slot-scope="props">
            <b-table-column label="Nr.">
              {{props.index + 1}}
            </b-table-column>
            <b-table-column label="Nosaukums" field="pavadinimas" sortable>
                  {{props.row.pavadinimas}}
            </b-table-column>
            <b-table-column label="Vieniba">
                  Gab
            </b-table-column>
            <b-table-column class="has-text-right" label="Daudzums"  field="kiek">
                  {{  props.row.kiek }}
            </b-table-column>
            <b-table-column class="has-text-right" label="Cena"  field="kaina">
                  {{   ((props.row.kaina/props.row.nr)).toFixed(2) }}
            </b-table-column>
            <b-table-column class="has-text-right" label="Summa">
                  {{  (((props.row.kaina/props.row.nr))*props.row.kiek).toFixed(2) }}
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
                <th class="has-text-right">{{ apy_kiek }}</th>
                <th class="has-text-right"></th>
                <th class="has-text-right">{{ apy_viso.toFixed(2) }}</th>
            </template>
          </b-table>
        </div>
          <hr>
      <div class="buttons">
        <b-button v-if="sarasas.length > 0" size="is-medium" icon-left="printer" type="is-dark" @click="csvExport(sarasas)">Atsisiusti</b-button>
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
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

export default {
  name: "Prekes",
  components: {CardToolbar, CardComponent},
  data () {
    return {
      sarasas: [],
      sandelis: '',
      sandeliai: []
    }
  },
  computed: {
     apy_kiek: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.kiek) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_viso: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push((val.kaina/val.nr)*val.kiek) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },

  },
  created () {
    this.getData();
  },
  methods: {
    csvExport(arrData) {
      let csvContent = "data:text/csv;charset=utf-8,"+'\uFEFF';
      csvContent += [
        Object.keys(arrData[0]).join(";"),
        ...arrData.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", this.sandelis+'.csv');
      link.click();
    },
    print() {
      // Pass the element id here
      this.mobile_card = false;
      this.$htmlToPaper('printMe');
    },
    paieska_post(){
        axios
          .post(`/visilikuciai/store`, {
            sandelis: this.sandelis,
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
      .get('/visilikuciai')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.data; 
        this.sandelis = response.data.sandelis;
        this.sandeliai = response.data.sandeliai;    
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
