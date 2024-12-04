"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[5151],{

/***/ 5327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ textarea_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/textarea/textarea.styles.ts

var textarea_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;




/***/ }),

/***/ 2266:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ SlTextarea)
/* harmony export */ });
/* harmony import */ var _chunk_6KE6SBMU_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5327);
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










// src/components/textarea/textarea.component.ts





var SlTextarea = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_6__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.formControlController = new _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_3__/* .FormControlController */ .Ud(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    });
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_13__/* .HasSlotController */ .X(this, "help-text", "label");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.value = "";
    this.size = "medium";
    this.filled = false;
    this.label = "";
    this.helpText = "";
    this.placeholder = "";
    this.rows = 4;
    this.resize = "vertical";
    this.disabled = false;
    this.readonly = false;
    this.form = "";
    this.required = false;
    this.spellcheck = true;
    this.defaultValue = "";
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
    this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
    this.updateComplete.then(() => {
      this.setTextareaHeight();
      this.resizeObserver.observe(this.input);
    });
  }
  firstUpdated() {
    this.formControlController.updateValidity();
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    if (this.input) {
      (_a = this.resizeObserver) == null ? void 0 : _a.unobserve(this.input);
    }
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleChange() {
    this.value = this.input.value;
    this.setTextareaHeight();
    this.emit("sl-change");
  }
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleInput() {
    this.value = this.input.value;
    this.emit("sl-input");
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  setTextareaHeight() {
    if (this.resize === "auto") {
      this.sizeAdjuster.style.height = `${this.input.clientHeight}px`;
      this.input.style.height = "auto";
      this.input.style.height = `${this.input.scrollHeight}px`;
    } else {
      this.input.style.height = void 0;
    }
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleRowsChange() {
    this.setTextareaHeight();
  }
  async handleValueChange() {
    await this.updateComplete;
    this.formControlController.updateValidity();
    this.setTextareaHeight();
  }
  /** Sets focus on the textarea. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the textarea. */
  blur() {
    this.input.blur();
  }
  /** Selects all the text in the textarea. */
  select() {
    this.input.select();
  }
  /** Gets or sets the textarea's scroll position. */
  scrollPosition(position) {
    if (position) {
      if (typeof position.top === "number")
        this.input.scrollTop = position.top;
      if (typeof position.left === "number")
        this.input.scrollLeft = position.left;
      return void 0;
    }
    return {
      top: this.input.scrollTop,
      left: this.input.scrollTop
    };
  }
  /** Sets the start and end positions of the text selection (0-based). */
  setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
    this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
  }
  /** Replaces a range of text with a new string. */
  setRangeText(replacement, start, end, selectMode = "preserve") {
    const selectionStart = start != null ? start : this.input.selectionStart;
    const selectionEnd = end != null ? end : this.input.selectionEnd;
    this.input.setRangeText(replacement, selectionStart, selectionEnd, selectMode);
    if (this.value !== this.input.value) {
      this.value = this.input.value;
      this.setTextareaHeight();
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
    return (0,lit__WEBPACK_IMPORTED_MODULE_9__/* .html */ .qy)`
      <div
        part="form-control"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__/* .classMap */ .H)({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
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
            class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__/* .classMap */ .H)({
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--standard": !this.filled,
      "textarea--filled": this.filled,
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": !this.value,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.name)}
              .value=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_11__/* .live */ .V)(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.placeholder)}
              rows=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.rows)}
              minlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.minlength)}
              maxlength=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.maxlength)}
              autocapitalize=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.autocapitalize)}
              autocorrect=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.spellcheck)}
              enterkeyhint=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.enterkeyhint)}
              inputmode=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_10__/* .ifDefined */ .J)(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize !== "auto"}></div>
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
SlTextarea.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_5__/* .component_styles_default */ .$, _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_2__/* .form_control_styles_default */ .I, _chunk_6KE6SBMU_js__WEBPACK_IMPORTED_MODULE_0__/* .textarea_styles_default */ .C];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .query */ .P)(".textarea__control")
], SlTextarea.prototype, "input", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .query */ .P)(".textarea__size-adjuster")
], SlTextarea.prototype, "sizeAdjuster", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .state */ .wk)()
], SlTextarea.prototype, "hasFocus", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "title", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "name", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "value", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ reflect: true })
], SlTextarea.prototype, "size", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTextarea.prototype, "filled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "label", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ attribute: "help-text" })
], SlTextarea.prototype, "helpText", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "placeholder", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Number })
], SlTextarea.prototype, "rows", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "resize", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTextarea.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTextarea.prototype, "readonly", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ reflect: true })
], SlTextarea.prototype, "form", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTextarea.prototype, "required", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Number })
], SlTextarea.prototype, "minlength", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Number })
], SlTextarea.prototype, "maxlength", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "autocapitalize", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "autocorrect", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "autocomplete", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({ type: Boolean })
], SlTextarea.prototype, "autofocus", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "enterkeyhint", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)({
    type: Boolean,
    converter: {
      // Allow "true|false" attribute values but keep the property boolean
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], SlTextarea.prototype, "spellcheck", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__/* .property */ .MZ)()
], SlTextarea.prototype, "inputmode", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,_chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .J)()
], SlTextarea.prototype, "defaultValue", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .w)("disabled", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleDisabledChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .w)("rows", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleRowsChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_7__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_4__/* .watch */ .w)("value", { waitUntilFirstUpdate: true })
], SlTextarea.prototype, "handleValueChange", 1);




/***/ }),

/***/ 7532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _chunks_chunk_J7HXHHT3_js__WEBPACK_IMPORTED_MODULE_0__.G)
/* harmony export */ });
/* harmony import */ var _chunks_chunk_J7HXHHT3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2266);
/* harmony import */ var _chunks_chunk_6KE6SBMU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5327);
/* harmony import */ var _chunks_chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6977);
/* harmony import */ var _chunks_chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(649);
/* harmony import */ var _chunks_chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6012);
/* harmony import */ var _chunks_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1465);
/* harmony import */ var _chunks_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1101);
/* harmony import */ var _chunks_chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3710);
/* harmony import */ var _chunks_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1346);













/***/ })

}]);
//# sourceMappingURL=5151.js.map