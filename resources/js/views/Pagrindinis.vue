<template>
  <section class="section is-main-section">
      <card-component title="INFORMACIJA" icon="account-multiple">
        Duomenys atnaujinti<br>
        Likučiai: {{ info.likutis }}<br>
        Pardavimai: {{ info.pardavimai}}<br>
        <br>
        <b-table
        bordered
        hoverable
        :narrowed="true"
        :data="duomenys"
        sort-icon="arrow-up"
        @details-open="(row, index) => $buefy.toast.open(`Išskleista ${ row.preke } prekė!`)"
        :loading="isLoading">
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
      duomenys: [],
      sk: ''
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
        this.duomenys = response.data.likutis;
        //this.sk = response.data.sk;
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
