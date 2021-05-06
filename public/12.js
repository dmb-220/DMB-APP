(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pardavimai.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pardavimai.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 50,
      isLoading: false,
      likutis: [],
      grupes: [],
      grupes_lv: [],
      defaultOpenedDetails: [1],
      ieskoti: '',
      paieska: '',
      rodyti_lt: true,
      rodyti_lv: true,
      rodyti_ee: true,
      salis: '',
      rikiuoti: false,
      grupe: '',
      gam: true,
      pirk: true,
      //mobile_card: true,
      paieska_big: false
    };
  },
  computed: {},
  created: function created() {
    this.getData();
  },
  methods: {
    print: function print() {
      // Pass the element id here
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
    keisti_grupe: function keisti_grupe() {
      if (!this.ieskoti) {
        this.ieskoti = this.paieska;
      }

      this.paieska_post();
    },
    change_lt: function change_lt() {
      this.rodyti_lt = !this.rodyti_lt;
      this.grupe = 0;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    change_lv: function change_lv() {
      this.rodyti_lv = !this.rodyti_lv;
      this.grupe = 0;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    change_ee: function change_ee() {
      this.rodyti_ee = !this.rodyti_ee;
      this.grupe = 0;
      this.ieskoti = this.paieska;
      this.paieska_post();
    },
    switch_post: function switch_post() {
      var _this = this;

      //this.rikiuotic = !this.rikiuoti;
      if (this.ieskoti == "") {
        this.ieskoti = this.paieska;
      }

      axios.post("/pardavimai/store", {
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

      axios.post("/pardavimai/store", {
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
      this.axios.get('/pardavimai').then(function (response) {
        _this3.isLoading = false;
        _this3.rikiuoti = response.data.rikiuoti ? false : true;
        _this3.likutis = response.data.prekes;
        _this3.paieska = response.data.paieska;
        _this3.paieska_big = response.data.paieska_big ? true : false;
        _this3.grupes = response.data.grupes;
        _this3.grupes_lv = response.data.grupes_lv;
        _this3.grupe = response.data.grupe;
        _this3.gam = response.data.gam ? true : false;
        _this3.pirk = response.data.pirk ? true : false;
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
    }
  }
});

/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseMap = __webpack_require__(/*! ./_baseMap */ "./node_modules/lodash/_baseMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pardavimai.vue?vue&type=template&id=bd3f77fa&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Pardavimai.vue?vue&type=template&id=bd3f77fa& ***!
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
                _c(
                  "div",
                  { staticClass: "control" },
                  [
                    _c(
                      "b-button",
                      {
                        attrs: { "native-type": "submit", type: "is-primary" },
                        on: { click: _vm.paieska_post }
                      },
                      [_vm._v("Ieškoti")]
                    )
                  ],
                  1
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
                      "\n          Veikia su mūsų GAM gaminiais! \n        "
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
          { attrs: { title: "PARDAVIMAI", icon: "account-multiple" } },
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
                      _vm._v("Rasta: " + _vm._s(_vm.likutis.length)),
                      _c("br"),
                      _vm._v(_vm._s(_vm.paieska)),
                      _c("br"),
                      _vm._v(_vm._s(_vm.grupes[_vm.grupe]))
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
                      "mobile-cards": false,
                      bordered: "",
                      hoverable: "",
                      narrowed: true,
                      data: _vm.likutis,
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
                                style: { "background-color": "greenyellow" },
                                attrs: {
                                  visible: _vm.rodyti_lt,
                                  label: "LIETUVA",
                                  field: "LT_viso",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.LT_viso) +
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
                                  label: "LATVIJA",
                                  field: "LV_viso",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.LV_viso) +
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
                                  label: "ESTIJA",
                                  field: "EE_viso",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.EE_viso) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                style: { "background-color": "WhiteSmoke" },
                                attrs: {
                                  label: "VISO",
                                  field: "viso",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.viso) +
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
                                    border: "1px solid",
                                    "background-color": "greenyellow"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [_vm._v("Lietuva:")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-table", {
                                    attrs: {
                                      data: props.row.LT,
                                      "default-sort-direction": "desc",
                                      "default-sort": "kiekis"
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
                                                    label: "Sandelis"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        props.row.sandelis
                                                      ) +
                                                      "\n              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-table-column",
                                                {
                                                  attrs: {
                                                    field: "kiekis",
                                                    label: "Kiekis",
                                                    sortable: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(props.row.kiekis) +
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
                                    border: "1px solid",
                                    "background-color": "GoldenRod"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [_vm._v("Latvija:")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-table", {
                                    attrs: {
                                      data: props.row.LV,
                                      "default-sort-direction": "desc",
                                      "default-sort": "kiekis"
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
                                                    label: "Sandelis"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        props.row.sandelis
                                                      ) +
                                                      "\n              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-table-column",
                                                {
                                                  attrs: {
                                                    field: "kiekis",
                                                    label: "Kiekis",
                                                    sortable: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(props.row.kiekis) +
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
                                    border: "1px solid",
                                    "background-color": "tomato"
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "has-text-centered" },
                                    [_vm._v("Estija:")]
                                  ),
                                  _vm._v(" "),
                                  _c("b-table", {
                                    attrs: {
                                      data: props.row.EE,
                                      "default-sort-direction": "desc",
                                      "default-sort": "kiekis"
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
                                                    label: "Sandelis"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(
                                                        props.row.sandelis
                                                      ) +
                                                      "\n              "
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-table-column",
                                                {
                                                  attrs: {
                                                    field: "kiekis",
                                                    label: "Kiekis",
                                                    sortable: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                  " +
                                                      _vm._s(props.row.kiekis) +
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

/***/ "./resources/js/views/Pardavimai.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Pardavimai.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pardavimai_vue_vue_type_template_id_bd3f77fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pardavimai.vue?vue&type=template&id=bd3f77fa& */ "./resources/js/views/Pardavimai.vue?vue&type=template&id=bd3f77fa&");
/* harmony import */ var _Pardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pardavimai.vue?vue&type=script&lang=js& */ "./resources/js/views/Pardavimai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Pardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Pardavimai_vue_vue_type_template_id_bd3f77fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Pardavimai_vue_vue_type_template_id_bd3f77fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Pardavimai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Pardavimai.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Pardavimai.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Pardavimai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pardavimai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Pardavimai.vue?vue&type=template&id=bd3f77fa&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Pardavimai.vue?vue&type=template&id=bd3f77fa& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pardavimai_vue_vue_type_template_id_bd3f77fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Pardavimai.vue?vue&type=template&id=bd3f77fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Pardavimai.vue?vue&type=template&id=bd3f77fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pardavimai_vue_vue_type_template_id_bd3f77fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pardavimai_vue_vue_type_template_id_bd3f77fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);