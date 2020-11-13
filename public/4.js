(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBoxFull.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalBoxFull.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ModalBoxFull',
  props: {
    isActive: {
      type: Boolean,
      "default": false
    },
    confirmLabel: {
      type: String,
      "default": 'Patvirtinti'
    },
    confirmType: {
      type: String,
      "default": 'is-info'
    }
  },
  data: function data() {
    return {
      isModalActive: false
    };
  },
  computed: {
    confirmButtonClass: function confirmButtonClass() {
      return "button ".concat(this.confirmType);
    }
  },
  methods: {
    confirm: function confirm() {
      this.$emit('confirm');
    }
  },
  watch: {
    isActive: function isActive(newValue) {
      this.isModalActive = newValue;
    },
    isModalActive: function isModalActive(newValue) {
      if (!newValue) {//this.cancel()
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalStatistikaBox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalStatistikaBox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBoxFull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBoxFull */ "./resources/js/components/ModalBoxFull.vue");
/* harmony import */ var _components_Charts_bar_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/bar.config */ "./resources/js/components/Charts/bar.config.js");
/* harmony import */ var _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Charts/BarChart */ "./resources/js/components/Charts/BarChart.js");
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
//
//
//
//
//
//
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
  name: "ModalPardavimaitBox",
  components: {
    ModalBoxFull: _ModalBoxFull__WEBPACK_IMPORTED_MODULE_0__["default"],
    BarChart: _components_Charts_BarChart__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: {
    isActive: {
      type: Boolean,
      "default": false
    },
    viewSubject: {
      type: String,
      "default": ''
    },
    viewPardavimai: {
      type: Array,
      "default": null
    },
    viewLabel: {
      type: Array,
      "default": null
    }
  },
  data: function data() {
    return {
      defaultChart: {
        chartData: null,
        extraOptions: _components_Charts_bar_config__WEBPACK_IMPORTED_MODULE_1__["chartOptionsMain"]
      },
      pardavimai: this.viewPardavimai,
      label: this.viewLabel
    };
  },
  computed: {},
  watch: {
    $props: {
      handler: function handler() {
        this.fillChartData();
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function mounted() {},
  created: function created() {//console.log(this.viewPardavimai);
    //this.$parent.$on('update', this.uzklausa);
  },
  methods: {
    cancel: function cancel() {
      this.$emit('cancel');
    },
    confirm: function confirm() {
      this.$emit('confirm');
    },
    fillChartData: function fillChartData() {
      this.defaultChart.chartData = {
        datasets: [//viso
        {
          //label: 'VISO',
          fill: true,
          borderColor: _components_Charts_bar_config__WEBPACK_IMPORTED_MODULE_1__["chartColors"]["default"].info,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: _components_Charts_bar_config__WEBPACK_IMPORTED_MODULE_1__["chartColors"]["default"].info,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: _components_Charts_bar_config__WEBPACK_IMPORTED_MODULE_1__["chartColors"]["default"].info,
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          data: this.viewPardavimai
        }],
        labels: this.viewLabel
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Statistika.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Statistika.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_ModalStatistikaBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ModalStatistikaBox */ "./resources/js/components/ModalStatistikaBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    ModalStatistikaBox: _components_ModalStatistikaBox__WEBPACK_IMPORTED_MODULE_1__["default"]
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
      mobile_card: true,
      grupes: [],
      grupes_lv: [],
      grupe: '',
      isModalView: false,
      viewObject: null,
      viewPardavimai: null,
      viewLabel: null
    };
  },
  computed: {
    viewObjectName: function viewObjectName() {
      if (this.viewObject) {
        return this.viewObject;
      }

      return null;
    },
    viewName: function viewName() {
      if (this.viewPardavimai) {
        return this.viewPardavimai;
      }

      return null;
    },
    labelName: function labelName() {
      if (this.viewLabel) {
        return this.viewLabel;
      }

      return null;
    }
  },
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
    keisti_grupe: function keisti_grupe() {
      if (!this.ieskoti) {
        this.ieskoti = this.paieska;
      }

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

      axios.post("/statistika/store", {
        ieskoti: this.ieskoti,
        lt: this.rodyti_lt,
        lv: this.rodyti_lv,
        ee: this.rodyti_ee,
        rikiuoti: "1",
        gam: this.gam,
        pirk: this.pirk,
        paieska_big: this.paieska_big,
        grupe: this.grupe
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
      this.axios.get('/statistika').then(function (response) {
        _this3.isLoading = false;
        _this3.pardavimai = response.data.data;
        _this3.paieska = response.data.paieska;
        _this3.viso_pard = response.data.viso_pard;
        _this3.viso_lik = response.data.viso_lik;
        _this3.grupes = response.data.grupes;
        _this3.grupes_lv = response.data.grupes_lv;
        _this3.grupe = response.data.grupe;
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
    },
    viewModal_pardavimai: function viewModal_pardavimai(viewObject, viewPard) {
      //console.log(viewPardavimai);
      var pardavimai = [];
      var label = [];
      var i;
      var sk = viewPard.length;

      for (i = 0; i < sk; i++) {
        pardavimai.push(viewPard[i]['kiekis']);
        label.push(viewPard[i]['data']);
      }

      this.viewObject = viewObject;
      this.viewPardavimai = pardavimai;
      this.viewLabel = label;
      this.isModalView = true; //this.$emit('update');
    },
    viewConfirm: function viewConfirm() {
      this.isModalView = false;
    },
    viewCancel: function viewCancel() {
      this.isModalView = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBoxFull.vue?vue&type=template&id=6756ccf8&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalBoxFull.vue?vue&type=template&id=6756ccf8& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      attrs: {
        "full-screen": "",
        active: _vm.isModalActive,
        "has-modal-card": ""
      },
      on: {
        "update:active": function($event) {
          _vm.isModalActive = $event
        }
      }
    },
    [
      _c("div", { staticClass: "modal-card" }, [
        _c("header", { staticClass: "modal-card-head" }, [
          _c("p", { staticClass: "modal-card-title" }, [_vm._v("PARDAVIMAI")])
        ]),
        _vm._v(" "),
        _c(
          "section",
          { staticClass: "modal-card-body" },
          [_vm._t("default")],
          2
        ),
        _vm._v(" "),
        _c("footer", { staticClass: "modal-card-foot" }, [
          _c(
            "button",
            { class: _vm.confirmButtonClass, on: { click: _vm.confirm } },
            [_vm._v(_vm._s(_vm.confirmLabel))]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalStatistikaBox.vue?vue&type=template&id=133f1880&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalStatistikaBox.vue?vue&type=template&id=133f1880& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    "modal-box-full",
    {
      attrs: {
        "is-active": _vm.isActive,
        "confirm-type": "is-success",
        "confirm-label": "Uždaryti"
      },
      on: {
        "update:isActive": function($event) {
          _vm.isActive = $event
        },
        "update:is-active": function($event) {
          _vm.isActive = $event
        },
        confirm: _vm.confirm
      }
    },
    [
      _c(
        "card-component",
        {
          attrs: {
            title: _vm.viewSubject,
            icon: "finance",
            "header-icon": "reload"
          },
          on: { "header-icon-click": _vm.fillChartData }
        },
        [
          _vm.defaultChart.chartData
            ? _c(
                "div",
                { staticClass: "chart-area" },
                [
                  _c("bar-chart", {
                    ref: "bigChart",
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-id": "big-bar-chart",
                      "chart-data": _vm.defaultChart.chartData,
                      "extra-options": _vm.defaultChart.extraOptions
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
      _c("modal-statistika-box", {
        attrs: {
          "is-active": _vm.isModalView,
          "view-subject": _vm.viewObjectName,
          "view-pardavimai": _vm.viewName,
          "view-label": _vm.labelName
        },
        on: { confirm: _vm.viewConfirm }
      }),
      _vm._v(" "),
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
            { attrs: { label: "" } },
            [
              _c(
                "b-select",
                {
                  attrs: {
                    placeholder: "Pasirinkite...",
                    icon: "earth",
                    expanded: ""
                  },
                  nativeOn: {
                    change: function($event) {
                      return _vm.keisti_grupe($event)
                    }
                  },
                  model: {
                    value: _vm.grupe,
                    callback: function($$v) {
                      _vm.grupe = $$v
                    },
                    expression: "grupe"
                  }
                },
                _vm._l(_vm.grupes, function(grup, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: index } },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(grup) +
                          " - " +
                          _vm._s(_vm.grupes_lv[grup]) +
                          "\n          "
                      )
                    ]
                  )
                }),
                0
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
                  [
                    _vm._v("\n          Rasta: " + _vm._s(_vm.paieska)),
                    _c("br"),
                    _vm._v(_vm._s(_vm.grupes[_vm.grupe]) + "\n        ")
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
                          ),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: { "background-color": "WhiteSmoke" },
                              attrs: {
                                width: "50px",
                                label: "INFO",
                                field: "info"
                              }
                            },
                            [
                              !Array.isArray(props.row.buy)
                                ? _c(
                                    "button",
                                    {
                                      staticClass: "button is-small is-danger",
                                      attrs: { type: "button" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.viewModal_pardavimai(
                                            props.row.buy &&
                                              props.row.buy.sandelis,
                                            props.row.buy && props.row.buy.viso
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("b-icon", {
                                        attrs: {
                                          icon: "chart-bar",
                                          size: "is-small"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
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

/***/ "./resources/js/components/Charts/BarChart.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Charts/BarChart.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'bar-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Bar"],
  mixins: [vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["mixins"].reactiveProp],
  props: {
    extraOptions: Object
  },
  data: function data() {
    return {
      ctx: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$watch('chartData', function (newVal, oldVal) {
      if (!oldVal) {
        _this.renderChart(_this.chartData, _this.extraOptions);
      }
    }, {
      immediate: true
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Charts/bar.config.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Charts/bar.config.js ***!
  \******************************************************/
/*! exports provided: chartColors, baseChartOptions, chartOptionsMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartColors", function() { return chartColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseChartOptions", function() { return baseChartOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartOptionsMain", function() { return chartOptionsMain; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var chartColors = {
  "default": {
    primary: '#00D1B2',
    info: '#209CEE',
    danger: '#FF3860',
    lietuva: '#5b9600',
    latvija: 'GoldenRod',
    estija: 'tomato',
    viso: 'black'
  }
};
var baseChartOptions = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  responsive: true
};
var chartOptionsMain = _objectSpread(_objectSpread({}, baseChartOptions), {}, {
  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 4,
    xPadding: 12,
    mode: 'nearest',
    intersect: 0,
    position: 'nearest'
  },
  scales: {
    yAxes: [{
      barPercentage: 1,
      gridLines: {
        drawBorder: false,
        color: 'rgba(29,140,248,0.0)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }],
    xAxes: [{
      barPercentage: 1,
      gridLines: {
        drawBorder: false,
        color: 'rgba(225,78,202,0.1)',
        zeroLineColor: 'transparent'
      },
      ticks: {
        padding: 20,
        fontColor: '#9a9a9a'
      }
    }]
  }
});

/***/ }),

/***/ "./resources/js/components/ModalBoxFull.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ModalBoxFull.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBoxFull_vue_vue_type_template_id_6756ccf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBoxFull.vue?vue&type=template&id=6756ccf8& */ "./resources/js/components/ModalBoxFull.vue?vue&type=template&id=6756ccf8&");
/* harmony import */ var _ModalBoxFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalBoxFull.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalBoxFull.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalBoxFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalBoxFull_vue_vue_type_template_id_6756ccf8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalBoxFull_vue_vue_type_template_id_6756ccf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalBoxFull.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalBoxFull.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ModalBoxFull.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBoxFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalBoxFull.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBoxFull.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBoxFull_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalBoxFull.vue?vue&type=template&id=6756ccf8&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ModalBoxFull.vue?vue&type=template&id=6756ccf8& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBoxFull_vue_vue_type_template_id_6756ccf8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalBoxFull.vue?vue&type=template&id=6756ccf8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBoxFull.vue?vue&type=template&id=6756ccf8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBoxFull_vue_vue_type_template_id_6756ccf8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBoxFull_vue_vue_type_template_id_6756ccf8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ModalStatistikaBox.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ModalStatistikaBox.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalStatistikaBox_vue_vue_type_template_id_133f1880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalStatistikaBox.vue?vue&type=template&id=133f1880& */ "./resources/js/components/ModalStatistikaBox.vue?vue&type=template&id=133f1880&");
/* harmony import */ var _ModalStatistikaBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalStatistikaBox.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalStatistikaBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalStatistikaBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalStatistikaBox_vue_vue_type_template_id_133f1880___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalStatistikaBox_vue_vue_type_template_id_133f1880___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalStatistikaBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalStatistikaBox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ModalStatistikaBox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalStatistikaBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalStatistikaBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalStatistikaBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalStatistikaBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalStatistikaBox.vue?vue&type=template&id=133f1880&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ModalStatistikaBox.vue?vue&type=template&id=133f1880& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalStatistikaBox_vue_vue_type_template_id_133f1880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalStatistikaBox.vue?vue&type=template&id=133f1880& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalStatistikaBox.vue?vue&type=template&id=133f1880&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalStatistikaBox_vue_vue_type_template_id_133f1880___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalStatistikaBox_vue_vue_type_template_id_133f1880___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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