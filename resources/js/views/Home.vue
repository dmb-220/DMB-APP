<template>
    <section class="section is-main-section">
      <card-component title="Statistika" icon="finance">  
        <b-field horizontal>
            <b-input placeholder="Paieška..." type="search" icon="magnify"></b-input>    
          <div class="control">
            <b-button native-type="submit" type="is-primary">Ieškoti</b-button>
          </div>
        </b-field>
        <hr>       
        <b-table
        :data="pardavimai"
        ref="table"
        :opened-detailed="defaultOpenedDetails"
        detailed
        detail-key="sandelys"
        @details-open="(row, index) => $buefy.toast.open(`Expanded ${row.sandelys}`)"
        :show-detail-icon="showDetailIcon"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column style="background-color:yellow" label="Sandelis" field="sandelys" sortable>
            <a @click="toggle(props.row)">
                {{ props.row.sandelys }}
            </a>
          </b-table-column>
          <b-table-column label="Kiekis" field="kiek" sortable>
            {{ props.row.kiek }}
          </b-table-column>
        </template>

        <template slot="detail" slot-scope="props">
            <ul>
              <li v-for="item in props.row.prekes">
                {{ item.preke }} - {{ item.kiekis }}
              </li>
            </ul>
        </template>

        <section class="section" slot="empty">
          <div class="content has-text-grey has-text-centered">
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
  name: 'home',
  components: { CardComponent },
  data () {
    return {
     isLoading: false,
     defaultOpenedDetails: [1],
     showDetailIcon: false,
     pardavimai: [],
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
