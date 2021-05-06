(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Grazinimai_LV.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Grazinimai_LV.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var _components_FilePickerBankas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilePickerBankas */ "./resources/js/components/FilePickerBankas.vue");
/* harmony import */ var _components_FilePickerGrazinimai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilePickerGrazinimai */ "./resources/js/components/FilePickerGrazinimai.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  name: "Grazinimai",
  components: {
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    FilePickerBankas: _components_FilePickerBankas__WEBPACK_IMPORTED_MODULE_3__["default"],
    FilePickerGrazinimai: _components_FilePickerGrazinimai__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      checkboxPosition: 'left',
      checkedRows: [],
      showDetailIcon: false,
      isLoading: false,
      radioboxBank: "",
      checkboxBank: 0,
      color: ['is-one', 'is-two', 'is-three'],
      file_bankas: null,
      file_grazinimai: null,
      failas_bankas: "",
      failas_grazinimai: "",
      graza: []
    };
  },
  computed: {
    gra_suma: function gra_suma() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_suma2: function gra_suma2() {
      var total = [];
      Object.entries(this.checkedRows).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            val = _ref4[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    }
  },
  created: function created() {
    this.getData();
  },
  methods: {
    file_info_bankas: function file_info_bankas(value) {
      this.failas_bankas = value.name;
    },
    file_info_grazinimai: function file_info_grazinimai(value) {
      this.failas_grazinimai = value.name;
    },
    print: function print() {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper('printMe');
    },
    xml: function xml() {
      var _this = this;

      axios.post("/grazinimai/sepa_LV", {
        list: this.checkedRows,
        all: this.gra_suma2.toFixed(2)
      }).then(function (response) {
        console.log(response.data);
        var blob = new Blob([response.data], {
          type: 'application/xml'
        });
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'grazinimai.xml';
        link.click();
      })["catch"](function (err) {
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    suformuoti: function suformuoti() {
      var _this2 = this;

      axios.post("/grazinimai/store_LV", {
        file_grazinimai: this.failas_grazinimai,
        file_bankas: this.failas_bankas,
        radioboxBank: this.radioboxBank,
        checkboxBank: this.checkboxBank
      }).then(function (response) {
        console.log(response.data.data);

        _this2.getData();
      })["catch"](function (err) {
        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    getData: function getData() {
      var _this3 = this;

      this.isLoading = true;
      this.axios.get('grazinimai/grazinimai_lv').then(function (response) {
        _this3.isLoading = false;
        _this3.sarasas = response.data.sarasas;
        _this3.graza = response.data.graza;
      })["catch"](function (err) {
        _this3.isLoading = false;

        _this3.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
              { attrs: { label: "Bankas CSV:", horizontal: "" } },
              [
                _c("file-picker-bankas", {
                  on: { "file-updated": _vm.file_info_bankas },
                  model: {
                    value: _vm.file_bankas,
                    callback: function($$v) {
                      _vm.file_bankas = $$v
                    },
                    expression: "file_bankas"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { label: "Grazinimo CSV:", horizontal: "" } },
              [
                _c("file-picker-grazinimai", {
                  on: { "file-updated": _vm.file_info_grazinimai },
                  model: {
                    value: _vm.file_grazinimai,
                    callback: function($$v) {
                      _vm.file_grazinimai = $$v
                    },
                    expression: "file_grazinimai"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { label: " ", horizontal: "" } },
              [
                _c(
                  "b-checkbox",
                  {
                    attrs: { "native-value": "1" },
                    model: {
                      value: _vm.checkboxBank,
                      callback: function($$v) {
                        _vm.checkboxBank = $$v
                      },
                      expression: "checkboxBank"
                    }
                  },
                  [_vm._v("\n            DELETE bank old data?\n          ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("b-field", { attrs: { label: " ", horizontal: "" } }, [
              _c(
                "div",
                { staticClass: "block" },
                [
                  _c(
                    "b-radio",
                    {
                      attrs: { name: "bank", "native-value": "1" },
                      model: {
                        value: _vm.radioboxBank,
                        callback: function($$v) {
                          _vm.radioboxBank = $$v
                        },
                        expression: "radioboxBank"
                      }
                    },
                    [_vm._v("\n              LUMINOR\n          ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-radio",
                    {
                      attrs: { name: "bank", "native-value": "2" },
                      model: {
                        value: _vm.radioboxBank,
                        callback: function($$v) {
                          _vm.radioboxBank = $$v
                        },
                        expression: "radioboxBank"
                      }
                    },
                    [_vm._v("\n              PAYSERA\n          ")]
                  )
                ],
                1
              )
            ]),
            _vm._v("\n      " + _vm._s(_vm.radioboxBank) + "\n      "),
            _c("b-field", { attrs: { label: " ", horizontal: "" } }, [
              _c("p", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-sark",
                    on: { click: _vm.suformuoti }
                  },
                  [_vm._v("Suformuoti")]
                )
              ])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "card-component",
          { attrs: { title: "Grazinimai", icon: "account-multiple" } },
          [
            _c(
              "div",
              { attrs: { id: "printMe2" } },
              [
                _c(
                  "b-table",
                  {
                    attrs: {
                      "checked-rows": _vm.checkedRows,
                      checkable: "",
                      "checkbox-position": _vm.checkboxPosition,
                      bordered: "",
                      narrowed: true,
                      data: _vm.graza,
                      "sort-icon": "arrow-up",
                      loading: _vm.isLoading,
                      "default-sort-direction": "asc",
                      "default-sort": "saskaitos_nr"
                    },
                    on: {
                      "update:checkedRows": function($event) {
                        _vm.checkedRows = $event
                      },
                      "update:checked-rows": function($event) {
                        _vm.checkedRows = $event
                      }
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
                                  label: "Data",
                                  field: "data",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.data) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: {
                                  label: "Nr",
                                  field: "saskaitos_nr",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.saskaitos_nr) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "SUMA", field: "suma" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      parseFloat(props.row.suma).toFixed(2)
                                    ) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: { label: "Unikalus", field: "unikalus" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.unikalus) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              { attrs: { label: "Saskaita", field: "bankas" } },
                              [
                                _c("b-input", {
                                  attrs: { type: "text" },
                                  model: {
                                    value:
                                      props.row.bankas &&
                                      props.row.bankas.saskaita,
                                    callback: function($$v) {
                                      _vm.$set(
                                        props.row.bankas && props.row.bankas,
                                        "saskaita",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "props.row.bankas && props.row.bankas.saskaita"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: { label: "Pirkejas", field: "pirkejas" }
                              },
                              [
                                _c("b-input", {
                                  attrs: { type: "text" },
                                  model: {
                                    value:
                                      props.row.bankas &&
                                      props.row.bankas.pavadinimas,
                                    callback: function($$v) {
                                      _vm.$set(
                                        props.row.bankas && props.row.bankas,
                                        "pavadinimas",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "props.row.bankas && props.row.bankas.pavadinimas "
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: {
                                  label: "Prestashop",
                                  field: "pirkejas"
                                }
                              },
                              [
                                _c("small", [
                                  _vm._v(
                                    "( " + _vm._s(props.row.pirkejas) + " )"
                                  )
                                ])
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
                    ),
                    _vm._v(" "),
                    _c("template", { slot: "footer" }, [
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v("VISO:")
                      ]),
                      _vm._v(" "),
                      _c("th"),
                      _vm._v(" "),
                      _c("th"),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.gra_suma.toFixed(2)))
                      ])
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c("br")
              ],
              1
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "buttons" },
              [
                _c(
                  "b-button",
                  {
                    attrs: {
                      size: "is-medium",
                      "icon-left": "printer",
                      type: "is-dark"
                    },
                    on: { click: _vm.print }
                  },
                  [_vm._v("SPAUSDINTI")]
                ),
                _vm._v(" "),
                _vm.checkedRows.length > 0
                  ? _c(
                      "b-button",
                      {
                        attrs: {
                          size: "is-medium",
                          "icon-left": "download",
                          type: "is-dark"
                        },
                        on: { click: _vm.xml }
                      },
                      [_vm._v("ATSISIŪSTI")]
                    )
                  : _c(
                      "b-button",
                      {
                        attrs: {
                          size: "is-medium",
                          "icon-left": "download",
                          type: "is-dark",
                          disabled: ""
                        },
                        on: { click: _vm.xml }
                      },
                      [_vm._v("ATSISIŪSTI")]
                    )
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Grazinimai_LV.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Grazinimai_LV.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grazinimai_LV_vue_vue_type_template_id_24e39325_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true& */ "./resources/js/views/Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true&");
/* harmony import */ var _Grazinimai_LV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grazinimai_LV.vue?vue&type=script&lang=js& */ "./resources/js/views/Grazinimai_LV.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grazinimai_LV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grazinimai_LV_vue_vue_type_template_id_24e39325_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grazinimai_LV_vue_vue_type_template_id_24e39325_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24e39325",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Grazinimai_LV.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Grazinimai_LV.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Grazinimai_LV.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grazinimai_LV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Grazinimai_LV.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Grazinimai_LV.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grazinimai_LV_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grazinimai_LV_vue_vue_type_template_id_24e39325_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Grazinimai_LV.vue?vue&type=template&id=24e39325&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grazinimai_LV_vue_vue_type_template_id_24e39325_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grazinimai_LV_vue_vue_type_template_id_24e39325_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);