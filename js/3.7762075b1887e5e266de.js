webpackJsonp([3],{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(56)
}
var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(58),
  /* template */
  __webpack_require__(59),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7bbc7b32",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(29)("7eb2c709", content, true);

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'settings-modal',
  components: {
    QModal: __WEBPACK_IMPORTED_MODULE_0_quasar__["l" /* QModal */],
    QBtn: __WEBPACK_IMPORTED_MODULE_0_quasar__["c" /* QBtn */]
  },
  data: function data() {
    return {};
  },

  methods: {
    open: function open() {
      this.$refs.modal.open();
    },
    close: function close() {
      this.$refs.modal.close();
    },
    toggle: function toggle() {
      this.$refs.modal.toggle();
    }
  }
});

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-modal', {
    ref: "modal",
    on: {
      "escape-key": function($event) {
        _vm.close()
      }
    }
  }, [_c('div', {
    staticClass: "layout-padding"
  }, [_c('h4', [_vm._v("Settings")]), _vm._v(" "), _c('p', [_vm._v("Not implemented yet...")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-buttons row"
  }, [_c('q-btn', {
    attrs: {
      "flat": ""
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  }, [_vm._v("Cancel")])], 1)])
},staticRenderFns: []}

/***/ })

});