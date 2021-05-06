<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        ...
      </card-component>
      <card-component title="LT to EE" icon="account-multiple">
      <hr>
        LT:
        <br>
        <wysiwyg v-model="html_lt" />
        <hr>
        EE:
        <br>
        <wysiwyg v-model="html_ee" />
      </card-component>
    </section>
  </div>

</template>

<style  scoped>
    
</style>

<script>
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import CardToolbar from '@/components/CardToolbar'

// Advanced Use - Hook into Quill's API for Custom Functionality
import { VueEditor, Quill } from "vue2-editor";

export default {
  name: "Replace",
  components: {CardToolbar, CardComponent, VueEditor},
  data () {
    return {
      html_lt: '',
      html_ee: '',
    }
  },
  watch: {
            html_lt: function (value) {
              //console.log(value);
              this.html_ee = value;
              this.html_ee = this.html_ee.replace(/PAGAMINTA LIETUVOJE/gi, "TOODETUD LEEDUS");

              this.html_ee = this.html_ee.replace("Modelio ūgis 164 cm", "Modelli kasv 164cm");
              this.html_ee = this.html_ee.replace("ji vilki", "ta kannab");
              this.html_ee = this.html_ee.replace("dydžio", "number");
              this.html_ee = this.html_ee.replace("sijoną", "seelikut");
              this.html_ee = this.html_ee.replace("palaidinę", "pluusi");
              this.html_ee = this.html_ee.replace("megztinį", "kampsunit");
              this.html_ee = this.html_ee.replace("džinsus", "teksasid");
              this.html_ee = this.html_ee.replace("paltą", "mantlit");
              this.html_ee = this.html_ee.replace("suknelę", " kleiti");

              this.html_ee = this.html_ee.replace("Spalva:", "Värv:");
              this.html_ee = this.html_ee.replace(/juoda/gi, "must");
              this.html_ee = this.html_ee.replace(/mėlyna/gi, "sinine");
              this.html_ee = this.html_ee.replace(/rožinė/gi, "fuksiaroosa");
              this.html_ee = this.html_ee.replace(/žalia/gi, "roheline");
              this.html_ee = this.html_ee.replace(/raudona/gi, "punane");
              this.html_ee = this.html_ee.replace(/balta/gi, "valge");
              this.html_ee = this.html_ee.replace(/geltona/gi, "kollane");
              this.html_ee = this.html_ee.replace(/ruda/gi, "pruun");

              this.html_ee = this.html_ee.replace("Sudėtis:", "Koostis:");
              this.html_ee = this.html_ee.replace(/Poliesteris/gi, "polüester");
              this.html_ee = this.html_ee.replace(/Medvilnė/gi, "puuvill");
              this.html_ee = this.html_ee.replace(/Viskozė/gi, "viskoos");
              this.html_ee = this.html_ee.replace(/Elastanas/gi, "elastaan");
              this.html_ee = this.html_ee.replace(/Nailonas/gi, "nailon");
              this.html_ee = this.html_ee.replace(/Linas/gi, "lina");
              this.html_ee = this.html_ee.replace(/Dirbtinė oda/gi, "kunstnahk");
              this.html_ee = this.html_ee.replace(/Poliviskozė/gi, "polyviskoos");
              this.html_ee = this.html_ee.replace(/Poliamidas/gi, "polüamiid");
              this.html_ee = this.html_ee.replace(/Kašmyras/gi, "kashmir");
              
              this.html_ee = this.html_ee.replace("Kilmės šalis", "Päritoluriik");
              this.html_ee = this.html_ee.replace("Kilmės", "Päritoluriik");
              this.html_ee = this.html_ee.replace("šalis", " ");
              this.html_ee = this.html_ee.replace("Kinija", "Hiina");
              this.html_ee = this.html_ee.replace("Gaminio matmenys", "Toote mõõtmed");
              this.html_ee = this.html_ee.replace("Dydžių lentelės", "Toote mõõtmed");
              this.html_ee = this.html_ee.replace("Dydžių lentelė", "Toote mõõtmed");
              this.html_ee = this.html_ee.replace("Apatinis trikotažas nekeičiamas ir negrąžinamas.", "Aluspesu ei saa vahetada ega tagastada.");

              this.html_ee = this.html_ee.replace("Liemenėlė", "Pesu");

              this.html_ee = this.html_ee.replace("Krūtinės apimtis", "Rinnaümbermõõt");
              this.html_ee = this.html_ee.replace("Krūtinės", "Rinnaümbermõõt");
              this.html_ee = this.html_ee.replace("apimtis", " ");
              this.html_ee = this.html_ee.replace("Dydis", "Suurus");
              this.html_ee = this.html_ee.replace("Liemens apimtis", "Vööümbermõõt");
              this.html_ee = this.html_ee.replace("Liemens", "Vööümbermõõt");
              this.html_ee = this.html_ee.replace("apimtis", " ");
              this.html_ee = this.html_ee.replace("Klubų apimtis", "Puusaümbermõõt");
              this.html_ee = this.html_ee.replace("Klubų", "Puusaümbermõõt");
              this.html_ee = this.html_ee.replace("apimtis", " ");              
              this.html_ee = this.html_ee.replace(/Ilgis/gi, "Pikkus");
              this.html_ee = this.html_ee.replace(/rankovių ilgis/gi, "Varruka pikkus");

              this.html_ee = this.html_ee.replace("Prekių atspalviai gali skirtis nuo matomų nuotraukose dėl jūsų kompiuterio, telefono ar kito įrenginio ekrano nustatymų.",
               "Kaupade värvitoonid võivad erineda piltidel nähtavatest teie arvuti, telefoni või muu seadme ekraani seadete tõttu.");
              this.html_ee = this.html_ee.replace("Prekių atspalviai gali skirtis nuo matomų nuotraukose dėl jūsų kompiuterio, telefono ar kito įrenginio ekrano nustatymų.",
               "Kaupade värvitoonid võivad erineda piltidel nähtavatest teie arvuti, telefoni või muu seadme ekraani seadete tõttu.");
            }
        },

  computed: {
  },

  created () {
  },

  methods: {
  }
   
}
</script>

