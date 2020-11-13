<template>
    <section class="section is-main-section">

      <modal-statistika-box  
        :is-active="isModalView" 
        :view-subject="viewObjectName" 
        :view-pardavimai="viewName"
        :view-label="labelName" 
        @confirm="viewConfirm"/>

      <card-component title="VALDYMAS" icon="finance">
        <b-field position="is-centered">
            <b-input placeholder="Paieška..."
              @keyup.native.enter="paieska_post" 
              v-model="ieskoti"
              type="search"
              icon="magnify"
              expanded>
            </b-input>
            <p class="control">
                <button class="button is-primary" @click="paieska_post">Ieškoti</button>
            </p>
        </b-field>
        <b-field>
            <b-checkbox :value="false" v-model="paieska_big" type="is-info">Aktivuoti išplėstinę paieška</b-checkbox>
        </b-field>
        <b-field label="">
            <b-select placeholder="Pasirinkite..." @change.native="keisti_grupe" v-model="grupe" icon="earth" expanded>
              <option v-for="(grup, index) in grupes" :key="index" :value="index">
                {{ grup }} - {{ grupes_lv[grup] }}
              </option>
            </b-select>
          </b-field>
        <b-field horizontal>
          <b-button :type="rodyti_lt ? 'is-primary' : 'is-dark'" @click="change_lt()">LIETUVA</b-button>
          <b-button :type="rodyti_lv ? 'is-warning' : 'is-dark'" @click="change_lv()">LATVIJA</b-button>
          <b-button :type="rodyti_ee ? 'is-danger' : 'is-dark'" @click="change_ee()">ESTIJA</b-button>
        </b-field>
        <b-field horizontal>
            <b-button :type="pirk ? 'is-info' : 'is-dark'" @click="change_pirk()">GAMYBA</b-button>
            <b-button :type="gam ? 'is-info' : 'is-dark'" @click="change_gam()">PIRKIMAI</b-button>
        </b-field>
        <b-field>
          <b-switch v-model="rikiuoti" @click.native="switch_post">
            Veikia su mūsų GAM gaminiais! 
          </b-switch>
        </b-field>
        </card-component>

      <card-component title="STATISTIKA" icon="account-multiple">
        <div  id="printMe">
          <div class="columns">
            <div class="column has-text-centered has-text-weight-bold">
              Rasta: {{paieska}}<br>{{grupes[grupe]}}
            </div>
          </div>
          <b-table
          :mobile-cards="mobile_card"
          bordered
          hoverable
          :narrowed="isNarrowed"
          :data="pardavimai"
          :opened-detailed="defaultOpenedDetails"
          detailed
          sort-icon="arrow-up"
          detail-key="sandelis"
          @details-open="(row, index) => $buefy.toast.open(`Išskleistas ${ row.sandelis } sandelys!`)"
          :loading="isLoading">
          <template slot-scope="props">
            <b-table-column v-if="props.row.salis == 1" :style="{'background-color': 'greenyellow'}"  label="Sandelis"  field="sandelis">
                  {{ props.row.sandelis }}
            </b-table-column>
            <b-table-column v-else-if="props.row.salis == 2" :style="{'background-color': 'GoldenRod '}"  label="Sandelis"  field="sandelis">
                  {{ props.row.sandelis }}
            </b-table-column>
            <b-table-column v-else-if="props.row.salis == 3" :style="{'background-color': 'tomato'}"  label="Sandelis"  field="sandelis">
                  {{ props.row.sandelis }}
            </b-table-column>
            <b-table-column v-else label="Sandelis"  field="sandelis">
                  {{ props.row.sandelis }}
            </b-table-column>
            <b-table-column label="Likutis" field="likutis_sk" sortable>
              {{ props.row.likutis_sk }}
            </b-table-column>
            <b-table-column label="Parduota" field="pardavimai_sk" sortable>
              {{ props.row.pardavimai_sk }}
            </b-table-column>
            <b-table-column label="Viso" field="viso" sortable>
              <b>{{ props.row.viso }}</b>
            </b-table-column>
            <b-table-column width="50px" :style="{'background-color': 'WhiteSmoke'}"  label="INFO"  field="info">
                   <button v-if="!Array.isArray(props.row.buy)" class="button is-small is-danger" type="button" 
            @click.prevent="viewModal_pardavimai(props.row.buy && props.row.buy.sandelis, props.row.buy && props.row.buy.viso)">
                <b-icon icon="chart-bar" size="is-small"/>
              </button>
            </b-table-column>
          </template>  

          <template slot="detail" slot-scope="props">
            <div class="columns">
            <div class="column" :style="{'border': '1px solid'}">
              <b-table
              :data="props.row.list"
              default-sort-direction="desc"
              default-sort="kiekis"
              :bordered="true"
              :striped="true"
              :narrowed="true">
              <template slot-scope="props">
                  <b-table-column field="preke" label="Prekė" sortable>
                      {{ props.row.preke }}
                  </b-table-column>
                  <b-table-column :style="{'background-color': 'LightGray'}" label="Likučiai" field="likutis" sortable >
                      {{ props.row.likutis }}
                  </b-table-column>
                  <b-table-column :style="{'background-color': 'LightGray'}" label="Pardavimai" field="pardavimai" sortable>
                      {{ props.row.pardavimai }}
                  </b-table-column>
              </template>
              </b-table>
            </div>
          </div>
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
          <template slot="footer">
              <th> </th>
              <th> </th>
              <th>{{ viso_lik }}</th>
              <th>{{ viso_pard }}</th>
              <th> </th>
          </template>
        </b-table>
        </div>
      <hr>
      <div class="buttons">
        <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print">SPAUSDINTI</b-button>
      </div>
      </card-component>
    </section>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import ModalStatistikaBox from '@/components/ModalStatistikaBox'

export default {
  name: 'statistika',
  components: { CardComponent, ModalStatistikaBox },
  data () {
    return {
     isLoading: false,
     defaultOpenedDetails: [1],
     showDetailIcon: false,
     isNarrowed: true,
     pardavimai: [],
     ieskoti: '',
     paieska: '',
     viso_pard: '',
     viso_lik: '',
     //ka rodyti, o ko ne
     rodyti_lt: true,
     rodyti_lv: true,
     rodyti_ee: true,
     salis: '',
     rikiuoti: false,
     gam: true,
     pirk: true,
     paieska_big: false,
     mobile_card: true,
     grupes: [],
      grupes_lv: [],
      grupe: '',

      isModalView: false,
    viewObject: null,
    viewPardavimai: null,
    viewLabel: null,
    }
  },
  computed: {
    viewObjectName () {
      if (this.viewObject) {
        return this.viewObject
      }
      return null
    },  
    viewName () {
      if (this.viewPardavimai) {
        return this.viewPardavimai
      }
      return null
    },
    labelName () {
      if (this.viewLabel) {
        return this.viewLabel
      }
      return null
    },
  },
  created() {
    this.getData()
    },
  mounted () {
  },
  methods: {
    print() {
      // Pass the element id here
      this.mobile_card = false;
      this.$htmlToPaper('printMe');
    },
    change_gam(){
      this.gam = !this.gam
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_pirk(){
      this.pirk = !this.pirk
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_lt(){
      this.rodyti_lt = !this.rodyti_lt
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_lv(){
      this.rodyti_lv = !this.rodyti_lv
      this.ieskoti = this.paieska
      this.paieska_post()
    },
    change_ee(){
      this.rodyti_ee = !this.rodyti_ee
      this.ieskoti = this.paieska
      this.paieska_post()
    },
     keisti_grupe(){
      if(!this.ieskoti){
      this.ieskoti = this.paieska;
      }
      this.paieska_post();
    },
    switch_post(){
      //this.rikiuotic = !this.rikiuoti;
      if(this.ieskoti == ""){
        this.ieskoti = this.paieska;
      }
        axios
          .post(`/statistika/store`, {
            ieskoti: this.ieskoti,
            lt: this.rodyti_lt,
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,
            rikiuoti: this.rikiuoti,
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            })
          .then(response => {
            console.log(response.data)
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
    paieska_post(){
        axios
          .post(`/statistika/store`, {
            ieskoti: this.ieskoti,
            lt: this.rodyti_lt,
            lv: this.rodyti_lv,
            ee: this.rodyti_ee,

            rikiuoti: "1",
            gam: this.gam,
            pirk: this.pirk,
            paieska_big: this.paieska_big,
            grupe: this.grupe
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
      .get('/statistika')
      .then(response => {
        this.isLoading = false
        this.pardavimai = response.data.data;
        this.paieska = response.data.paieska;
        this.viso_pard = response.data.viso_pard;
        this.viso_lik = response.data.viso_lik;

        this.grupes = response.data.grupes;
        this.grupes_lv = response.data.grupes_lv;
        this.grupe = response.data.grupe;

        this.rikiuoti = response.data.rikiuoti ? false : true;
        this.paieska_big = response.data.paieska_big ? true : false
        this.gam = response.data.gam ? true : false
        this.pirk = response.data.pirk ? true : false
        
        this.rodyti_lt = response.data.salis.LT ? true : false
        this.rodyti_lv = response.data.salis.LV ? true : false
        this.rodyti_ee = response.data.salis.EE ? true : false
        //console.log(reponse.data.salis);
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

    viewModal_pardavimai (viewObject, viewPard) {
      //console.log(viewPardavimai);
      let pardavimai = [];

      let label = []
      let  i;

      let sk = viewPard.length
      for (i = 0; i < sk; i++) {
        pardavimai.push(viewPard[i]['kiekis'])
        label.push(viewPard[i]['data'])  
      }

      this.viewObject = viewObject
      this.viewPardavimai = pardavimai
      this.viewLabel = label
      this.isModalView = true
      //this.$emit('update');
    },

    viewConfirm () {
      this.isModalView = false
    },
    viewCancel () {
      this.isModalView = false
    },
  }
}
</script>
