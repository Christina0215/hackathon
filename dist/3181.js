"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[3181],{

/***/ 9238:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ SlSwitch)
/* harmony export */ });
/* harmony import */ var _chunk_EU44RQUN_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3876);
/* harmony import */ var _chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6977);
/* harmony import */ var _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649);
/* harmony import */ var _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6012);
/* harmony import */ var _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5292);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2618);
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31);
/* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(538);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2391);










// src/components/switch/switch.component.ts





var SlSwitch = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_6__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.formControlController = new _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_3__/* .FormControlController */ .Ud(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_13__/* .HasSlotController */ .X(this, "help-text");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.defaultChecked = false;
    this.form = "";
    this.required = false;
    this.helpText = "";
  }
  /** Gets the validity state object */
  get validity() {
    return this.input.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.input.validationMessage;
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleInput() {
    this.emit("sl-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleClick() {
    this.checked = !this.checked;
    this.emit("sl-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleKeyDown(event) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      this.checked = false;
      this.emit("sl-change");
      this.emit("sl-input");
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      this.checked = true;
      this.emit("sl-change");
      this.emit("sl-input");
    }
  }
  handleCheckedChange() {
    this.input.checked = this.checked;
    this.formControlController.updateValidity();
  }
  handleDisabledChange() {
    this.formControlController.setValidity(true);
  }
  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }
  /** Sets focus on the switch. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
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
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return (0,lit__WEBPACK_IMPORTED_MODULE_9__/* .html */ .qy)`
      <div
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__/* .classMap */ .H)({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__/* .classMap */ .H)({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus,
      "switch--small": this.size === "small",
      "switch--medium": this.size === "medium",
      "switch--large": this.size === "large"
    })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.value)}
            .checked=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_11__/* .live */ .V)(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? "false" : "true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
};
SlSwitch.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_5__/* .component_styles_default */ .$, _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_2__/* .form_control_styles_default */ .I, _chunk_EU44RQUN_js__WEBPACK_IMPORTED_MODULE_0__/* .switch_styles_default */ .M];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .query */ .P)('input[type="checkbox"]')
], SlSwitch.prototype, "input", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .state */ .wk)()
], SlSwitch.prototype, "hasFocus", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlSwitch.prototype, "title", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlSwitch.prototype, "name", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlSwitch.prototype, "value", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ reflect: true })
], SlSwitch.prototype, "size", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSwitch.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSwitch.prototype, "checked", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,_chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .J)("checked")
], SlSwitch.prototype, "defaultChecked", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ reflect: true })
], SlSwitch.prototype, "form", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSwitch.prototype, "required", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ attribute: "help-text" })
], SlSwitch.prototype, "helpText", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .w)("checked", { waitUntilFirstUpdate: true })
], SlSwitch.prototype, "handleCheckedChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .w)("disabled", { waitUntilFirstUpdate: true })
], SlSwitch.prototype, "handleDisabledChange", 1);




/***/ }),

/***/ 3876:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ switch_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/switch/switch.styles.ts

var switch_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;




/***/ }),

/***/ 3181:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ switch_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3R6PU6LJ.js
var chunk_3R6PU6LJ = __webpack_require__(9238);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3C2FYRY.js


// src/components/switch/switch.ts
var switch_default = chunk_3R6PU6LJ/* SlSwitch */.g;
chunk_3R6PU6LJ/* SlSwitch */.g.define("sl-switch");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.EU44RQUN.js
var chunk_EU44RQUN = __webpack_require__(3876);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js
var chunk_GI7VDIWX = __webpack_require__(6977);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js
var chunk_SI4ACBFK = __webpack_require__(649);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2RCF7SLU.js
var chunk_2RCF7SLU = __webpack_require__(6012);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CCJUT23E.js
var chunk_CCJUT23E = __webpack_require__(1465);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
;// ./node_modules/@shoelace-style/shoelace/dist/components/switch/switch.js














/***/ })

}]);
//# sourceMappingURL=3181.js.map