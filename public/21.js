(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CardToolbar',
  props: {
    isMobile: {
      type: Boolean,
      "default": false
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VisiLikuciai.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VisiLikuciai.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Prekes",
  components: {
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_1__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      sarasas: [],
      sandelis: '',
      sandeliai: []
    };
  },
  computed: {
    apy_kiek: function apy_kiek() {
      var total = [];
      Object.entries(this.sarasas).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        total.push(val.kiek); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_viso: function apy_viso() {
      var total = [];
      Object.entries(this.sarasas).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            val = _ref4[1];

        total.push(val.kaina / val.nr * val.kiek); // the value of the current key.
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
    csvExport: function csvExport(arrData) {
      var csvContent = "data:text/csv;charset=utf-8," + "\uFEFF";
      csvContent += [Object.keys(arrData[0]).join(";")].concat(_toConsumableArray(arrData.map(function (item) {
        return Object.values(item).join(";");
      }))).join("\n").replace(/(^\[)|(\]$)/gm, "");
      var data = encodeURI(csvContent);
      var link = document.createElement("a");
      link.setAttribute("href", data);
      link.setAttribute("download", this.sandelis + '.csv');
      link.click();
    },
    print: function print() {
      // Pass the element id here
      this.mobile_card = false;
      this.$htmlToPaper('printMe');
    },
    paieska_post: function paieska_post() {
      var _this = this;

      axios.post("/visilikuciai/store", {
        sandelis: this.sandelis
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
      this.axios.get('/visilikuciai').then(function (response) {
        _this2.isLoading = false;
        _this2.sarasas = response.data.data;
        _this2.sandelis = response.data.sandelis;
        _this2.sandeliai = response.data.sandeliai;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
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
  return _c("div", { staticClass: "notification is-card-toolbar" }, [
    _c("div", { staticClass: "level", class: { "is-mobile": _vm.isMobile } }, [
      _c("div", { staticClass: "level-left" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("left")], 2)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "level-right" }, [
        _c("div", { staticClass: "level-item" }, [_vm._t("right")], 2)
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
              { attrs: { label: "Sandelis:", horizontal: "" } },
              [
                _c(
                  "b-select",
                  { attrs: { placeholder: "Pasirinkite", expanded: "" } },
                  _vm._l(_vm.sandeliai, function(idx, id) {
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
            _c("b-field", { attrs: { label: " ", horizontal: "" } }, [
              _c("p", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-sark",
                    on: { click: _vm.paieska_post }
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
          { attrs: { title: "Prekės", icon: "account-multiple" } },
          [
            _c(
              "div",
              { attrs: { id: "printMe" } },
              [
                _c("div", { staticClass: "is-size-2" }, [
                  _vm._v(_vm._s(_vm.sandelis))
                ]),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      bordered: "",
                      narrowed: true,
                      data: _vm.sarasas,
                      "sort-icon": "arrow-up",
                      loading: _vm.isLoading,
                      "default-sort-direction": "asc",
                      "default-sort": "pavadinimas"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c("b-table-column", { attrs: { label: "Nr." } }, [
                              _vm._v(
                                "\n            " +
                                  _vm._s(props.index + 1) +
                                  "\n          "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: {
                                  label: "Nosaukums",
                                  field: "pavadinimas",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(props.row.pavadinimas) +
                                    "\n          "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              { attrs: { label: "Vieniba" } },
                              [_vm._v("\n                Gab\n          ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "Daudzums", field: "kiek" }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(props.row.kiek) +
                                    "\n          "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "Cena", field: "kaina" }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      (props.row.kaina / props.row.nr).toFixed(
                                        2
                                      )
                                    ) +
                                    "\n          "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "Summa" }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      (
                                        (props.row.kaina / props.row.nr) *
                                        props.row.kiek
                                      ).toFixed(2)
                                    ) +
                                    "\n          "
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
                        _vm._v(_vm._s(_vm.apy_kiek))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.apy_viso.toFixed(2)))
                      ])
                    ])
                  ],
                  2
                )
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
                _vm.sarasas.length > 0
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
                            return _vm.csvExport(_vm.sarasas)
                          }
                        }
                      },
                      [_vm._v("Atsisiusti")]
                    )
                  : _vm._e(),
                _vm._v(" "),
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

/***/ "./resources/js/components/CardToolbar.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony import */ var _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CardToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CardToolbar.vue?vue&type=template&id=46e0f3b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CardToolbar.vue?vue&type=template&id=46e0f3b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardToolbar_vue_vue_type_template_id_46e0f3b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/VisiLikuciai.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/VisiLikuciai.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VisiLikuciai_vue_vue_type_template_id_26e86786_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true& */ "./resources/js/views/VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true&");
/* harmony import */ var _VisiLikuciai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisiLikuciai.vue?vue&type=script&lang=js& */ "./resources/js/views/VisiLikuciai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisiLikuciai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisiLikuciai_vue_vue_type_template_id_26e86786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VisiLikuciai_vue_vue_type_template_id_26e86786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26e86786",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/VisiLikuciai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/VisiLikuciai.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/VisiLikuciai.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisiLikuciai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VisiLikuciai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VisiLikuciai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisiLikuciai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisiLikuciai_vue_vue_type_template_id_26e86786_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/VisiLikuciai.vue?vue&type=template&id=26e86786&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisiLikuciai_vue_vue_type_template_id_26e86786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VisiLikuciai_vue_vue_type_template_id_26e86786_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);