<template>
  <div>
    <hero-bar>
      Forms
      <router-link slot="right" to="/" class="button">
        Dashboard
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Forms" icon="ballot">
        <form @submit.prevent="submit">
          <b-field label="CSV failas:" horizontal>
          <file-picker v-model="ikelimas.csv"/>
          </b-field>
          <hr>
          <b-field label="" class="has-check" horizontal>
          <radio-picker :options="{one:'LIETUVA',two:'LATVIJA',three:'ESTIJA'}" v-model="ikelimas.salis"></radio-picker>
          </b-field>
          <hr>
          <b-field label="" class="has-check" horizontal>
          <radio-picker :options="{one:'PARDAVIMAI',two:'LIKUTIS'}" v-model="ikelimas.paskirtis"></radio-picker>
          </b-field>
          <hr>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary">Įkelti</b-button>
              </div>
              <div class="control">
                <b-button type="is-primary is-outlined" @click="reset">Reset</b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
    </section>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import mapValues from 'lodash/mapValues'
import RadioPicker from '@/components/RadioPicker'
import FilePicker from '@/components/FilePicker'
import HeroBar from '@/components/HeroBar'
export default {
  name: 'Forms',
  components: { HeroBar, FilePicker, RadioPicker, CardComponent },
  data () {
    return {
      isLoading: false,
      ikelimas: {
        salis: null,
        paskirtis: null,
        csv: null
      }
    }
  },
  computed: {
  },
  methods: {
    submit () {

    },
    reset () {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })

      this.$buefy.snackbar.open({
        message: 'Reset successfully',
        queue: false
      })
    }
  }
}
</script>