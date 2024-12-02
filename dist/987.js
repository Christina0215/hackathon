"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[987],{

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

/***/ 6451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ range_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/range/range.styles.ts

var range_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;




/***/ }),

/***/ 987:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ SlRange)
/* harmony export */ });
/* harmony import */ var _chunk_5D6IT2SR_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6451);
/* harmony import */ var _chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6977);
/* harmony import */ var _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649);
/* harmony import */ var _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6012);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7968);
/* harmony import */ var _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5292);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3720);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2391);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2618);
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);
/* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(538);











// src/components/range/range.component.ts





var SlRange = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_7__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.formControlController = new _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_3__/* .FormControlController */ .Ud(this);
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_14__/* .HasSlotController */ .X(this, "help-text", "label");
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_4__/* .LocalizeController */ .c(this);
    this.hasFocus = false;
    this.hasTooltip = false;
    this.title = "";
    this.name = "";
    this.value = 0;
    this.label = "";
    this.helpText = "";
    this.disabled = false;
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.tooltip = "top";
    this.tooltipFormatter = (value) => value.toString();
    this.form = "";
    this.defaultValue = 0;
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => this.syncRange());
    if (this.value < this.min) {
      this.value = this.min;
    }
    if (this.value > this.max) {
      this.value = this.max;
    }
    this.updateComplete.then(() => {
      this.syncRange();
      this.resizeObserver.observe(this.input);
    });
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.resizeObserver) == null ? void 0 : _a.unobserve(this.input);
  }
  handleChange() {
    this.emit("sl-change");
  }
  handleInput() {
    this.value = parseFloat(this.input.value);
    this.emit("sl-input");
    this.syncRange();
  }
  handleBlur() {
    this.hasFocus = false;
    this.hasTooltip = false;
    this.emit("sl-blur");
  }
  handleFocus() {
    this.hasFocus = true;
    this.hasTooltip = true;
    this.emit("sl-focus");
  }
  handleThumbDragStart() {
    this.hasTooltip = true;
  }
  handleThumbDragEnd() {
    this.hasTooltip = false;
  }
  syncProgress(percent) {
    this.input.style.setProperty("--percent", `${percent * 100}%`);
  }
  syncTooltip(percent) {
    if (this.output !== null) {
      const inputWidth = this.input.offsetWidth;
      const tooltipWidth = this.output.offsetWidth;
      const thumbSize = getComputedStyle(this.input).getPropertyValue("--thumb-size");
      const isRtl = this.localize.dir() === "rtl";
      const percentAsWidth = inputWidth * percent;
      if (isRtl) {
        const x = `${inputWidth - percentAsWidth}px + ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc((${x} - ${tooltipWidth / 2}px - ${thumbSize} / 2))`;
      } else {
        const x = `${percentAsWidth}px - ${percent} * ${thumbSize}`;
        this.output.style.translate = `calc(${x} - ${tooltipWidth / 2}px + ${thumbSize} / 2)`;
      }
    }
  }
  handleValueChange() {
    this.formControlController.updateValidity();
    this.input.value = this.value.toString();
    this.value = parseFloat(this.input.value);
    this.syncRange();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  syncRange() {
    const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
    this.syncProgress(percent);
    if (this.tooltip !== "none") {
      this.updateComplete.then(() => this.syncTooltip(percent));
    }
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  /** Sets focus on the range. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the range. */
  blur() {
    this.input.blur();
  }
  /** Increments the value of the range by the value of the step attribute. */
  stepUp() {
    this.input.stepUp();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
    }
  }
  /** Decrements the value of the range by the value of the step attribute. */
  stepDown() {
    this.input.stepDown();
    if (this.value !== Number(this.input.value)) {
      this.value = Number(this.input.value);
    }
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.input.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return (0,lit__WEBPACK_IMPORTED_MODULE_11__/* .html */ .qy)`
      <div
        part="form-control"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__/* .classMap */ .H)({
      "form-control": true,
      "form-control--medium": true,
      // range only has one size
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${hasLabel ? "false" : "true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__/* .classMap */ .H)({
      range: true,
      "range--disabled": this.disabled,
      "range--focused": this.hasFocus,
      "range--rtl": this.localize.dir() === "rtl",
      "range--tooltip-visible": this.hasTooltip,
      "range--tooltip-top": this.tooltip === "top",
      "range--tooltip-bottom": this.tooltip === "bottom"
    })}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_12__/* .ifDefined */ .J)(this.name)}
              ?disabled=${this.disabled}
              min=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_12__/* .ifDefined */ .J)(this.min)}
              max=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_12__/* .ifDefined */ .J)(this.max)}
              step=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_12__/* .ifDefined */ .J)(this.step)}
              .value=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_13__/* .live */ .V)(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip !== "none" && !this.disabled ? (0,lit__WEBPACK_IMPORTED_MODULE_11__/* .html */ .qy)`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter === "function" ? this.tooltipFormatter(this.value) : this.value}
                  </output>
                ` : ""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${hasHelpText ? "false" : "true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlRange.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_6__/* .component_styles_default */ .$, _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_2__/* .form_control_styles_default */ .I, _chunk_5D6IT2SR_js__WEBPACK_IMPORTED_MODULE_0__/* .range_styles_default */ .L];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .query */ .P)(".range__control")
], SlRange.prototype, "input", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .query */ .P)(".range__tooltip")
], SlRange.prototype, "output", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .state */ .wk)()
], SlRange.prototype, "hasFocus", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .state */ .wk)()
], SlRange.prototype, "hasTooltip", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)()
], SlRange.prototype, "title", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)()
], SlRange.prototype, "name", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ type: Number })
], SlRange.prototype, "value", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)()
], SlRange.prototype, "label", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ attribute: "help-text" })
], SlRange.prototype, "helpText", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlRange.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ type: Number })
], SlRange.prototype, "min", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ type: Number })
], SlRange.prototype, "max", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ type: Number })
], SlRange.prototype, "step", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)()
], SlRange.prototype, "tooltip", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ attribute: false })
], SlRange.prototype, "tooltipFormatter", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .property */ .MZ)({ reflect: true })
], SlRange.prototype, "form", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,_chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .J)()
], SlRange.prototype, "defaultValue", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_10__/* .eventOptions */ .Ls)({ passive: true })
], SlRange.prototype, "handleThumbDragStart", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .w)("value", { waitUntilFirstUpdate: true })
], SlRange.prototype, "handleValueChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .w)("disabled", { waitUntilFirstUpdate: true })
], SlRange.prototype, "handleDisabledChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .w)("hasTooltip", { waitUntilFirstUpdate: true })
], SlRange.prototype, "syncRange", 1);




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




/***/ })

}]);
//# sourceMappingURL=987.js.map