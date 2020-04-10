(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Uzsakymai.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Uzsakymai.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_RadioPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/RadioPicker */ "./resources/js/components/RadioPicker.vue");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
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
  name: "Užsakymai",
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    RadioPicker: _components_RadioPicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      vardas: "",
      numeris: "",
      adresas: "",
      telefonas: "",
      email: "",
      duomenys: []
    };
  },
  computed: {},
  created: function created() {
    //this.paieska_post()
    this.getData();
  },
  methods: {
    print: function print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    delete_uzsakymas: function delete_uzsakymas(id) {
      var _this = this;

      axios["delete"]("/uzsakymai/".concat(id, "/destroy"), {}).then(function (response) {
        _this.$buefy.toast.open({
          message: "U\u017Esakymo duomenys i\u0161trinti s\u0117kmingai",
          type: 'is-info',
          queue: false
        });

        _this.getData();
      })["catch"](function (err) {
        console.log("DELETE:");
        console.log(err.message);
      });
    },
    edit_uzsakymas: function edit_uzsakymas(id) {
      var _this2 = this;

      axios.patch("/uzsakymai/".concat(id.id), {
        vardas: this.vardas,
        numeris: this.numeris,
        adresas: this.adresas,
        telefonas: this.telefonas,
        email: this.email
      }).then(function (response) {
        _this2.$buefy.toast.open({
          message: "U\u017Esakymo duomenys atnaujinti s\u0117kmingai",
          type: 'is-info',
          queue: false
        });

        _this2.getCompanies();
      })["catch"](function (err) {
        console.log("POST:");
        console.log(err.message);
      });
    },
    print_uzsakymas: function print_uzsakymas(id) {
      var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__({
        orientation: 'p',
        unit: 'mm',
        format: 'a6',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16

      });
      var adresas = id.adresas.split(',')[0];
      var adresas2 = id.adresas.split(',')[1];
      var adresas3 = id.adresas.split(',')[2];
      doc.setDrawColor(0);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(10, 5, 90, 135, 3, 3, "FD"); //doc.addImage("http://app.test/images/Sidonas_logo.jpg", "JPEG", 5, 10, 100, 25);

      doc.setFont("arial");
      doc.setFontStyle("bold");
      doc.setFontSize(24);
      doc.text("UAB Sidonas ir KO", 55, 20, null, null, "center");
      doc.setFontStyle("normal");
      doc.setFontSize(8);
      doc.text("Įmonės kodas 180886050", 60, 25, null, null, "center");
      doc.text("PVM mokėtojo kodas LT808860515", 65, 28, null, null, "center");
      doc.text(decodeURI("Kęstučio g. 20-1,"), 35, 31, null, null, "center");
      doc.text("LT-87120 Telšiai", 45, 34, null, null, "center");
      doc.setFontSize(12);
      doc.text(15, 60, id.telefonas);
      doc.text(15, 65, id.email);
      doc.text(15, 70, adresas);
      doc.text(15, 75, adresas2);

      if (adresas3) {
        doc.text(15, 80, adresas3);
      }

      doc.save('uzsakymas.pdf');
      console.log(id);
    },
    issaugoti: function issaugoti() {
      var _this3 = this;

      axios.post("/uzsakymai/store", {
        vardas: this.vardas,
        numeris: this.numeris,
        adresas: this.adresas,
        telefonas: this.telefonas,
        email: this.email
      }).then(function (response) {
        _this3.$buefy.toast.open({
          message: "U\u017Esakymo duomenys i\u0161saugoti s\u0117kmingai",
          type: 'is-info',
          queue: false
        });

        console.log(response.data.status);

        _this3.getData();
      })["catch"](function (err) {
        _this3.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    getData: function getData() {
      var _this4 = this;

      this.isLoading = true;
      this.axios.get('/uzsakymai').then(function (response) {
        _this4.isLoading = false;
        _this4.duomenys = response.data.data;
      })["catch"](function (err) {
        _this4.isLoading = false;

        _this4.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    }
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Uzsakymai.vue?vue&type=template&id=7c901145&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Uzsakymai.vue?vue&type=template&id=7c901145& ***!
  \*******************************************************************************************************************************************************************************************************/
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
              { attrs: { horizontal: "", label: "Vardas Pavardė:" } },
              [
                _c("b-input", {
                  attrs: { expanded: "", required: "" },
                  model: {
                    value: _vm.vardas,
                    callback: function($$v) {
                      _vm.vardas = $$v
                    },
                    expression: "vardas"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { horizontal: "", label: "Užsakymo numeris:" } },
              [
                _c("b-input", {
                  attrs: { expanded: "", required: "" },
                  model: {
                    value: _vm.numeris,
                    callback: function($$v) {
                      _vm.numeris = $$v
                    },
                    expression: "numeris"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { horizontal: "", label: "Adresas:" } },
              [
                _c("b-input", {
                  attrs: { type: "textarea", expanded: "", required: "" },
                  model: {
                    value: _vm.adresas,
                    callback: function($$v) {
                      _vm.adresas = $$v
                    },
                    expression: "adresas"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { horizontal: "", label: "Telefono numeris:" } },
              [
                _c("b-input", {
                  attrs: { expanded: "", required: "" },
                  model: {
                    value: _vm.telefonas,
                    callback: function($$v) {
                      _vm.telefonas = $$v
                    },
                    expression: "telefonas"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { horizontal: "", label: "El. paštas:" } },
              [
                _c("b-input", {
                  attrs: { type: "email", expanded: "", required: "" },
                  model: {
                    value: _vm.email,
                    callback: function($$v) {
                      _vm.email = $$v
                    },
                    expression: "email"
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
                    on: { click: _vm.issaugoti }
                  },
                  [_vm._v("Išsaugoti")]
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
          { attrs: { title: "UŽSAKYMAI", icon: "account-multiple" } },
          [
            _c(
              "b-table",
              {
                attrs: {
                  bordered: "",
                  narrowed: true,
                  data: _vm.duomenys,
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
                            attrs: { label: "Vardas Pavarde", field: "vardas" }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.vardas) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Užsakymo numeris",
                              field: "numeris"
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.numeris) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          { attrs: { label: "Adresas", field: "adresas" } },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.adresas) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Telefono numeris",
                              field: "telefonas"
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.telefonas) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          { attrs: { label: "El. paštas", field: "email" } },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.email) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "DATA",
                              field: "updated_at",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(
                                  props.row.updated_at &&
                                    props.row.updated_at.split("T")[0]
                                ) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            attrs: {
                              label: "Pativirtinta",
                              field: "patvirtinta"
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.patvirtinta) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("b-table-column", { attrs: { label: "Veiksmai" } }, [
                          _c("p", { staticClass: "buttons" }, [
                            _c(
                              "a",
                              {
                                staticClass: "button is-small is-primary",
                                on: {
                                  click: function($event) {
                                    return _vm.edit_uzsakymas(props.row)
                                  }
                                }
                              },
                              [_vm._v("Edit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "button is-small is-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.delete_uzsakymas(props.row.id)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "button is-small is-danger",
                                on: {
                                  click: function($event) {
                                    return _vm.print_uzsakymas(props.row)
                                  }
                                }
                              },
                              [_vm._v("PRINT")]
                            )
                          ])
                        ])
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

/***/ "./resources/js/views/Uzsakymai.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Uzsakymai.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Uzsakymai_vue_vue_type_template_id_7c901145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Uzsakymai.vue?vue&type=template&id=7c901145& */ "./resources/js/views/Uzsakymai.vue?vue&type=template&id=7c901145&");
/* harmony import */ var _Uzsakymai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Uzsakymai.vue?vue&type=script&lang=js& */ "./resources/js/views/Uzsakymai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Uzsakymai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Uzsakymai_vue_vue_type_template_id_7c901145___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Uzsakymai_vue_vue_type_template_id_7c901145___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Uzsakymai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Uzsakymai.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Uzsakymai.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uzsakymai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Uzsakymai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Uzsakymai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Uzsakymai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Uzsakymai.vue?vue&type=template&id=7c901145&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Uzsakymai.vue?vue&type=template&id=7c901145& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uzsakymai_vue_vue_type_template_id_7c901145___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Uzsakymai.vue?vue&type=template&id=7c901145& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Uzsakymai.vue?vue&type=template&id=7c901145&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uzsakymai_vue_vue_type_template_id_7c901145___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Uzsakymai_vue_vue_type_template_id_7c901145___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);