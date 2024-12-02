"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[8043],{

/***/ 3312:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ SlVisuallyHidden)
/* harmony export */ });
/* harmony import */ var _chunk_YKKSQ2FG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7522);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3710);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2618);




// src/components/visually-hidden/visually-hidden.component.ts

var SlVisuallyHidden = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_2__/* .ShoelaceElement */ .f {
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_3__/* .html */ .qy)` <slot></slot> `;
  }
};
SlVisuallyHidden.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_1__/* .component_styles_default */ .$, _chunk_YKKSQ2FG_js__WEBPACK_IMPORTED_MODULE_0__/* .visually_hidden_styles_default */ .W];




/***/ }),

/***/ 1101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ component_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/styles/component.styles.ts

var component_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;




/***/ }),

/***/ 7522:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ visually_hidden_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/visually-hidden/visually-hidden.styles.ts

var visually_hidden_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;




/***/ }),

/***/ 8043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ visually_hidden_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QU5UUJ5F.js
var chunk_QU5UUJ5F = __webpack_require__(3312);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BBJZZDDT.js


// src/components/visually-hidden/visually-hidden.ts
var visually_hidden_default = chunk_QU5UUJ5F/* SlVisuallyHidden */.N;
chunk_QU5UUJ5F/* SlVisuallyHidden */.N.define("sl-visually-hidden");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.YKKSQ2FG.js
var chunk_YKKSQ2FG = __webpack_require__(7522);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
;// ./node_modules/@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.js









/***/ })

}]);
//# sourceMappingURL=8043.js.map