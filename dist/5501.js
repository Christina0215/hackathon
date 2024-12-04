"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[5501],{

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

/***/ 5790:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ SlInclude)
/* harmony export */ });
/* harmony import */ var _chunk_FY7IKLNL_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9060);
/* harmony import */ var _chunk_XNEONNEJ_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2409);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1346);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2391);







// src/components/include/include.component.ts


var SlInclude = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_4__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  executeScript(script) {
    const newScript = document.createElement("script");
    [...script.attributes].forEach((attr) => newScript.setAttribute(attr.name, attr.value));
    newScript.textContent = script.textContent;
    script.parentNode.replaceChild(newScript, script);
  }
  async handleSrcChange() {
    try {
      const src = this.src;
      const file = await (0,_chunk_XNEONNEJ_js__WEBPACK_IMPORTED_MODULE_1__/* .requestInclude */ .E)(src, this.mode);
      if (src !== this.src) {
        return;
      }
      if (!file.ok) {
        this.emit("sl-error", { detail: { status: file.status } });
        return;
      }
      this.innerHTML = file.html;
      if (this.allowScripts) {
        [...this.querySelectorAll("script")].forEach((script) => this.executeScript(script));
      }
      this.emit("sl-load");
    } catch (e) {
      this.emit("sl-error", { detail: { status: -1 } });
    }
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)`<slot></slot>`;
  }
};
SlInclude.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__/* .component_styles_default */ .$, _chunk_FY7IKLNL_js__WEBPACK_IMPORTED_MODULE_0__/* .include_styles_default */ .I];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()
], SlInclude.prototype, "src", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()
], SlInclude.prototype, "mode", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ attribute: "allow-scripts", type: Boolean })
], SlInclude.prototype, "allowScripts", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_2__/* .watch */ .w)("src")
], SlInclude.prototype, "handleSrcChange", 1);




/***/ }),

/***/ 9060:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ include_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/include/include.styles.ts

var include_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: block;
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

/***/ 2409:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ requestInclude)
/* harmony export */ });
// src/components/include/request.ts
var includeFiles = /* @__PURE__ */ new Map();
function requestInclude(src, mode = "cors") {
  const prev = includeFiles.get(src);
  if (prev !== void 0) {
    return Promise.resolve(prev);
  }
  const fileDataPromise = fetch(src, { mode }).then(async (response) => {
    const res = {
      ok: response.ok,
      status: response.status,
      html: await response.text()
    };
    includeFiles.set(src, res);
    return res;
  });
  includeFiles.set(src, fileDataPromise);
  return fileDataPromise;
}




/***/ }),

/***/ 5501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_chunk_EFDOX5LI_js__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _chunks_chunk_EFDOX5LI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5790);
/* harmony import */ var _chunks_chunk_FY7IKLNL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9060);
/* harmony import */ var _chunks_chunk_XNEONNEJ_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2409);
/* harmony import */ var _chunks_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1465);
/* harmony import */ var _chunks_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1101);
/* harmony import */ var _chunks_chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3710);
/* harmony import */ var _chunks_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1346);










/***/ })

}]);
//# sourceMappingURL=5501.js.map