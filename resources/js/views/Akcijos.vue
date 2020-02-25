<template>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="finance">
        <b-field position="is-centered">
            <b-input placeholder="Paieška..."
              @keyup.native.enter="paieska_post" 
              v-model="ieskoti"
              type="search"
              icon="magnify"
              expanded>
            </b-input>
            <p class="control">
                <button class="button is-primary" @click="paieska_post">Ieškoti</button>
            </p>
        </b-field>
        <b-field>
            <b-checkbox :value="false" v-model="paieska_big" type="is-info">Aktivuoti išplėstinę paieška</b-checkbox>
        </b-field>
        </card-component>

      <card-component title="AKCIJOS" icon="account-multiple">
        <div  id="printMe">
          <div class="columns">
            <div class="column has-text-centered has-text-weight-bold">
              Rasta: {{pardavimai.length }}
            </div>
          </div>
          <b-table
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

            <b-table-column v-if="props.row.sandelis && props.row.sandelis.length > 0" :style="{'background-color': 'tomato', 'vertical-align': 'middle'}" label="Sandeliui" field="sandelis" sortable>
              <ul>
                <li v-for="idx in props.row.sandelis">
                  {{ idx.pavadinimas }} - {{ idx.kaina }}
                  </li>
                </ul>
            </b-table-column>
            <b-table-column v-else label="Sandeliui" field="sandelis" sortable>
              {{ }}
            </b-table-column>

            <b-table-column  :style="{'background-color': 'greenyellow', 'vertical-align': 'middle'}" label="LT Akcija" field="LT.kaina" sortable>
              {{ props.row.LT && props.row.LT.kaina }}
            </b-table-column>
            <b-table-column :style="{'background-color': 'greenyellow', 'vertical-align': 'middle'}" label="LT Kortele" field="LT.akcija" sortable>
              {{ props.row.LT && props.row.LT.akcija }}
            </b-table-column>

            <b-table-column :style="{'background-color': 'GoldenRod', 'vertical-align': 'middle'}" label="LV Akcija" field="LV.kaina" sortable>
              {{ props.row.LV && props.row.LV.kaina }}
            </b-table-column>
            <b-table-column :style="{'background-color': 'GoldenRod', 'vertical-align': 'middle'}" label="LV Kortele" field="LV.akcija" sortable>
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
export default {
  name: 'akcijos',
  components: { CardComponent },
  data () {
    return {
     isLoading: false,
     defaultOpenedDetails: [1],
     showDetailIcon: false,
     isNarrowed: true,
     pardavimai: [],
     ieskoti: '',
     paieska: '',
     salis: '',
     paieska_big: false,
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
      this.$htmlToPaper('printMe');
    },

    switch_post(){
      //this.rikiuotic = !this.rikiuoti;
      if(this.ieskoti == ""){
        this.ieskoti = this.paieska;
      }
        axios
          .post(`/akcijos/store`, {
            ieskoti: this.ieskoti,
            paieska_big: this.paieska_big,
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
          .post(`/akcijos/store`, {
            ieskoti: this.ieskoti,
            paieska_big: this.paieska_big,
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
      .get('/akcijos')
      .then(response => {
        this.isLoading = false
        this.pardavimai = response.data.data;
        this.paieska = response.data.paieska;

        this.paieska_big = response.data.paieska_big ? true : false
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
