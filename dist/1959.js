"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[1959],{

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

/***/ 5078:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ SlFormatNumber)
/* harmony export */ });
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7968);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1346);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2391);




// src/components/format-number/format-number.component.ts

var SlFormatNumber = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_1__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_0__/* .LocalizeController */ .c(this);
    this.value = 0;
    this.type = "decimal";
    this.noGrouping = false;
    this.currency = "USD";
    this.currencyDisplay = "symbol";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    return this.localize.number(this.value, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: !this.noGrouping,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits
    });
  }
};
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ type: Number })
], SlFormatNumber.prototype, "value", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()
], SlFormatNumber.prototype, "type", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ attribute: "no-grouping", type: Boolean })
], SlFormatNumber.prototype, "noGrouping", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()
], SlFormatNumber.prototype, "currency", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ attribute: "currency-display" })
], SlFormatNumber.prototype, "currencyDisplay", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ attribute: "minimum-integer-digits", type: Number })
], SlFormatNumber.prototype, "minimumIntegerDigits", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ attribute: "minimum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "minimumFractionDigits", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ attribute: "maximum-fraction-digits", type: Number })
], SlFormatNumber.prototype, "maximumFractionDigits", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ attribute: "minimum-significant-digits", type: Number })
], SlFormatNumber.prototype, "minimumSignificantDigits", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_2__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({ attribute: "maximum-significant-digits", type: Number })
], SlFormatNumber.prototype, "maximumSignificantDigits", 2);




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

/***/ 1959:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ format_number_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R7YK2T4U.js
var chunk_R7YK2T4U = __webpack_require__(5078);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2NF6MMMW.js


// src/components/format-number/format-number.ts
var format_number_default = chunk_R7YK2T4U/* SlFormatNumber */.e;
chunk_R7YK2T4U/* SlFormatNumber */.e.define("sl-format-number");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WLV3FVBR.js
var chunk_WLV3FVBR = __webpack_require__(7968);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAS2SHYD.js
var chunk_MAS2SHYD = __webpack_require__(1949);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
;// ./node_modules/@shoelace-style/shoelace/dist/components/format-number/format-number.js









/***/ })

}]);
//# sourceMappingURL=1959.js.map