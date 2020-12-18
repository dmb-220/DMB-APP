(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inte.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Inte.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CardToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CardToolbar */ "./resources/js/components/CardToolbar.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dates: [],
      showDetailIcon: false,
      isLoading: false,
      sarasas: [],
      graza: []
    };
  },
  computed: {
    apy_suma: function apy_suma() {
      var total = [];
      Object.entries(this.sarasas).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_suma2: function apy_suma2() {
      var total = [];
      Object.entries(this.sarasas).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            val = _ref4[1];

        total.push(val.pardavimo_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pvm: function apy_pvm() {
      var total = [];
      Object.entries(this.sarasas).forEach(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            val = _ref6[1];

        total.push(val.pvm_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pristatymas: function apy_pristatymas() {
      var total = [];
      Object.entries(this.sarasas).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            key = _ref8[0],
            val = _ref8[1];

        total.push(val.pristatymas); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_suma: function gra_suma() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            key = _ref10[0],
            val = _ref10[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_suma2: function gra_suma2() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
            key = _ref12[0],
            val = _ref12[1];

        total.push(val.pardavimo_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_pvm: function gra_pvm() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            key = _ref14[0],
            val = _ref14[1];

        total.push(val.pvm_suma); // the value of the current key.
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
    print: function print() {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper('printMe');
    },
    print2: function print2() {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper('printMe2');
    },
    paieska_post: function paieska_post() {
      var _this = this;

      axios.post("/inte/store", {
        dates: this.dates
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
      this.axios.get('/inte').then(function (response) {
        _this2.isLoading = false;
        _this2.sarasas = response.data.sarasas;
        _this2.graza = response.data.graza;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inte.vue?vue&type=template&id=0d062af5&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Inte.vue?vue&type=template&id=0d062af5&scoped=true& ***!
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
              { attrs: { label: "Pasirinkti datą", horizontal: "" } },
              [
                _c("b-datepicker", {
                  attrs: { placeholder: "Spauskite kad pasirinkti", range: "" },
                  model: {
                    value: _vm.dates,
                    callback: function($$v) {
                      _vm.dates = $$v
                    },
                    expression: "dates"
                  }
                })
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
          { attrs: { title: "Apyvarta", icon: "account-multiple" } },
          [
            _c(
              "div",
              { attrs: { id: "printMe" } },
              [
                _c("div", { staticClass: "has-text-centered" }, [
                  _c("b", [_vm._v("UAB Sidonas ir Ko")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-centered" }, [
                  _vm._v("\n        Įm. kodas: 180886050\n      ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-centered" }, [
                  _vm._v(
                    "\n        Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n      "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-centered is-size-5" }, [
                  _c("b", [_vm._v("Internetinė parduotuvė")])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
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
                      "default-sort": "saskaitos_nr"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c("b-table-column", { attrs: { label: "Nr." } }, [
                              _vm._v(
                                "\n           " +
                                  _vm._s(props.index + 1) +
                                  "\n        "
                              )
                            ]),
                            _vm._v(" "),
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
                                  label: "Saskaitos nr.",
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
                                attrs: {
                                  label: "Apyvarta su PVM",
                                  field: "suma"
                                }
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
                                staticClass: "has-text-right",
                                attrs: {
                                  label: "Apyvarta be PVM",
                                  field: "pardavimo_suma"
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      parseFloat(
                                        props.row.pardavimo_suma
                                      ).toFixed(2)
                                    ) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "PVM 21%", field: "pvm_suma" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      parseFloat(props.row.pvm_suma).toFixed(2)
                                    ) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: {
                                  label: "Pristatymas",
                                  field: "pristatymas"
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      parseFloat(props.row.pristatymas).toFixed(
                                        2
                                      )
                                    ) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "Per banka, Eur", field: "" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      parseFloat(
                                        props.row.pristatymas + props.row.suma
                                      ).toFixed(2)
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
                                  label: "Pirkėjas",
                                  field: "pirkejas",
                                  sortable: ""
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.pirkejas) +
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
                        _vm._v(_vm._s(_vm.apy_suma.toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.apy_suma2.toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.apy_pvm.toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.apy_pristatymas.toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(
                          _vm._s(
                            parseFloat(
                              _vm.apy_suma + _vm.apy_pristatymas
                            ).toFixed(2)
                          )
                        )
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
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("hr"),
        _vm._v(" "),
        _c(
          "card-component",
          { attrs: { title: "Grazinimai", icon: "account-multiple" } },
          [
            _c(
              "div",
              { attrs: { id: "printMe2" } },
              [
                _c("div", { staticClass: "has-text-centered" }, [
                  _c("b", [_vm._v("UAB Sidonas ir Ko")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-centered" }, [
                  _vm._v("\n        Įm. kodas: 180886050\n      ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-centered" }, [
                  _vm._v(
                    "\n        Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n      "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "has-text-centered is-size-5" }, [
                  _c("b", [_vm._v("Internetinė parduotuvė")])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      bordered: "",
                      narrowed: true,
                      data: _vm.graza,
                      "sort-icon": "arrow-up",
                      loading: _vm.isLoading,
                      "default-sort-direction": "asc",
                      "default-sort": "saskaitos_nr"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "default",
                        fn: function(props) {
                          return [
                            _c("b-table-column", { attrs: { label: "Nr." } }, [
                              _vm._v(
                                "\n           " +
                                  _vm._s(props.index + 1) +
                                  "\n        "
                              )
                            ]),
                            _vm._v(" "),
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
                                  label: "Saskaitos nr.",
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
                                attrs: {
                                  label: "Apyvarta su PVM",
                                  field: "suma"
                                }
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
                                staticClass: "has-text-right",
                                attrs: {
                                  label: "Apyvarta be PVM",
                                  field: "pardavimo_suma"
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      parseFloat(
                                        props.row.pardavimo_suma
                                      ).toFixed(2)
                                    ) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "PVM 21%", field: "pvm_suma" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      parseFloat(props.row.pvm_suma).toFixed(2)
                                    ) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                attrs: { label: "Pirkejas", field: "pirkejas" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.pirkejas) +
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
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.gra_suma2.toFixed(2)))
                      ]),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.gra_pvm.toFixed(2)))
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
                    on: { click: _vm.print2 }
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

/***/ "./resources/js/views/Inte.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Inte.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Inte_vue_vue_type_template_id_0d062af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inte.vue?vue&type=template&id=0d062af5&scoped=true& */ "./resources/js/views/Inte.vue?vue&type=template&id=0d062af5&scoped=true&");
/* harmony import */ var _Inte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inte.vue?vue&type=script&lang=js& */ "./resources/js/views/Inte.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Inte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Inte_vue_vue_type_template_id_0d062af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Inte_vue_vue_type_template_id_0d062af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d062af5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Inte.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Inte.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Inte.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Inte.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inte.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inte_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Inte.vue?vue&type=template&id=0d062af5&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Inte.vue?vue&type=template&id=0d062af5&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inte_vue_vue_type_template_id_0d062af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Inte.vue?vue&type=template&id=0d062af5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inte.vue?vue&type=template&id=0d062af5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inte_vue_vue_type_template_id_0d062af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inte_vue_vue_type_template_id_0d062af5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);