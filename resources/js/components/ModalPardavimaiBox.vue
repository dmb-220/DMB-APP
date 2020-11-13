<template>
  <modal-box-full  :is-active.sync="isActive" @confirm="confirm" confirm-type="is-success" confirm-label="Uždaryti">
      <card-component :title="viewSubject" @header-icon-click="fillChartData" icon="finance" header-icon="reload">
        <div v-if="defaultChart.chartData" class="chart-area">
          <line-chart style="height: 100%"
                      ref="bigChart"
                      chart-id="big-line-chart"
                      :chart-data="defaultChart.chartData"
                      :extra-options="defaultChart.extraOptions">
          </line-chart>
        </div>
      </card-component>
  </modal-box-full>
</template>

<script>
import ModalBoxFull from "./ModalBoxFull";
import * as chartConfig from '@/components/Charts/chart.config'
import LineChart from '@/components/Charts/LineChart'
import CardComponent from '@/components/CardComponent'

export default {
  name: "ModalPardavimaitBox",
  components: {ModalBoxFull, LineChart, CardComponent},
  props:{
    isActive: {
      type: Boolean,
      default: false
    },
    viewSubject: {
      type: String,
      default: ''
    },
    viewPardavimai: {
      type: Array,
      default: null
    },
    viewPardavimaiLt: {
      type: Array,
      default: null
    },
    viewPardavimaiLv: {
      type: Array,
      default: null
    },
    viewLabel: {
      type: Array,
      default: null
    }
  },
  data(){
    return{
      defaultChart: {
        chartData: null,
        extraOptions: chartConfig.chartOptionsMain
      },
      pardavimai: this.viewPardavimai,
      label: this.viewLabel,
    }
  },
  computed: {
  },

watch: {
    $props: {
      handler() {
        this.fillChartData();
      },
      deep: true,
      immediate: true,
    },
},

   mounted() {
    },
  created: function() {
    //console.log(this.viewPardavimai);
    //this.$parent.$on('update', this.uzklausa);
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm')
    },

    fillChartData () {
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
            data: this.viewPardavimai
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
            data: this.viewPardavimaiLt
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
            data: this.viewPardavimaiLv
          }
        ],
        labels: this.viewLabel
      }
    }
  },
}
</script>

