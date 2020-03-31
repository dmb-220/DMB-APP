<template>
  <div>
    <section class="section is-main-section">

      <card-component title="Administravimas" icon="account-multiple">
        valstybes, parduotuves, prekiu grupes, ...
      </card-component>
    </section>
  </div>

</template>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import RadioPicker from '@/components/RadioPicker'

export default {
  name: "Testas",
  components: {CardComponent, RadioPicker},
  data () {
    return {
      isLoading: false,
      duomenys: [],
      defaultOpenedDetails: [1],
    }
  },
  computed: {
  },
  created () {
    //this.paieska_post()
    this.getData()
  },
  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    getData () {
      this.isLoading = true
      this.axios
      .get('/testas')
      .then(response => {
        this.isLoading = false
        //this.sandelis = response.data.sandelis;
        this.duomenys= response.data.likutis;
        //this.store = response.data.store;

        //this.rodyti_lt = response.data.salis.LT ? true : false
        //this.rodyti_lv = response.data.salis.LV ? true : false
        //this.rodyti_ee = response.data.salis.EE ? true : false
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
