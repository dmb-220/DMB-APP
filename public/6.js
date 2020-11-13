(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerAkcijos.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilePickerAkcijos.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
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
  name: 'FilePickerAkcijos',
  props: {
    label: {
      type: String,
      "default": null
    },
    message: {
      type: String,
      "default": null
    },
    currentFile: {
      "default": null
    }
  },
  data: function data() {
    return {
      errors: {},
      file: null,
      uploadPercent: 0,
      isUploadSuccess: false
    };
  },
  computed: {
    fieldFileMessage: function fieldFileMessage() {
      if (this.errors.file) {
        return this.errors.file[0];
      }

      if (this.isUploadSuccess) {
        return 'Failas įkeltas sėkmingai';
      }

      if (this.uploadPercent) {
        return "\u012Ekeliama ".concat(this.uploadPercent, "%");
      }

      return this.message;
    },
    uploadButtonText: function uploadButtonText() {
      return this.fileName ? null : 'Pasirinkite failą';
    },
    uploadButtonIcon: function uploadButtonIcon() {
      return this.fileName ? 'cloud-sync' : 'cloud-upload';
    },
    fieldFileType: function fieldFileType() {
      return this.errors.file ? 'is-danger' : null;
    },
    fileName: function fileName() {
      if (this.file) {
        return this.file.name;
      }

      if (this.currentFile) {
        return this.currentFile;
      }

      return null;
    }
  },
  methods: {
    upload: function upload(file) {
      var _this = this;

      this.errors = {};
      var formData = new FormData();
      formData.append('file', this.file);
      this.isUploadSuccess = false; //console.log(JSON.stringify(formData));

      axios.post('/akcijos/store_akcija', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: this.progressEvent
      }).then(function (r) {
        _this.isUploadSuccess = true; // Display success data & then drop it after a little while
        // setTimeout(() => {
        //   this.file = null
        //   this.isUploadSuccess = false
        //   this.uploadPercent = 0
        // }, 1500)
        //console.log(JSON.stringify(r.data.upload))

        _this.$emit('file-updated', r.data.data);

        _this.$emit('file-id-updated', r.data.data.id);
      })["catch"](function (err) {
        _this.file = null;
        _this.uploadPercent = 0;

        if (err.response.data.errors) {
          _this.errors = err.response.data.errors;
        } else {
          _this.errors = {
            _all: ['Upload error']
          };
        }

        lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(_this.errors, function (err) {
          _this.$buefy.toast.open({
            message: err[0],
            type: 'is-danger',
            queue: false
          });
        });
      });
    },
    dropFile: function dropFile() {
      this.file = null;
      this.isUploadSuccess = false;
      this.uploadPercent = 0;
      this.$emit('file-updated', null);
      this.$emit('file-id-updated', null);
    },
    progressEvent: function progressEvent(_progressEvent) {
      this.uploadPercent = Math.round(_progressEvent.loaded * 100 / _progressEvent.total);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Akcijos.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Akcijos.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/CardComponent */ "./resources/js/components/CardComponent.vue");
/* harmony import */ var _components_FilePickerAkcijos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilePickerAkcijos */ "./resources/js/components/FilePickerAkcijos.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CardComponent: _components_CardComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    FilePickerAkcijos: _components_FilePickerAkcijos__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isPaginated: true,
      paginationPosition: 'bottom',
      perPage: 50,
      file: null,
      failas: '',
      bendras: '',
      isLoading: false,
      defaultOpenedDetails: [1],
      showDetailIcon: false,
      isNarrowed: true,
      pardavimai: [],
      sandelis: '',
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
      this.isPaginated = false;
      this.$htmlToPaper('printMe');
    },
    file_info: function file_info(value) {
      //this.getData()
      //console.log(value)
      this.failas = value.name;
    },
    paieska_post: function paieska_post() {
      var _this = this;

      if (this.failas != "") {
        axios.post("/akcijos/store", {
          sandelis: this.sandelis,
          failas: this.failas
        }).then(function (response) {
          //console.log(response.data.data)
          _this.getData();
        })["catch"](function (err) {
          _this.$buefy.toast.open({
            message: "Error: ".concat(err.message),
            type: 'is-danger',
            queue: false
          });
        });
      } else {
        this.$buefy.toast.open({
          message: "KLAIDA: Nepasirinktas failas!",
          type: 'is-danger',
          queue: false
        });
      }
    },
    getData: function getData() {
      var _this2 = this;

      this.isLoading = true;
      this.axios.get('/akcijos').then(function (response) {
        _this2.isLoading = false;
        _this2.pardavimai = response.data.data;
        _this2.bendras = response.data.likutis;
        _this2.sandelis = response.data.sandelis;
        _this2.failas = response.data.failas;
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

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerAkcijos.vue?vue&type=template&id=295bf659&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilePickerAkcijos.vue?vue&type=template&id=295bf659& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    {
      attrs: {
        label: _vm.label,
        message: _vm.fieldFileMessage,
        type: _vm.fieldFileType
      }
    },
    [
      _c(
        "b-field",
        [
          _c(
            "b-upload",
            {
              on: { input: _vm.upload },
              model: {
                value: _vm.file,
                callback: function($$v) {
                  _vm.file = $$v
                },
                expression: "file"
              }
            },
            [
              _c(
                "a",
                { staticClass: "button is-primary" },
                [
                  _c("b-icon", {
                    attrs: {
                      icon: _vm.uploadButtonIcon,
                      "custom-size": "default"
                    }
                  }),
                  _vm._v(" "),
                  _vm.uploadButtonText
                    ? _c("span", [_vm._v(_vm._s(_vm.uploadButtonText))])
                    : _vm._e()
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _vm.fileName
            ? _c("div", { staticClass: "control" }, [
                _c(
                  "a",
                  { staticClass: "button is-static is-file-upload-label" },
                  [
                    _c("span", { attrs: { title: _vm.fileName } }, [
                      _vm._v(_vm._s(_vm.fileName))
                    ]),
                    _vm._v(" "),
                    _c("span", {
                      staticClass: "delete",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.dropFile($event)
                        }
                      }
                    })
                  ]
                )
              ])
            : _vm._e()
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
            { attrs: { label: "CSV failas:", horizontal: "" } },
            [
              _c("file-picker-akcijos", {
                on: { "file-updated": _vm.file_info },
                model: {
                  value: _vm.file,
                  callback: function($$v) {
                    _vm.file = $$v
                  },
                  expression: "file"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-field",
            { attrs: { label: "Sandelis:", horizontal: "" } },
            [
              _c("b-input", {
                attrs: {
                  placeholder: "Sandelis likučiams",
                  type: "search",
                  icon: "magnify",
                  expanded: ""
                },
                model: {
                  value: _vm.sandelis,
                  callback: function($$v) {
                    _vm.sandelis = $$v
                  },
                  expression: "sandelis"
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
                [_vm._v("Ieškoti")]
              )
            ])
          ])
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
                      "\n          Rasta: " + _vm._s(_vm.pardavimai.length)
                    ),
                    _c("br"),
                    _vm._v(_vm._s(_vm.sandelis) + "\n        ")
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
                                    field: "sandelis"
                                  }
                                },
                                _vm._l(props.row.sandelis, function(idx) {
                                  return _c(
                                    "div",
                                    {
                                      key: idx.pavadinimas,
                                      staticClass: "is-size-7"
                                    },
                                    [
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(idx.pavadinimas) +
                                          " - " +
                                          _vm._s(idx.kaina) +
                                          "\n            "
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _c("b-table-column", {
                                attrs: { label: "Sandeliui", field: "sandelis" }
                              }),
                          _vm._v(" "),
                          _c(
                            "b-table-column",
                            {
                              style: {
                                "background-color": "greenyellow",
                                "vertical-align": "middle"
                              },
                              attrs: { label: "LT Akcija", field: "kaina" }
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
                              attrs: { label: "LT Kortele", field: "akcija" }
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
                              attrs: { label: "LV Akcija", field: "kaina" }
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
                              attrs: { label: "LV Kortele", field: "akcija" }
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
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "footer" }, [
                    _c("th"),
                    _vm._v(" "),
                    _c("th"),
                    _vm._v(" "),
                    _c("th"),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.bendras))]),
                    _vm._v(" "),
                    _c("th"),
                    _vm._v(" "),
                    _c("th"),
                    _vm._v(" "),
                    _c("th"),
                    _vm._v(" "),
                    _c("th"),
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

/***/ "./resources/js/components/FilePickerAkcijos.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/FilePickerAkcijos.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilePickerAkcijos_vue_vue_type_template_id_295bf659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePickerAkcijos.vue?vue&type=template&id=295bf659& */ "./resources/js/components/FilePickerAkcijos.vue?vue&type=template&id=295bf659&");
/* harmony import */ var _FilePickerAkcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePickerAkcijos.vue?vue&type=script&lang=js& */ "./resources/js/components/FilePickerAkcijos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilePickerAkcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilePickerAkcijos_vue_vue_type_template_id_295bf659___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilePickerAkcijos_vue_vue_type_template_id_295bf659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilePickerAkcijos.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilePickerAkcijos.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/FilePickerAkcijos.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerAkcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilePickerAkcijos.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerAkcijos.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerAkcijos_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilePickerAkcijos.vue?vue&type=template&id=295bf659&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilePickerAkcijos.vue?vue&type=template&id=295bf659& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerAkcijos_vue_vue_type_template_id_295bf659___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FilePickerAkcijos.vue?vue&type=template&id=295bf659& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerAkcijos.vue?vue&type=template&id=295bf659&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerAkcijos_vue_vue_type_template_id_295bf659___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerAkcijos_vue_vue_type_template_id_295bf659___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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