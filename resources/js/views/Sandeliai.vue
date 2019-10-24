<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
          Valdymas
      </card-component>

      <card-component title="SANDELIS" icon="account-multiple">
          Sandelis
      </card-component>
    </section>
  </div>

</template>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import CardToolbar from '@/components/CardToolbar'
export default {
  name: "Sandeliai",
  components: {CardToolbar, CardComponent},
  data () {
    return {
      isLoading: false,
      likutis: [],
      defaultOpenedDetails: [1],
      ieskoti: '',
      paieska: '',
      rodyti_lt: true,
     rodyti_lv: true,
     rodyti_ee: true,
     salis: '',
     rikiuoti: false,
    }
  },
  computed: {

  },
  created () {
    //this.getData()
  },
  methods: {
    //print() {
      // Pass the element id here
     // this.$htmlToPaper('printMe');
    //},
    
  getData () {
      this.isLoading = true
      this.axios
      .get('/likutis')
      .then(response => {
        this.isLoading = false
        this.rikiuoti = response.data.rikiuoti ? false : true;
        this.likutis = response.data.prekes;
        this.paieska = response.data.paieska;
        
        this.rodyti_lt = response.data.salis.LT ? true : false
        this.rodyti_lv = response.data.salis.LV ? true : false
        this.rodyti_ee = response.data.salis.EE ? true : false
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
