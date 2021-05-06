<template>
  <div>
    <section class="section is-main-section">
      <card-component title="VALDYMAS" icon="account-multiple">
        <b-field  label="Bankas CSV:" horizontal>
          <file-picker-bankas @file-updated="file_info_bankas" v-model="file_bankas"/>
        </b-field>
        <b-field  label="Pardavimo CSV:" horizontal>
          <file-picker-pardavimai @file-updated="file_info_pardavimai" v-model="file_pardavimai"/>
        </b-field>
          <b-field  label=" " horizontal>
        <p class="control">
          <button class="button is-sark" @click="suformuoti">Suformuoti</button>
        </p>
        </b-field>
      </card-component>
      <card-component title="Apyvarta" icon="account-multiple"> 
        <b-tabs position="is-centered" class="block">
        <!-- VISA APYVARTA INTE -->
            <b-tab-item label="INTE Apyvarta (viso)">
              <div  id="printMe">
                <div class="has-text-centered">
                  <b>UAB Sidonas ir Ko</b>
                </div>
                <div class="has-text-centered">
                  Įm. kodas: 180886050
                </div>
                <div class="has-text-centered">
                  Kęstučio 20-1, LT-87120, Telšiai, Lietuva
                </div>
                <br>
                <div class="has-text-centered is-size-5">
                  <b>Internetinė parduotuvė apyvarta</b>
                </div>
                <br>
                <br>
                <b-table
                bordered
                :narrowed="true"
                :data="sarasas"
                sort-icon="arrow-up"
                :loading="isLoading"
                default-sort-direction="asc"
                :row-class="onRowClass"
                default-sort="saskaitos_nr">
                <template slot-scope="props">
                  <b-table-column label="Nr.">
                    {{props.index + 1}}
                  </b-table-column>
                  <b-table-column label="Data" field="data" sortable>
                        {{props.row.data}}
                  </b-table-column>
                  <b-table-column label="Saskaitos nr."  field="saskaitos_nr" sortable>
                        {{ props.row.saskaitos_nr }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Su PVM"  field="suma">
                        {{  parseFloat(props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Be PVM"  field="pardavimo_suma">
                        {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                        {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Pristatymas"  field="pristatymas">
                        {{ parseFloat(props.row.pristatymas).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Per banka, Eur"  field="">
                        {{ parseFloat(props.row.pristatymas + props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column label="Bankas"  field="bankas">
                        {{ props.row.bankas && props.row.bankas.suma }}
                  </b-table-column>
                  <b-table-column label="Pirkėjas" field="pirkejas" sortable>
                        {{props.row.pirkejas}}
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
                <template slot="footer">
                      <th class="has-text-right">VISO:</th>
                      <th> </th>
                      <th> </th>
                      <th class="has-text-right">{{ apy_suma.toFixed(2) }}</th>
                      <th class="has-text-right"> </th>
                      <th class="has-text-right"> </th>
                      <th class="has-text-right"> </th>
                      <th class="has-text-right">{{ parseFloat(apy_suma+apy_pristatymas).toFixed(2) }}</th>
                  </template>
              </b-table>
              </div>
              <hr>
              <div class="buttons">
                <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print('printMe')">SPAUSDINTI</b-button>
                <vue-excel-xlsx
                  :data="sarasas"
                  :columns="columns"
                  :filename="'filename'"
                  :sheetname="'sheetname'"
                  >
                  Download
              </vue-excel-xlsx>
              </div>
            </b-tab-item>
            <b-tab-item label="INTE Apyvarta (be pašto)">
            <div  id="printMe_bepasto">
                <div class="has-text-centered">
                  <b>UAB Sidonas ir Ko</b>
                </div>
                <div class="has-text-centered">
                  Įm. kodas: 180886050
                </div>
                <div class="has-text-centered">
                  Kęstučio 20-1, LT-87120, Telšiai, Lietuva
                </div>
                <br>
                <div class="has-text-centered is-size-5">
                  <b>Internetinė parduotuvė apyvarta (be pasto)</b>
                </div>
                <br>
                <br>
                <b-table
                bordered
                :narrowed="true"
                :data="bepasto"
                sort-icon="arrow-up"
                :loading="isLoading"
                default-sort-direction="asc"
                :row-class="onRowClass"
                default-sort="saskaitos_nr">
                <template slot-scope="props">
                  <b-table-column label="Nr.">
                    {{props.index + 1}}
                  </b-table-column>
                  <b-table-column label="Data" field="data" sortable>
                        {{props.row.data}}
                  </b-table-column>
                  <b-table-column label="Saskaitos nr."  field="saskaitos_nr" sortable>
                        {{ props.row.saskaitos_nr }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Su PVM"  field="suma">
                        {{  parseFloat(props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Be PVM"  field="pardavimo_suma">
                        {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                        {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Pristatymas"  field="pristatymas">
                        {{ parseFloat(props.row.pristatymas).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Per banka, Eur"  field="">
                        {{ parseFloat(props.row.pristatymas + props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column label="Bankas"  field="bankas">
                        {{ props.row.bankas && props.row.bankas.suma }}
                  </b-table-column>
                  <b-table-column label="Pirkėjas" field="pirkejas" sortable>
                        {{props.row.pirkejas}}
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
                <template slot="footer">
                      <th class="has-text-right">VISO:</th>
                      <th> </th>
                      <th> </th>
                      <th class="has-text-right">{{ apy_sumabe.toFixed(2) }}</th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right">{{ parseFloat(apy_sumabe+apy_pristatymasbe).toFixed(2) }}</th>
                  </template>
              </b-table>
              </div>
              <hr>
              <div class="buttons">
                <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print('printMe_bepasto')">SPAUSDINTI</b-button>
                <vue-excel-xlsx
                  :data="bepasto"
                  :columns="columns"
                  :filename="'filename'"
                  :sheetname="'sheetname'"
                  >
                  Download
              </vue-excel-xlsx>
              </div>
            </b-tab-item>
            <b-tab-item label="INTE Apyvarta (paštas)">
              <div  id="printMe_pastas">
                <div class="has-text-centered">
                  <b>UAB Sidonas ir Ko</b>
                </div>
                <div class="has-text-centered">
                  Įm. kodas: 180886050
                </div>
                <div class="has-text-centered">
                  Kęstučio 20-1, LT-87120, Telšiai, Lietuva
                </div>
                <br>
                <div class="has-text-centered is-size-5">
                  <b>Internetinė parduotuvė apyvarta (pastas)</b>
                </div>
                <br>
                <br>
                <b-table
                bordered
                :narrowed="true"
                :data="pastas"
                sort-icon="arrow-up"
                :loading="isLoading"
                default-sort-direction="asc"
                :row-class="onRowClass"
                default-sort="saskaitos_nr">
                <template slot-scope="props">
                  <b-table-column label="Nr.">
                    {{props.index + 1}}
                  </b-table-column>
                  <b-table-column label="Data" field="data" sortable>
                        {{props.row.data}}
                  </b-table-column>
                  <b-table-column label="Saskaitos nr."  field="saskaitos_nr" sortable>
                        {{ props.row.saskaitos_nr }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Su PVM"  field="suma">
                        {{  parseFloat(props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Be PVM"  field="pardavimo_suma">
                        {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                        {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Pristatymas"  field="pristatymas">
                        {{ parseFloat(props.row.pristatymas).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Per banka, Eur"  field="">
                        {{ parseFloat(props.row.pristatymas + props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column label="Bankas"  field="bankas">
                        {{ props.row.bankas && props.row.bankas.suma }}
                  </b-table-column>
                  <b-table-column label="Pirkėjas" field="pirkejas" sortable>
                        {{props.row.pirkejas}}
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
                <template slot="footer">
                      <th class="has-text-right">VISO:</th>
                      <th> </th>
                      <th> </th>
                      <th class="has-text-right">{{ apy_sumapastas.toFixed(2) }}</th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right">{{ parseFloat(apy_sumapastas+apy_pristatymaspastas).toFixed(2) }}</th>
                  </template>
              </b-table>
              </div>
              <hr>
              <div class="buttons">
                <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print('printMe_pastas')">SPAUSDINTI</b-button>
                <vue-excel-xlsx
                  :data="pastas"
                  :columns="columns"
                  :filename="'filename'"
                  :sheetname="'sheetname'"
                  >
                  Download
              </vue-excel-xlsx>
              </div>
            </b-tab-item>
            <b-tab-item label="INTE Grąžinimai">
              <div  id="printMe_graza">
                <div class="has-text-centered">
                  <b>UAB Sidonas ir Ko</b>
                </div>
                <div class="has-text-centered">
                  Įm. kodas: 180886050
                </div>
                <div class="has-text-centered">
                  Kęstučio 20-1, LT-87120, Telšiai, Lietuva
                </div>
                <br>
                <div class="has-text-centered is-size-5">
                  <b>Internetinė parduotuvė grąžinimai</b>
                </div>
                <br>
                <br>
                <b-table
                bordered
                :narrowed="true"
                :data="graza"
                sort-icon="arrow-up"
                :loading="isLoading"
                :row-class="onRowClass2"
                default-sort-direction="asc"
                default-sort="saskaitos_nr">
                <template slot-scope="props">
                  <b-table-column label="Nr.">
                    {{props.index + 1}}
                  </b-table-column>
                  <b-table-column label="Data" field="data" sortable>
                        {{props.row.data}}
                  </b-table-column>
                  <b-table-column label="Saskaitos nr."  field="saskaitos_nr" sortable>
                        {{ props.row.saskaitos_nr }}
                  </b-table-column>
                  <b-table-column label="Unikalus nr."  field="unikalus" sortable>
                        {{ props.row.unikalus }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Su PVM"  field="suma">
                        {{  parseFloat(props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Be PVM"  field="pardavimo_suma">
                        {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                        {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column label="Bankas"  field="bankas">
                        {{ props.row.bankas && props.row.bankas.suma }}
                  </b-table-column>
                  <b-table-column label="TEST"  field="bankas">
                        {{ props.row.bankas_list }}
                  </b-table-column>
                  <b-table-column label="Pirkejas"  field="pirkejas">
                        {{ props.row.pirkejas }}
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
                <template slot="footer">
                      <th class="has-text-right">VISO:</th>
                      <th> </th>
                      <th> </th>
                      <th> </th>
                      <th class="has-text-right">{{ gra_suma.toFixed(2) }}</th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                  </template>
              </b-table>
              <br>

              </div>
              <hr>
              <div class="buttons">
                <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print('printMe_graza')">SPAUSDINTI</b-button>
                <vue-excel-xlsx
                  :data="graza"
                  :columns="columns"
                  :filename="'filename'"
                  :sheetname="'sheetname'"
                  >
                  Download
              </vue-excel-xlsx>
              </div>
            </b-tab-item>
            <b-tab-item label="PIGU apyvarta">
            <div  id="printMe_pigu">
                <div class="has-text-centered">
                  <b>UAB Sidonas ir Ko</b>
                </div>
                <div class="has-text-centered">
                  Įm. kodas: 180886050
                </div>
                <div class="has-text-centered">
                  Kęstučio 20-1, LT-87120, Telšiai, Lietuva
                </div>
                <br>
                <div class="has-text-centered is-size-5">
                  <b>PIGU apyvarta</b>
                </div>
                <br>
                <br>
                <b-table
                bordered
                :narrowed="true"
                :data="pigu"
                sort-icon="arrow-up"
                :loading="isLoading"
                default-sort-direction="asc"
                :row-class="onRowClass"
                default-sort="saskaitos_nr">
                <template slot-scope="props">
                  <b-table-column label="Nr.">
                    {{props.index + 1}}
                  </b-table-column>
                  <b-table-column label="Data" field="data" sortable>
                        {{props.row.data}}
                  </b-table-column>
                  <b-table-column label="Saskaitos nr."  field="saskaitos_nr" sortable>
                        {{ props.row.saskaitos_nr }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Apyvarta su PVM"  field="suma">
                        {{  parseFloat(props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Apyvarta be PVM"  field="pardavimo_suma">
                        {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                        {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Pristatymas"  field="pristatymas">
                        {{ parseFloat(props.row.pristatymas).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Per banka, Eur"  field="">
                        {{ parseFloat(props.row.pristatymas + props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column label="Bankas"  field="bankas">
                        {{ props.row.bankas && props.row.bankas.suma }}
                  </b-table-column>
                  <b-table-column label="Pirkėjas" field="pirkejas" sortable>
                        {{props.row.pirkejas}}
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
                <template slot="footer">
                      <th class="has-text-right">VISO:</th>
                      <th> </th>
                      <th> </th>
                      <th class="has-text-right">{{ apy_sumapigu.toFixed(2) }}</th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right">{{ parseFloat(apy_sumapigu+apy_pristatymaspigu).toFixed(2) }}</th>
                  </template>
              </b-table>
              </div>
              <hr>
              <div class="buttons">
                <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print('printMe_pigu')">SPAUSDINTI</b-button>
                <vue-excel-xlsx
                  :data="pigu"
                  :columns="columns"
                  :filename="'filename'"
                  :sheetname="'sheetname'"
                  >
                  Download
              </vue-excel-xlsx>
              </div>
            </b-tab-item>
            <b-tab-item label="PIGU grąžinimai">
            <div  id="printMe_pigugra">
                <div class="has-text-centered">
                  <b>UAB Sidonas ir Ko</b>
                </div>
                <div class="has-text-centered">
                  Įm. kodas: 180886050
                </div>
                <div class="has-text-centered">
                  Kęstučio 20-1, LT-87120, Telšiai, Lietuva
                </div>
                <br>
                <div class="has-text-centered is-size-5">
                  <b>PIGU grąžinimai</b>
                </div>
                <br>
                <br>
                <b-table
                bordered
                :narrowed="true"
                :data="pigu_gra"
                sort-icon="arrow-up"
                :loading="isLoading"
                :row-class="onRowClass2"
                default-sort-direction="asc"
                default-sort="saskaitos_nr">
                <template slot-scope="props">
                  <b-table-column label="Nr.">
                    {{props.index + 1}}
                  </b-table-column>
                  <b-table-column label="Data" field="data" sortable>
                        {{props.row.data}}
                  </b-table-column>
                  <b-table-column label="Saskaitos nr."  field="saskaitos_nr" sortable>
                        {{ props.row.saskaitos_nr }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Apyvarta su PVM"  field="suma">
                        {{  parseFloat(props.row.suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="Apyvarta be PVM"  field="pardavimo_suma">
                        {{  parseFloat(props.row.pardavimo_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column class="has-text-right" label="PVM 21%"  field="pvm_suma">
                        {{  parseFloat(props.row.pvm_suma).toFixed(2) }}
                  </b-table-column>
                  <b-table-column label="Bankas"  field="bankas">
                        {{ props.row.bankas && props.row.bankas.suma }}
                  </b-table-column>
                  <b-table-column label="Pirkejas"  field="pirkejas">
                        {{ props.row.pirkejas }}
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
                <template slot="footer">
                      <th class="has-text-right">VISO:</th>
                      <th> </th>
                      <th> </th>
                      <th class="has-text-right">{{ gra_sumapigu.toFixed(2) }}</th>
                      <th class="has-text-right"></th>
                      <th class="has-text-right"></th>
                  </template>
              </b-table>
              <br>

              </div>
              <hr>
              <div class="buttons">
                <b-button size="is-medium" icon-left="printer" type="is-dark" @click="print('printMe_pigugra')">SPAUSDINTI</b-button>
                <vue-excel-xlsx
                  :data="pigu_gra"
                  :columns="columns"
                  :filename="'filename'"
                  :sheetname="'sheetname'"
                  >
                  Download
              </vue-excel-xlsx>
              </div>
            </b-tab-item>
            <b-tab-item label="Blanko numeriai">
              Praleisti blanko numeriai:
              <br>
              {{ praleisti_nr }}
            </b-tab-item>
        </b-tabs>
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


import FilePickerBankas from '@/components/FilePickerBankas2'
import FilePickerPardavimai from '@/components/FilePickerPardavimai'

export default {
  name: "Prekes",
  components: {CardToolbar, CardComponent, FilePickerBankas, FilePickerPardavimai},
  data () {
    return {
      columns : [
        {
            label: "Data",
            field: "data",
        },
        {
            label: "Nr.",
            field: "saskaitos_nr",
        },
        {
            label: "Unikalus nr.",
            field: "unikalus",
        },
        {
            label: "Suma.",
            field: "suma",
        },
        {
            label: "Pardavimo suma",
            field: "pardavimo_suma",
        },
        {
            label: "PVM suma",
            field: "pvm_suma",
        },
        {
            label: "Pristatymas",
            field: "pristatymas",
        },
        {
            label: "Bankas",
            field: "bankas_suma",
        },
        {
            label: "Pirkėjas",
            field: "pirkejas",
        },
                ],
      color: [
        'is-one',
        'is-two',
        'is-three'
      ],
      file_bankas: null,
      file_pardavimai: null,
      failas_bankas: "",
      failas_pardavimai: "",

      showDetailIcon: false,
      isLoading: false,
      sarasas: [],
      bepasto: [],
      pastas: [],
      graza: [],
      pigu: [],
      pigu_gra: [],
      praleisti_nr: []
    }
  },
  created () {
    this.getData();
  },
  methods: {

    bankasFormat(value){
      console.log(value);
        return value;
    },

    file_info_bankas (value) {
      this.failas_bankas = value.name;
    },
    file_info_pardavimai (value) {
      this.failas_pardavimai = value.name;
    },

    onRowClass: function (row, index) {
        if((row.bankas && row.bankas.suma) == (row.suma + row.pristatymas).toFixed(2)){
          return this.color[0];
        }else{
          if(!(row.bankas && row.bankas.suma)){
            return this.color[1];
          }else{
             return this.color[2];
          }
        }     
    },

    onRowClass2: function (row, index) {
        if((row.bankas && row.bankas.suma) + row.suma == 0){
          return this.color[0];
        }else{
          if(!(row.bankas && row.bankas.suma)){
            return this.color[1];
          }else{
             return this.color[2];
          }
        }     
    },

    print(print) {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper(print);
    },

  suformuoti(){
    axios
      .post(`/inte/store`, {
        file_pardavimai: this.failas_pardavimai,
        file_bankas: this.failas_bankas,
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
      .get('/inte')
      .then(response => {
        this.isLoading = false
        this.sarasas = response.data.sarasas;  
        this.bepasto = response.data.bepasto;
        this.pastas = response.data.pastas;
        this.graza = response.data.graza; 
        this.pigu = response.data.pigu; 
        this.pigu_gra = response.data.pigu_gra; 
        this.praleisti_nr = response.data.praleisti_nr;   
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
  },

    computed: {
    apy_suma: function(){
      let total = [];
        Object.entries(this.sarasas).forEach(([key, val]) => {
            total.push(val.suma) // the value of the current key.
        });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_suma2: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pvm: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pristatymas: function(){
      let total = [];
      Object.entries(this.sarasas).forEach(([key, val]) => {
          total.push(val.pristatymas) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },

    apy_sumabe: function(){
      let total = [];
        Object.entries(this.bepasto).forEach(([key, val]) => {
            total.push(val.suma) // the value of the current key.
        });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_suma2be: function(){
      let total = [];
      Object.entries(this.bepasto).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pvmbe: function(){
      let total = [];
      Object.entries(this.bepasto).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pristatymasbe: function(){
      let total = [];
      Object.entries(this.bepasto).forEach(([key, val]) => {
          total.push(val.pristatymas) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },

    apy_sumapastas: function(){
      let total = [];
        Object.entries(this.pastas).forEach(([key, val]) => {
            total.push(val.suma) // the value of the current key.
        });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_suma2pastas: function(){
      let total = [];
      Object.entries(this.pastas).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pvmpastas: function(){
      let total = [];
      Object.entries(this.pastas).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pristatymaspastas: function(){
      let total = [];
      Object.entries(this.pastas).forEach(([key, val]) => {
          total.push(val.pristatymas) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },

    apy_sumapigu: function(){
      let total = [];
        Object.entries(this.pastas).forEach(([key, val]) => {
            total.push(val.suma) // the value of the current key.
        });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_suma2pigu: function(){
      let total = [];
      Object.entries(this.pastas).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pvmpigu: function(){
      let total = [];
      Object.entries(this.pastas).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    apy_pristatymaspigu: function(){
      let total = [];
      Object.entries(this.pastas).forEach(([key, val]) => {
          total.push(val.pristatymas) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },

    gra_sumapigu: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    gra_suma2pigu: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    gra_pvmpigu: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },

    gra_suma: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    gra_suma2: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.pardavimo_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
    gra_pvm: function(){
      let total = [];
      Object.entries(this.graza).forEach(([key, val]) => {
          total.push(val.pvm_suma) // the value of the current key.
      });
      return total.reduce(function(total, num){ return total + num }, 0);

    },
  },
}
</script>
