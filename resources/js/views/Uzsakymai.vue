<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
      <b-field horizontal label="Vardas Pavardė:">
          <b-input v-model="vardas" expanded required></b-input>
        </b-field>
        <b-field horizontal label="Užsakymo numeris:">
          <b-input v-model="numeris" expanded required></b-input>
        </b-field>
        <b-field horizontal label="Adresas:">
          <b-input v-model="adresas" type="textarea" expanded required></b-input>
        </b-field>
        <b-field horizontal label="Telefono numeris:">
          <b-input v-model="telefonas" expanded required></b-input>
        </b-field>
        <b-field horizontal label="El. paštas:">
          <b-input v-model="email" type='email' expanded required></b-input>
        </b-field>
        <div class="buttons">
            <b-button type="is-black" @click="issaugoti" expanded>Išsaugoti</b-button>
        </div>
      </card-component>
      <card-component title="UŽSAKYMAI" icon="account-multiple">
      <b-table
        bordered
        :narrowed="true"
        :data="duomenys"
        sort-icon="arrow-up"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Vardas Pavarde" field="vardas">
                {{props.row.vardas}}
          </b-table-column>
          <b-table-column label="Užsakymo numeris"  field="numeris">
                {{ props.row.numeris }}
          </b-table-column>
          <b-table-column label="Adresas" field="adresas">
                {{props.row.adresas}}
          </b-table-column>
          <b-table-column label="Telefono numeris" field="telefonas">
                {{props.row.telefonas}}
          </b-table-column>
          <b-table-column label="El. paštas" field="email">
                {{props.row.email}}
          </b-table-column>
          <b-table-column label="DATA" field="updated_at" sortable>
                {{props.row.updated_at && props.row.updated_at.split("T")[0]}}
          </b-table-column>
          <b-table-column label="Pativirtinta" field="patvirtinta">
                {{props.row.patvirtinta}}
          </b-table-column>
          <b-table-column label="Veiksmai" >
            <p class="buttons">
                <a class="button is-small is-primary" @click="edit_uzsakymas(props.row)">Edit</a>
                <a class="button is-small is-danger" @click="delete_uzsakymas(props.row.id)">Delete</a>
                <a class="button is-small is-danger" @click="print_uzsakymas(props.row)">PRINT</a>
            </p>
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
  </div>

</template>

<script>

import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import RadioPicker from '@/components/RadioPicker'
import * as jsPDF  from "jspdf"

export default {
  name: "Užsakymai",
  components: {CardComponent, RadioPicker},
  data () {
    return {
      isLoading: false,
      vardas: "",
      numeris: "",
      adresas: "",
      telefonas: "",
      email: "",
      duomenys: [],
    }
  },
  computed: {

},
  filters: {
    
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
    delete_uzsakymas(id){
      axios
      .delete(`/uzsakymai/${id}/destroy`, {
          })
      .then(response => {
          this.$buefy.toast.open({
              message: `Užsakymo duomenys ištrinti sėkmingai`,
              type: 'is-info',
              queue: false
            })
          this.getData()
      })
      .catch( err => {
      console.log("DELETE:");
      console.log(err.message);
      })
    },
    edit_uzsakymas(id){
      axios
      .patch(`/uzsakymai/${id.id}`, {
          vardas: this.vardas,
            numeris: this.numeris,
            adresas: this.adresas,
            telefonas: this.telefonas,
            email: this.email
          })
      .then(response => {
          this.$buefy.toast.open({
              message: `Užsakymo duomenys atnaujinti sėkmingai`,
              type: 'is-info',
              queue: false
            })
          this.getCompanies()
      })
      .catch( err => {
      console.log("POST:");
      console.log(err.message);
      })
    },
    print_uzsakymas(id){
      var doc = new jsPDF(
        {
          orientation: 'p',
          unit: 'mm',
          format: 'a6',
          putOnlyUsedFonts:true,
          floatPrecision: 16 // or "smart", default is 16
          }
      );

      var adresas = id.adresas.split(', ')[0];
      var adresas2 = id.adresas.split(', ')[1]
      var adresas3 = id.adresas.split(', ')[2];
      doc.setDrawColor(0);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(10, 5, 90, 135, 3, 3, "FD");
      //doc.addImage("http://app.test/images/Sidonas_logo.jpg", "JPEG", 5, 10, 100, 25);
      doc.setFont("arial");
      doc.setFontStyle("bold");
      doc.setFontSize(24);
      doc.text("UAB Sidonas ir KO", 55, 20, null, null, "center");
      doc.setFontStyle("normal");
      doc.setFontSize(8);
      doc.text("Imones kodas: 180886050", 55, 23, null, null, "center");
      doc.text("PVM moketojo kodas: LT808860515", 55, 26, null, null, "center");
      doc.text("Kestucio g. 20-1, LT-87120 Telšiai", 55, 29, null, null, "center");
      doc.setLineWidth(1);
      doc.line(15, 31, 95, 31);

      doc.setFontSize(16);
      doc.setFontStyle("bold");
      doc.text(15, 40, "GAVEJAS:");
      doc.setFontSize(12);
      doc.setFontStyle("normal");
      doc.text(15, 45, id.vardas);
      doc.text(15, 50, adresas);
      doc.text(15, 55, adresas2);
      if(adresas3){
      doc.text(15, 60, adresas3);}

      doc.setLineWidth(1);
      doc.line(15, 63, 95, 63);

      doc.setFontSize(16);
      doc.setFontStyle("bold");
      doc.text("KONTAKTAI", 95, 70, null, null, "right");
      doc.setFontSize(12);
      doc.setFontStyle("normal");
      doc.text(id.telefonas, 95, 75, null, null, "right");
      doc.text(id.email, 95, 80, null, null, "right");
      doc.setFontSize(24);
      doc.setFontStyle("bold");
      doc.setLineWidth(1);
      doc.line(15, 120, 95, 120);
      doc.text(id.numeris, 55, 130, null, null, "center");
      doc.setLineWidth(1);
      doc.line(15, 135, 95, 135);

      doc.save('uzsakymas.pdf');
      console.log(id);
    },
    issaugoti(){
      axios
          .post(`/uzsakymai/store`, {
            vardas: this.vardas,
            numeris: this.numeris,
            adresas: this.adresas,
            telefonas: this.telefonas,
            email: this.email
            })
          .then(response => {
            this.$buefy.toast.open({
              message: `Užsakymo duomenys išsaugoti sėkmingai`,
              type: 'is-info',
              queue: false
            })
            console.log(response.data.status)
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
      .get('/uzsakymai')
      .then(response => {
        this.isLoading = false
        this.duomenys= response.data.data;
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