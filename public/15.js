(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Statistika.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Statistika.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
//
//
//
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
  name: 'statistika',
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
    change_gam: function change_gam() {
      this.gam = !this.gam;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    change_pirk: function change_pirk() {
      this.pirk = !this.pirk;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    change_lt: function change_lt() {
      this.rodyti_lt = !this.rodyti_lt;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    change_lv: function change_lv() {
      this.rodyti_lv = !this.rodyti_lv;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    change_ee: function change_ee() {
      this.rodyti_ee = !this.rodyti_ee;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    switch_post: function switch_post() {
      var _this = this;

      //this.rikiuotic = !this.rikiuoti;
      if (this.ieskoti == "") {
        this.ieskoti = this.paieska;
      }

      axios.post("/statistika/store", {
        ieskoti: this.ieskoti,
        lt: this.rodyti_lt,
        lv: this.rodyti_lv,
        ee: this.rodyti_ee,
        rikiuoti: this.rikiuoti,
        gam: this.gam,
        pirk: this.pirk,
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
        axios.post("/statistika/store", {
          ieskoti: this.ieskoti,
          lt: this.rodyti_lt,
          lv: this.rodyti_lv,
          ee: this.rodyti_ee,
          rikiuoti: "1",
          gam: this.gam,
          pirk: this.pirk,
          paieska_big: this.paieska_big
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
      this.axios.get('/statistika').then(function (response) {
        _this3.isLoading = false;
        _this3.pardavimai = response.data.data;
        _this3.paieska = response.data.paieska;
        _this3.viso_pard = response.data.viso_pard;
        _this3.viso_lik = response.data.viso_lik;
        _this3.rikiuoti = response.data.rikiuoti ? false : true;
        _this3.paieska_big = response.data.paieska_big ? true : false;
        _this3.gam = response.data.gam ? true : false;
        _this3.pirk = response.data.pirk ? true : false;
        _this3.rodyti_lt = response.data.salis.LT ? true : false;
        _this3.rodyti_lv = response.data.salis.LV ? true : false;
        _this3.rodyti_ee = response.data.salis.EE ? true : false; //console.log(reponse.data.salis);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Statistika.vue?vue&type=template&id=5f6443e8&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Statistika.vue?vue&type=template&id=5f6443e8& ***!
  \********************************************************************************************************************************************************************************************************/
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
          ),
          _vm._v(" "),
          _c(
            "b-field",
            { attrs: { horizontal: "" } },
            [
              _c(
                "b-button",
                {
                  attrs: { type: _vm.rodyti_lt ? "is-primary" : "is-dark" },
                  on: {
                    click: function($event) {
                      return _vm.change_lt()
                    }
                  }
                },
                [_vm._v("LIETUVA")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { type: _vm.rodyti_lv ? "is-warning" : "is-dark" },
                  on: {
                    click: function($event) {
                      return _vm.change_lv()
                    }
                  }
                },
                [_vm._v("LATVIJA")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { type: _vm.rodyti_ee ? "is-danger" : "is-dark" },
                  on: {
                    click: function($event) {
                      return _vm.change_ee()
                    }
                  }
                },
                [_vm._v("ESTIJA")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-field",
            { attrs: { horizontal: "" } },
            [
              _c(
                "b-button",
                {
                  attrs: { type: _vm.pirk ? "is-info" : "is-dark" },
                  on: {
                    click: function($event) {
                      return _vm.change_pirk()
                    }
                  }
                },
                [_vm._v("GAMYBA")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { type: _vm.gam ? "is-info" : "is-dark" },
                  on: {
                    click: function($event) {
                      return _vm.change_gam()
                    }
                  }
                },
                [_vm._v("PIRKIMAI")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-field",
            [
              _c(
                "b-switch",
                {
                  nativeOn: {
                    click: function($event) {
                      return _vm.switch_post($event)
                    }
                  },
                  model: {
                    value: _vm.rikiuoti,
                    callback: function($$v) {
                      _vm.rikiuoti = $$v
                    },
                    expression: "rikiuoti"
                  }
                },
                [_vm._v("\n        Veikia su mūsų GAM gaminiais! \n      ")]
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
        { attrs: { title: "STATISTIKA", icon: "account-multiple" } },
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
                  [_vm._v(_vm._s(_vm.paieska))]
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
                    "detail-key": "sandelis",
                    loading: _vm.isLoading
                  },
                  on: {
                    "details-open": function(row, index) {
                      return _vm.$buefy.toast.open(
                        "Išskleistas " + row.sandelis + " sandelys!"
                      )
                    }
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(props) {
                        return [
                          props.row.salis == 1
                            ? _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "greenyellow" },
                                  attrs: {
                                    label: "Sandelis",
                                    field: "sandelis"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.sandelis) +
                                      "\n        "
                                  )
                                ]
                              )
                            : props.row.salis == 2
                            ? _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "GoldenRod " },
                                  attrs: {
                                    label: "Sandelis",
                                    field: "sandelis"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.sandelis) +
                                      "\n        "
                                  )
                                ]
                              )
                            : props.row.salis == 3
                            ? _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "tomato" },
                                  attrs: {
                                    label: "Sandelis",
                                    field: "sandelis"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.sandelis) +
                                      "\n        "
                                  )
                                ]
                              )
                            : _c(
                                "b-table-column",
                                {
                                  attrs: {
                                    label: "Sandelis",
                                    field: "sandelis"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.sandelis) +
                                      "\n        "
                                  )
                                ]
                              ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Likutis",
                                field: "likutis_sk",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.likutis_sk) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Parduota",
                                field: "pardavimai_sk",
                                sortable: ""
                              }
                            },
                            [
                              _vm._v(
                                "\n          " +
                                  _vm._s(props.row.pardavimai_sk) +
                                  "\n        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              attrs: {
                                label: "Viso",
                                field: "viso",
                                sortable: ""
                              }
                            },
                            [_c("b", [_vm._v(_vm._s(props.row.viso))])]
                          )
                        ]
                      }
                    },
                    {
                      key: "detail",
                      fn: function(props) {
                        return [
                          _c("div", { staticClass: "columns" }, [
                            _c(
                              "div",
                              {
                                staticClass: "column",
                                style: { border: "1px solid" }
                              },
                              [
                                _c("b-table", {
                                  attrs: {
                                    data: props.row.list,
                                    "default-sort-direction": "desc",
                                    "default-sort": "kiekis",
                                    bordered: true,
                                    striped: true,
                                    narrowed: true
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
                                                  field: "preke",
                                                  label: "Prekė",
                                                  sortable: ""
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(props.row.preke) +
                                                    "\n              "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-table-column",
                                              {
                                                style: {
                                                  "background-color":
                                                    "LightGray"
                                                },
                                                attrs: {
                                                  label: "Likučiai",
                                                  field: "likutis",
                                                  sortable: ""
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(props.row.likutis) +
                                                    "\n              "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "b-table-column",
                                              {
                                                style: {
                                                  "background-color":
                                                    "LightGray"
                                                },
                                                attrs: {
                                                  label: "Pardavimai",
                                                  field: "pardavimai",
                                                  sortable: ""
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                  " +
                                                    _vm._s(
                                                      props.row.pardavimai
                                                    ) +
                                                    "\n              "
                                                )
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
                              ],
                              1
                            )
                          ])
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
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "footer" }, [
                    _c("th"),
                    _vm._v(" "),
                    _c("th"),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.viso_lik))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.viso_pard))]),
                    _vm._v(" "),
                    _c("th")
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

/***/ "./resources/js/views/Statistika.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Statistika.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Statistika_vue_vue_type_template_id_5f6443e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistika.vue?vue&type=template&id=5f6443e8& */ "./resources/js/views/Statistika.vue?vue&type=template&id=5f6443e8&");
/* harmony import */ var _Statistika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statistika.vue?vue&type=script&lang=js& */ "./resources/js/views/Statistika.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Statistika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Statistika_vue_vue_type_template_id_5f6443e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Statistika_vue_vue_type_template_id_5f6443e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Statistika.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Statistika.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Statistika.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistika.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Statistika.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistika_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Statistika.vue?vue&type=template&id=5f6443e8&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Statistika.vue?vue&type=template&id=5f6443e8& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistika_vue_vue_type_template_id_5f6443e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Statistika.vue?vue&type=template&id=5f6443e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Statistika.vue?vue&type=template&id=5f6443e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistika_vue_vue_type_template_id_5f6443e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistika_vue_vue_type_template_id_5f6443e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);