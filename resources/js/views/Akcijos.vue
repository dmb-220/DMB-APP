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
              Rasta: {{pardavimai.length }}<br>{{paieska}}
            </div>
          </div>
          <b-table
          :mobile-cards="mobile_card"
          bordered
          hoverable
          :narrowed="isNarrowed"
          :data="pardavimai"
          sort-icon="arrow-up"
          :loading="isLoading">
          <template slot-scope="props">
            <b-table-column label="Preke" field="preke" sortable>
              {{ props.row.preke }}
            </b-table-column>
            <b-table-column label="Akcija" field="kaina" sortable>
              {{ props.row.kaina }}
            </b-table-column>
            <b-table-column label="Kaina" field="pradine" sortable>
              {{ props.row.pradine }}
            </b-table-column>
            <b-table-column label="Galioja IKI" field="galioja_iki" sortable>
              <b>{{ props.row.galioja_iki }}</b>
            </b-table-column>
            <b-table-column label="Kortele" field="akcija" sortable>
              <b>{{ props.row.akcija }}</b>
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
</template>

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
