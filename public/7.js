(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Akcijos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Akcijos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'akcijos',
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      defaultOpenedDetails: [1],
      showDetailIcon: false,
      isNarrowed: true,
      pardavimai: [],
      ieskoti: '',
      paieska: '',
      salis: '',
      paieska_big: false,
      mobile_card: true
    };
  },
  computed: {},
  created: function created() {
    this.getData();
  },
  mounted: function mounted() {},
  methods: {
    print: function print() {
      // Pass the element id here
      this.mobile_card = false;
      this.$htmlToPaper('printMe');
    },
    switch_post: function switch_post() {
      var _this = this;

      //this.rikiuotic = !this.rikiuoti;
      if (this.ieskoti == "") {
        this.ieskoti = this.paieska;
      }

      axios.post("/akcijos/store", {
        ieskoti: this.ieskoti,
        paieska_big: this.paieska_big
      }).then(function (response) {
        console.log(response.data);

        _this.getData();
      })["catch"](function (err) {
        _this.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    paieska_post: function paieska_post() {
      var _this2 = this;

      if (this.ieskoti != "") {
        axios.post("/akcijos/store", {
          ieskoti: this.ieskoti,
          paieska_big: this.paieska_big
        }).then(function (response) {
          _this2.getData();
        })["catch"](function (err) {
          _this2.$buefy.toast.open({
            message: "Error: ".concat(err.message),
            type: 'is-danger',
            queue: false
          });
        });
      } else {
        this.$buefy.toast.open({
          message: "KLAIDA: \u012Fveskite paie\u0161kos rakta\u017Eod\u012F!",
          type: 'is-danger',
          queue: false
        });
      }
    },
    getData: function getData() {
      var _this3 = this;

      this.isLoading = true;
      this.axios.get('/akcijos').then(function (response) {
        _this3.isLoading = false;
        _this3.pardavimai = response.data.data;
        _this3.paieska = response.data.paieska;
        _this3.paieska_big = response.data.paieska_big ? true : false;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Akcijos.vue?vue&type=template&id=3d88f0ef&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Akcijos.vue?vue&type=template&id=3d88f0ef& ***!
  \*****************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "section is-main-section" },
    [
      _c(
        "card-component",
        { attrs: { title: "VALDYMAS", icon: "finance" } },
        [
          _c(
            "b-field",
            { attrs: { position: "is-centered" } },
            [
              _c("b-input", {
                attrs: {
                  placeholder: "Paieška...",
                  type: "search",
                  icon: "magnify",
                  expanded: ""
                },
                nativeOn: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.paieska_post($event)
                  }
                },
                model: {
                  value: _vm.ieskoti,
                  callback: function($$v) {
                    _vm.ieskoti = $$v
                  },
                  expression: "ieskoti"
                }
              }),
              _vm._v(" "),
              _c("p", { staticClass: "control" }, [
                _c(
                  "button",
                  {
                    staticClass: "button is-primary",
                    on: { click: _vm.paieska_post }
                  },
                  [_vm._v("Ieškoti")]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-field",
            [
              _c(
                "b-checkbox",
                {
                  attrs: { value: false, type: "is-info" },
                  model: {
                    value: _vm.paieska_big,
                    callback: function($$v) {
                      _vm.paieska_big = $$v
                    },
                    expression: "paieska_big"
                  }
                },
                [_vm._v("Aktivuoti išplėstinę paieška")]
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
        { attrs: { title: "AKCIJOS", icon: "account-multiple" } },
        [
          _c(
            "div",
            { attrs: { id: "printMe" } },
            [
              _c("div", { staticClass: "columns" }, [
                _c(
                  "div",
                  {
                    staticClass: "column has-text-centered has-text-weight-bold"
                  },
                  [
                    _vm._v(
                      "\n          Rasta: " +
                        _vm._s(_vm.pardavimai.length) +
                        "\n        "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "b-table",
                {
                  attrs: {
                    "mobile-cards": _vm.mobile_card,
                    bordered: "",
                    hoverable: "",
                    narrowed: _vm.isNarrowed,
                    data: _vm.pardavimai,
                    "opened-detailed": _vm.defaultOpenedDetails,
                    detailed: "",
                    "sort-icon": "arrow-up",
                    "detail-key": "preke",
                    loading: _vm.isLoading
                  },
                  on: {
                    "details-open": function(row, index) {
                      return _vm.$buefy.toast.open(
                        "Išskleista " + row.preke + " prekė!"
                      )
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
                              style: {
                                "background-color": "silver",
                                "vertical-align": "middle"
                              },
                              attrs: {
                                label: "Preke",
                                field: "preke",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                " \n          " +
                                  _vm._s(props.row.preke) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: {
                                "background-color": "silver",
                                "vertical-align": "middle"
                              },
                              attrs: {
                                label: "Kaina",
                                field: "pradine",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.pradine) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: {
                                "background-color": "silver",
                                "vertical-align": "middle"
                              },
                              attrs: {
                                label: "Likutis",
                                field: "likutis",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.likutis) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          props.row.sandelis && props.row.sandelis.length > 0
                            ? _c(
                                "b-table-column",
                                {
                                  style: {
                                    "background-color": "tomato",
                                    "vertical-align": "middle"
                                  },
                                  attrs: {
                                    label: "Sandeliui",
                                    field: "sandelis",
                                    sortable: ""
                                  }
                                },
                                [
                                  _c(
                                    "ul",
                                    _vm._l(props.row.sandelis, function(idx) {
                                      return _c("li", [
                                        _vm._v(
                                          "\n              " +
                                            _vm._s(idx.pavadinimas) +
                                            " - " +
                                            _vm._s(idx.kaina) +
                                            "\n              "
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            : _c(
                                "b-table-column",
                                {
                                  attrs: {
                                    label: "Sandeliui",
                                    field: "sandelis",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n          " + _vm._s() + "\n        "
                                  )
                                ]
                              ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: {
                                "background-color": "greenyellow",
                                "vertical-align": "middle"
                              },
                              attrs: {
                                label: "LT Akcija",
                                field: "LT.kaina",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.LT && props.row.LT.kaina) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: {
                                "background-color": "greenyellow",
                                "vertical-align": "middle"
                              },
                              attrs: {
                                label: "LT Kortele",
                                field: "LT.akcija",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.LT && props.row.LT.akcija) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: {
                                "background-color": "GoldenRod",
                                "vertical-align": "middle"
                              },
                              attrs: {
                                label: "LV Akcija",
                                field: "LV.kaina",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.LV && props.row.LV.kaina) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: {
                                "background-color": "GoldenRod",
                                "vertical-align": "middle"
                              },
                              attrs: {
                                label: "LV Kortele",
                                field: "LV.akcija",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.LV && props.row.LV.akcija) +
                                  "\n        "
                              )
                            ]
                          )
                        ]
                      }
                    },
                    {
                      key: "detail",
                      fn: function(props) {
                        return [
                          _c("b-table", {
                            attrs: {
                              data: props.row.sandeliai,
                              "default-sort-direction": "asc",
                              "default-sort": "sandelis"
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(props) {
                                    return [
                                      _c(
                                        "b-table-column",
                                        {
                                          attrs: {
                                            field: "name",
                                            label: "Sandelis",
                                            sortable: ""
                                          }
                                        },
                                        [
                                          _c("small", [
                                            _vm._v(_vm._s(props.row.name))
                                          ])
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-table-column",
                                        {
                                          attrs: {
                                            field: "likutis",
                                            label: "Likutis",
                                            sortable: ""
                                          }
                                        },
                                        [
                                          _c("small", [
                                            _vm._v(_vm._s(props.row.likutis))
                                          ])
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
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
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Akcijos.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Akcijos.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Akcijos_vue_vue_type_template_id_3d88f0ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Akcijos.vue?vue&type=template&id=3d88f0ef& */ "./resources/js/views/Akcijos.vue?vue&type=template&id=3d88f0ef&");
/* harmony import */ var _Akcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Akcijos.vue?vue&type=script&lang=js& */ "./resources/js/views/Akcijos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Akcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Akcijos_vue_vue_type_template_id_3d88f0ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Akcijos_vue_vue_type_template_id_3d88f0ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Akcijos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Akcijos.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Akcijos.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Akcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Akcijos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Akcijos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Akcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Akcijos.vue?vue&type=template&id=3d88f0ef&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Akcijos.vue?vue&type=template&id=3d88f0ef& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Akcijos_vue_vue_type_template_id_3d88f0ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Akcijos.vue?vue&type=template&id=3d88f0ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Akcijos.vue?vue&type=template&id=3d88f0ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Akcijos_vue_vue_type_template_id_3d88f0ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Akcijos_vue_vue_type_template_id_3d88f0ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);