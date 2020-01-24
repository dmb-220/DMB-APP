(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
  name: 'CheckboxPicker',
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
      "default": []
    }
  },
  data: function data() {
    return {
      newValue: []
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Keliones.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Keliones.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_CheckboxPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CheckboxPicker */ "./resources/js/components/CheckboxPicker.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Testas",
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    CheckboxPicker: _components_CheckboxPicker__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      duomenys: [],
      sk_lt: "",
      centai: "",
      miestai: [],
      checkbox: [],
      rodyti_lv: true,
      rodyti_ee: false,
      rodo: '',
      data: '2020',
      nr: '202000',
      date: ''
    };
  },
  computed: {
    total_kiekis: function total_kiekis() {
      var total = [];
      Object.entries(this.duomenys).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            val = _ref2[1];

        total.push(val.kiekis); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    total_suma: function total_suma() {
      var total = [];
      Object.entries(this.duomenys).forEach(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            key = _ref4[0],
            val = _ref4[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return parseFloat(total) + parseFloat(num);
      }, 0);
    }
  },
  created: function created() {
    //this.paieska_post()
    this.getData();
  },
  methods: {
    print: function print() {
      // Pass the element id here
      this.$htmlToPaper('printMe');
    },
    change_lv: function change_lv() {
      this.rodyti_lv = true;
      this.rodyti_ee = false;
      this.rodo = 'LV';
      this.checkbox = []; //this.paieska_post()
    },
    change_ee: function change_ee() {
      this.rodyti_ee = true;
      this.rodyti_lv = false;
      this.rodo = 'EE';
      this.checkbox = []; //this.paieska_post()
    },
    paieska: function paieska() {
      var _this = this;

      axios.post("/kelione/store", {
        lv: this.rodyti_lv,
        ee: this.rodyti_ee,
        miestai: this.checkbox,
        data: this.data //nr: this.nr

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
      this.axios.get('/kelione').then(function (response) {
        _this2.isLoading = false; //this.sandelis = response.data.sandelis;

        _this2.duomenys = response.data.likutis;
        _this2.sk_lt = response.data.sk_lt;
        _this2.centai = response.data.centai;
        _this2.miestai = response.data.miestai;
        _this2.date = response.data.data; //this.checkbox = response.data.check;
        //this.rodyti_lt = response.data.salis.LT ? true : false

        _this2.rodyti_lv = response.data.salis.LV ? true : false;
        _this2.rodyti_ee = response.data.salis.EE ? true : false;
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648& ***!
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
  return _c(
    "b-field",
    { attrs: { grouped: "", "group-multiline": "" } },
    _vm._l(_vm.options, function(v, k) {
      return _c(
        "div",
        { key: k, staticClass: "control" },
        [
          _c(
            "b-checkbox",
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Keliones.vue?vue&type=template&id=cff44c7a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Keliones.vue?vue&type=template&id=cff44c7a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
              { attrs: { label: "Valstybė", horizontal: "" } },
              [
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
              {
                staticClass: "has-check",
                attrs: { label: "Miestai", horizontal: "" }
              },
              [
                _vm.rodyti_lv
                  ? _c("checkbox-picker", {
                      attrs: { options: _vm.miestai["LV"], type: "is-black" },
                      model: {
                        value: _vm.checkbox,
                        callback: function($$v) {
                          _vm.checkbox = $$v
                        },
                        expression: "checkbox"
                      }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.rodyti_ee
                  ? _c("checkbox-picker", {
                      attrs: { options: _vm.miestai["EE"], type: "is-black" },
                      model: {
                        value: _vm.checkbox,
                        callback: function($$v) {
                          _vm.checkbox = $$v
                        },
                        expression: "checkbox"
                      }
                    })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { label: "Data:", horizontal: "" } },
              [
                _c("b-input", {
                  attrs: { type: "date", icon: "calendar-month" },
                  model: {
                    value: _vm.data,
                    callback: function($$v) {
                      _vm.data = $$v
                    },
                    expression: "data"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { label: "Numeris:", horizontal: "" } },
              [
                _c("b-input", {
                  attrs: { type: "input", icon: "variable" },
                  model: {
                    value: _vm.nr,
                    callback: function($$v) {
                      _vm.nr = $$v
                    },
                    expression: "nr"
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
                    on: { click: _vm.paieska }
                  },
                  [_vm._v("Skaičiuoti")]
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
          { attrs: { title: "SANDELIS", icon: "account-multiple" } },
          [
            _c(
              "div",
              { attrs: { id: "printMe" } },
              [
                _c("div", { staticClass: "has-text-centered" }, [
                  _vm._v(
                    "\n          Serija GAB  Nr. " +
                      _vm._s(_vm.nr) +
                      "        " +
                      _vm._s(_vm.date) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-third" }, [
                    _c("div", { staticClass: "has-text-right" }, [
                      _c("b", [_vm._v("Siuntėjas:")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column has-text-left" }, [
                    _c("b", [_vm._v('UAB "Sidonas" ir ko')]),
                    _vm._v(", Įmonės reg. NR. AB2003-5"),
                    _c("br"),
                    _vm._v(
                      "\n              Įmonės kodas (VET code): LT 808860515\n            "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-third" }, [
                    _c("div", { staticClass: "has-text-right" }, [
                      _c("b", [_vm._v("Pirkėjas:")])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.rodyti_ee
                    ? _c("div", { staticClass: "column has-text-left" }, [
                        _c("b", [_vm._v('Sidonas" Group OŪ')]),
                        _c("br"),
                        _vm._v(
                          "\n              PVM kodas (VET code): EE 101043995"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n              Kiisa 8-27, Tallinn 10416, ESTIJOS RESPUBLIKA\n            "
                        )
                      ])
                    : _vm.rodyti_lv
                    ? _c("div", { staticClass: "column has-text-left" }, [
                        _c("b", [_vm._v('"SIA "Sidonas"')]),
                        _c("br"),
                        _vm._v(
                          "\n              PVM kodas (VET code): LV 40003558478"
                        ),
                        _c("br"),
                        _vm._v(
                          "\n              Matīsa iela 25, Rīga, LATVIJAS RESPUBLIKA\n            "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-third" }, [
                    _c("div", { staticClass: "has-text-right" }, [
                      _c("b", [_vm._v("Bankas:")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column has-text-left" }, [
                    _vm._v(
                      '\n              AB bankas " Swedbank", A/s  LT02 7300 0100 7710 3089'
                    ),
                    _c("br"),
                    _vm._v("\n              Banko kodas: 73000\n            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column is-one-third" }, [
                    _c("div", { staticClass: "has-text-right" }, [
                      _c("b", [_vm._v("Adresas:")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column has-text-left" }, [
                    _vm._v(
                      "\n              Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n            "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "b-table",
                  {
                    attrs: {
                      focusable: "",
                      bordered: "",
                      hoverable: "",
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
                                style: { "background-color": "silver" },
                                attrs: {
                                  label: "Pavadinimas",
                                  field: "pavadinimas"
                                }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.pavadinimas) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              { attrs: { label: "MATO, Vnt." } },
                              [_vm._v("\n              Vnt.\n        ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "Kiekis", field: "kiekis" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.kiekis) +
                                    "\n        "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-table-column",
                              {
                                staticClass: "has-text-right",
                                attrs: { label: "Kaina", field: "kaina" }
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
                                staticClass: "has-text-right",
                                attrs: { label: "Suma, Eur" }
                              },
                              [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(props.row.suma) +
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
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.total_kiekis))
                      ]),
                      _vm._v(" "),
                      _c("th"),
                      _vm._v(" "),
                      _c("th", { staticClass: "has-text-right" }, [
                        _vm._v(_vm._s(_vm.total_suma.toFixed(2)))
                      ])
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column" }, [
                    _c("div", { staticClass: "has-text-left" }, [
                      _c("b", [_vm._v("Suma  žodžiais EUR:")]),
                      _vm._v(
                        "   " +
                          _vm._s(_vm.sk_lt) +
                          " eur, " +
                          _vm._s(_vm.centai) +
                          " cent."
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "columns" }, [
                  _c("div", { staticClass: "column" }, [
                    _c("div", { staticClass: "has-text-left" }, [
                      _c("b", [_vm._v("Direktorius:")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "column" }, [
                    _c("div", { staticClass: "has-text-left" }, [
                      _c("b", [_vm._v("Antanas Dargis")])
                    ])
                  ])
                ])
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

/***/ "./resources/js/components/CheckboxPicker.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/CheckboxPicker.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckboxPicker.vue?vue&type=template&id=b0b44648& */ "./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&");
/* harmony import */ var _CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckboxPicker.vue?vue&type=script&lang=js& */ "./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CheckboxPicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxPicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CheckboxPicker.vue?vue&type=template&id=b0b44648& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CheckboxPicker.vue?vue&type=template&id=b0b44648&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CheckboxPicker_vue_vue_type_template_id_b0b44648___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Keliones.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Keliones.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Keliones_vue_vue_type_template_id_cff44c7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keliones.vue?vue&type=template&id=cff44c7a&scoped=true& */ "./resources/js/views/Keliones.vue?vue&type=template&id=cff44c7a&scoped=true&");
/* harmony import */ var _Keliones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keliones.vue?vue&type=script&lang=js& */ "./resources/js/views/Keliones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Keliones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Keliones_vue_vue_type_template_id_cff44c7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Keliones_vue_vue_type_template_id_cff44c7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cff44c7a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Keliones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Keliones.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Keliones.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keliones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Keliones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Keliones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Keliones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Keliones.vue?vue&type=template&id=cff44c7a&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Keliones.vue?vue&type=template&id=cff44c7a&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Keliones_vue_vue_type_template_id_cff44c7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Keliones.vue?vue&type=template&id=cff44c7a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Keliones.vue?vue&type=template&id=cff44c7a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Keliones_vue_vue_type_template_id_cff44c7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Keliones_vue_vue_type_template_id_cff44c7a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);