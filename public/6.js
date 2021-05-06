(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerBankas2.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilePickerBankas2.vue?vue&type=script&lang=js& ***!
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
  name: 'FilePickerBankas2',
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
      file_bankas: null,
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
      if (this.file_bankas) {
        return this.file_bankas.name;
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
      formData.append('file_bankas', this.file_bankas);
      this.isUploadSuccess = false; //console.log(JSON.stringify(formData));

      axios.post('/inte/store_bankas', formData, {
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
        _this.file_bankas = null;
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
      this.file_bankas = null;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerPardavimai.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilePickerPardavimai.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
  name: 'FilePickerPardavimai',
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
      file_pardavimai: null,
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
      if (this.file_pardavimai) {
        return this.file_pardavimai.name;
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
      formData.append('file_pardavimai', this.file_pardavimai);
      this.isUploadSuccess = false; //console.log(JSON.stringify(formData));

      axios.post('/inte/store_pardavimai', formData, {
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
        _this.file_pardavimai = null;
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
      this.file_pardavimai = null;
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
/* harmony import */ var _components_FilePickerBankas2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilePickerBankas2 */ "./resources/js/components/FilePickerBankas2.vue");
/* harmony import */ var _components_FilePickerPardavimai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilePickerPardavimai */ "./resources/js/components/FilePickerPardavimai.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FilePickerBankas: _components_FilePickerBankas2__WEBPACK_IMPORTED_MODULE_3__["default"],
    FilePickerPardavimai: _components_FilePickerPardavimai__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      columns: [{
        label: "Data",
        field: "data"
      }, {
        label: "Nr.",
        field: "saskaitos_nr"
      }, {
        label: "Unikalus nr.",
        field: "unikalus"
      }, {
        label: "Suma.",
        field: "suma"
      }, {
        label: "Pardavimo suma",
        field: "pardavimo_suma"
      }, {
        label: "PVM suma",
        field: "pvm_suma"
      }, {
        label: "Pristatymas",
        field: "pristatymas"
      }, {
        label: "Bankas",
        field: "bankas_suma"
      }, {
        label: "Pirkėjas",
        field: "pirkejas"
      }],
      color: ['is-one', 'is-two', 'is-three'],
      file_bankas: null,
      file_pardavimai: null,
      failas_bankas: "",
      failas_pardavimai: "",
      showDetailIcon: false,
      isLoading: false,
      sarasas: [],
      bepasto: [],
      pastas: [],
      graza: [],
      pigu: [],
      pigu_gra: [],
      praleisti_nr: []
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    bankasFormat: function bankasFormat(value) {
      console.log(value);
      return value;
    },
    file_info_bankas: function file_info_bankas(value) {
      this.failas_bankas = value.name;
    },
    file_info_pardavimai: function file_info_pardavimai(value) {
      this.failas_pardavimai = value.name;
    },
    onRowClass: function onRowClass(row, index) {
      if ((row.bankas && row.bankas.suma) == (row.suma + row.pristatymas).toFixed(2)) {
        return this.color[0];
      } else {
        if (!(row.bankas && row.bankas.suma)) {
          return this.color[1];
        } else {
          return this.color[2];
        }
      }
    },
    onRowClass2: function onRowClass2(row, index) {
      if ((row.bankas && row.bankas.suma) + row.suma == 0) {
        return this.color[0];
      } else {
        if (!(row.bankas && row.bankas.suma)) {
          return this.color[1];
        } else {
          return this.color[2];
        }
      }
    },
    print: function print(_print) {
      // Pass the element id here
      this.mobile_card = false;
      this.isvezta = false;
      this.$htmlToPaper(_print);
    },
    suformuoti: function suformuoti() {
      var _this = this;

      axios.post("/inte/store", {
        file_pardavimai: this.failas_pardavimai,
        file_bankas: this.failas_bankas
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
        _this2.bepasto = response.data.bepasto;
        _this2.pastas = response.data.pastas;
        _this2.graza = response.data.graza;
        _this2.pigu = response.data.pigu;
        _this2.pigu_gra = response.data.pigu_gra;
        _this2.praleisti_nr = response.data.praleisti_nr;
      })["catch"](function (err) {
        _this2.isLoading = false;

        _this2.$buefy.toast.open({
          message: "Error: ".concat(err.message),
          type: 'is-danger',
          queue: false
        });
      });
    }
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
    apy_sumabe: function apy_sumabe() {
      var total = [];
      Object.entries(this.bepasto).forEach(function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            key = _ref10[0],
            val = _ref10[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_suma2be: function apy_suma2be() {
      var total = [];
      Object.entries(this.bepasto).forEach(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2),
            key = _ref12[0],
            val = _ref12[1];

        total.push(val.pardavimo_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pvmbe: function apy_pvmbe() {
      var total = [];
      Object.entries(this.bepasto).forEach(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            key = _ref14[0],
            val = _ref14[1];

        total.push(val.pvm_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pristatymasbe: function apy_pristatymasbe() {
      var total = [];
      Object.entries(this.bepasto).forEach(function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 2),
            key = _ref16[0],
            val = _ref16[1];

        total.push(val.pristatymas); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_sumapastas: function apy_sumapastas() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref17) {
        var _ref18 = _slicedToArray(_ref17, 2),
            key = _ref18[0],
            val = _ref18[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_suma2pastas: function apy_suma2pastas() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref19) {
        var _ref20 = _slicedToArray(_ref19, 2),
            key = _ref20[0],
            val = _ref20[1];

        total.push(val.pardavimo_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pvmpastas: function apy_pvmpastas() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref21) {
        var _ref22 = _slicedToArray(_ref21, 2),
            key = _ref22[0],
            val = _ref22[1];

        total.push(val.pvm_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pristatymaspastas: function apy_pristatymaspastas() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref23) {
        var _ref24 = _slicedToArray(_ref23, 2),
            key = _ref24[0],
            val = _ref24[1];

        total.push(val.pristatymas); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_sumapigu: function apy_sumapigu() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref25) {
        var _ref26 = _slicedToArray(_ref25, 2),
            key = _ref26[0],
            val = _ref26[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_suma2pigu: function apy_suma2pigu() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref27) {
        var _ref28 = _slicedToArray(_ref27, 2),
            key = _ref28[0],
            val = _ref28[1];

        total.push(val.pardavimo_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pvmpigu: function apy_pvmpigu() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref29) {
        var _ref30 = _slicedToArray(_ref29, 2),
            key = _ref30[0],
            val = _ref30[1];

        total.push(val.pvm_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    apy_pristatymaspigu: function apy_pristatymaspigu() {
      var total = [];
      Object.entries(this.pastas).forEach(function (_ref31) {
        var _ref32 = _slicedToArray(_ref31, 2),
            key = _ref32[0],
            val = _ref32[1];

        total.push(val.pristatymas); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_sumapigu: function gra_sumapigu() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref33) {
        var _ref34 = _slicedToArray(_ref33, 2),
            key = _ref34[0],
            val = _ref34[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_suma2pigu: function gra_suma2pigu() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref35) {
        var _ref36 = _slicedToArray(_ref35, 2),
            key = _ref36[0],
            val = _ref36[1];

        total.push(val.pardavimo_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_pvmpigu: function gra_pvmpigu() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref37) {
        var _ref38 = _slicedToArray(_ref37, 2),
            key = _ref38[0],
            val = _ref38[1];

        total.push(val.pvm_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_suma: function gra_suma() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref39) {
        var _ref40 = _slicedToArray(_ref39, 2),
            key = _ref40[0],
            val = _ref40[1];

        total.push(val.suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_suma2: function gra_suma2() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref41) {
        var _ref42 = _slicedToArray(_ref41, 2),
            key = _ref42[0],
            val = _ref42[1];

        total.push(val.pardavimo_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
    },
    gra_pvm: function gra_pvm() {
      var total = [];
      Object.entries(this.graza).forEach(function (_ref43) {
        var _ref44 = _slicedToArray(_ref43, 2),
            key = _ref44[0],
            val = _ref44[1];

        total.push(val.pvm_suma); // the value of the current key.
      });
      return total.reduce(function (total, num) {
        return total + num;
      }, 0);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerBankas2.vue?vue&type=template&id=ed869bc2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilePickerBankas2.vue?vue&type=template&id=ed869bc2& ***!
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
                value: _vm.file_bankas,
                callback: function($$v) {
                  _vm.file_bankas = $$v
                },
                expression: "file_bankas"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerPardavimai.vue?vue&type=template&id=79b9634e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilePickerPardavimai.vue?vue&type=template&id=79b9634e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
                value: _vm.file_pardavimai,
                callback: function($$v) {
                  _vm.file_pardavimai = $$v
                },
                expression: "file_pardavimai"
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
              { attrs: { label: "Bankas CSV:", horizontal: "" } },
              [
                _c("file-picker-bankas", {
                  on: { "file-updated": _vm.file_info_bankas },
                  model: {
                    value: _vm.file_bankas,
                    callback: function($$v) {
                      _vm.file_bankas = $$v
                    },
                    expression: "file_bankas"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-field",
              { attrs: { label: "Pardavimo CSV:", horizontal: "" } },
              [
                _c("file-picker-pardavimai", {
                  on: { "file-updated": _vm.file_info_pardavimai },
                  model: {
                    value: _vm.file_pardavimai,
                    callback: function($$v) {
                      _vm.file_pardavimai = $$v
                    },
                    expression: "file_pardavimai"
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
                    on: { click: _vm.suformuoti }
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
              "b-tabs",
              { staticClass: "block", attrs: { position: "is-centered" } },
              [
                _c("b-tab-item", { attrs: { label: "INTE Apyvarta (viso)" } }, [
                  _c(
                    "div",
                    { attrs: { id: "printMe" } },
                    [
                      _c("div", { staticClass: "has-text-centered" }, [
                        _c("b", [_vm._v("UAB Sidonas ir Ko")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Įm. kodas: 180886050\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-centered is-size-5" },
                        [_c("b", [_vm._v("Internetinė parduotuvė apyvarta")])]
                      ),
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
                            "row-class": _vm.onRowClass,
                            "default-sort": "saskaitos_nr"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "b-table-column",
                                    { attrs: { label: "Nr." } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(props.index + 1) +
                                          "\n                "
                                      )
                                    ]
                                  ),
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
                                        "\n                      " +
                                          _vm._s(props.row.data) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(props.row.saskaitos_nr) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: { label: "Su PVM", field: "suma" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(props.row.suma).toFixed(
                                              2
                                            )
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "Be PVM",
                                        field: "pardavimo_suma"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pardavimo_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "PVM 21%",
                                        field: "pvm_suma"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pvm_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pristatymas
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "Per banka, Eur",
                                        field: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pristatymas +
                                                props.row.suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: {
                                        label: "Bankas",
                                        field: "bankas"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            props.row.bankas &&
                                              props.row.bankas.suma
                                          ) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(props.row.pirkejas) +
                                          "\n                "
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
                            _c("th", { staticClass: "has-text-right" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }),
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
                          on: {
                            click: function($event) {
                              return _vm.print("printMe")
                            }
                          }
                        },
                        [_vm._v("SPAUSDINTI")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vue-excel-xlsx",
                        {
                          attrs: {
                            data: _vm.sarasas,
                            columns: _vm.columns,
                            filename: "filename",
                            sheetname: "sheetname"
                          }
                        },
                        [_vm._v("\n                Download\n            ")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-tab-item",
                  { attrs: { label: "INTE Apyvarta (be pašto)" } },
                  [
                    _c(
                      "div",
                      { attrs: { id: "printMe_bepasto" } },
                      [
                        _c("div", { staticClass: "has-text-centered" }, [
                          _c("b", [_vm._v("UAB Sidonas ir Ko")])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "has-text-centered" }, [
                          _vm._v(
                            "\n                Įm. kodas: 180886050\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "has-text-centered" }, [
                          _vm._v(
                            "\n                Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "has-text-centered is-size-5" },
                          [
                            _c("b", [
                              _vm._v(
                                "Internetinė parduotuvė apyvarta (be pasto)"
                              )
                            ])
                          ]
                        ),
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
                              data: _vm.bepasto,
                              "sort-icon": "arrow-up",
                              loading: _vm.isLoading,
                              "default-sort-direction": "asc",
                              "row-class": _vm.onRowClass,
                              "default-sort": "saskaitos_nr"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "b-table-column",
                                      { attrs: { label: "Nr." } },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(props.index + 1) +
                                            "\n                "
                                        )
                                      ]
                                    ),
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
                                          "\n                      " +
                                            _vm._s(props.row.data) +
                                            "\n                "
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
                                          "\n                      " +
                                            _vm._s(props.row.saskaitos_nr) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "Su PVM",
                                          field: "suma"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "Be PVM",
                                          field: "pardavimo_suma"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pardavimo_suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "PVM 21%",
                                          field: "pvm_suma"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pvm_suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
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
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pristatymas
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "Per banka, Eur",
                                          field: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pristatymas +
                                                  props.row.suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        attrs: {
                                          label: "Bankas",
                                          field: "bankas"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              props.row.bankas &&
                                                props.row.bankas.suma
                                            ) +
                                            "\n                "
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
                                          "\n                      " +
                                            _vm._s(props.row.pirkejas) +
                                            "\n                "
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
                                          _c("p", [
                                            _vm._v("Gaunami duomenys...")
                                          ])
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
                                _vm._v(_vm._s(_vm.apy_sumabe.toFixed(2)))
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }, [
                                _vm._v(
                                  _vm._s(
                                    parseFloat(
                                      _vm.apy_sumabe + _vm.apy_pristatymasbe
                                    ).toFixed(2)
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
                            on: {
                              click: function($event) {
                                return _vm.print("printMe_bepasto")
                              }
                            }
                          },
                          [_vm._v("SPAUSDINTI")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vue-excel-xlsx",
                          {
                            attrs: {
                              data: _vm.bepasto,
                              columns: _vm.columns,
                              filename: "filename",
                              sheetname: "sheetname"
                            }
                          },
                          [_vm._v("\n                Download\n            ")]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-tab-item",
                  { attrs: { label: "INTE Apyvarta (paštas)" } },
                  [
                    _c(
                      "div",
                      { attrs: { id: "printMe_pastas" } },
                      [
                        _c("div", { staticClass: "has-text-centered" }, [
                          _c("b", [_vm._v("UAB Sidonas ir Ko")])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "has-text-centered" }, [
                          _vm._v(
                            "\n                Įm. kodas: 180886050\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "has-text-centered" }, [
                          _vm._v(
                            "\n                Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n              "
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "has-text-centered is-size-5" },
                          [
                            _c("b", [
                              _vm._v("Internetinė parduotuvė apyvarta (pastas)")
                            ])
                          ]
                        ),
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
                              data: _vm.pastas,
                              "sort-icon": "arrow-up",
                              loading: _vm.isLoading,
                              "default-sort-direction": "asc",
                              "row-class": _vm.onRowClass,
                              "default-sort": "saskaitos_nr"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "b-table-column",
                                      { attrs: { label: "Nr." } },
                                      [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(props.index + 1) +
                                            "\n                "
                                        )
                                      ]
                                    ),
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
                                          "\n                      " +
                                            _vm._s(props.row.data) +
                                            "\n                "
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
                                          "\n                      " +
                                            _vm._s(props.row.saskaitos_nr) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "Su PVM",
                                          field: "suma"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "Be PVM",
                                          field: "pardavimo_suma"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pardavimo_suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "PVM 21%",
                                          field: "pvm_suma"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pvm_suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
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
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pristatymas
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        staticClass: "has-text-right",
                                        attrs: {
                                          label: "Per banka, Eur",
                                          field: ""
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              parseFloat(
                                                props.row.pristatymas +
                                                  props.row.suma
                                              ).toFixed(2)
                                            ) +
                                            "\n                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-table-column",
                                      {
                                        attrs: {
                                          label: "Bankas",
                                          field: "bankas"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      " +
                                            _vm._s(
                                              props.row.bankas &&
                                                props.row.bankas.suma
                                            ) +
                                            "\n                "
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
                                          "\n                      " +
                                            _vm._s(props.row.pirkejas) +
                                            "\n                "
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
                                          _c("p", [
                                            _vm._v("Gaunami duomenys...")
                                          ])
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
                                _vm._v(_vm._s(_vm.apy_sumapastas.toFixed(2)))
                              ]),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }),
                              _vm._v(" "),
                              _c("th", { staticClass: "has-text-right" }, [
                                _vm._v(
                                  _vm._s(
                                    parseFloat(
                                      _vm.apy_sumapastas +
                                        _vm.apy_pristatymaspastas
                                    ).toFixed(2)
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
                            on: {
                              click: function($event) {
                                return _vm.print("printMe_pastas")
                              }
                            }
                          },
                          [_vm._v("SPAUSDINTI")]
                        ),
                        _vm._v(" "),
                        _c(
                          "vue-excel-xlsx",
                          {
                            attrs: {
                              data: _vm.pastas,
                              columns: _vm.columns,
                              filename: "filename",
                              sheetname: "sheetname"
                            }
                          },
                          [_vm._v("\n                Download\n            ")]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("b-tab-item", { attrs: { label: "INTE Grąžinimai" } }, [
                  _c(
                    "div",
                    { attrs: { id: "printMe_graza" } },
                    [
                      _c("div", { staticClass: "has-text-centered" }, [
                        _c("b", [_vm._v("UAB Sidonas ir Ko")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Įm. kodas: 180886050\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-centered is-size-5" },
                        [_c("b", [_vm._v("Internetinė parduotuvė grąžinimai")])]
                      ),
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
                            "row-class": _vm.onRowClass2,
                            "default-sort-direction": "asc",
                            "default-sort": "saskaitos_nr"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "b-table-column",
                                    { attrs: { label: "Nr." } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(props.index + 1) +
                                          "\n                "
                                      )
                                    ]
                                  ),
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
                                        "\n                      " +
                                          _vm._s(props.row.data) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(props.row.saskaitos_nr) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: {
                                        label: "Unikalus nr.",
                                        field: "unikalus",
                                        sortable: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(props.row.unikalus) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: { label: "Su PVM", field: "suma" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(props.row.suma).toFixed(
                                              2
                                            )
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "Be PVM",
                                        field: "pardavimo_suma"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pardavimo_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "PVM 21%",
                                        field: "pvm_suma"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pvm_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: {
                                        label: "Bankas",
                                        field: "bankas"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            props.row.bankas &&
                                              props.row.bankas.suma
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: { label: "TEST", field: "bankas" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(props.row.bankas_list) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: {
                                        label: "Pirkejas",
                                        field: "pirkejas"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(props.row.pirkejas) +
                                          "\n                "
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
                            _c("th"),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }, [
                              _vm._v(_vm._s(_vm.gra_suma.toFixed(2)))
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" })
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
                          on: {
                            click: function($event) {
                              return _vm.print("printMe_graza")
                            }
                          }
                        },
                        [_vm._v("SPAUSDINTI")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vue-excel-xlsx",
                        {
                          attrs: {
                            data: _vm.graza,
                            columns: _vm.columns,
                            filename: "filename",
                            sheetname: "sheetname"
                          }
                        },
                        [_vm._v("\n                Download\n            ")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("b-tab-item", { attrs: { label: "PIGU apyvarta" } }, [
                  _c(
                    "div",
                    { attrs: { id: "printMe_pigu" } },
                    [
                      _c("div", { staticClass: "has-text-centered" }, [
                        _c("b", [_vm._v("UAB Sidonas ir Ko")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Įm. kodas: 180886050\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-centered is-size-5" },
                        [_c("b", [_vm._v("PIGU apyvarta")])]
                      ),
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
                            data: _vm.pigu,
                            "sort-icon": "arrow-up",
                            loading: _vm.isLoading,
                            "default-sort-direction": "asc",
                            "row-class": _vm.onRowClass,
                            "default-sort": "saskaitos_nr"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "b-table-column",
                                    { attrs: { label: "Nr." } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(props.index + 1) +
                                          "\n                "
                                      )
                                    ]
                                  ),
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
                                        "\n                      " +
                                          _vm._s(props.row.data) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(props.row.saskaitos_nr) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(props.row.suma).toFixed(
                                              2
                                            )
                                          ) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pardavimo_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "PVM 21%",
                                        field: "pvm_suma"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pvm_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pristatymas
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "Per banka, Eur",
                                        field: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pristatymas +
                                                props.row.suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: {
                                        label: "Bankas",
                                        field: "bankas"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            props.row.bankas &&
                                              props.row.bankas.suma
                                          ) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(props.row.pirkejas) +
                                          "\n                "
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
                              _vm._v(_vm._s(_vm.apy_sumapigu.toFixed(2)))
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }, [
                              _vm._v(
                                _vm._s(
                                  parseFloat(
                                    _vm.apy_sumapigu + _vm.apy_pristatymaspigu
                                  ).toFixed(2)
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
                          on: {
                            click: function($event) {
                              return _vm.print("printMe_pigu")
                            }
                          }
                        },
                        [_vm._v("SPAUSDINTI")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vue-excel-xlsx",
                        {
                          attrs: {
                            data: _vm.pigu,
                            columns: _vm.columns,
                            filename: "filename",
                            sheetname: "sheetname"
                          }
                        },
                        [_vm._v("\n                Download\n            ")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("b-tab-item", { attrs: { label: "PIGU grąžinimai" } }, [
                  _c(
                    "div",
                    { attrs: { id: "printMe_pigugra" } },
                    [
                      _c("div", { staticClass: "has-text-centered" }, [
                        _c("b", [_vm._v("UAB Sidonas ir Ko")])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Įm. kodas: 180886050\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "has-text-centered" }, [
                        _vm._v(
                          "\n                Kęstučio 20-1, LT-87120, Telšiai, Lietuva\n              "
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "has-text-centered is-size-5" },
                        [_c("b", [_vm._v("PIGU grąžinimai")])]
                      ),
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
                            data: _vm.pigu_gra,
                            "sort-icon": "arrow-up",
                            loading: _vm.isLoading,
                            "row-class": _vm.onRowClass2,
                            "default-sort-direction": "asc",
                            "default-sort": "saskaitos_nr"
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function(props) {
                                return [
                                  _c(
                                    "b-table-column",
                                    { attrs: { label: "Nr." } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(props.index + 1) +
                                          "\n                "
                                      )
                                    ]
                                  ),
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
                                        "\n                      " +
                                          _vm._s(props.row.data) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(props.row.saskaitos_nr) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(props.row.suma).toFixed(
                                              2
                                            )
                                          ) +
                                          "\n                "
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
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pardavimo_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      staticClass: "has-text-right",
                                      attrs: {
                                        label: "PVM 21%",
                                        field: "pvm_suma"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            parseFloat(
                                              props.row.pvm_suma
                                            ).toFixed(2)
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: {
                                        label: "Bankas",
                                        field: "bankas"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(
                                            props.row.bankas &&
                                              props.row.bankas.suma
                                          ) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-table-column",
                                    {
                                      attrs: {
                                        label: "Pirkejas",
                                        field: "pirkejas"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(props.row.pirkejas) +
                                          "\n                "
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
                              _vm._v(_vm._s(_vm.gra_sumapigu.toFixed(2)))
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" }),
                            _vm._v(" "),
                            _c("th", { staticClass: "has-text-right" })
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
                          on: {
                            click: function($event) {
                              return _vm.print("printMe_pigugra")
                            }
                          }
                        },
                        [_vm._v("SPAUSDINTI")]
                      ),
                      _vm._v(" "),
                      _c(
                        "vue-excel-xlsx",
                        {
                          attrs: {
                            data: _vm.pigu_gra,
                            columns: _vm.columns,
                            filename: "filename",
                            sheetname: "sheetname"
                          }
                        },
                        [_vm._v("\n                Download\n            ")]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("b-tab-item", { attrs: { label: "Blanko numeriai" } }, [
                  _vm._v(
                    "\n            Praleisti blanko numeriai:\n            "
                  ),
                  _c("br"),
                  _vm._v(
                    "\n            " + _vm._s(_vm.praleisti_nr) + "\n          "
                  )
                ])
              ],
              1
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

/***/ "./resources/js/components/FilePickerBankas2.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/FilePickerBankas2.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilePickerBankas2_vue_vue_type_template_id_ed869bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePickerBankas2.vue?vue&type=template&id=ed869bc2& */ "./resources/js/components/FilePickerBankas2.vue?vue&type=template&id=ed869bc2&");
/* harmony import */ var _FilePickerBankas2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePickerBankas2.vue?vue&type=script&lang=js& */ "./resources/js/components/FilePickerBankas2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilePickerBankas2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilePickerBankas2_vue_vue_type_template_id_ed869bc2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilePickerBankas2_vue_vue_type_template_id_ed869bc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilePickerBankas2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilePickerBankas2.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/FilePickerBankas2.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerBankas2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilePickerBankas2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerBankas2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerBankas2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilePickerBankas2.vue?vue&type=template&id=ed869bc2&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilePickerBankas2.vue?vue&type=template&id=ed869bc2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerBankas2_vue_vue_type_template_id_ed869bc2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FilePickerBankas2.vue?vue&type=template&id=ed869bc2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerBankas2.vue?vue&type=template&id=ed869bc2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerBankas2_vue_vue_type_template_id_ed869bc2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerBankas2_vue_vue_type_template_id_ed869bc2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilePickerPardavimai.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/FilePickerPardavimai.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilePickerPardavimai_vue_vue_type_template_id_79b9634e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePickerPardavimai.vue?vue&type=template&id=79b9634e& */ "./resources/js/components/FilePickerPardavimai.vue?vue&type=template&id=79b9634e&");
/* harmony import */ var _FilePickerPardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePickerPardavimai.vue?vue&type=script&lang=js& */ "./resources/js/components/FilePickerPardavimai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilePickerPardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilePickerPardavimai_vue_vue_type_template_id_79b9634e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilePickerPardavimai_vue_vue_type_template_id_79b9634e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilePickerPardavimai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilePickerPardavimai.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/FilePickerPardavimai.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerPardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilePickerPardavimai.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerPardavimai.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerPardavimai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilePickerPardavimai.vue?vue&type=template&id=79b9634e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/FilePickerPardavimai.vue?vue&type=template&id=79b9634e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerPardavimai_vue_vue_type_template_id_79b9634e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FilePickerPardavimai.vue?vue&type=template&id=79b9634e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilePickerPardavimai.vue?vue&type=template&id=79b9634e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerPardavimai_vue_vue_type_template_id_79b9634e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePickerPardavimai_vue_vue_type_template_id_79b9634e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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