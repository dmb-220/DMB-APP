<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field label=" " class="has-check" horizontal>
          <radio-picker :options="{1:'GAMYBA', 2:'PIRKIMAS'}" v-model="tipas"></radio-picker>
        </b-field>
        <b-field label="Grupė:" horizontal>
            <b-select placeholder="Pasirinkite" expanded>
                <option v-for='(idx, id) in grupes' :key='idx' :value="id">{{ idx }}</option>
            </b-select>
        </b-field>
        <b-field horizontal label="Gaminys:">
            <b-input v-model="kodas" placeholder="Kodas" expanded></b-input>
            <multiselect v-model="sudetis" tag-placeholder="Pasirinkite sudėti" placeholder="Pasirinkite sudėtį" label="name_LT" track-by="code" 
            :options="sudetys" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
        </b-field>
        <b-field v-if='kiek > 0' horizontal label=" ">
            <b-input type="number" v-for='(idx, id) in sudetis' :key='idx.code' v-model="sudetis[id].kiekis" :placeholder='idx.name' expanded></b-input>
        </b-field>
        <b-field v-if="tipas == 1" label="Dydžiai:" horizontal>
          <b-slider v-model="dydziai" type="is-danger" :min="36" :max="56" :step="2">
          </b-slider>
        </b-field>
        <b-field v-if="tipas == 1" horizontal label="Kiekiai">
        <b-input v-for='(idx, id) in listas' :key='id' v-model="list[id].kiek" :placeholder='idx.raide' expanded></b-input>
        </b-field>
        <hr>
        <b-field horizontal label=" ">
            <b-checkbox v-model="didmena">DIDMENA</b-checkbox>
        </b-field>
        <b-field v-show="didmena" horizontal label="Didmena:">
          <b-input name="didmena_kaina" placeholder="Kaina" expanded></b-input>
          <b-input name="didmena_kiekis" placeholder="Kiekis" expanded></b-input>
        </b-field>
        <div class="buttons">
            <b-button type="is-black" @click="generuoti" expanded>GENERUOTI</b-button>
        </div>
      </card-component>

      <card-component title="GENERUOTI" icon="account-multiple">
        <b-table
        bordered
        :narrowed="true"
        :data="csv"
        sort-icon="arrow-up"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Kodas" field="Kodas" sortable>
                {{props.row.Kodas}}
          </b-table-column>
          <b-table-column label="Pav. LT"  field="Pav_LT">
                {{ props.row.Pav_LT }}
          </b-table-column>
          <b-table-column label="Sudetis LT" field="Sudetis_LT" sortable>
                {{props.row.Sudetis_LT}}
          </b-table-column>
          <b-table-column label="Sudetis LV" field="Sudetis_LV" sortable>
                {{props.row.Sudetis_LV}}
          </b-table-column>
          <b-table-column label="Sudetis EE" field="Sudetis_EE" sortable>
                {{props.row.Sudetis_EE}}
          </b-table-column>
          <b-table-column label="Kiekis" field="kiekis" sortable>
                {{props.row.kiekis}}
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
      <div class="buttons">
        <b-button v-if="csv.length > 0" size="is-medium" icon-left="printer" type="is-dark" @click="csvExport(csv)">Atsisiusti</b-button>
        <b-button v-else disable size="is-medium" icon-left="printer" type="is-dark">Atsisiusti</b-button>
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
      csv: [],
      raides: {36: "A", 38: "B", 40: "C", 42: "D", 44: "E", 46: "F", 48: "H", 50: "G", 52: "I", 54: "J", 56: "K"},
      isLoading: false,
      sudetis: [
        { name_LT: 'Viskozė', name_LV: "Viskoze", name_EE: "Viskoos", code: 'visk', kiekis: "75" },
        { name_LT: 'Elastanas', name_LV: "Elastāns", name_EE: "Elastaan", code: 'elas', kiekis: "25" }
        ],
      list: [],
      sudetys: [
        { name_LT: 'Polisteris', name_LV: "Poliesters", name_EE: "Polüester", code: 'poly' },
        { name_LT: 'Viskozė', name_LV: "Viskoze", name_EE: "Viskoos", code: 'visk' },
        { name_LT: 'Elastanas', name_LV: "Elastāns", name_EE: "Elastaan", code: 'elas' },
        { name_LT: 'Medvilnė', name_LV: "Kokvilna", name_EE: "Puuvill", code: 'medv' },
        { name_LT: 'Vilna', name_LV: "Vilna", name_EE: "Vill", code: 'viln' },
        { name_LT: 'Linas', name_LV: "Veļa", name_EE: "Linane", code: 'lina' },
      ],
      grupes: [
        "SUKNELES",
        "PALAIDINES",
        "PALTAI",
      ],
      kodas: 'TSD-1532',
      tipas: 1,
      intervalas: 2,
      dydziai: [38, 54],
      didmena: false,
      checkbox: [],
      rodyti_lv: true,
      rodyti_ee: false,
      rodo: '',
    }
  },
  computed: {
    kiek: function(){
      return this.sudetis.length;
    },
    listas() {
        var total = [];
        var i;
        var x = 0;
        for (i = this.dydziai[0]; i <= this.dydziai[1]; i = i + this.intervalas) {
            total[x++] = {dydis: i, raide: this.raides[i]};
        }
        this.list = total;
        return total;
      },
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
    csvExport(arrData) {
      let csvContent = "data:text/csv;charset=utf-8,"+'\uFEFF';
      csvContent += [
        Object.keys(arrData[0]).join(";"),
        ...arrData.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "Si. (1).csv");
      link.click();
    },
    generuoti(){
      var total = [];
      var i;
      var x = 0;
      var sud_LT = "";
      var sud_LV = "";
      var sud_EE = "";
      var kieka;
      this.sudetis.forEach(function(item){
        sud_LT += item.name_LT+" "+item.kiekis+"% ";
        sud_LV += item.name_LV+" "+item.kiekis+"% ";
        sud_EE += item.name_EE+" "+item.kiekis+"% ";
      });
      for (i = this.dydziai[0]; i <= this.dydziai[1]; i = i + this.intervalas) {
        kieka = this.list[x];
          total[x++] = {
            Kodas: this.kodas+"-"+this.raides[i], Pav_LT: "Suknelė", Sudetis_LT: sud_LT, Sudetis_LV: sud_LV, Sudetis_EE: sud_EE, kiekis: kieka.kiek
            };
      }
      this.csv = total;
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
