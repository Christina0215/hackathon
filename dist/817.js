"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[817],{

/***/ 4484:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ skeleton_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/skeleton/skeleton.styles.ts

var skeleton_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;




/***/ }),

/***/ 7625:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ SlSkeleton)
/* harmony export */ });
/* harmony import */ var _chunk_HTQNKB5E_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4484);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2391);





// src/components/skeleton/skeleton.component.ts



var SlSkeleton = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_2__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.effect = "none";
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_5__/* .html */ .qy)`
      <div
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_4__/* .classMap */ .H)({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
  }
};
SlSkeleton.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_1__/* .component_styles_default */ .$, _chunk_HTQNKB5E_js__WEBPACK_IMPORTED_MODULE_0__/* .skeleton_styles_default */ .X];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_3__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()
], SlSkeleton.prototype, "effect", 2);




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

/***/ 817:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_chunk_SQHRCLLT_js__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _chunks_chunk_SQHRCLLT_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7625);
/* harmony import */ var _chunks_chunk_HTQNKB5E_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4484);
/* harmony import */ var _chunks_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
/* harmony import */ var _chunks_chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3710);
/* harmony import */ var _chunks_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1346);








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


/***/ })

}]);
//# sourceMappingURL=817.js.map