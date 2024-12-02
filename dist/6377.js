"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[6377],{

/***/ 7652:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ mutation_observer_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/mutation-observer/mutation-observer.styles.ts

var mutation_observer_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: contents;
  }
`;




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

/***/ 9948:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ SlMutationObserver)
/* harmony export */ });
/* harmony import */ var _chunk_2W6X55FG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7652);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1346);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2391);






// src/components/mutation-observer/mutation-observer.component.ts


var SlMutationObserver = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.attrOldValue = false;
    this.charData = false;
    this.charDataOldValue = false;
    this.childList = false;
    this.disabled = false;
    this.handleMutation = (mutationList) => {
      this.emit("sl-mutation", {
        detail: { mutationList }
      });
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.mutationObserver = new MutationObserver(this.handleMutation);
    if (!this.disabled) {
      this.startObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObserver();
  }
  startObserver() {
    const observeAttributes = typeof this.attr === "string" && this.attr.length > 0;
    const attributeFilter = observeAttributes && this.attr !== "*" ? this.attr.split(" ") : void 0;
    try {
      this.mutationObserver.observe(this, {
        subtree: true,
        childList: this.childList,
        attributes: observeAttributes,
        attributeFilter,
        attributeOldValue: this.attrOldValue,
        characterData: this.charData,
        characterDataOldValue: this.charDataOldValue
      });
    } catch (e) {
    }
  }
  stopObserver() {
    this.mutationObserver.disconnect();
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.stopObserver();
    } else {
      this.startObserver();
    }
  }
  handleChange() {
    this.stopObserver();
    this.startObserver();
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_5__/* .html */ .qy)` <slot></slot> `;
  }
};
SlMutationObserver.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__/* .component_styles_default */ .$, _chunk_2W6X55FG_js__WEBPACK_IMPORTED_MODULE_0__/* .mutation_observer_styles_default */ .U];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({ reflect: true })
], SlMutationObserver.prototype, "attr", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({ attribute: "attr-old-value", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "attrOldValue", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({ attribute: "char-data", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "charData", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({ attribute: "char-data-old-value", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "charDataOldValue", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({ attribute: "child-list", type: Boolean, reflect: true })
], SlMutationObserver.prototype, "childList", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlMutationObserver.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("disabled")
], SlMutationObserver.prototype, "handleDisabledChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("attr", { waitUntilFirstUpdate: true }),
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("attr-old-value", { waitUntilFirstUpdate: true }),
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("char-data", { waitUntilFirstUpdate: true }),
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("char-data-old-value", { waitUntilFirstUpdate: true }),
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("childList", { waitUntilFirstUpdate: true })
], SlMutationObserver.prototype, "handleChange", 1);




/***/ }),

/***/ 6377:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_chunk_XCGTMX5R_js__WEBPACK_IMPORTED_MODULE_0__.F)
/* harmony export */ });
/* harmony import */ var _chunks_chunk_XCGTMX5R_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9948);
/* harmony import */ var _chunks_chunk_2W6X55FG_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7652);
/* harmony import */ var _chunks_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1465);
/* harmony import */ var _chunks_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1101);
/* harmony import */ var _chunks_chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3710);
/* harmony import */ var _chunks_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1346);









/***/ })

}]);
//# sourceMappingURL=6377.js.map