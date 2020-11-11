(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalBox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
  name: 'ModalBox',
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
    cancel: function cancel() {
      this.$emit('cancel');
    },
    confirm: function confirm() {
      this.$emit('confirm');
    }
  },
  watch: {
    isActive: function isActive(newValue) {
      this.isModalActive = newValue;
    },
    isModalActive: function isModalActive(newValue) {
      if (!newValue) {
        this.cancel();
      }
    }
  }
});

/***/ }),

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
    cancel: function cancel() {
      this.$emit('cancel');
    },
    confirm: function confirm() {
      this.$emit('confirm');
    }
  },
  watch: {
    isActive: function isActive(newValue) {
      this.isModalActive = newValue;
    },
    isModalActive: function isModalActive(newValue) {
      if (!newValue) {
        this.cancel();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPardavimaiBox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalPardavimaiBox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBoxFull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBoxFull */ "./resources/js/components/ModalBoxFull.vue");
/* harmony import */ var _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Charts/chart.config */ "./resources/js/components/Charts/chart.config.js");
/* harmony import */ var _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Charts/LineChart */ "./resources/js/components/Charts/LineChart.js");
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
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ModalPardavimaitBox",
  components: {
    ModalBoxFull: _ModalBoxFull__WEBPACK_IMPORTED_MODULE_0__["default"],
    LineChart: _components_Charts_LineChart__WEBPACK_IMPORTED_MODULE_2__["default"],
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
        extraOptions: _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__["chartOptionsMain"]
      },
      pardavimai: [],
      label: []
    };
  },
  mounted: function mounted() {},
  created: function created() {
    console.log(this.viewPardavimai);
    this.$parent.$on('update', this.fillChartData);
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
        datasets: [{
          fill: false,
          borderColor: _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__["chartColors"]["default"].danger,
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__["chartColors"]["default"].danger,
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: _components_Charts_chart_config__WEBPACK_IMPORTED_MODULE_1__["chartColors"]["default"].danger,
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalViewBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBox */ "./resources/js/components/ModalBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ModalEditBox",
  components: {
    ModalBox: _ModalBox__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  props: {
    isActive: {
      type: Boolean,
      "default": false
    },
    viewSubject: {
      type: String,
      "default": []
    },
    viewInfo: {
      type: Array,
      "default": null
    }
  },
  computed: {},
  methods: {
    cancel: function cancel() {
      this.$emit('cancel');
    },
    confirm: function confirm() {
      this.$emit('confirm');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Prekes.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Prekes.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var _components_ModalViewBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ModalViewBox */ "./resources/js/components/ModalViewBox.vue");
/* harmony import */ var _components_ModalPardavimaiBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ModalPardavimaiBox */ "./resources/js/components/ModalPardavimaiBox.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    ModalViewBox: _components_ModalViewBox__WEBPACK_IMPORTED_MODULE_3__["default"],
    ModalPardavimaiBox: _components_ModalPardavimaiBox__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 50,
      isLoading: false,
      rodyti_lt: true,
      rodyti_lv: true,
      rodyti_ee: true,
      atsargos: [],
      sarasas: [],
      grupes: [],
      grupes_lv: [],
      grupe: '',
      defaultOpenedDetails: [1],
      ieskoti: '',
      paieska: '',
      salis: '',
      rikiuoti: false,
      gam: true,
      pirk: true,
      mobile_card: true,
      paieska_big: false,
      viso: [],
      kainos: false,
      perkelimai: true,
      isModalView: false,
      viewObject: null,
      viewInfo: null,
      isModalViewP: false,
      viewObjectP: null,
      viewPardavimai: null,
      labelPardavimai: null
    };
  },
  computed: {
    viewObjectName: function viewObjectName() {
      if (this.viewObject) {
        return this.viewObject;
      }

      return null;
    },
    viewInfoName: function viewInfoName() {
      if (this.viewInfo) {
        return this.viewInfo;
      }

      return null;
    },
    viewObjectNameP: function viewObjectNameP() {
      if (this.viewObjectP) {
        return this.viewObjectP;
      }

      return null;
    },
    viewPardavimaiName: function viewPardavimaiName() {
      if (this.viewPardavimai) {
        return this.viewPardavimai;
      }

      return null;
    },
    labelPardavimaiName: function labelPardavimaiName() {
      if (this.labelPardavimai) {
        return this.labelPardavimai;
      }

      return null;
    }
  },
  created: function created() {
    this.getData();
  },
  methods: {
    print: function print() {
      // Pass the element id here
      this.perkelimai = false;
      this.mobile_card = false;
      this.$htmlToPaper('printMe');
    },
    kainos_keisti: function kainos_keisti() {
      this.kainos = !this.kainos;
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

      axios.post("/prekes/store", {
        ieskoti: this.ieskoti,
        lt: this.rodyti_lt,
        lv: this.rodyti_lv,
        ee: this.rodyti_ee,
        rikiuoti: this.rikiuoti,
        gam: this.gam,
        pirk: this.pirk,
        paieska_big: this.paieska_big,
        grupe: this.grupe
      }).then(function (response) {
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

      axios.post("/prekes/store", {
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
        _this2.rikiuoti = false;

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
      this.axios.get('/prekes').then(function (response) {
        _this3.isLoading = false;
        _this3.sarasas = response.data.sarasas;
        _this3.paieska = response.data.paieska;
        _this3.viso = response.data.viso;
        _this3.atsargos = response.data.atsargos;
        _this3.rikiuoti = response.data.rikiuoti ? false : true;
        _this3.grupes = response.data.grupes;
        _this3.grupes_lv = response.data.grupes_lv;
        _this3.grupe = response.data.grupe;
        _this3.gam = response.data.gam ? true : false;
        _this3.pirk = response.data.pirk ? true : false;
        _this3.paieska_big = response.data.paieska_big ? true : false;
        _this3.rodyti_lt = response.data.salis.LT ? true : false;
        _this3.rodyti_lv = response.data.salis.LV ? true : false;
        _this3.rodyti_ee = response.data.salis.EE ? true : false;
      })["catch"](function (err) {
        _this3.isLoading = false;

        _this3.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    },
    viewModal_pardavimai: function viewModal_pardavimai(viewObjectP, viewPardavimai) {
      //console.log(viewPardavimai);
      var data = [];
      var label = [];
      var i;
      var sk = viewPardavimai.length;

      for (i = 0; i < sk; i++) {
        data.push(viewPardavimai[i]['kiekis']);
        label.push(viewPardavimai[i]['data']);
      }

      this.viewObjectP = viewObjectP;
      this.viewPardavimai = data;
      this.labelPardavimai = label;
      this.isModalViewP = true; //this.$emit('update');
    },
    viewConfirm_pardavimai: function viewConfirm_pardavimai() {
      this.isModalViewP = false;
    },
    viewCancel_pardavimai: function viewCancel_pardavimai() {
      this.isModalViewP = false;
    },
    //Edit modal
    viewModal: function viewModal(viewObject, viewInfo) {
      this.viewObject = viewObject;
      this.viewInfo = viewInfo;
      this.isModalView = true;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBox.vue?vue&type=template&id=75bd336e&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalBox.vue?vue&type=template&id=75bd336e& ***!
  \***********************************************************************************************************************************************************************************************************/
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
      attrs: { active: _vm.isModalActive, "has-modal-card": "" },
      on: {
        "update:active": function($event) {
          _vm.isModalActive = $event
        }
      }
    },
    [
      _c("div", { staticClass: "modal-card" }, [
        _c("header", { staticClass: "modal-card-head" }, [
          _c("p", { staticClass: "modal-card-title" }, [_vm._v("Informacija")])
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
            {
              staticClass: "button",
              attrs: { type: "button" },
              on: { click: _vm.cancel }
            },
            [_vm._v("Atšaukti")]
          ),
          _vm._v(" "),
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
          _c("p", { staticClass: "modal-card-title" }, [_vm._v("Informacija")])
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
            {
              staticClass: "button",
              attrs: { type: "button" },
              on: { click: _vm.cancel }
            },
            [_vm._v("Atšaukti")]
          ),
          _vm._v(" "),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPardavimaiBox.vue?vue&type=template&id=806142f6&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalPardavimaiBox.vue?vue&type=template&id=806142f6& ***!
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
      _c("div", [_vm._v(_vm._s(_vm.viewSubject))]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c(
        "card-component",
        {
          attrs: {
            title: "Pardavimai",
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
                  _c("line-chart", {
                    ref: "bigChart",
                    staticStyle: { height: "100%" },
                    attrs: {
                      "chart-id": "big-line-chart",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewBox.vue?vue&type=template&id=a7296638&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalViewBox.vue?vue&type=template&id=a7296638& ***!
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
    "modal-box",
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
        confirm: _vm.confirm,
        cancel: _vm.cancel
      }
    },
    [
      _c("div", [_vm._v(_vm._s(_vm.viewSubject))]),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          focusable: "",
          bordered: "",
          hoverable: "",
          narrowed: true,
          data: _vm.viewInfo,
          "sort-icon": "arrow-up"
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function(props) {
              return [
                _c(
                  "b-table-column",
                  { attrs: { label: "DATA", field: "data", sortable: "" } },
                  [
                    _vm._v(
                      "\n              " + _vm._s(props.row.data) + "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  {
                    attrs: {
                      label: "Perkelta",
                      field: "perkelta",
                      sortable: ""
                    }
                  },
                  [
                    _vm._v(
                      "\n              " +
                        _vm._s(props.row.perkelta) +
                        "\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-table-column",
                  { attrs: { label: "Sandeliai", field: "sandeliai_i" } },
                  _vm._l(props.row.sandeliai_i, function(idx) {
                    return _c("small", { key: idx }, [
                      _vm._v(
                        "\n              " + _vm._s(idx) + ", \n              "
                      )
                    ])
                  }),
                  0
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Prekes.vue?vue&type=template&id=67ff23b5&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Prekes.vue?vue&type=template&id=67ff23b5& ***!
  \****************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c("modal-view-box", {
        attrs: {
          "is-active": _vm.isModalView,
          "view-subject": _vm.viewObjectName,
          "view-info": _vm.viewInfoName
        },
        on: { confirm: _vm.viewConfirm, cancel: _vm.viewCancel }
      }),
      _vm._v(" "),
      _c("modal-pardavimai-box", {
        attrs: {
          "is-active": _vm.isModalViewP,
          "view-subject": _vm.viewObjectNameP,
          "view-pardavimai": _vm.viewPardavimaiName,
          "view-label": _vm.labelPardavimaiName
        },
        on: { confirm: _vm.viewConfirm_pardavimai }
      }),
      _vm._v(" "),
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
                { attrs: { label: "PAIEŠKA:", horizontal: "" } },
                [
                  _c("b-input", {
                    attrs: {
                      placeholder: "Paieška...",
                      type: "search",
                      icon: "magnify"
                    },
                    nativeOn: {
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
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
                  _c(
                    "b-button",
                    {
                      attrs: {
                        "native-type": "submit",
                        type: "is-primary",
                        outlined: ""
                      },
                      on: { click: _vm.paieska_post }
                    },
                    [_vm._v("Ieškoti")]
                  )
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
                { attrs: { label: " ", horizontal: "" } },
                [
                  _c(
                    "b-checkbox",
                    {
                      attrs: { value: false, type: "is-info" },
                      on: { change: _vm.kainos_keisti },
                      model: {
                        value: _vm.kainos,
                        callback: function($$v) {
                          _vm.kainos = $$v
                        },
                        expression: "kainos"
                      }
                    },
                    [_vm._v("Rodyti kaina")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-field",
                { attrs: { label: "GRUPĖ:", horizontal: "" } },
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
                            "\n              " +
                              _vm._s(grup) +
                              " - " +
                              _vm._s(_vm.grupes_lv[grup]) +
                              "\n            "
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
                { attrs: { label: "RODYTI:", horizontal: "" } },
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
                { attrs: { label: "PREKĖS:", horizontal: "" } },
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
                { attrs: { label: "GRUPAVIMAS:", horizontal: "" } },
                [
                  _c(
                    "b-switch",
                    {
                      attrs: { type: "is-info" },
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
                    [
                      _vm._v(
                        "\n          Veikia TIK su mūsų GAM gaminiais! \n        "
                      )
                    ]
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
            { attrs: { title: "PREKIŲ SĄRAŠAS", icon: "account-multiple" } },
            [
              _c(
                "div",
                { attrs: { id: "printMe" } },
                [
                  _c("div", { staticClass: "columns" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "column has-text-centered has-text-weight-bold"
                      },
                      [
                        _vm._v(
                          "\n          Rasta: " + _vm._s(_vm.sarasas.length)
                        ),
                        _c("br"),
                        _vm._v(_vm._s(_vm.paieska)),
                        _c("br"),
                        _vm._v(_vm._s(_vm.grupes[_vm.grupe]) + "\n          ")
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-field",
                    { attrs: { grouped: "", "group-multiline": "" } },
                    [
                      _c(
                        "b-select",
                        {
                          attrs: { disabled: !_vm.isPaginated },
                          model: {
                            value: _vm.perPage,
                            callback: function($$v) {
                              _vm.perPage = $$v
                            },
                            expression: "perPage"
                          }
                        },
                        [
                          _c("option", { attrs: { value: "50" } }, [
                            _vm._v("50 įrašų puslapyje")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "100" } }, [
                            _vm._v("100 įrašų puslapyje")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "150" } }, [
                            _vm._v("150 įrašų puslapyje")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "200" } }, [
                            _vm._v("200 įrašų puslapyje")
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "control is-flex" },
                        [
                          _c(
                            "b-switch",
                            {
                              model: {
                                value: _vm.isPaginated,
                                callback: function($$v) {
                                  _vm.isPaginated = $$v
                                },
                                expression: "isPaginated"
                              }
                            },
                            [_vm._v("Puslapiai")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-table",
                    {
                      attrs: {
                        paginated: _vm.isPaginated,
                        "per-page": _vm.perPage,
                        "pagination-position": _vm.paginationPosition,
                        "mobile-cards": _vm.mobile_card,
                        bordered: "",
                        hoverable: "",
                        narrowed: true,
                        data: _vm.sarasas,
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
                                  attrs: {
                                    label: "Preke",
                                    field: "preke",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.preke) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  attrs: {
                                    visible: _vm.kainos,
                                    label: "Kaina",
                                    field: "kaina"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(props.row.kaina) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "greenyellow" },
                                  attrs: {
                                    visible: _vm.rodyti_lt,
                                    label: "LT likučiai",
                                    field: "likutis.LT_viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        props.row.likutis &&
                                          props.row.likutis.LT_viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "greenyellow" },
                                  attrs: {
                                    visible: _vm.rodyti_lt,
                                    label: "LT pardavimai",
                                    field: "pardavimai.LT_viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        props.row.pardavimai &&
                                          props.row.pardavimai.LT_viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "GoldenRod" },
                                  attrs: {
                                    visible: _vm.rodyti_lv,
                                    label: "LV likučiai",
                                    field: "likutis.LV_viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n          " +
                                      _vm._s(
                                        props.row.likutis &&
                                          props.row.likutis.LV_viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "GoldenRod" },
                                  attrs: {
                                    visible: _vm.rodyti_lv,
                                    label: "LV pardavimai",
                                    field: "pardavimai.LV_viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n               " +
                                      _vm._s(
                                        props.row.pardavimai &&
                                          props.row.pardavimai.LV_viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "tomato" },
                                  attrs: {
                                    visible: _vm.rodyti_ee,
                                    label: "EE likučiai",
                                    field: "likutis.EE_viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        props.row.likutis &&
                                          props.row.likutis.EE_viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "tomato" },
                                  attrs: {
                                    visible: _vm.rodyti_ee,
                                    label: "EE pardavimai",
                                    field: "pardavimai.EE_viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        props.row.pardavimai &&
                                          props.row.pardavimai.EE_viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "WhiteSmoke " },
                                  attrs: {
                                    label: "LIKUČIAI",
                                    field: "likutis.viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        props.row.likutis &&
                                          props.row.likutis.viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "WhiteSmoke " },
                                  attrs: {
                                    label: "PARDAVIMAI",
                                    field: "pardavimai.viso",
                                    sortable: ""
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(
                                        props.row.pardavimai &&
                                          props.row.pardavimai.viso
                                      ) +
                                      "\n        "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-table-column",
                                {
                                  style: { "background-color": "WhiteSmoke " },
                                  attrs: { label: "Informacija" }
                                },
                                [
                                  !Array.isArray(props.row.buy)
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "button is-small is-danger",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.viewModal_pardavimai(
                                                props.row.buy &&
                                                  props.row.buy.preke,
                                                props.row.buy &&
                                                  props.row.buy.diena
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
                                    : _vm._e(),
                                  _vm._v("\n             - \n          "),
                                  !Array.isArray(props.row.atsargos)
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "button is-small is-primary",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.viewModal(
                                                props.row.atsargos &&
                                                  props.row.atsargos.preke,
                                                props.row.atsargos &&
                                                  props.row.atsargos.info
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("b-icon", {
                                            attrs: {
                                              icon: "eye",
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
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.rodyti_lt,
                                        expression: "rodyti_lt"
                                      }
                                    ],
                                    staticClass: "column",
                                    style: {
                                      border: "1px dotted",
                                      "background-color": "greenyellow"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "has-text-centered" },
                                      [_vm._v("LIETUVA:")]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    props.row.akcija_lt.length > 0
                                      ? _c("b-table", {
                                          attrs: {
                                            data: props.row.akcija_lt,
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
                                                          label: "Akcija"
                                                        }
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            _vm._s(
                                                              props.row.akcija
                                                            )
                                                          )
                                                        ])
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
                                                          label: "Kaina"
                                                        }
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            _vm._s(
                                                              props.row.kaina
                                                            ) + " €"
                                                          )
                                                        ])
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
                                                          label: "Galioja IKI"
                                                        }
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            _vm._s(
                                                              props.row.galioja_iki.split(
                                                                " "
                                                              )[0]
                                                            )
                                                          )
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
                                      : _vm._e(),
                                    _vm._v(" "),
                                    props.row.akcija_lt.length > 0
                                      ? _c("br")
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("b-table", {
                                      attrs: {
                                        data: props.row.list.LT,
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
                                                      field: "sandelis",
                                                      label: "Sandelis",
                                                      sortable: ""
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row.sandelis
                                                        )
                                                      )
                                                    ])
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
                                                      field: "likutis.kiekis",
                                                      label: "Likuciai"
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row.likutis &&
                                                            props.row.likutis
                                                              .kiekis
                                                        )
                                                      )
                                                    ])
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
                                                      field:
                                                        "pardavimai.kiekis",
                                                      label: "Pardavimai"
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row
                                                            .pardavimai &&
                                                            props.row.pardavimai
                                                              .kiekis
                                                        )
                                                      )
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.rodyti_lv,
                                        expression: "rodyti_lv"
                                      }
                                    ],
                                    staticClass: "column",
                                    style: {
                                      border: "1px dotted",
                                      "background-color": "GoldenRod"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "has-text-centered" },
                                      [_vm._v("LATVIJA:")]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    props.row.akcija_lv.length > 0
                                      ? _c("b-table", {
                                          attrs: {
                                            data: props.row.akcija_lv,
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
                                                          label: "Akcija"
                                                        }
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            _vm._s(
                                                              props.row.akcija
                                                            )
                                                          )
                                                        ])
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
                                                          label: "Kaina"
                                                        }
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            _vm._s(
                                                              props.row.kaina
                                                            ) + " €"
                                                          )
                                                        ])
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
                                                          label: "Galioja IKI"
                                                        }
                                                      },
                                                      [
                                                        _c("small", [
                                                          _vm._v(
                                                            _vm._s(
                                                              props.row.galioja_iki.split(
                                                                " "
                                                              )[0]
                                                            )
                                                          )
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
                                      : _vm._e(),
                                    _vm._v(" "),
                                    props.row.akcija_lv.length > 0
                                      ? _c("br")
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("b-table", {
                                      attrs: {
                                        data: props.row.list.LV,
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
                                                      field: "sandelis",
                                                      label: "Sandelis",
                                                      sortable: ""
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row.sandelis
                                                        )
                                                      )
                                                    ])
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
                                                      field: "likutis.kiekis",
                                                      label: "Likuciai"
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row.likutis &&
                                                            props.row.likutis
                                                              .kiekis
                                                        )
                                                      )
                                                    ])
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
                                                      field:
                                                        "pardavimai.kiekis",
                                                      label: "Pardavimai"
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row
                                                            .pardavimai &&
                                                            props.row.pardavimai
                                                              .kiekis
                                                        )
                                                      )
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.rodyti_ee,
                                        expression: "rodyti_ee"
                                      }
                                    ],
                                    staticClass: "column",
                                    style: {
                                      border: "1px dotted",
                                      "background-color": "tomato"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "has-text-centered" },
                                      [_vm._v("ESTIJA:")]
                                    ),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("b-table", {
                                      attrs: {
                                        data: props.row.list.EE,
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
                                                      field: "sandelis",
                                                      label: "Sandelis",
                                                      sortable: ""
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row.sandelis
                                                        )
                                                      )
                                                    ])
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
                                                      field: "likutis.kiekis",
                                                      label: "Likuciai"
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row.likutis &&
                                                            props.row.likutis
                                                              .kiekis
                                                        )
                                                      )
                                                    ])
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
                                                      field:
                                                        "pardavimai.kiekis",
                                                      label: "Pardavimai"
                                                    }
                                                  },
                                                  [
                                                    _c("small", [
                                                      _vm._v(
                                                        _vm._s(
                                                          props.row
                                                            .pardavimai &&
                                                            props.row.pardavimai
                                                              .kiekis
                                                        )
                                                      )
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
                        _c("th", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.kainos,
                              expression: "kainos"
                            }
                          ]
                        }),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.rodyti_lt,
                                expression: "rodyti_lt"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.viso.lt_lik))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.rodyti_lt,
                                expression: "rodyti_lt"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.viso.lt_pard))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.rodyti_lv,
                                expression: "rodyti_lv"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.viso.lv_lik))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.rodyti_lv,
                                expression: "rodyti_lv"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.viso.lv_pard))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.rodyti_ee,
                                expression: "rodyti_ee"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.viso.ee_lik))]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.rodyti_ee,
                                expression: "rodyti_ee"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.viso.ee_pard))]
                        ),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            _vm._s(
                              _vm.viso.lt_lik +
                                _vm.viso.lv_lik +
                                _vm.viso.ee_lik
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", [
                          _vm._v(
                            _vm._s(
                              _vm.viso.lt_pard +
                                _vm.viso.lv_pard +
                                _vm.viso.ee_pard
                            )
                          )
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
    ],
    1
  )
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

/***/ "./resources/js/components/Charts/LineChart.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Charts/LineChart.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'line-chart',
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["Line"],
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

/***/ "./resources/js/components/Charts/chart.config.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Charts/chart.config.js ***!
  \********************************************************/
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
    danger: '#FF3860'
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
      barPercentage: 1.6,
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
      barPercentage: 1.6,
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

/***/ "./resources/js/components/ModalBox.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/ModalBox.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalBox_vue_vue_type_template_id_75bd336e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalBox.vue?vue&type=template&id=75bd336e& */ "./resources/js/components/ModalBox.vue?vue&type=template&id=75bd336e&");
/* harmony import */ var _ModalBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalBox.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalBox_vue_vue_type_template_id_75bd336e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalBox_vue_vue_type_template_id_75bd336e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/ModalBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalBox.vue?vue&type=template&id=75bd336e&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ModalBox.vue?vue&type=template&id=75bd336e& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBox_vue_vue_type_template_id_75bd336e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalBox.vue?vue&type=template&id=75bd336e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalBox.vue?vue&type=template&id=75bd336e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBox_vue_vue_type_template_id_75bd336e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalBox_vue_vue_type_template_id_75bd336e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/ModalPardavimaiBox.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/ModalPardavimaiBox.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalPardavimaiBox_vue_vue_type_template_id_806142f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalPardavimaiBox.vue?vue&type=template&id=806142f6& */ "./resources/js/components/ModalPardavimaiBox.vue?vue&type=template&id=806142f6&");
/* harmony import */ var _ModalPardavimaiBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalPardavimaiBox.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalPardavimaiBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalPardavimaiBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalPardavimaiBox_vue_vue_type_template_id_806142f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalPardavimaiBox_vue_vue_type_template_id_806142f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalPardavimaiBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalPardavimaiBox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ModalPardavimaiBox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPardavimaiBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalPardavimaiBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPardavimaiBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPardavimaiBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalPardavimaiBox.vue?vue&type=template&id=806142f6&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/ModalPardavimaiBox.vue?vue&type=template&id=806142f6& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPardavimaiBox_vue_vue_type_template_id_806142f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalPardavimaiBox.vue?vue&type=template&id=806142f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalPardavimaiBox.vue?vue&type=template&id=806142f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPardavimaiBox_vue_vue_type_template_id_806142f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalPardavimaiBox_vue_vue_type_template_id_806142f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ModalViewBox.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ModalViewBox.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalViewBox_vue_vue_type_template_id_a7296638___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalViewBox.vue?vue&type=template&id=a7296638& */ "./resources/js/components/ModalViewBox.vue?vue&type=template&id=a7296638&");
/* harmony import */ var _ModalViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalViewBox.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalViewBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ModalViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalViewBox_vue_vue_type_template_id_a7296638___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalViewBox_vue_vue_type_template_id_a7296638___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalViewBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalViewBox.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ModalViewBox.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalViewBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalViewBox.vue?vue&type=template&id=a7296638&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ModalViewBox.vue?vue&type=template&id=a7296638& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewBox_vue_vue_type_template_id_a7296638___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalViewBox.vue?vue&type=template&id=a7296638& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalViewBox.vue?vue&type=template&id=a7296638&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewBox_vue_vue_type_template_id_a7296638___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalViewBox_vue_vue_type_template_id_a7296638___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Prekes.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Prekes.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Prekes_vue_vue_type_template_id_67ff23b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Prekes.vue?vue&type=template&id=67ff23b5& */ "./resources/js/views/Prekes.vue?vue&type=template&id=67ff23b5&");
/* harmony import */ var _Prekes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prekes.vue?vue&type=script&lang=js& */ "./resources/js/views/Prekes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Prekes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Prekes_vue_vue_type_template_id_67ff23b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Prekes_vue_vue_type_template_id_67ff23b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Prekes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Prekes.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Prekes.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prekes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Prekes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Prekes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Prekes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Prekes.vue?vue&type=template&id=67ff23b5&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Prekes.vue?vue&type=template&id=67ff23b5& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prekes_vue_vue_type_template_id_67ff23b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Prekes.vue?vue&type=template&id=67ff23b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Prekes.vue?vue&type=template&id=67ff23b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prekes_vue_vue_type_template_id_67ff23b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Prekes_vue_vue_type_template_id_67ff23b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);