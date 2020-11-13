<template>
  <modal-box-full  :is-active.sync="isActive" @confirm="confirm" confirm-type="is-success" confirm-label="Uždaryti">
      <card-component :title="viewSubject" @header-icon-click="fillChartData" icon="finance" header-icon="reload">
        <div v-if="defaultChart.chartData" class="chart-area">
          <bar-chart style="height: 100%"
                      ref="bigChart"
                      chart-id="big-bar-chart"
                      :chart-data="defaultChart.chartData"
                      :extra-options="defaultChart.extraOptions">
          </bar-chart>
        </div>
      </card-component>
  </modal-box-full>
</template>

<script>
import ModalBoxFull from "./ModalBoxFull";
import * as barConfig from '@/components/Charts/bar.config'
import BarChart from '@/components/Charts/BarChart'
import CardComponent from '@/components/CardComponent'

export default {
  name: "ModalPardavimaitBox",
  components: {ModalBoxFull, BarChart, CardComponent},
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
    viewLabel: {
      type: Array,
      default: null
    }
  },
  data(){
    return{
      defaultChart: {
        chartData: null,
        extraOptions: barConfig.chartOptionsMain
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
            //label: 'VISO',
            fill: true,
            borderColor: barConfig.chartColors.default.info,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: barConfig.chartColors.default.info,
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: barConfig.chartColors.default.info,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.viewPardavimai
          },
        ],
        labels: this.viewLabel
      }
    }
  },
}
</script>

