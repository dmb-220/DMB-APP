<template>
  <section class="section is-main-section">
      <card-component title="INFORMACIJA" icon="account-multiple">
        Duomenys atnaujinti<br>
        Likučiai: 2019-11-13<br>
        Pardavimai: 2019-10-13 --- 2019-11-13<br>
        MAX:
        <ul id="example-1">
          <li v-for="idx in info">
            {{ idx.preke }} - {{ idx.sandelis }} -- {{ idx.kiekis }} -- {{ idx.pavadinimas }}
          </li>
        </ul>
      </card-component>     
    </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'

export default {
  name: 'pagrindinis',
  components: {CardComponent},
  data () {
    return {
      isLoading: false,
      info: [],
    }
  },
  computed: {
  },
  created () {
    this.getData()
  },
  methods: {
      getData () {
      this.isLoading = true
      this.axios
      .get('/testas')
      .then(response => {
        this.isLoading = false
        this.info = response.data.data;
        //this.paieska = response.data.paieska;
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
