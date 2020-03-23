<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field label="Pasirinkite:" class="has-check" horizontal>
          <radio-picker :options="{1:'GAMYBA', 2:'PARDAVIMAI'}" v-model="tipas"></radio-picker>
        </b-field>
        <b-field label="Grupė:" horizontal>
            <b-select placeholder="Pasirinkite" expanded>
                <option v-for='(idx, id) in grupes' :key='idx' :value="id">{{ idx }}</option>
            </b-select>
        </b-field>
         <b-field v-if="tipas == 1" label="Dydžiai:" horizontal>
            <b-slider v-model="dydziai" type="is-danger" :min="36" :max="56" :step="2">
            </b-slider>
        </b-field>
        
        <b-field horizontal label="Gaminys:">
            <b-input name="kodas" placeholder="Kodas" expanded></b-input>
            <multiselect v-model="sudetis" tag-placeholder="Pasirinkite sudėti" placeholder="Ieškoti" label="name" track-by="code" 
            :options="sudetys" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
        </b-field>
        <b-field v-if='kiek > 0' horizontal label=" ">
            <b-input type="number" v-for='(idx, id) in sudetis' :key='idx.code' v-model="sudetis[id].kiekis" :placeholder='idx.name' expanded></b-input>
        </b-field>
        <hr>
        <b-field horizontal label="Didmena:">
          
            <b-input name="didmena" placeholder="Kaina" expanded></b-input>
            <b-input name="didmena" placeholder="Kiekis" expanded></b-input>
        </b-field>
        <div class="buttons">
            <b-button type="is-black" expanded>GENERUOTI</b-button>
        </div>
      </card-component>

      <card-component title="GENERUOTI" icon="account-multiple">
        <div  id="printMe">
          </div>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
      </div>
      </card-component>
    </section>
  </div>

</template>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import CheckboxPicker from '@/components/CheckboxPicker'
import RadioPicker from '@/components/RadioPicker'
import Multiselect from 'vue-multiselect'

export default {
  name: "Testas",
  components: {CardComponent, RadioPicker, CheckboxPicker, Multiselect},
  data () {
    return {
      isLoading: false,
      sudetis: [
      ],
      sudetys: [
        { name: 'Polisteris', code: 'poly' },
        { name: 'Viskozė', code: 'visk' },
        { name: 'Elastanas', code: 'elas' },
        { name: 'Medvilnė', code: 'medv' },
        { name: 'Vilna', code: 'viln' },
        { name: 'Linas', code: 'lina' },
      ],
      grupes: [
        "SUKNELES",
        "PALAIDINES",
        "PALTAI",
      ],
      tipas: 1,
      dydziai: [38, 54],
      miestai: [],
      checkbox: [],
      rodyti_lv: true,
      rodyti_ee: false,
      rodo: '',
      data: '2020',
      nr: '202000',
      date: '',
    }
  },
  computed: {
    kiek: function(){
      return this.sudetis.length;
    }
  },
  created () {
    //this.paieska_post()
    //this.getData()
  },
  methods: {
    print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    paieska(){
        axios
          .post(`/generuoti/store`, {
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
            miestai: this.checkbox,
            data: this.data,
            //nr: this.nr
            })
          .then(response => {
            console.log(response.data.data)
            this.getData()
        })
          .catch( err => {
            this.$buefy.toast.open({
              message: `Error: ${err.message}`,
              type: 'is-danger',
              queue: false
            })
          })
    },
    getData () {
      this.isLoading = true
      this.axios
      .get('/generuoti')
      .then(response => {
        this.isLoading = false
        //this.sandelis = response.data.sandelis;
        this.duomenys= response.data.likutis;
        this.sk_lt = response.data.sk_lt;
        this.centai = response.data.centai;
        this.miestai = response.data.miestai;
        this.date = response.data.data;
        //this.checkbox = response.data.check;
        //this.rodyti_lt = response.data.salis.LT ? true : false
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

<style scoped>

</style>
