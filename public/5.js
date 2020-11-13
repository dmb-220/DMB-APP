(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CheckboxPicker',
  props: {
    options: {
      type: Object,
      "default": null
    },
    type: {
      type: String,
      "default": null
    },
    value: {
      "default": []
    }
  },
  data: function data() {
    return {
      newValue: []
    };
  },
  created: function created() {
    this.newValue = this.value;
  },
  methods: {
    input: function input() {
      this.$emit('input', this.newValue);
    }
  },
  watch: {
    value: function value(newValue) {
      this.newValue = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioPicker.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RadioPicker.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'RadioPicker',
  props: {
    options: {
      type: Object,
      "default": null
    },
    type: {
      type: String,
      "default": null
    },
    value: {
      "default": null
    }
  },
  data: function data() {
    return {
      newValue: null
    };
  },
  created: function created() {
    this.newValue = this.value;
  },
  methods: {
    input: function input() {
      this.$emit('input', this.newValue);
    }
  },
  watch: {
    value: function value(newValue) {
      this.newValue = newValue;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Generuoti.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Generuoti.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CheckboxPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CheckboxPicker */ "./resources/js/components/CheckboxPicker.vue");
/* harmony import */ var _components_RadioPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/RadioPicker */ "./resources/js/components/RadioPicker.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Testas",
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    RadioPicker: _components_RadioPicker__WEBPACK_IMPORTED_MODULE_3__["default"],
    CheckboxPicker: _components_CheckboxPicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      csv: [],
      raides: {
        36: "A",
        38: "B",
        40: "C",
        42: "D",
        44: "E",
        46: "F",
        48: "H",
        50: "G",
        52: "I",
        54: "J",
        56: "K"
      },
      isLoading: false,
      sudetis: [{
        name_LT: 'Viskozė',
        name_LV: "Viskoze",
        name_EE: "Viskoos",
        code: 'visk',
        kiekis: "75"
      }, {
        name_LT: 'Elastanas',
        name_LV: "Elastāns",
        name_EE: "Elastaan",
        code: 'elas',
        kiekis: "25"
      }],
      list: [],
      sudetys: [{
        name_LT: 'Polisteris',
        name_LV: "Poliesters",
        name_EE: "Polüester",
        code: 'poly'
      }, {
        name_LT: 'Viskozė',
        name_LV: "Viskoze",
        name_EE: "Viskoos",
        code: 'visk'
      }, {
        name_LT: 'Elastanas',
        name_LV: "Elastāns",
        name_EE: "Elastaan",
        code: 'elas'
      }, {
        name_LT: 'Medvilnė',
        name_LV: "Kokvilna",
        name_EE: "Puuvill",
        code: 'medv'
      }, {
        name_LT: 'Vilna',
        name_LV: "Vilna",
        name_EE: "Vill",
        code: 'viln'
      }, {
        name_LT: 'Linas',
        name_LV: "Veļa",
        name_EE: "Linane",
        code: 'lina'
      }],
      grupes: ["SUKNELES", "PALAIDINES", "PALTAI"],
      kodas: 'TSD-1532',
      tipas: 1,
      intervalas: 2,
      dydziai: [38, 54],
      didmena: false,
      checkbox: [],
      rodyti_lv: true,
      rodyti_ee: false,
      rodo: ''
    };
  },
  computed: {
    kiek: function kiek() {
      return this.sudetis.length;
    },
    listas: function listas() {
      var total = [];
      var i;
      var x = 0;

      for (i = this.dydziai[0]; i <= this.dydziai[1]; i = i + this.intervalas) {
        total[x++] = {
          dydis: i,
          raide: this.raides[i]
        };
      }

      this.list = total;
      return total;
    }
  },
  created: function created() {//this.paieska_post()
    //this.getData()
  },
  methods: {
    print: function print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    addTag: function addTag(newTag) {
      var tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.value.push(tag);
    },
    csvExport: function csvExport(arrData) {
      var csvContent = "data:text/csv;charset=utf-8," + "\uFEFF";
      csvContent += [Object.keys(arrData[0]).join(";")].concat(_toConsumableArray(arrData.map(function (item) {
        return Object.values(item).join(";");
      }))).join("\n").replace(/(^\[)|(\]$)/gm, "");
      var data = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", "Si. (1).csv");
      link.click();
    },
    generuoti: function generuoti() {
      var total = [];
      var i;
      var x = 0;
      var sud_LT = "";
      var sud_LV = "";
      var sud_EE = "";
      var kieka;
      this.sudetis.forEach(function (item) {
        sud_LT += item.name_LT + " " + item.kiekis + "% ";
        sud_LV += item.name_LV + " " + item.kiekis + "% ";
        sud_EE += item.name_EE + " " + item.kiekis + "% ";
      });

      for (i = this.dydziai[0]; i <= this.dydziai[1]; i = i + this.intervalas) {
        kieka = this.list[x];
        total[x++] = {
          Kodas: this.kodas + "-" + this.raides[i],
          Pav_LT: "Suknelė",
          Sudetis_LT: sud_LT,
          Sudetis_LV: sud_LV,
          Sudetis_EE: sud_EE,
          kiekis: kieka.kiek
        };
      }

      this.csv = total;
    },
    paieska: function paieska() {
      var _this = this;

      axios.post("/generuoti/store", {
        lv: this.rodyti_lv,
        ee: this.rodyti_ee,
        miestai: this.checkbox,
        data: this.data //nr: this.nr

      }).then(function (response) {
        console.log(response.data.data);

        _this.getData();
      })["catch"](function (err) {
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    getData: function getData() {
      var _this2 = this;

      this.isLoading = true;
      this.axios.get('/generuoti').then(function (response) {
        _this2.isLoading = false; //this.sandelis = response.data.sandelis;

        _this2.duomenys = response.data.likutis;
        _this2.sk_lt = response.data.sk_lt;
        _this2.centai = response.data.centai;
        _this2.miestai = response.data.miestai;
        _this2.date = response.data.data; //this.checkbox = response.data.check;
        //this.rodyti_lt = response.data.salis.LT ? true : false

        _this2.rodyti_lv = response.data.salis.LV ? true : false;
        _this2.rodyti_ee = response.data.salis.EE ? true : false;
      })["catch"](function (err) {
        _this2.isLoading = false;

        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-field",
    { attrs: { grouped: "", "group-multiline": "" } },
    _vm._l(_vm.options, function(v, k) {
      return _c(
        "div",
        { key: k, staticClass: "control" },
        [
          _c(
            "b-checkbox",
            {
              attrs: { "native-value": k, type: _vm.type },
              on: { input: _vm.input },
              model: {
                value: _vm.newValue,
                callback: function($$v) {
                  _vm.newValue = $$v
                },
                expression: "newValue"
              }
            },
            [_vm._v("\n      " + _vm._s(v) + "\n    ")]
          )
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioPicker.vue?vue&type=template&id=f0ab0264&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RadioPicker.vue?vue&type=template&id=f0ab0264& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-field",
    { attrs: { grouped: "", "group-multiline": "" } },
    _vm._l(_vm.options, function(v, k) {
      return _c(
        "div",
        { key: k, staticClass: "control" },
        [
          _c(
            "b-radio",
            {
              attrs: { "native-value": k, type: _vm.type },
              on: { input: _vm.input },
              model: {
                value: _vm.newValue,
                callback: function($$v) {
                  _vm.newValue = $$v
                },
                expression: "newValue"
              }
            },
            [_vm._v("\n      " + _vm._s(v) + "\n    ")]
          )
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Generuoti.vue?vue&type=template&id=9dd76806&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Generuoti.vue?vue&type=template&id=9dd76806&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "section",
      { staticClass: "section is-main-section" },
      [
        _c(
          "card-component",
          { attrs: { title: "VALDYMAS", icon: "account-multiple" } },
          [
            _c(
              "b-field",
              {
                staticClass: "has-check",
                attrs: { label: " ", horizontal: "" }
              },
              [
                _c("radio-picker", {
                  attrs: { options: { 1: "GAMYBA", 2: "PIRKIMAS" } },
                  model: {
                    value: _vm.tipas,
                    callback: function($$v) {
                      _vm.tipas = $$v
                    },
                    expression: "tipas"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { label: "Grupė:", horizontal: "" } },
              [
                _c(
                  "b-select",
                  { attrs: { placeholder: "Pasirinkite", expanded: "" } },
                  _vm._l(_vm.grupes, function(idx, id) {
                    return _c("option", { key: idx, domProps: { value: id } }, [
                      _vm._v(_vm._s(idx))
                    ])
                  }),
                  0
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { horizontal: "", label: "Gaminys:" } },
              [
                _c("b-input", {
                  attrs: { placeholder: "Kodas", expanded: "" },
                  model: {
                    value: _vm.kodas,
                    callback: function($$v) {
                      _vm.kodas = $$v
                    },
                    expression: "kodas"
                  }
                }),
                _vm._v(" "),
                _c("multiselect", {
                  attrs: {
                    "tag-placeholder": "Pasirinkite sudėti",
                    placeholder: "Pasirinkite sudėtį",
                    label: "name_LT",
                    "track-by": "code",
                    options: _vm.sudetys,
                    multiple: true,
                    taggable: true
                  },
                  on: { tag: _vm.addTag },
                  model: {
                    value: _vm.sudetis,
                    callback: function($$v) {
                      _vm.sudetis = $$v
                    },
                    expression: "sudetis"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.kiek > 0
              ? _c(
                  "b-field",
                  { attrs: { horizontal: "", label: " " } },
                  _vm._l(_vm.sudetis, function(idx, id) {
                    return _c("b-input", {
                      key: idx.code,
                      attrs: {
                        type: "number",
                        placeholder: idx.name,
                        expanded: ""
                      },
                      model: {
                        value: _vm.sudetis[id].kiekis,
                        callback: function($$v) {
                          _vm.$set(_vm.sudetis[id], "kiekis", $$v)
                        },
                        expression: "sudetis[id].kiekis"
                      }
                    })
                  }),
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.tipas == 1
              ? _c(
                  "b-field",
                  { attrs: { label: "Dydžiai:", horizontal: "" } },
                  [
                    _c("b-slider", {
                      attrs: { type: "is-danger", min: 36, max: 56, step: 2 },
                      model: {
                        value: _vm.dydziai,
                        callback: function($$v) {
                          _vm.dydziai = $$v
                        },
                        expression: "dydziai"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.tipas == 1
              ? _c(
                  "b-field",
                  { attrs: { horizontal: "", label: "Kiekiai" } },
                  _vm._l(_vm.listas, function(idx, id) {
                    return _c("b-input", {
                      key: id,
                      attrs: { placeholder: idx.raide, expanded: "" },
                      model: {
                        value: _vm.list[id].kiek,
                        callback: function($$v) {
                          _vm.$set(_vm.list[id], "kiek", $$v)
                        },
                        expression: "list[id].kiek"
                      }
                    })
                  }),
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { horizontal: "", label: " " } },
              [
                _c(
                  "b-checkbox",
                  {
                    model: {
                      value: _vm.didmena,
                      callback: function($$v) {
                        _vm.didmena = $$v
                      },
                      expression: "didmena"
                    }
                  },
                  [_vm._v("DIDMENA")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.didmena,
                    expression: "didmena"
                  }
                ],
                attrs: { horizontal: "", label: "Didmena:" }
              },
              [
                _c("b-input", {
                  attrs: {
                    name: "didmena_kaina",
                    placeholder: "Kaina",
                    expanded: ""
                  }
                }),
                _vm._v(" "),
                _c("b-input", {
                  attrs: {
                    name: "didmena_kiekis",
                    placeholder: "Kiekis",
                    expanded: ""
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "b-button",
                  {
                    attrs: { type: "is-black", expanded: "" },
                    on: { click: _vm.generuoti }
                  },
                  [_vm._v("GENERUOTI")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "card-component",
          { attrs: { title: "GENERUOTI", icon: "account-multiple" } },
          [
            _c(
              "b-table",
              {
                attrs: {
                  bordered: "",
                  narrowed: true,
                  data: _vm.csv,
                  "sort-icon": "arrow-up",
                  loading: _vm.isLoading
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(props) {
                      return [
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Kodas",
                              field: "Kodas",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.Kodas) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          { attrs: { label: "Pav. LT", field: "Pav_LT" } },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.Pav_LT) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Sudetis LT",
                              field: "Sudetis_LT",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.Sudetis_LT) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Sudetis LV",
                              field: "Sudetis_LV",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.Sudetis_LV) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Sudetis EE",
                              field: "Sudetis_EE",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.Sudetis_EE) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Kiekis",
                              field: "kiekis",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.kiekis) +
                                "\n        "
                            )
                          ]
                        )
                      ]
                    }
                  }
                ])
              },
              [
                _vm._v(" "),
                _c(
                  "section",
                  {
                    staticClass: "section",
                    attrs: { slot: "empty" },
                    slot: "empty"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "content has-text-centered" },
                      [
                        _vm.isLoading
                          ? [
                              _c(
                                "p",
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "dots-horizontal",
                                      size: "is-large"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v("Gaunami duomenys...")])
                            ]
                          : [
                              _c(
                                "p",
                                [
                                  _c("b-icon", {
                                    attrs: {
                                      icon: "emoticon-sad",
                                      size: "is-large"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("p", [_vm._v("Duomenų nerasta …")])
                            ]
                      ],
                      2
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _vm.csv.length > 0
                  ? _c(
                      "b-button",
                      {
                        attrs: {
                          size: "is-medium",
                          "icon-left": "printer",
                          type: "is-dark"
                        },
                        on: {
                          click: function($event) {
                            return _vm.csvExport(_vm.csv)
                          }
                        }
                      },
                      [_vm._v("Atsisiusti")]
                    )
                  : _c(
                      "b-button",
                      {
                        attrs: {
                          disable: "",
                          size: "is-medium",
                          "icon-left": "printer",
                          type: "is-dark"
                        }
                      },
                      [_vm._v("Atsisiusti")]
                    )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CheckboxPicker.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/CheckboxPicker.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxPicker.vue?vue&type=template&id=b0b44648& */ "./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&");
/* harmony import */ var _CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxPicker.vue?vue&type=script&lang=js& */ "./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CheckboxPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxPicker.vue?vue&type=template&id=b0b44648& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/RadioPicker.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/RadioPicker.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RadioPicker_vue_vue_type_template_id_f0ab0264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RadioPicker.vue?vue&type=template&id=f0ab0264& */ "./resources/js/components/RadioPicker.vue?vue&type=template&id=f0ab0264&");
/* harmony import */ var _RadioPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RadioPicker.vue?vue&type=script&lang=js& */ "./resources/js/components/RadioPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RadioPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RadioPicker_vue_vue_type_template_id_f0ab0264___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RadioPicker_vue_vue_type_template_id_f0ab0264___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RadioPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RadioPicker.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/RadioPicker.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RadioPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RadioPicker.vue?vue&type=template&id=f0ab0264&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/RadioPicker.vue?vue&type=template&id=f0ab0264& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioPicker_vue_vue_type_template_id_f0ab0264___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RadioPicker.vue?vue&type=template&id=f0ab0264& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RadioPicker.vue?vue&type=template&id=f0ab0264&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioPicker_vue_vue_type_template_id_f0ab0264___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RadioPicker_vue_vue_type_template_id_f0ab0264___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Generuoti.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Generuoti.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Generuoti_vue_vue_type_template_id_9dd76806_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Generuoti.vue?vue&type=template&id=9dd76806&scoped=true& */ "./resources/js/views/Generuoti.vue?vue&type=template&id=9dd76806&scoped=true&");
/* harmony import */ var _Generuoti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Generuoti.vue?vue&type=script&lang=js& */ "./resources/js/views/Generuoti.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Generuoti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Generuoti_vue_vue_type_template_id_9dd76806_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Generuoti_vue_vue_type_template_id_9dd76806_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9dd76806",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Generuoti.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Generuoti.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Generuoti.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Generuoti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Generuoti.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Generuoti.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Generuoti_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Generuoti.vue?vue&type=template&id=9dd76806&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Generuoti.vue?vue&type=template&id=9dd76806&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generuoti_vue_vue_type_template_id_9dd76806_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Generuoti.vue?vue&type=template&id=9dd76806&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Generuoti.vue?vue&type=template&id=9dd76806&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generuoti_vue_vue_type_template_id_9dd76806_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Generuoti_vue_vue_type_template_id_9dd76806_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);