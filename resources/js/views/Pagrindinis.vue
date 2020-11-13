<template>
  <section class="section is-main-section">
      <card-component title="INFORMACIJA" icon="account-multiple">
        Duomenys atnaujinti<br>
        Likučiai: {{ info.likutis }}<br>
        Pardavimai: {{ info.pardavimai}}<br>
        <br>
        <card-component title="Pardavimai" @header-icon-click="fillChartData" icon="finance" header-icon="reload">
        <div v-if="defaultChart.chartData" class="chart-area">
          <line-chart style="height: 100%"
                      ref="bigChart"
                      chart-id="big-line-chart"
                      :chart-data="defaultChart.chartData"
                      :extra-options="defaultChart.extraOptions">
          </line-chart>
        </div>
      </card-component>
      <br>
         <div  class="columns">
           <div class="column" :style="{'border': '1px dotted', 'background-color': 'greenyellow'}">
        <b-table
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys"
        sort-icon="arrow-up"
        :loading="isLoading"
        default-sort-direction="desc"
        default-sort="pardavimas">
        <template slot-scope="props">
          <b-table-column label="Grupė"  field="pavadinimas" sortable>
                {{ props.row.pavadinimas }}
          </b-table-column>
          <b-table-column label="Parduota"  field="pardavimas" sortable>
                {{ props.row.pardavimas }}
          </b-table-column>
          <b-table-column label="Likutis"  field="likutis" sortable>
                {{ props.row.likutis }}
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
      <div class="column" :style="{'border': '1px dotted', 'background-color': 'GoldenRod'}">
      <b-table
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys2"
        sort-icon="arrow-up"
        :loading="isLoading"
        default-sort-direction="desc"
        default-sort="pardavimas">
        <template slot-scope="props">
          <b-table-column label="Grupė"  field="pavadinimas" sortable>
                {{ props.row.pavadinimas }}
          </b-table-column>
          <b-table-column label="Parduota"  field="pardavimas" sortable>
                {{ props.row.pardavimas }}
          </b-table-column>
          <b-table-column label="Likutis"  field="likutis" sortable>
                {{ props.row.likutis }}
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
      <div class="column" :style="{'border': '1px dotted', 'background-color': 'tomato'}">
      <b-table
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys3"
        sort-icon="arrow-up"
        :loading="isLoading"
        default-sort-direction="desc"
        default-sort="pardavimas">
        <template slot-scope="props">
          <b-table-column label="Grupė"  field="pavadinimas" sortable>
                {{ props.row.pavadinimas }}
          </b-table-column>
          <b-table-column label="Parduota"  field="pardavimas" sortable>
                {{ props.row.pardavimas }}
          </b-table-column>
          <b-table-column label="Likutis"  field="likutis" sortable>
                {{ props.row.likutis }}
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
      </div>
      </card-component>     
    </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import * as chartConfig from '@/components/Charts/chart.config'
import LineChart from '@/components/Charts/LineChart'


export default {
  name: 'pagrindinis',
  components: {CardComponent, LineChart},
  data () {
    return {
      defaultChart: {
        chartData: null,
        extraOptions: chartConfig.chartOptionsMain
      },
      isLoading: false,
      info: [],
      duomenys: [],
      duomenys2: [],
      duomenys3: [],
      buy: [],
      buyLT: [],
      buyLV: [],
      pardavimai: [],
      pardavimaiLT: [],
      pardavimaiLV: [],
      label: []
    }
  },
  computed: {
  },
  created () {
    this.getData()
    this.fillChartData ()
  },

watch: {
      buy: function() {
        this.fillChartData () ;
      }
  },
  methods: {
        view_pardavimai () {
      //console.log(viewPardavimai);
      let  i;

      let sk = this.buy.length
      for (i = 0; i < sk; i++) {
        this.pardavimai.push(this.buy[i]['kiekis'])
        this.label.push(this.buy[i]['data'])
        
      }
      let skLT = this.buyLT.length
      for (i = 0; i < skLT; i++) {
        this.pardavimaiLT.push(this.buyLT[i]['kiekis'])
      }
      let skLV = this.buyLV.length
      for (i = 0; i < skLV; i++) {
        this.pardavimaiLV.push(this.buyLV[i]['kiekis'])
      }
    },
      getData () {
      this.isLoading = true
      this.axios
      .get('/testas')
      .then(response => {
        this.isLoading = false
        this.info = response.data.data;
        this.duomenys = response.data.likutis;
        this.duomenys2 = response.data.likutis2;
        this.duomenys3 = response.data.likutis3;
        this.buy = response.data.buy['viso'];
        this.buyLT = response.data.buy['LT'];
        this.buyLV = response.data.buy['LV'];

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
        fillChartData () {
          this.view_pardavimai ();
      this.defaultChart.chartData = {
        datasets: [
          //viso
          {
            label: 'VISO',
            fill: false,
            borderColor: chartConfig.chartColors.default.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.info,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.pardavimai
          },
          //LT
          {
            label: 'LT',
            //type: 'bar',
            fill: false,
            borderColor: chartConfig.chartColors.default.lietuva,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.lietuva,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.lietuva,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.pardavimaiLT
          },
          //LV
          {
            label: 'LV',
            //type: 'bar',
            fill: false,
            borderColor: chartConfig.chartColors.default.latvija,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: chartConfig.chartColors.default.latvija,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: chartConfig.chartColors.default.latvija,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.pardavimaiLV
          }
        ],
        labels: this.label
      }
    }
  }
}
</script>
