"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[8001],{

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

/***/ 5532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ SlTab)
/* harmony export */ });
/* harmony import */ var _chunk_LE3KWASX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5310);
/* harmony import */ var _chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9687);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7968);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2391);








// src/components/tab/tab.component.ts



var id = 0;
var SlTab = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_5__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_2__/* .LocalizeController */ .c(this);
    this.attrId = ++id;
    this.componentId = `sl-tab-${this.attrId}`;
    this.panel = "";
    this.active = false;
    this.closable = false;
    this.disabled = false;
    this.tabIndex = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tab");
  }
  handleCloseClick(event) {
    event.stopPropagation();
    this.emit("sl-close");
  }
  handleActiveChange() {
    this.setAttribute("aria-selected", this.active ? "true" : "false");
  }
  handleDisabledChange() {
    this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    if (this.disabled && !this.active) {
      this.tabIndex = -1;
    } else {
      this.tabIndex = 0;
    }
  }
  render() {
    this.id = this.id.length > 0 ? this.id : this.componentId;
    return (0,lit__WEBPACK_IMPORTED_MODULE_8__/* .html */ .qy)`
      <div
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__/* .classMap */ .H)({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
      >
        <slot></slot>
        ${this.closable ? (0,lit__WEBPACK_IMPORTED_MODULE_8__/* .html */ .qy)`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
  }
};
SlTab.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_4__/* .component_styles_default */ .$, _chunk_LE3KWASX_js__WEBPACK_IMPORTED_MODULE_0__/* .tab_styles_default */ .Z];
SlTab.dependencies = { "sl-icon-button": _chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_1__/* .SlIconButton */ .h };
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_9__/* .query */ .P)(".tab")
], SlTab.prototype, "tab", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({ reflect: true })
], SlTab.prototype, "panel", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTab.prototype, "active", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTab.prototype, "closable", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTab.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({ type: Number, reflect: true })
], SlTab.prototype, "tabIndex", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_3__/* .watch */ .w)("active")
], SlTab.prototype, "handleActiveChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_3__/* .watch */ .w)("disabled")
], SlTab.prototype, "handleDisabledChange", 1);




/***/ }),

/***/ 5310:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ tab_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/tab/tab.styles.ts

var tab_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible):not([disabled]) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus-visible) {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;




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

/***/ 8001:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_chunk_44IVVTR5_js__WEBPACK_IMPORTED_MODULE_0__.J)
/* harmony export */ });
/* harmony import */ var _chunks_chunk_44IVVTR5_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5532);
/* harmony import */ var _chunks_chunk_LE3KWASX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5310);
/* harmony import */ var _chunks_chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9687);
/* harmony import */ var _chunks_chunk_6I2T3DLI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3987);
/* harmony import */ var _chunks_chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7968);
/* harmony import */ var _chunks_chunk_MAS2SHYD_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1949);
/* harmony import */ var _chunks_chunk_E6QAPUBK_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9660);
/* harmony import */ var _chunks_chunk_ZL53POKZ_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7358);
/* harmony import */ var _chunks_chunk_P7ZG6EMR_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4080);
/* harmony import */ var _chunks_chunk_3TFKS637_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9871);
/* harmony import */ var _chunks_chunk_QLXRCYS4_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3884);
/* harmony import */ var _chunks_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1465);
/* harmony import */ var _chunks_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1101);
/* harmony import */ var _chunks_chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3710);
/* harmony import */ var _chunks_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1346);



















/***/ })

}]);
//# sourceMappingURL=8001.js.map