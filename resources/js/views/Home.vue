<template>
    <section class="section is-main-section">
      <card-component title="Statistika" icon="finance">  
        <b-field horizontal>
            <b-input placeholder="Paieška..." type="search" v-model="ieskoti" icon="magnify"></b-input>    
          <div class="control">
            <b-button native-type="submit" type="is-primary">Ieškoti</b-button>
          </div>
        </b-field>
        <hr>
        <div class="columns">
          <div class="column has-text-centered has-text-weight-bold">{{ paieska }} </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered is-size-6" :style="{'background-color': 'greenyellow'}">LIETUVA</div>
          <div class="column has-text-centered is-size-6" :style="{'background-color': 'gold'}">LATVIJA</div>
          <div class="column has-text-centered is-size-6" :style="{'background-color': 'tomato'}">ESTIJA</div>
        </div>
        <hr>
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
        @details-open="(row, index) => $buefy.toast.open(`Išskleistas ${row.sandelys} sandelys!`)"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column v-if="props.row.prekes[0].salis == 1" :style="{'background-color': 'greenyellow'}"  label="Sandelis" width="200" field="sandelis">
                {{ props.row.sandelis }}
          </b-table-column>
          <b-table-column v-if="props.row.prekes[0].salis == 2" :style="{'background-color': 'gold'}"  label="Sandelis" width="200" field="sandelis">
                {{ props.row.sandelis }}
          </b-table-column>
          <b-table-column v-if="props.row.prekes[0].salis == 3" :style="{'background-color': 'tomato'}"  label="Sandelis" width="200" field="sandelis">
                {{ props.row.sandelis }}
          </b-table-column>
          <b-table-column label="Likutis" field="likutis" width="300" sortable>
            {{ props.row.likutis }}
          </b-table-column>
          <b-table-column label="Parduota" field="parduota" width="300" sortable>
            {{ props.row.parduota }}
          </b-table-column>
          <b-table-column label="Viso" field="viso" width="300" sortable>
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
      </b-table>
      <table style="width:100%">
      <tr>
          <td width="240"> </td>
          <td width="300"><b>{{viso_lik}}</b></td>
          <td width="300"><b>{{viso_pard}}</b></td>
          <td width="300"> </td>
        </tr>
        </table>
      </card-component>
    </section>
</template>

<style lang="css">
table, th, td {
  padding-left: 20px;
  margin-left: 20px;
}
</style>


<script>
import CardComponent from '@/components/CardComponent'
export default {
  name: 'home',
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
     viso_pard: '',
     viso_lik: ''
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
    toggle(row) {
                this.$refs.table.toggleDetails(row)
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
        //console.log(this.pardavimai);
      })
      .catch( err => {
            this.isLoading = false
            this.$buefy.toast.open({
              message: `Error: ${e.message}`,
              type: 'is-danger',
              queue: false
            })
          })
    },
  }
}
</script>
