<template>
    <section class="section is-main-section">
      <card-component title="Statistika" icon="finance">
        <b-field horizontal>
            <b-input placeholder="Paieška..." type="search" @keyup.native.enter="paieska_post" 
            required v-model="ieskoti" icon="magnify"></b-input>    
          <div class="control">
            <b-button native-type="submit" type="is-primary" @click="paieska_post">Ieškoti</b-button>
          </div>
        </b-field>
        <hr>
        <div class="columns">
          <div class="column has-text-centered" :style="{'background-color': 'greenyellow'}">
            <b-button :type="rodyti_lt ? 'is-primary' : 'is-dark'" @click="change_lt()">LIETUVA</b-button>
            </div>
          <div class="column has-text-centered" :style="{'background-color': 'gold'}">
            <b-button :type="rodyti_lv ? 'is-warning' : 'is-dark'" @click="change_lv()">LATVIJA</b-button>
            </div>
          <div class="column has-text-centered" :style="{'background-color': 'tomato'}">
            <b-button :type="rodyti_ee ? 'is-danger' : 'is-dark'" @click="change_ee()">ESTIJA</b-button>
            </div>
        </div>
        <hr>
        <div  id="printMe">
          <div class="columns">
          <div class="column has-text-centered has-text-weight-bold">{{ paieska }}</div>
        </div>
        <b-table
        bordered
        hoverable
        :narrowed="isNarrowed"
        :data="pardavimai"
        ref="table"
        :opened-detailed="defaultOpenedDetails"
        detailed
        sort-icon="arrow-up"
        detail-key="sandelis"
        @details-open="(row, index) => $buefy.toast.open(`Išskleistas ${ row.sandelis } sandelys!`)"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column v-if="props.row.prekes[0].salis == 1" :style="{'background-color': 'greenyellow'}"  label="Sandelis"  field="sandelis">
                {{ props.row.sandelis }}
          </b-table-column>
          <b-table-column v-if="props.row.prekes[0].salis == 2" :style="{'background-color': 'gold'}"  label="Sandelis"  field="sandelis">
                {{ props.row.sandelis }}
          </b-table-column>
          <b-table-column v-if="props.row.prekes[0].salis == 3" :style="{'background-color': 'tomato'}"  label="Sandelis"  field="sandelis">
                {{ props.row.sandelis }}
          </b-table-column>
          <b-table-column label="Likutis" field="likutis" sortable>
            {{ props.row.likutis }}
          </b-table-column>
          <b-table-column label="Parduota" field="parduota" sortable>
            {{ props.row.parduota }}
          </b-table-column>
          <b-table-column label="Viso" field="viso" sortable>
            <b>{{ props.row.viso }}</b>
          </b-table-column>
        </template>  

        <template slot="detail" slot-scope="props">
          <div class="columns">
          <div class="column" :style="{'border': '1px solid'}">
            <div class="has-text-centered">Likučiai:</div>
            <b-table
            :data="props.row.likut"
            default-sort-direction="desc"
            default-sort="kiekis"
            bordered="true"
            striped="true"
            narrowed="true">
            <template slot-scope="props">
                <b-table-column field="preke" label="Prekė">
                    {{ props.row.preke }}
                </b-table-column>
                <b-table-column field="kiekis" label="Kiekis" sortable>
                    {{ props.row.kiekis }}
                </b-table-column>
            </template>
            </b-table>
          </div>
          <div class="column" :style="{'border': '1px solid'}">
            <div class="has-text-centered">Pardavimai:</div>
            <b-table
            :data="props.row.prekes"
            default-sort-direction="desc"
            default-sort="kiekis"
            bordered="true"
            striped="true"
            narrowed="true">
            <template slot-scope="props">
                <b-table-column field="preke" label="Prekė">
                    {{ props.row.preke }}
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
        <template slot="footer">
            <th> </th>
            <th> </th>
            <th>{{ viso_lik }}</th>
            <th>{{ viso_pard }}</th>
            <th> </th>
        </template>
      </b-table>
      </div>
      <b-button type="is_dark" @click="print">Print</b-button>
      </card-component>
    </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'
export default {
  name: 'statistika',
  components: { CardComponent },
  data () {
    return {
      output: null,
      error: '',
     isLoading: false,
     defaultOpenedDetails: [1],
     showDetailIcon: false,
     isNarrowed: true,
     pardavimai: [],
     ieskoti: '',
     paieska: '',
     viso_pard: '',
     viso_lik: '',
     //ka rodyti, o ko ne
     rodyti_lt: true,
     rodyti_lv: true,
     rodyti_ee: true,
     salis: ''
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
    paieska_post(){
      if(this.ieskoti != ""){
        axios
          .post(`/pardavimai/store`, {
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
      .get('/pardavimai')
      .then(response => {
        this.isLoading = false
        this.pardavimai = response.data.data;
        this.paieska = response.data.paieska;
        this.viso_pard = response.data.viso_pard;
        this.viso_lik = response.data.viso_lik;
        
        this.rodyti_lt = response.data.salis.LT ? true : false
        this.rodyti_lv = response.data.salis.LV ? true : false
        this.rodyti_ee = response.data.salis.EE ? true : false
        //console.log(reponse.data.salis);
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
