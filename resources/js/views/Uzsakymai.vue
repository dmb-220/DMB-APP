<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field grouped>
          <b-field label="Vardas Pavardė:" expanded>
            <b-input v-model="vardas" expanded required></b-input>
          </b-field>
          <b-field label="Užsakymo numeris:" expanded>
            <b-input v-model="numeris" required></b-input>
          </b-field>
        </b-field>
        <b-field label="Adresas:" expanded>
          <b-input v-model="adresas" type="textarea" required></b-input>
        </b-field>
        <b-field grouped>
        <b-field label="Telefono numeris" expanded>
            <b-input v-model="telefonas" required></b-input>
        </b-field>
        <b-field label="El. paštas" expanded>
            <b-input v-model="email" type='email'></b-input>
        </b-field>
    </b-field>
        <div class="buttons">
            <b-button type="is-black" @click="issaugoti">Išsaugoti</b-button>
        </div>
      </card-component>
      <card-component title="UŽSAKYMAI" icon="account-multiple">
        <div class="columns">
          <div class="column has-text-centered has-text-weight-bold">Užsakymai: {{duomenys.length }}
        </div>
        </div>
        <b-field grouped group-multiline>
            <b-select v-model="perPage" :disabled="!isPaginated">
                <option value="50">50 įrašų puslapyje</option>
                <option value="100">100 įrašų puslapyje</option>
                <option value="150">150 įrašų puslapyje</option>
                <option value="200">200 įrašų puslapyje</option>
            </b-select>
            <div class="control is-flex">
                <b-switch v-model="isPaginated">Puslapiai</b-switch>
            </div>
        </b-field>
      <b-table
        :paginated="isPaginated"
        :per-page="perPage"
        :pagination-position="paginationPosition"
        bordered
        :narrowed="true"
        :data="duomenys"
        sort-icon="arrow-up"
        :loading="isLoading">
        <template slot-scope="props">
          <b-table-column label="Vardas Pavarde" field="vardas">
                {{props.row.vardas}}
          </b-table-column>
          <b-table-column v-if='props.row.isvesta' :style="{'background-color': 'greenyellow'}" label="Užsakymo numeris"  field="numeris">
                {{ props.row.numeris }}
          </b-table-column>
          <b-table-column v-else label="Užsakymo numeris"  field="numeris">
                {{ props.row.numeris }}
          </b-table-column>
          <b-table-column label="Adresas" field="adresas">
                {{props.row.adresas}}
          </b-table-column>
          <b-table-column label="DATA" field="updated_at" sortable>
                {{props.row.created_at && props.row.created_at.split("T")[0]}}
          </b-table-column>
          <b-table-column class="has-text-centered" label=" " field="patvirtinta">
            <button @click="patvirtinti_uzsakyma(props.row)" v-if="props.row.patvirtinta == '0'" class="button">
            <b-icon icon="close-octagon" type="is-danger"></b-icon>
            </button>
            <button v-else class="button" disabled>
            <b-icon icon="checkbox-marked-outline" type="is-success"></b-icon>
            </button>
            <button @click="patvirtinti_isvezima(props.row)" v-if="props.row.isvesta == '0'" class="button">
            <b-icon icon="arrow-decision-outline" type="is-danger"></b-icon>
            </button>
            <button v-else class="button" disabled>
            <b-icon icon="arrow-decision-outline" type="is-success"></b-icon>
            </button>
          </b-table-column>
          <b-table-column label="Veiksmai" >
            <button v-if="props.row.patvirtinta == '1'" class="button" disabled>
              <b-icon icon="file-document-edit" type="is-success"></b-icon>
            </button>
            <button v-else class="button" @click="atidaryti_edit(props.row)">
              <b-icon icon="file-document-edit" type="is-success"></b-icon>
            </button>
            <button v-if="props.row.patvirtinta == '1'" class="button" disabled>
              <b-icon icon="delete" type="is-danger"></b-icon>
            </button>
            <button v-else class="button" @click="delete_uzsakymas(props.row.id)">
              <b-icon icon="delete" type="is-danger"></b-icon>
            </button>

            <button class="button" @click="print_uzsakymas(props.row)">
              <b-icon icon="printer" type="is-info"></b-icon>
            </button>
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

      <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">
                    <div class="content">
                       <b-field horizontal label="Vardas Pavardė:">
                        <b-input v-model="edit.vardas" expanded required></b-input>
                      </b-field>
                      <b-field horizontal label="Užsakymo numeris:">
                        <b-input v-model="edit.numeris" expanded required></b-input>
                      </b-field>
                      <b-field horizontal label="Adresas:">
                        <b-input v-model="edit.adresas" type="textarea" expanded required></b-input>
                      </b-field>
                      <b-field horizontal label="Telefono numeris:">
                        <b-input v-model="edit.telefonas" expanded required></b-input>
                      </b-field>
                      <b-field horizontal label="El. paštas:">
                        <b-input v-model="edit.email" expanded></b-input>
                      </b-field>
                      <div class="buttons">
                          <b-button type="is-black" @click="edit_uzsakymas(edit.id)" expanded>Atnaujinti</b-button>
                      </div>
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
  </div>

</template>

<script>

import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import RadioPicker from '@/components/RadioPicker'

import * as jsPDF  from "jspdf"
import logo from '@/logo'
import ptsans from '@/fonts'

export default {
  name: "Užsakymai",
  components: {CardComponent, RadioPicker},
  data () {
    return {
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 50,

      isCardModalActive: false,
      isLoading: false,
      edit: {
        id: "",
        vardas: "",
        numeris: "",
        adresas: "",
        telefonas: "",
        email: "",
        patvirtinta: "",
        isvesta: ""
      },
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
      this.$buefy.dialog.confirm({
        title: 'Ištrinti',
        message: 'Ar tikrai norite ištrinti užsakymo duomenis?',
        confirmText: 'Ištrinti',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () =>
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
      })
    },
    patvirtinti_uzsakyma(id){
      this.$buefy.dialog.confirm({
        title: 'Patvirtinti',
        message: 'Ar tikrai norite patvirtinti užsakymo duomenis? ',
        confirmText: 'Patvirtinti',
        type: 'is-success',
        hasIcon: true,
        onConfirm: () =>
        axios
        .patch(`/uzsakymai/${id.id}`, {
            vardas: id.vardas,
            numeris: id.numeris,
            adresas: id.adresas,
            telefonas: id.telefonas,
            email: id.email,
            patvirtinta: 1,
            isvesta: id.isvesta
            })
        .then(response => {
            this.$buefy.toast.open({
                message: `Užsakymas patvirtintas`,
                type: 'is-info',
                queue: false
              })
            this.getData()
        })
        .catch( err => {
        console.log("PATCH:");
        console.log(err.message);
        })
      })
    },
    patvirtinti_isvezima(id){
      this.$buefy.dialog.confirm({
        title: 'Patvirtinti',
        message: 'Ar tikrai norite patvirtinti užsakymo išvežimą? ',
        confirmText: 'Patvirtinti',
        type: 'is-success',
        hasIcon: true,
        onConfirm: () =>
        axios
        .patch(`/uzsakymai/${id.id}`, {
            vardas: id.vardas,
            numeris: id.numeris,
            adresas: id.adresas,
            telefonas: id.telefonas,
            email: id.email,
            patvirtinta: id.patvirtinta,
            isvesta: 1
            })
        .then(response => {
            this.$buefy.toast.open({
                message: `Išvežimas patvirtintas`,
                type: 'is-info',
                queue: false
              })
            this.getData()
        })
        .catch( err => {
        console.log("PATCH:");
        console.log(err.message);
        })
      })
    },
    atidaryti_edit(id){
      this.edit.id = id.id;
      this.edit.vardas = id.vardas;
      this.edit.numeris = id.numeris;
      this.edit.adresas = id.adresas;
      this.edit.telefonas = id.telefonas;
      this.edit.email = id.email;
      this.edit.patvirtinta = id.patvirtinta
      this.edit.isvesta = id.isvesta
      this.isCardModalActive = true;
    },
    edit_uzsakymas(id){
      axios
      .patch(`/uzsakymai/${id}`, {
          vardas: this.edit.vardas,
          numeris: this.edit.numeris,
          adresas: this.edit.adresas,
          telefonas: this.edit.telefonas,
          email: this.edit.email,
          patvirtinta: this.edit.patvirtinta,
          isvesta: this.edit.isvesta
          })
      .then(response => {
          this.$buefy.toast.open({
              message: `Užsakymo duomenys atnaujinti sėkmingai`,
              type: 'is-info',
              queue: false
            })
          this.isCardModalActive = false;
          this.getData()
      })
      .catch( err => {
      console.log("PATCH:");
      console.log(err.message);
      })
    },
    print_uzsakymas(id){
      //suskaldom adresa, pagal nauja eilute
      var adresas = id.adresas.split(/\n/)[0];
      var adresas2 = id.adresas.split(/\n/)[1]
      var adresas3 = id.adresas.split(/\n/)[2];
      var adresas4 = id.adresas.split(/\n/)[3];

      var doc = new jsPDF(
        {
          orientation: 'p',
          unit: 'mm',
          format: 'a6',
          }
      );

      doc.addFileToVFS('PTSans.ttf', ptsans);

      doc.addFont('PTSans.ttf', 'custom', 'normal');
      doc.setFont('custom');
      doc.setDrawColor(0);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(10, 5, 90, 135, 3, 3, "FD");

      doc.setFontSize(24);
      doc.setLineWidth(1);
      doc.line(15, 10, 95, 10);
      doc.text(id.numeris, 55, 20, null, null, "center");
      doc.setLineWidth(1);
      doc.line(15, 25, 95, 25);

      doc.setFontSize(16);
      doc.text(15, 35, "GAVĖJAS:");
      doc.setFontSize(12);
      doc.text(15, 40, id.vardas);
      doc.text(15, 45, adresas);
      doc.text(15, 50, adresas2);
      if(adresas3){
        doc.text(15, 55, adresas3);
        }
      if(adresas4){
        doc.text(15, 60, adresas4);
        }

      doc.setLineWidth(0.5);
      doc.line(15, 63, 95, 63);

      doc.setFontSize(16);
      doc.text("KONTAKTAI:", 95, 70, null, null, "right");
      doc.setFontSize(12);
      doc.text(id.telefonas, 95, 75, null, null, "right");
      if(id.email){
        doc.text(id.email, 95, 80, null, null, "right");
      }

      doc.setLineWidth(1);
      doc.line(15, 90, 95, 90);
      
      doc.setFontSize(18);
      doc.text("UAB Sidonas ir KO", 55, 100, null, null, "center");
      doc.setFontSize(8);
      doc.text("Įmonės kodas: 180886050", 55, 103, null, null, "center");
      doc.text("PVM mokėtojo kodas: LT808860515", 55, 106, null, null, "center");
      doc.text("Kęstučio g. 20-1, LT-87120 Telšiai", 55, 109, null, null, "center");

      doc.setFontSize(12);
      doc.text("+37060234353", 95, 115, null, null, "right");
      doc.text("pagalba@sidonas.lt", 95, 120, null, null, "right");

      doc.addImage(logo, "JPEG", 20, 125, 70, 10);

      doc.save('uzsakymas.pdf');
    },
    issaugoti(){
      if(this.email == ""){
        this.email = "nera@elpasto.lt";
      }
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
            this.vardas = "";
            this.numeris = "";
            this.adresas = "";
            this.telefonas = "";
            this.email = "";
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