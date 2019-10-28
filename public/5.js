(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sandeliai.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Sandeliai.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Sandeliai",
  components: {
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      duomenys: [],
      defaultOpenedDetails: [1],
      defaultOpened: [1],
      ieskoti: '',
      paieska: '',
      rodyti_lt: true,
      rodyti_lv: true,
      rodyti_ee: true,
      salis: '',
      rikiuoti: false
    };
  },
  computed: {},
  created: function created() {
    this.getData();
  },
  methods: {
    //print() {
    // Pass the element id here
    // this.$htmlToPaper('printMe');
    //},
    getData: function getData() {
      var _this = this;

      this.isLoading = true;
      this.axios.get('/sandeliai').then(function (response) {
        _this.isLoading = false; //this.rikiuoti = response.data.rikiuoti ? false : true;

        _this.duomenys = response.data.duomenys; //this.paieska = response.data.paieska;
        //this.rodyti_lt = response.data.salis.LT ? true : false
        //this.rodyti_lv = response.data.salis.LV ? true : false
        //this.rodyti_ee = response.data.salis.EE ? true : false
      })["catch"](function (err) {
        _this.isLoading = false;

        _this.$buefy.toast.open({
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sandeliai.vue?vue&type=template&id=3ff2e537&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Sandeliai.vue?vue&type=template&id=3ff2e537& ***!
  \*******************************************************************************************************************************************************************************************************/
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
          [_vm._v("\n        Valdymas\n    ")]
        ),
        _vm._v(" "),
        _c(
          "card-component",
          { attrs: { title: "SANDELIS", icon: "account-multiple" } },
          [
            _c(
              "b-table",
              {
                attrs: {
                  focusable: "",
                  bordered: "",
                  hoverable: "",
                  narrowed: true,
                  data: _vm.duomenys,
                  "opened-detailed": _vm.defaultOpenedDetails,
                  detailed: "",
                  "sort-icon": "arrow-up",
                  "detail-key": "pavadinimas",
                  loading: _vm.isLoading
                },
                on: {
                  "details-open": function(row, index) {
                    return _vm.$buefy.toast.open(
                      "Išskleista " + row.pavadinimas + " grupė!"
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
                              label: "Pavadinimas",
                              field: "pavadinimas",
                              sortable: ""
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
                          {
                            style: { "background-color": "silver" },
                            attrs: {
                              label: "Likuciai",
                              field: "likutis_sk",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.likutis_sk) +
                                "\n        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-table-column",
                          {
                            style: { "background-color": "silver" },
                            attrs: {
                              label: "Pardavimai",
                              field: "pardavimai_sk",
                              sortable: ""
                            }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(props.row.pardavimai_sk) +
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
                            data: props.row.grupe,
                            "default-sort-direction": "desc",
                            "default-sort": "kiekis",
                            bordered: true,
                            striped: true,
                            narrowed: true,
                            "opened-detailed": _vm.defaultOpened,
                            detailed: "",
                            "sort-icon": "arrow-up",
                            "detail-key": "pavadinimas"
                          },
                          on: {
                            "details-open": function(row, index) {
                              return _vm.$buefy.toast.open(
                                "Išskleista " + row.pavadinimas + " grupė!"
                              )
                            }
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
                                          field: "pavadinimas",
                                          label: "Pavadinimas",
                                          sortable: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(props.row.pavadinimas) +
                                            "\n            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        attrs: {
                                          field: "likuciai",
                                          label: "Likuciai"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(
                                              props.row.likuciai &&
                                                props.row.likuciai.length
                                            ) +
                                            "\n            "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        attrs: {
                                          field: "pardavimai",
                                          label: "Pardavimai"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                " +
                                            _vm._s(
                                              props.row.pardavimai &&
                                                props.row.pardavimai.length
                                            ) +
                                            "\n            "
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
                                        { staticClass: "column" },
                                        [
                                          _c("b-table", {
                                            attrs: {
                                              data: props.row.likuciai,
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
                                                            field:
                                                              "pavadinimas",
                                                            label:
                                                              "Pavadinimas",
                                                            sortable: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                props.row.preke
                                                              ) +
                                                              "\n                  "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-table-column",
                                                        {
                                                          attrs: {
                                                            field: "likuciai",
                                                            label: "Likuciai"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                props.row.kiekis
                                                              ) +
                                                              "\n                  "
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
                                        { staticClass: "column" },
                                        [
                                          _c("b-table", {
                                            attrs: {
                                              data: props.row.pardavimai,
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
                                                            field:
                                                              "pavadinimas",
                                                            label:
                                                              "Pavadinimas",
                                                            sortable: ""
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                props.row.preke
                                                              ) +
                                                              "\n                  "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "b-table-column",
                                                        {
                                                          attrs: {
                                                            field: "likuciai",
                                                            label: "Pardavimai"
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                      " +
                                                              _vm._s(
                                                                props.row.kiekis
                                                              ) +
                                                              "\n                  "
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
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Sandeliai.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Sandeliai.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sandeliai_vue_vue_type_template_id_3ff2e537___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sandeliai.vue?vue&type=template&id=3ff2e537& */ "./resources/js/views/Sandeliai.vue?vue&type=template&id=3ff2e537&");
/* harmony import */ var _Sandeliai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sandeliai.vue?vue&type=script&lang=js& */ "./resources/js/views/Sandeliai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sandeliai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sandeliai_vue_vue_type_template_id_3ff2e537___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sandeliai_vue_vue_type_template_id_3ff2e537___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Sandeliai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Sandeliai.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Sandeliai.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandeliai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sandeliai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sandeliai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandeliai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Sandeliai.vue?vue&type=template&id=3ff2e537&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Sandeliai.vue?vue&type=template&id=3ff2e537& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandeliai_vue_vue_type_template_id_3ff2e537___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sandeliai.vue?vue&type=template&id=3ff2e537& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Sandeliai.vue?vue&type=template&id=3ff2e537&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandeliai_vue_vue_type_template_id_3ff2e537___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sandeliai_vue_vue_type_template_id_3ff2e537___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);