"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[45],{

/***/ 1219:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XC: () => (/* binding */ registerTranslation),
/* harmony export */   c2: () => (/* binding */ LocalizeController)
/* harmony export */ });
/* unused harmony export update */
const connectedElements = new Set();
const translations = new Map();
let fallback;
let documentDirection = 'ltr';
let documentLanguage = 'en';
const isClient = (typeof MutationObserver !== "undefined" && typeof document !== "undefined" && typeof document.documentElement !== "undefined");
if (isClient) {
    const documentElementObserver = new MutationObserver(update);
    documentDirection = document.documentElement.dir || 'ltr';
    documentLanguage = document.documentElement.lang || navigator.language;
    documentElementObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir', 'lang']
    });
}
function registerTranslation(...translation) {
    translation.map(t => {
        const code = t.$code.toLowerCase();
        if (translations.has(code)) {
            translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
        }
        else {
            translations.set(code, t);
        }
        if (!fallback) {
            fallback = t;
        }
    });
    update();
}
function update() {
    if (isClient) {
        documentDirection = document.documentElement.dir || 'ltr';
        documentLanguage = document.documentElement.lang || navigator.language;
    }
    [...connectedElements.keys()].map((el) => {
        if (typeof el.requestUpdate === 'function') {
            el.requestUpdate();
        }
    });
}
class LocalizeController {
    constructor(host) {
        this.host = host;
        this.host.addController(this);
    }
    hostConnected() {
        connectedElements.add(this.host);
    }
    hostDisconnected() {
        connectedElements.delete(this.host);
    }
    dir() {
        return `${this.host.dir || documentDirection}`.toLowerCase();
    }
    lang() {
        return `${this.host.lang || documentLanguage}`.toLowerCase();
    }
    getTranslationData(lang) {
        var _a, _b;
        const locale = new Intl.Locale(lang.replace(/_/g, '-'));
        const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
        const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : '';
        const primary = translations.get(`${language}-${region}`);
        const secondary = translations.get(language);
        return { locale, language, region, primary, secondary };
    }
    exists(key, options) {
        var _a;
        const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
        options = Object.assign({ includeFallback: false }, options);
        if ((primary && primary[key]) ||
            (secondary && secondary[key]) ||
            (options.includeFallback && fallback && fallback[key])) {
            return true;
        }
        return false;
    }
    term(key, ...args) {
        const { primary, secondary } = this.getTranslationData(this.lang());
        let term;
        if (primary && primary[key]) {
            term = primary[key];
        }
        else if (secondary && secondary[key]) {
            term = secondary[key];
        }
        else if (fallback && fallback[key]) {
            term = fallback[key];
        }
        else {
            console.error(`No translation found for: ${String(key)}`);
            return String(key);
        }
        if (typeof term === 'function') {
            return term(...args);
        }
        return term;
    }
    date(dateToFormat, options) {
        dateToFormat = new Date(dateToFormat);
        return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
    }
    number(numberToFormat, options) {
        numberToFormat = Number(numberToFormat);
        return isNaN(numberToFormat) ? '' : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
    }
    relativeTime(value, unit, options) {
        return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
    }
}


/***/ }),

/***/ 2494:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ progress_bar_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/progress-bar/progress-bar.styles.ts

var progress_bar_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;




/***/ }),

/***/ 1384:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ SlProgressBar)
/* harmony export */ });
/* harmony import */ var _chunk_GXC456DW_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2494);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7968);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2618);
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(31);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2391);
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1145);






// src/components/progress-bar/progress-bar.component.ts





var SlProgressBar = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_1__/* .LocalizeController */ .c(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)`
      <div
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_5__/* .classMap */ .H)({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__/* .ifDefined */ .J)(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_9__/* .styleMap */ .W)({ width: `${this.value}%` })}>
          ${!this.indeterminate ? (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__/* .component_styles_default */ .$, _chunk_GXC456DW_js__WEBPACK_IMPORTED_MODULE_0__/* .progress_bar_styles_default */ .r];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_4__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)()
], SlProgressBar.prototype, "label", 2);




/***/ }),

/***/ 1949:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ en_default)
/* harmony export */ });
/* harmony import */ var _shoelace_style_localize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1219);
// src/translations/en.ts

var translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  copied: "Copied",
  copy: "Copy",
  currentValue: "Current value",
  error: "Error",
  goToSlide: (slide, count) => `Go to slide ${slide} of ${count}`,
  hidePassword: "Hide password",
  loading: "Loading",
  nextSlide: "Next slide",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "No options selected";
    if (num === 1)
      return "1 option selected";
    return `${num} options selected`;
  },
  previousSlide: "Previous slide",
  progress: "Progress",
  remove: "Remove",
  resize: "Resize",
  scrollToEnd: "Scroll to end",
  scrollToStart: "Scroll to start",
  selectAColorFromTheScreen: "Select a color from the screen",
  showPassword: "Show password",
  slideNum: (slide) => `Slide ${slide}`,
  toggleColorFormat: "Toggle color format"
};
(0,_shoelace_style_localize__WEBPACK_IMPORTED_MODULE_0__/* .registerTranslation */ .XC)(translation);
var en_default = translation;




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

/***/ 7968:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ LocalizeController)
/* harmony export */ });
/* harmony import */ var _chunk_MAS2SHYD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1949);
/* harmony import */ var _shoelace_style_localize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1219);


// src/utilities/localize.ts


var LocalizeController = class extends _shoelace_style_localize__WEBPACK_IMPORTED_MODULE_1__/* .LocalizeController */ .c2 {
};
(0,_shoelace_style_localize__WEBPACK_IMPORTED_MODULE_1__/* .registerTranslation */ .XC)(_chunk_MAS2SHYD_js__WEBPACK_IMPORTED_MODULE_0__/* .en_default */ .k);




/***/ }),

/***/ 45:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ progress_bar_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KZZ2Q4B6.js
var chunk_KZZ2Q4B6 = __webpack_require__(1384);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HD34V6X4.js


// src/components/progress-bar/progress-bar.ts
var progress_bar_default = chunk_KZZ2Q4B6/* SlProgressBar */.Q;
chunk_KZZ2Q4B6/* SlProgressBar */.Q.define("sl-progress-bar");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GXC456DW.js
var chunk_GXC456DW = __webpack_require__(2494);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WLV3FVBR.js
var chunk_WLV3FVBR = __webpack_require__(7968);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAS2SHYD.js
var chunk_MAS2SHYD = __webpack_require__(1949);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
;// ./node_modules/@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js











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


/***/ }),

/***/ 1145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: () => (/* reexport */ o)
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(6752);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(7804);
;// ./node_modules/lit-html/directives/style-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n="important",i=" !"+n,o=(0,directive/* directive */.u$)(class extends directive/* Directive */.WL{constructor(t){if(super(t),t.type!==directive/* PartType */.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e}}return lit_html/* noChange */.c0}});
//# sourceMappingURL=style-map.js.map

;// ./node_modules/lit/directives/style-map.js

//# sourceMappingURL=style-map.js.map


/***/ })

}]);
//# sourceMappingURL=45.js.map