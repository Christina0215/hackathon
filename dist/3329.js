"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[3329],{

/***/ 3746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ carousel_item_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/carousel-item/carousel-item.styles.ts

var carousel_item_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;




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

/***/ 4853:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ SlCarouselItem)
/* harmony export */ });
/* harmony import */ var _chunk_NQ44LUGM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3746);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3710);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2618);




// src/components/carousel-item/carousel-item.component.ts

var SlCarouselItem = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_2__/* .ShoelaceElement */ .f {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "group");
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_3__/* .html */ .qy)` <slot></slot> `;
  }
};
SlCarouselItem.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_1__/* .component_styles_default */ .$, _chunk_NQ44LUGM_js__WEBPACK_IMPORTED_MODULE_0__/* .carousel_item_styles_default */ .c];




/***/ }),

/***/ 5710:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ carousel_item_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WL77XCIH.js
var chunk_WL77XCIH = __webpack_require__(4853);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WACAG5QL.js


// src/components/carousel-item/carousel-item.ts
var carousel_item_default = chunk_WL77XCIH/* SlCarouselItem */.B;
chunk_WL77XCIH/* SlCarouselItem */.B.define("sl-carousel-item");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NQ44LUGM.js
var chunk_NQ44LUGM = __webpack_require__(3746);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
;// ./node_modules/@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.js









/***/ })

}]);
//# sourceMappingURL=3329.js.map