"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[3809],{

/***/ 2994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ SlDivider)
/* harmony export */ });
/* harmony import */ var _chunk_SUSCR7CI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1773);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1346);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2391);






// src/components/divider/divider.component.ts

var SlDivider = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "separator");
  }
  handleVerticalChange() {
    this.setAttribute("aria-orientation", this.vertical ? "vertical" : "horizontal");
  }
};
SlDivider.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__/* .component_styles_default */ .$, _chunk_SUSCR7CI_js__WEBPACK_IMPORTED_MODULE_0__/* .divider_styles_default */ .h];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlDivider.prototype, "vertical", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("vertical")
], SlDivider.prototype, "handleVerticalChange", 1);




/***/ }),

/***/ 1465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1346);


// src/internal/watch.ts
function watch(propertyName, options) {
  const resolvedOptions = (0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({
    waitUntilFirstUpdate: false
  }, options);
  return (proto, decoratedFnName) => {
    const { update } = proto;
    const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
    proto.update = function(changedProps) {
      watchedProperties.forEach((property) => {
        const key = property;
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key);
          const newValue = this[key];
          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              this[decoratedFnName](oldValue, newValue);
            }
          }
        }
      });
      update.call(this, changedProps);
    };
  };
}




/***/ }),

/***/ 1773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ divider_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/divider/divider.styles.ts

var divider_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
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

/***/ 3809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_chunk_2P4ISAJG_js__WEBPACK_IMPORTED_MODULE_0__.j)
/* harmony export */ });
/* harmony import */ var _chunks_chunk_2P4ISAJG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2994);
/* harmony import */ var _chunks_chunk_SUSCR7CI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1773);
/* harmony import */ var _chunks_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1465);
/* harmony import */ var _chunks_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1101);
/* harmony import */ var _chunks_chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3710);
/* harmony import */ var _chunks_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1346);









/***/ })

}]);
//# sourceMappingURL=3809.js.map