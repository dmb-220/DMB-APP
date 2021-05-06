(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Replace.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Replace.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // Advanced Use - Hook into Quill's API for Custom Functionality


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Replace",
  components: {
    CardToolbar: _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_3__["VueEditor"]
  },
  data: function data() {
    return {
      html_lt: '',
      html_ee: ''
    };
  },
  watch: {
    html_lt: function html_lt(value) {
      //console.log(value);
      this.html_ee = value;
      this.html_ee = this.html_ee.replace(/PAGAMINTA LIETUVOJE/gi, "TOODETUD LEEDUS");
      this.html_ee = this.html_ee.replace("Modelio ūgis 164 cm", "Modelli kasv 164cm");
      this.html_ee = this.html_ee.replace("ji vilki", "ta kannab");
      this.html_ee = this.html_ee.replace("dydžio", "number");
      this.html_ee = this.html_ee.replace("sijoną", "seelikut");
      this.html_ee = this.html_ee.replace("palaidinę", "pluusi");
      this.html_ee = this.html_ee.replace("megztinį", "kampsunit");
      this.html_ee = this.html_ee.replace("džinsus", "teksasid");
      this.html_ee = this.html_ee.replace("paltą", "mantlit");
      this.html_ee = this.html_ee.replace("suknelę", " kleiti");
      this.html_ee = this.html_ee.replace("Spalva:", "Värv:");
      this.html_ee = this.html_ee.replace(/juoda/gi, "must");
      this.html_ee = this.html_ee.replace(/mėlyna/gi, "sinine");
      this.html_ee = this.html_ee.replace(/rožinė/gi, "fuksiaroosa");
      this.html_ee = this.html_ee.replace(/žalia/gi, "roheline");
      this.html_ee = this.html_ee.replace(/raudona/gi, "punane");
      this.html_ee = this.html_ee.replace(/balta/gi, "valge");
      this.html_ee = this.html_ee.replace(/geltona/gi, "kollane");
      this.html_ee = this.html_ee.replace(/ruda/gi, "pruun");
      this.html_ee = this.html_ee.replace("Sudėtis:", "Koostis:");
      this.html_ee = this.html_ee.replace(/Poliesteris/gi, "polüester");
      this.html_ee = this.html_ee.replace(/Medvilnė/gi, "puuvill");
      this.html_ee = this.html_ee.replace(/Viskozė/gi, "viskoos");
      this.html_ee = this.html_ee.replace(/Elastanas/gi, "elastaan");
      this.html_ee = this.html_ee.replace(/Nailonas/gi, "nailon");
      this.html_ee = this.html_ee.replace(/Linas/gi, "lina");
      this.html_ee = this.html_ee.replace(/Dirbtinė oda/gi, "kunstnahk");
      this.html_ee = this.html_ee.replace(/Poliviskozė/gi, "polyviskoos");
      this.html_ee = this.html_ee.replace(/Poliamidas/gi, "polüamiid");
      this.html_ee = this.html_ee.replace(/Kašmyras/gi, "kashmir");
      this.html_ee = this.html_ee.replace("Kilmės šalis", "Päritoluriik");
      this.html_ee = this.html_ee.replace("Kilmės", "Päritoluriik");
      this.html_ee = this.html_ee.replace("šalis", " ");
      this.html_ee = this.html_ee.replace("Kinija", "Hiina");
      this.html_ee = this.html_ee.replace("Gaminio matmenys", "Toote mõõtmed");
      this.html_ee = this.html_ee.replace("Dydžių lentelės", "Toote mõõtmed");
      this.html_ee = this.html_ee.replace("Dydžių lentelė", "Toote mõõtmed");
      this.html_ee = this.html_ee.replace("Apatinis trikotažas nekeičiamas ir negrąžinamas.", "Aluspesu ei saa vahetada ega tagastada.");
      this.html_ee = this.html_ee.replace("Liemenėlė", "Pesu");
      this.html_ee = this.html_ee.replace("Krūtinės apimtis", "Rinnaümbermõõt");
      this.html_ee = this.html_ee.replace("Krūtinės", "Rinnaümbermõõt");
      this.html_ee = this.html_ee.replace("apimtis", " ");
      this.html_ee = this.html_ee.replace("Dydis", "Suurus");
      this.html_ee = this.html_ee.replace("Liemens apimtis", "Vööümbermõõt");
      this.html_ee = this.html_ee.replace("Liemens", "Vööümbermõõt");
      this.html_ee = this.html_ee.replace("apimtis", " ");
      this.html_ee = this.html_ee.replace("Klubų apimtis", "Puusaümbermõõt");
      this.html_ee = this.html_ee.replace("Klubų", "Puusaümbermõõt");
      this.html_ee = this.html_ee.replace("apimtis", " ");
      this.html_ee = this.html_ee.replace(/Ilgis/gi, "Pikkus");
      this.html_ee = this.html_ee.replace(/rankovių ilgis/gi, "Varruka pikkus");
      this.html_ee = this.html_ee.replace("Prekių atspalviai gali skirtis nuo matomų nuotraukose dėl jūsų kompiuterio, telefono ar kito įrenginio ekrano nustatymų.", "Kaupade värvitoonid võivad erineda piltidel nähtavatest teie arvuti, telefoni või muu seadme ekraani seadete tõttu.");
      this.html_ee = this.html_ee.replace("Prekių atspalviai gali skirtis nuo matomų nuotraukose dėl jūsų kompiuterio, telefono ar kito įrenginio ekrano nustatymų.", "Kaupade värvitoonid võivad erineda piltidel nähtavatest teie arvuti, telefoni või muu seadme ekraani seadete tõttu.");
    }
  },
  computed: {},
  created: function created() {},
  methods: {}
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Replace.vue?vue&type=template&id=34c5cce5&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Replace.vue?vue&type=template&id=34c5cce5&scoped=true& ***!
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
  return _c("div", [
    _c(
      "section",
      { staticClass: "section is-main-section" },
      [
        _c(
          "card-component",
          { attrs: { title: "VALDYMAS", icon: "account-multiple" } },
          [_vm._v("\n      ...\n    ")]
        ),
        _vm._v(" "),
        _c(
          "card-component",
          { attrs: { title: "LT to EE", icon: "account-multiple" } },
          [
            _c("hr"),
            _vm._v("\n      LT:\n      "),
            _c("br"),
            _vm._v(" "),
            _c("wysiwyg", {
              model: {
                value: _vm.html_lt,
                callback: function($$v) {
                  _vm.html_lt = $$v
                },
                expression: "html_lt"
              }
            }),
            _vm._v(" "),
            _c("hr"),
            _vm._v("\n      EE:\n      "),
            _c("br"),
            _vm._v(" "),
            _c("wysiwyg", {
              model: {
                value: _vm.html_ee,
                callback: function($$v) {
                  _vm.html_ee = $$v
                },
                expression: "html_ee"
              }
            })
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

/***/ "./resources/js/views/Replace.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Replace.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Replace_vue_vue_type_template_id_34c5cce5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Replace.vue?vue&type=template&id=34c5cce5&scoped=true& */ "./resources/js/views/Replace.vue?vue&type=template&id=34c5cce5&scoped=true&");
/* harmony import */ var _Replace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Replace.vue?vue&type=script&lang=js& */ "./resources/js/views/Replace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Replace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Replace_vue_vue_type_template_id_34c5cce5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Replace_vue_vue_type_template_id_34c5cce5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "34c5cce5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Replace.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Replace.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Replace.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Replace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Replace.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Replace.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Replace_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Replace.vue?vue&type=template&id=34c5cce5&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Replace.vue?vue&type=template&id=34c5cce5&scoped=true& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replace_vue_vue_type_template_id_34c5cce5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Replace.vue?vue&type=template&id=34c5cce5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Replace.vue?vue&type=template&id=34c5cce5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replace_vue_vue_type_template_id_34c5cce5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Replace_vue_vue_type_template_id_34c5cce5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);