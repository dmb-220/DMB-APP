<template>
  <section class="section is-main-section">
      <card-component title="INFORMACIJA" icon="account-multiple">
        Duomenys atnaujinti<br>
        Likučiai: {{ info.likutis }}<br>
        Pardavimai: {{ info.pardavimai}}<br>
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

export default {
  name: 'pagrindinis',
  components: {CardComponent},
  data () {
    return {
      isLoading: false,
      info: [],
      duomenys: [],
      duomenys2: [],
      duomenys3: [],
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
        this.duomenys2 = response.data.likutis2;
        this.duomenys3 = response.data.likutis3;
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
