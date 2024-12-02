"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[9702],{

/***/ 9871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ library_system_default)
/* harmony export */ });
// src/components/icon/library.system.ts
var icons = {
  caret: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,
  check: `
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
  "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
  copy: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,
  eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
  "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
  eyedropper: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,
  "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,
  indeterminate: `
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,
  "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
  "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
  "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
  radio: `
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,
  "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
  "x-lg": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,
  "x-circle-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `
};
var systemLibrary = {
  name: "system",
  resolver: (name) => {
    if (name in icons) {
      return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
    }
    return "";
  }
};
var library_system_default = systemLibrary;




/***/ }),

/***/ 7811:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ getBasePath),
/* harmony export */   j: () => (/* binding */ setBasePath)
/* harmony export */ });
// src/utilities/base-path.ts
var basePath = "";
function setBasePath(path) {
  basePath = path;
}
function getBasePath(subpath = "") {
  if (!basePath) {
    const scripts = [...document.getElementsByTagName("script")];
    const configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
    if (configScript) {
      setBasePath(configScript.getAttribute("data-shoelace"));
    } else {
      const fallbackScript = scripts.find((s) => {
        return /shoelace(\.min)?\.js($|\?)/.test(s.src) || /shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src);
      });
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }
  return basePath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
}




/***/ }),

/***/ 9702:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ SlCheckbox)
/* harmony export */ });
/* harmony import */ var _chunk_R3NF57O3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5881);
/* harmony import */ var _chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6977);
/* harmony import */ var _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(649);
/* harmony import */ var _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6012);
/* harmony import */ var _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5292);
/* harmony import */ var _chunk_E6QAPUBK_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9660);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2618);
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(31);
/* harmony import */ var lit_directives_live_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(538);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2391);











// src/components/checkbox/checkbox.component.ts





var SlCheckbox = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_7__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.formControlController = new _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_3__/* .FormControlController */ .Ud(this, {
      value: (control) => control.checked ? control.value || "on" : void 0,
      defaultValue: (control) => control.defaultChecked,
      setValue: (control, checked) => control.checked = checked
    });
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_14__/* .HasSlotController */ .X(this, "help-text");
    this.hasFocus = false;
    this.title = "";
    this.name = "";
    this.size = "medium";
    this.disabled = false;
    this.checked = false;
    this.indeterminate = false;
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
  handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit("sl-change");
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
  handleFocus() {
    this.hasFocus = true;
    this.emit("sl-focus");
  }
  handleDisabledChange() {
    this.formControlController.setValidity(this.disabled);
  }
  handleStateChange() {
    this.input.checked = this.checked;
    this.input.indeterminate = this.indeterminate;
    this.formControlController.updateValidity();
  }
  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }
  /** Sets focus on the checkbox. */
  focus(options) {
    this.input.focus(options);
  }
  /** Removes focus from the checkbox. */
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
  /**
   * Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear
   * the custom validation message, call this method with an empty string.
   */
  setCustomValidity(message) {
    this.input.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  render() {
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    return (0,lit__WEBPACK_IMPORTED_MODULE_10__/* .html */ .qy)`
      <div
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__/* .classMap */ .H)({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          part="base"
          class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__/* .classMap */ .H)({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate,
      "checkbox--small": this.size === "small",
      "checkbox--medium": this.size === "medium",
      "checkbox--large": this.size === "large"
    })}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_11__/* .ifDefined */ .J)(this.value)}
            .indeterminate=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_12__/* .live */ .V)(this.indeterminate)}
            .checked=${(0,lit_directives_live_js__WEBPACK_IMPORTED_MODULE_12__/* .live */ .V)(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked ? " control--checked" : ""}${this.indeterminate ? " control--indeterminate" : ""}"
            class="checkbox__control"
          >
            ${this.checked ? (0,lit__WEBPACK_IMPORTED_MODULE_10__/* .html */ .qy)`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                ` : ""}
            ${!this.checked && this.indeterminate ? (0,lit__WEBPACK_IMPORTED_MODULE_10__/* .html */ .qy)`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                ` : ""}
          </span>

          <div part="label" class="checkbox__label">
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
SlCheckbox.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_6__/* .component_styles_default */ .$, _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_2__/* .form_control_styles_default */ .I, _chunk_R3NF57O3_js__WEBPACK_IMPORTED_MODULE_0__/* .checkbox_styles_default */ .x];
SlCheckbox.dependencies = { "sl-icon": _chunk_E6QAPUBK_js__WEBPACK_IMPORTED_MODULE_4__/* .SlIcon */ .B };
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .query */ .P)('input[type="checkbox"]')
], SlCheckbox.prototype, "input", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .state */ .wk)()
], SlCheckbox.prototype, "hasFocus", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)()
], SlCheckbox.prototype, "title", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)()
], SlCheckbox.prototype, "name", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)()
], SlCheckbox.prototype, "value", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ reflect: true })
], SlCheckbox.prototype, "size", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "checked", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "indeterminate", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,_chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultValue */ .J)("checked")
], SlCheckbox.prototype, "defaultChecked", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ reflect: true })
], SlCheckbox.prototype, "form", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlCheckbox.prototype, "required", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ attribute: "help-text" })
], SlCheckbox.prototype, "helpText", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .w)("disabled", { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleDisabledChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_8__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_5__/* .watch */ .w)(["checked", "indeterminate"], { waitUntilFirstUpdate: true })
], SlCheckbox.prototype, "handleStateChange", 1);




/***/ }),

/***/ 9660:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ SlIcon)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js
var chunk_ZL53POKZ = __webpack_require__(7358);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QLXRCYS4.js
var chunk_QLXRCYS4 = __webpack_require__(3884);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CCJUT23E.js
var chunk_CCJUT23E = __webpack_require__(1465);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(2618);
// EXTERNAL MODULE: ./node_modules/lit-html/directive-helpers.js
var directive_helpers = __webpack_require__(8504);
;// ./node_modules/lit/directive-helpers.js

//# sourceMappingURL=directive-helpers.js.map

// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 6 modules
var decorators = __webpack_require__(2391);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.E6QAPUBK.js







// src/components/icon/icon.component.ts



var CACHEABLE_ERROR = Symbol();
var RETRYABLE_ERROR = Symbol();
var parser;
var iconCache = /* @__PURE__ */ new Map();
var SlIcon = class extends chunk_UYAO2JRR/* ShoelaceElement */.f {
  constructor() {
    super(...arguments);
    this.initialRender = false;
    this.svg = null;
    this.label = "";
    this.library = "default";
  }
  /** Given a URL, this function returns the resulting SVG element or an appropriate error symbol. */
  async resolveIcon(url, library) {
    var _a;
    let fileData;
    if (library == null ? void 0 : library.spriteSheet) {
      this.svg = (0,lit/* html */.qy)`<svg part="svg">
        <use part="use" href="${url}"></use>
      </svg>`;
      return this.svg;
    }
    try {
      fileData = await fetch(url, { mode: "cors" });
      if (!fileData.ok)
        return fileData.status === 410 ? CACHEABLE_ERROR : RETRYABLE_ERROR;
    } catch (e) {
      return RETRYABLE_ERROR;
    }
    try {
      const div = document.createElement("div");
      div.innerHTML = await fileData.text();
      const svg = div.firstElementChild;
      if (((_a = svg == null ? void 0 : svg.tagName) == null ? void 0 : _a.toLowerCase()) !== "svg")
        return CACHEABLE_ERROR;
      if (!parser)
        parser = new DOMParser();
      const doc = parser.parseFromString(svg.outerHTML, "text/html");
      const svgEl = doc.body.querySelector("svg");
      if (!svgEl)
        return CACHEABLE_ERROR;
      svgEl.part.add("svg");
      return document.adoptNode(svgEl);
    } catch (e) {
      return CACHEABLE_ERROR;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    (0,chunk_ZL53POKZ/* watchIcon */.pA)(this);
  }
  firstUpdated() {
    this.initialRender = true;
    this.setIcon();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    (0,chunk_ZL53POKZ/* unwatchIcon */.cl)(this);
  }
  getIconSource() {
    const library = (0,chunk_ZL53POKZ/* getIconLibrary */.Hh)(this.library);
    if (this.name && library) {
      return {
        url: library.resolver(this.name),
        fromLibrary: true
      };
    }
    return {
      url: this.src,
      fromLibrary: false
    };
  }
  handleLabelChange() {
    const hasLabel = typeof this.label === "string" && this.label.length > 0;
    if (hasLabel) {
      this.setAttribute("role", "img");
      this.setAttribute("aria-label", this.label);
      this.removeAttribute("aria-hidden");
    } else {
      this.removeAttribute("role");
      this.removeAttribute("aria-label");
      this.setAttribute("aria-hidden", "true");
    }
  }
  async setIcon() {
    var _a;
    const { url, fromLibrary } = this.getIconSource();
    const library = fromLibrary ? (0,chunk_ZL53POKZ/* getIconLibrary */.Hh)(this.library) : void 0;
    if (!url) {
      this.svg = null;
      return;
    }
    let iconResolver = iconCache.get(url);
    if (!iconResolver) {
      iconResolver = this.resolveIcon(url, library);
      iconCache.set(url, iconResolver);
    }
    if (!this.initialRender) {
      return;
    }
    const svg = await iconResolver;
    if (svg === RETRYABLE_ERROR) {
      iconCache.delete(url);
    }
    if (url !== this.getIconSource().url) {
      return;
    }
    if ((0,directive_helpers/* isTemplateResult */.qb)(svg)) {
      this.svg = svg;
      if (library) {
        await this.updateComplete;
        const shadowSVG = this.shadowRoot.querySelector("[part='svg']");
        if (typeof library.mutator === "function" && shadowSVG) {
          library.mutator(shadowSVG);
        }
      }
      return;
    }
    switch (svg) {
      case RETRYABLE_ERROR:
      case CACHEABLE_ERROR:
        this.svg = null;
        this.emit("sl-error");
        break;
      default:
        this.svg = svg.cloneNode(true);
        (_a = library == null ? void 0 : library.mutator) == null ? void 0 : _a.call(library, this.svg);
        this.emit("sl-load");
    }
  }
  render() {
    return this.svg;
  }
};
SlIcon.styles = [chunk_TUVJKY7S/* component_styles_default */.$, chunk_QLXRCYS4/* icon_styles_default */.L];
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* state */.wk)()
], SlIcon.prototype, "svg", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ reflect: true })
], SlIcon.prototype, "name", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)()
], SlIcon.prototype, "src", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)()
], SlIcon.prototype, "label", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ reflect: true })
], SlIcon.prototype, "library", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,chunk_CCJUT23E/* watch */.w)("label")
], SlIcon.prototype, "handleLabelChange", 1);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,chunk_CCJUT23E/* watch */.w)(["name", "src", "library"])
], SlIcon.prototype, "setIcon", 1);




/***/ }),

/***/ 4080:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ library_default_default)
/* harmony export */ });
/* harmony import */ var _chunk_3Y6SB6QS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7811);


// src/components/icon/library.default.ts
var library = {
  name: "default",
  resolver: (name) => (0,_chunk_3Y6SB6QS_js__WEBPACK_IMPORTED_MODULE_0__/* .getBasePath */ .D)(`assets/icons/${name}.svg`)
};
var library_default_default = library;




/***/ }),

/***/ 3884:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ icon_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/icon/icon.styles.ts

var icon_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;




/***/ }),

/***/ 5881:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ checkbox_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/checkbox/checkbox.styles.ts

var checkbox_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;




/***/ }),

/***/ 7358:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hh: () => (/* binding */ getIconLibrary),
/* harmony export */   Sm: () => (/* binding */ registerIconLibrary),
/* harmony export */   cl: () => (/* binding */ unwatchIcon),
/* harmony export */   ds: () => (/* binding */ unregisterIconLibrary),
/* harmony export */   pA: () => (/* binding */ watchIcon)
/* harmony export */ });
/* harmony import */ var _chunk_P7ZG6EMR_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4080);
/* harmony import */ var _chunk_3TFKS637_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9871);



// src/components/icon/library.ts
var registry = [_chunk_P7ZG6EMR_js__WEBPACK_IMPORTED_MODULE_0__/* .library_default_default */ .q, _chunk_3TFKS637_js__WEBPACK_IMPORTED_MODULE_1__/* .library_system_default */ .g];
var watchedIcons = [];
function watchIcon(icon) {
  watchedIcons.push(icon);
}
function unwatchIcon(icon) {
  watchedIcons = watchedIcons.filter((el) => el !== icon);
}
function getIconLibrary(name) {
  return registry.find((lib) => lib.name === name);
}
function registerIconLibrary(name, options) {
  unregisterIconLibrary(name);
  registry.push({
    name,
    resolver: options.resolver,
    mutator: options.mutator,
    spriteSheet: options.spriteSheet
  });
  watchedIcons.forEach((icon) => {
    if (icon.library === name) {
      icon.setIcon();
    }
  });
}
function unregisterIconLibrary(name) {
  registry = registry.filter((lib) => lib.name !== name);
}




/***/ })

}]);
//# sourceMappingURL=9702.js.map