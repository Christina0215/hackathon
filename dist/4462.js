"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[4462],{

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

/***/ 5292:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ HasSlotController),
/* harmony export */   r: () => (/* binding */ getTextContent)
/* harmony export */ });
// src/internal/slot.ts
var HasSlotController = class {
  constructor(host, ...slotNames) {
    this.slotNames = [];
    this.handleSlotChange = (event) => {
      const slot = event.target;
      if (this.slotNames.includes("[default]") && !slot.name || slot.name && this.slotNames.includes(slot.name)) {
        this.host.requestUpdate();
      }
    };
    (this.host = host).addController(this);
    this.slotNames = slotNames;
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((node) => {
      if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
        return true;
      }
      if (node.nodeType === node.ELEMENT_NODE) {
        const el = node;
        const tagName = el.tagName.toLowerCase();
        if (tagName === "sl-visually-hidden") {
          return false;
        }
        if (!el.hasAttribute("slot")) {
          return true;
        }
      }
      return false;
    });
  }
  hasNamedSlot(name) {
    return this.host.querySelector(`:scope > [slot="${name}"]`) !== null;
  }
  test(slotName) {
    return slotName === "[default]" ? this.hasDefaultSlot() : this.hasNamedSlot(slotName);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
  }
};
function getTextContent(slot) {
  if (!slot) {
    return "";
  }
  const nodes = slot.assignedNodes({ flatten: true });
  let text = "";
  [...nodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent;
    }
  });
  return text;
}




/***/ }),

/***/ 5839:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ breadcrumb_item_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/breadcrumb-item/breadcrumb-item.styles.ts

var breadcrumb_item_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;




/***/ }),

/***/ 5867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ SlBreadcrumbItem)
/* harmony export */ });
/* harmony import */ var _chunk_Q5P7Y2HU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5839);
/* harmony import */ var _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5292);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2618);
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2391);







// src/components/breadcrumb-item/breadcrumb-item.component.ts




var SlBreadcrumbItem = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_9__/* .HasSlotController */ .X(this, "prefix", "suffix");
    this.renderType = "button";
    this.rel = "noreferrer noopener";
  }
  setRenderType() {
    const hasDropdown = this.defaultSlot.assignedElements({ flatten: true }).filter((i) => i.tagName.toLowerCase() === "sl-dropdown").length > 0;
    if (this.href) {
      this.renderType = "link";
      return;
    }
    if (hasDropdown) {
      this.renderType = "dropdown";
      return;
    }
    this.renderType = "button";
  }
  hrefChanged() {
    this.setRenderType();
  }
  handleSlotChange() {
    this.setRenderType();
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)`
      <div
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__/* .classMap */ .H)({
      "breadcrumb-item": true,
      "breadcrumb-item--has-prefix": this.hasSlotController.test("prefix"),
      "breadcrumb-item--has-suffix": this.hasSlotController.test("suffix")
    })}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType === "link" ? (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__/* .ifDefined */ .J)(this.target ? this.target : void 0)}"
                rel=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__/* .ifDefined */ .J)(this.target ? this.rel : void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            ` : ""}
        ${this.renderType === "button" ? (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            ` : ""}
        ${this.renderType === "dropdown" ? (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            ` : ""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `;
  }
};
SlBreadcrumbItem.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__/* .component_styles_default */ .$, _chunk_Q5P7Y2HU_js__WEBPACK_IMPORTED_MODULE_0__/* .breadcrumb_item_styles_default */ .X];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .query */ .P)("slot:not([name])")
], SlBreadcrumbItem.prototype, "defaultSlot", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .state */ .wk)()
], SlBreadcrumbItem.prototype, "renderType", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)()
], SlBreadcrumbItem.prototype, "href", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)()
], SlBreadcrumbItem.prototype, "target", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)()
], SlBreadcrumbItem.prototype, "rel", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("href", { waitUntilFirstUpdate: true })
], SlBreadcrumbItem.prototype, "hrefChanged", 1);




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

/***/ 4462:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ breadcrumb_item_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RQ7GF3MZ.js
var chunk_RQ7GF3MZ = __webpack_require__(5867);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GLCUPQMQ.js


// src/components/breadcrumb-item/breadcrumb-item.ts
var breadcrumb_item_default = chunk_RQ7GF3MZ/* SlBreadcrumbItem */.O;
chunk_RQ7GF3MZ/* SlBreadcrumbItem */.O.define("sl-breadcrumb-item");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.Q5P7Y2HU.js
var chunk_Q5P7Y2HU = __webpack_require__(5839);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CCJUT23E.js
var chunk_CCJUT23E = __webpack_require__(1465);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
;// ./node_modules/@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js











/***/ }),

/***/ 7804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OA: () => (/* binding */ t),
/* harmony export */   WL: () => (/* binding */ i),
/* harmony export */   u$: () => (/* binding */ e)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ }),

/***/ 3720:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* reexport */ e)
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(6752);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(7804);
;// ./node_modules/lit-html/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(0,directive/* directive */.u$)(class extends directive/* Directive */.WL{constructor(t){if(super(t),t.type!==directive/* PartType */.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return lit_html/* noChange */.c0}});
//# sourceMappingURL=class-map.js.map

;// ./node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map


/***/ }),

/***/ 31:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* reexport */ o)
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(6752);
;// ./node_modules/lit-html/directives/if-defined.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=o=>o??lit_html/* nothing */.s6;
//# sourceMappingURL=if-defined.js.map

;// ./node_modules/lit/directives/if-defined.js

//# sourceMappingURL=if-defined.js.map


/***/ })

}]);
//# sourceMappingURL=4462.js.map