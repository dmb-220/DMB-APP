<template>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="finance">
        <b-field  label="CSV failas:" horizontal>
          <file-picker-akcijos @file-updated="file_info" v-model="file"/>
        </b-field>
        <b-field label="Sandelis:" horizontal>
            <b-input placeholder="Sandelis likučiams"
              v-model="sandelis"
              type="search"
              icon="magnify"
              expanded>
            </b-input>
        </b-field>
        <b-field  label=" " horizontal>
        <p class="control">
          <button class="button is-sark" @click="paieska_post">Ieškoti</button>
        </p>
        </b-field>
        </card-component>

      <card-component title="AKCIJOS" icon="account-multiple">
        <div  id="printMe">
          <div class="columns">
            <div class="column has-text-centered has-text-weight-bold">
              Rasta: {{pardavimai.length }}<br>{{ sandelis }}
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
          :narrowed="isNarrowed"
          :data="pardavimai"
          :opened-detailed="defaultOpenedDetails"
          detailed
          sort-icon="arrow-up"
          detail-key="preke"
          @details-open="(row, index) => $buefy.toast.open(`Išskleista ${ row.preke } prekė!`)"
          :loading="isLoading">
          <template slot-scope="props">
            <b-table-column label="Preke" field="preke" :style="{'background-color': 'silver','vertical-align': 'middle'}" sortable> 
              {{ props.row.preke }}
            </b-table-column>
            <b-table-column label="Kaina" field="pradine" :style="{'background-color': 'silver','vertical-align': 'middle'}" sortable>
              {{ props.row.pradine }}
            </b-table-column>
            <b-table-column label="Likutis" field="likutis" :style="{'background-color': 'silver','vertical-align': 'middle'}" sortable>
              {{ props.row.likutis }}
            </b-table-column>

            <b-table-column v-if="props.row.sandelis && props.row.sandelis.length > 0" :style="{'background-color': 'tomato', 'vertical-align': 'middle'}" 
              label="Sandeliui" field="sandelis">
                <div class="is-size-7" v-for="idx in props.row.sandelis" :key="idx.pavadinimas">
                  {{ idx.pavadinimas }} - {{ idx.kaina }}
                </div>
            </b-table-column>
            <b-table-column v-else label="Sandeliui" field="sandelis">

            </b-table-column>

            <b-table-column  :style="{'background-color': 'greenyellow', 'vertical-align': 'middle'}" label="LT Akcija" field="kaina">
              {{ props.row.LT && props.row.LT.kaina }}
            </b-table-column>
            <b-table-column :style="{'background-color': 'greenyellow', 'vertical-align': 'middle'}" label="LT Kortele" field="akcija">
              {{ props.row.LT && props.row.LT.akcija }}
            </b-table-column>

            <b-table-column :style="{'background-color': 'GoldenRod', 'vertical-align': 'middle'}" label="LV Akcija" field="kaina">
              {{ props.row.LV && props.row.LV.kaina }}
            </b-table-column>
            <b-table-column :style="{'background-color': 'GoldenRod', 'vertical-align': 'middle'}" label="LV Kortele" field="akcija">
              {{ props.row.LV && props.row.LV.akcija }}
            </b-table-column>
          </template>

          <template slot="detail" slot-scope="props">
            <b-table
            :data="props.row.sandeliai"
            default-sort-direction="asc"
            default-sort="sandelis">
            <template slot-scope="props">
                <b-table-column field="name" label="Sandelis" sortable>
                    <small>{{ props.row.name }}</small>
                </b-table-column>
                <b-table-column field="likutis" label="Likutis" sortable>
                    <small>{{ props.row.likutis }}</small>
                </b-table-column>
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
          <template slot="footer">
            <th> </th>
            <th> </th>
            <th> </th>
            <th>{{ bendras }}</th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
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
</template>

<style>

</style>

<script>
import CardComponent from '@/components/CardComponent'
import FilePickerAkcijos from '@/components/FilePickerAkcijos'

export default {
  name: 'akcijos',
  components: { CardComponent, FilePickerAkcijos  },
  data () {
    return {
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 50,
    file: null,
    failas: '',
    bendras: '',
     isLoading: false,
     defaultOpenedDetails: [1],
     showDetailIcon: false,
     isNarrowed: true,
     pardavimai: [],
     sandelis: '',
     mobile_card: true,
    }
  },
  computed: {
  },
  created() {
    this.getData()
    },
  mounted () {
  },
  methods: {
    print() {
      // Pass the element id here
      this.mobile_card = false;
      this.isPaginated = false;
      this.$htmlToPaper('printMe');
    },
    file_info (value) {
      //this.getData()
      //console.log(value)
      this.failas = value.name;
    },
    paieska_post(){
      if(this.failas != ""){
        axios
          .post(`/akcijos/store`, {
            sandelis: this.sandelis,
            failas: this.failas,
            })
          .then(response => {
            //console.log(response.data.data)
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
              message: `KLAIDA: Nepasirinktas failas!`,
              type: 'is-danger',
              queue: false
            })
          }
    },
    getData () {
      this.isLoading = true
      this.axios
      .get('/akcijos')
      .then(response => {
        this.isLoading = false
        this.pardavimai = response.data.data;
        this.bendras = response.data.likutis;

        this.sandelis = response.data.sandelis;
        this.failas = response.data.failas;
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
