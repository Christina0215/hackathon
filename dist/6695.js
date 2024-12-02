"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[6695],{

/***/ 6012:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G6: () => (/* binding */ validValidityState),
/* harmony export */   Ud: () => (/* binding */ FormControlController),
/* harmony export */   pL: () => (/* binding */ customErrorValidityState),
/* harmony export */   zF: () => (/* binding */ valueMissingValidityState)
/* harmony export */ });
/* unused harmony export formCollections */
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1346);


// src/internal/form.ts
var formCollections = /* @__PURE__ */ new WeakMap();
var reportValidityOverloads = /* @__PURE__ */ new WeakMap();
var checkValidityOverloads = /* @__PURE__ */ new WeakMap();
var userInteractedControls = /* @__PURE__ */ new WeakSet();
var interactions = /* @__PURE__ */ new WeakMap();
var FormControlController = class {
  constructor(host, options) {
    this.handleFormData = (event) => {
      const disabled = this.options.disabled(this.host);
      const name = this.options.name(this.host);
      const value = this.options.value(this.host);
      const isButton = this.host.tagName.toLowerCase() === "sl-button";
      if (this.host.isConnected && !disabled && !isButton && typeof name === "string" && name.length > 0 && typeof value !== "undefined") {
        if (Array.isArray(value)) {
          value.forEach((val) => {
            event.formData.append(name, val.toString());
          });
        } else {
          event.formData.append(name, value.toString());
        }
      }
    };
    this.handleFormSubmit = (event) => {
      var _a;
      const disabled = this.options.disabled(this.host);
      const reportValidity = this.options.reportValidity;
      if (this.form && !this.form.noValidate) {
        (_a = formCollections.get(this.form)) == null ? void 0 : _a.forEach((control) => {
          this.setUserInteracted(control, true);
        });
      }
      if (this.form && !this.form.noValidate && !disabled && !reportValidity(this.host)) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    };
    this.handleFormReset = () => {
      this.options.setValue(this.host, this.options.defaultValue(this.host));
      this.setUserInteracted(this.host, false);
      interactions.set(this.host, []);
    };
    this.handleInteraction = (event) => {
      const emittedEvents = interactions.get(this.host);
      if (!emittedEvents.includes(event.type)) {
        emittedEvents.push(event.type);
      }
      if (emittedEvents.length === this.options.assumeInteractionOn.length) {
        this.setUserInteracted(this.host, true);
      }
    };
    this.checkFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const elements = this.form.querySelectorAll("*");
        for (const element of elements) {
          if (typeof element.checkValidity === "function") {
            if (!element.checkValidity()) {
              return false;
            }
          }
        }
      }
      return true;
    };
    this.reportFormValidity = () => {
      if (this.form && !this.form.noValidate) {
        const elements = this.form.querySelectorAll("*");
        for (const element of elements) {
          if (typeof element.reportValidity === "function") {
            if (!element.reportValidity()) {
              return false;
            }
          }
        }
      }
      return true;
    };
    (this.host = host).addController(this);
    this.options = (0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({
      form: (input) => {
        const formId = input.form;
        if (formId) {
          const root = input.getRootNode();
          const form = root.querySelector(`#${formId}`);
          if (form) {
            return form;
          }
        }
        return input.closest("form");
      },
      name: (input) => input.name,
      value: (input) => input.value,
      defaultValue: (input) => input.defaultValue,
      disabled: (input) => {
        var _a;
        return (_a = input.disabled) != null ? _a : false;
      },
      reportValidity: (input) => typeof input.reportValidity === "function" ? input.reportValidity() : true,
      checkValidity: (input) => typeof input.checkValidity === "function" ? input.checkValidity() : true,
      setValue: (input, value) => input.value = value,
      assumeInteractionOn: ["sl-input"]
    }, options);
  }
  hostConnected() {
    const form = this.options.form(this.host);
    if (form) {
      this.attachForm(form);
    }
    interactions.set(this.host, []);
    this.options.assumeInteractionOn.forEach((event) => {
      this.host.addEventListener(event, this.handleInteraction);
    });
  }
  hostDisconnected() {
    this.detachForm();
    interactions.delete(this.host);
    this.options.assumeInteractionOn.forEach((event) => {
      this.host.removeEventListener(event, this.handleInteraction);
    });
  }
  hostUpdated() {
    const form = this.options.form(this.host);
    if (!form) {
      this.detachForm();
    }
    if (form && this.form !== form) {
      this.detachForm();
      this.attachForm(form);
    }
    if (this.host.hasUpdated) {
      this.setValidity(this.host.validity.valid);
    }
  }
  attachForm(form) {
    if (form) {
      this.form = form;
      if (formCollections.has(this.form)) {
        formCollections.get(this.form).add(this.host);
      } else {
        formCollections.set(this.form, /* @__PURE__ */ new Set([this.host]));
      }
      this.form.addEventListener("formdata", this.handleFormData);
      this.form.addEventListener("submit", this.handleFormSubmit);
      this.form.addEventListener("reset", this.handleFormReset);
      if (!reportValidityOverloads.has(this.form)) {
        reportValidityOverloads.set(this.form, this.form.reportValidity);
        this.form.reportValidity = () => this.reportFormValidity();
      }
      if (!checkValidityOverloads.has(this.form)) {
        checkValidityOverloads.set(this.form, this.form.checkValidity);
        this.form.checkValidity = () => this.checkFormValidity();
      }
    } else {
      this.form = void 0;
    }
  }
  detachForm() {
    if (!this.form)
      return;
    const formCollection = formCollections.get(this.form);
    if (!formCollection) {
      return;
    }
    formCollection.delete(this.host);
    if (formCollection.size <= 0) {
      this.form.removeEventListener("formdata", this.handleFormData);
      this.form.removeEventListener("submit", this.handleFormSubmit);
      this.form.removeEventListener("reset", this.handleFormReset);
      if (reportValidityOverloads.has(this.form)) {
        this.form.reportValidity = reportValidityOverloads.get(this.form);
        reportValidityOverloads.delete(this.form);
      }
      if (checkValidityOverloads.has(this.form)) {
        this.form.checkValidity = checkValidityOverloads.get(this.form);
        checkValidityOverloads.delete(this.form);
      }
      this.form = void 0;
    }
  }
  setUserInteracted(el, hasInteracted) {
    if (hasInteracted) {
      userInteractedControls.add(el);
    } else {
      userInteractedControls.delete(el);
    }
    el.requestUpdate();
  }
  doAction(type, submitter) {
    if (this.form) {
      const button = document.createElement("button");
      button.type = type;
      button.style.position = "absolute";
      button.style.width = "0";
      button.style.height = "0";
      button.style.clipPath = "inset(50%)";
      button.style.overflow = "hidden";
      button.style.whiteSpace = "nowrap";
      if (submitter) {
        button.name = submitter.name;
        button.value = submitter.value;
        ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
          if (submitter.hasAttribute(attr)) {
            button.setAttribute(attr, submitter.getAttribute(attr));
          }
        });
      }
      this.form.append(button);
      button.click();
      button.remove();
    }
  }
  /** Returns the associated `<form>` element, if one exists. */
  getForm() {
    var _a;
    return (_a = this.form) != null ? _a : null;
  }
  /** Resets the form, restoring all the control to their default value */
  reset(submitter) {
    this.doAction("reset", submitter);
  }
  /** Submits the form, triggering validation and form data injection. */
  submit(submitter) {
    this.doAction("submit", submitter);
  }
  /**
   * Synchronously sets the form control's validity. Call this when you know the future validity but need to update
   * the host element immediately, i.e. before Lit updates the component in the next update.
   */
  setValidity(isValid) {
    const host = this.host;
    const hasInteracted = Boolean(userInteractedControls.has(host));
    const required = Boolean(host.required);
    host.toggleAttribute("data-required", required);
    host.toggleAttribute("data-optional", !required);
    host.toggleAttribute("data-invalid", !isValid);
    host.toggleAttribute("data-valid", isValid);
    host.toggleAttribute("data-user-invalid", !isValid && hasInteracted);
    host.toggleAttribute("data-user-valid", isValid && hasInteracted);
  }
  /**
   * Updates the form control's validity based on the current value of `host.validity.valid`. Call this when anything
   * that affects constraint validation changes so the component receives the correct validity states.
   */
  updateValidity() {
    const host = this.host;
    this.setValidity(host.validity.valid);
  }
  /**
   * Dispatches a non-bubbling, cancelable custom event of type `sl-invalid`.
   * If the `sl-invalid` event will be cancelled then the original `invalid`
   * event (which may have been passed as argument) will also be cancelled.
   * If no original `invalid` event has been passed then the `sl-invalid`
   * event will be cancelled before being dispatched.
   */
  emitInvalidEvent(originalInvalidEvent) {
    const slInvalidEvent = new CustomEvent("sl-invalid", {
      bubbles: false,
      composed: false,
      cancelable: true,
      detail: {}
    });
    if (!originalInvalidEvent) {
      slInvalidEvent.preventDefault();
    }
    if (!this.host.dispatchEvent(slInvalidEvent)) {
      originalInvalidEvent == null ? void 0 : originalInvalidEvent.preventDefault();
    }
  }
};
var validValidityState = Object.freeze({
  badInput: false,
  customError: false,
  patternMismatch: false,
  rangeOverflow: false,
  rangeUnderflow: false,
  stepMismatch: false,
  tooLong: false,
  tooShort: false,
  typeMismatch: false,
  valid: true,
  valueMissing: false
});
var valueMissingValidityState = Object.freeze((0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, validValidityState), {
  valid: false,
  valueMissing: true
}));
var customErrorValidityState = Object.freeze((0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, validValidityState), {
  valid: false,
  customError: true
}));




/***/ }),

/***/ 1086:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E9: () => (/* binding */ parseDuration),
/* harmony export */   Ey: () => (/* binding */ stopAnimations),
/* harmony export */   Oe: () => (/* binding */ prefersReducedMotion),
/* harmony export */   dc: () => (/* binding */ shimKeyframesHeightAuto),
/* harmony export */   jd: () => (/* binding */ animateTo)
/* harmony export */ });
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1346);


// src/internal/animate.ts
function animateTo(el, keyframes, options) {
  return new Promise((resolve) => {
    if ((options == null ? void 0 : options.duration) === Infinity) {
      throw new Error("Promise-based animations must be finite.");
    }
    const animation = el.animate(keyframes, (0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, options), {
      duration: prefersReducedMotion() ? 0 : options.duration
    }));
    animation.addEventListener("cancel", resolve, { once: true });
    animation.addEventListener("finish", resolve, { once: true });
  });
}
function parseDuration(delay) {
  delay = delay.toString().toLowerCase();
  if (delay.indexOf("ms") > -1) {
    return parseFloat(delay);
  }
  if (delay.indexOf("s") > -1) {
    return parseFloat(delay) * 1e3;
  }
  return parseFloat(delay);
}
function prefersReducedMotion() {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  return query.matches;
}
function stopAnimations(el) {
  return Promise.all(
    el.getAnimations().map((animation) => {
      return new Promise((resolve) => {
        animation.cancel();
        requestAnimationFrame(resolve);
      });
    })
  );
}
function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
  return keyframes.map((keyframe) => (0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadProps */ .ko)((0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({}, keyframe), {
    height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
  }));
}




/***/ }),

/***/ 7177:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ waitForEvent)
/* harmony export */ });
// src/internal/event.ts
function waitForEvent(el, eventName) {
  return new Promise((resolve) => {
    function done(event) {
      if (event.target === el) {
        el.removeEventListener(eventName, done);
        resolve();
      }
    }
    el.addEventListener(eventName, done);
  });
}




/***/ }),

/***/ 6977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ defaultValue)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/internal/default-value.ts

var defaultValue = (propertyName = "value") => (proto, key) => {
  const ctor = proto.constructor;
  const attributeChangedCallback = ctor.prototype.attributeChangedCallback;
  ctor.prototype.attributeChangedCallback = function(name, old, value) {
    var _a;
    const options = ctor.getPropertyOptions(propertyName);
    const attributeName = typeof options.attribute === "string" ? options.attribute : propertyName;
    if (name === attributeName) {
      const converter = options.converter || lit__WEBPACK_IMPORTED_MODULE_0__/* .defaultConverter */ .W3;
      const fromAttribute = typeof converter === "function" ? converter : (_a = converter == null ? void 0 : converter.fromAttribute) != null ? _a : lit__WEBPACK_IMPORTED_MODULE_0__/* .defaultConverter */ .W3.fromAttribute;
      const newValue = fromAttribute(value, options.type);
      if (this[propertyName] !== newValue) {
        this[key] = newValue;
      }
    }
    attributeChangedCallback.call(this, name, old, value);
  };
};




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

/***/ 5639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ select_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/select/select.styles.ts

var select_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;




/***/ }),

/***/ 7057:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ SlTag)
/* harmony export */ });
/* harmony import */ var _chunk_V2OL7VMD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8859);
/* harmony import */ var _chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9687);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7968);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2391);







// src/components/tag/tag.component.ts



var SlTag = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_4__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_2__/* .LocalizeController */ .c(this);
    this.variant = "neutral";
    this.size = "medium";
    this.pill = false;
    this.removable = false;
  }
  handleRemoveClick() {
    this.emit("sl-remove");
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_7__/* .html */ .qy)`
      <span
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_6__/* .classMap */ .H)({
      tag: true,
      // Types
      "tag--primary": this.variant === "primary",
      "tag--success": this.variant === "success",
      "tag--neutral": this.variant === "neutral",
      "tag--warning": this.variant === "warning",
      "tag--danger": this.variant === "danger",
      "tag--text": this.variant === "text",
      // Sizes
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      // Modifiers
      "tag--pill": this.pill,
      "tag--removable": this.removable
    })}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable ? (0,lit__WEBPACK_IMPORTED_MODULE_7__/* .html */ .qy)`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
  }
};
SlTag.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_3__/* .component_styles_default */ .$, _chunk_V2OL7VMD_js__WEBPACK_IMPORTED_MODULE_0__/* .tag_styles_default */ .g];
SlTag.dependencies = { "sl-icon-button": _chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_1__/* .SlIconButton */ .h };
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({ reflect: true })
], SlTag.prototype, "variant", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({ reflect: true })
], SlTag.prototype, "size", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlTag.prototype, "pill", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)({ type: Boolean })
], SlTag.prototype, "removable", 2);




/***/ }),

/***/ 8148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I7: () => (/* binding */ unlockBodyScrolling),
/* harmony export */   JG: () => (/* binding */ lockBodyScrolling),
/* harmony export */   Rt: () => (/* binding */ scrollIntoView)
/* harmony export */ });
// src/internal/offset.ts
function getOffset(element, parent) {
  return {
    top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
    left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
  };
}

// src/internal/scroll.ts
var locks = /* @__PURE__ */ new Set();
function getScrollbarWidth() {
  const documentWidth = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function getExistingBodyPadding() {
  const padding = Number(getComputedStyle(document.body).paddingRight.replace(/px/, ""));
  if (isNaN(padding) || !padding) {
    return 0;
  }
  return padding;
}
function lockBodyScrolling(lockingEl) {
  locks.add(lockingEl);
  if (!document.documentElement.classList.contains("sl-scroll-lock")) {
    const scrollbarWidth = getScrollbarWidth() + getExistingBodyPadding();
    let scrollbarGutterProperty = getComputedStyle(document.documentElement).scrollbarGutter;
    if (!scrollbarGutterProperty || scrollbarGutterProperty === "auto") {
      scrollbarGutterProperty = "stable";
    }
    if (scrollbarWidth < 2) {
      scrollbarGutterProperty = "";
    }
    document.documentElement.style.setProperty("--sl-scroll-lock-gutter", scrollbarGutterProperty);
    document.documentElement.classList.add("sl-scroll-lock");
    document.documentElement.style.setProperty("--sl-scroll-lock-size", `${scrollbarWidth}px`);
  }
}
function unlockBodyScrolling(lockingEl) {
  locks.delete(lockingEl);
  if (locks.size === 0) {
    document.documentElement.classList.remove("sl-scroll-lock");
    document.documentElement.style.removeProperty("--sl-scroll-lock-size");
  }
}
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
  const offset = getOffset(element, container);
  const offsetTop = offset.top + container.scrollTop;
  const offsetLeft = offset.left + container.scrollLeft;
  const minX = container.scrollLeft;
  const maxX = container.scrollLeft + container.offsetWidth;
  const minY = container.scrollTop;
  const maxY = container.scrollTop + container.offsetHeight;
  if (direction === "horizontal" || direction === "both") {
    if (offsetLeft < minX) {
      container.scrollTo({ left: offsetLeft, behavior });
    } else if (offsetLeft + element.clientWidth > maxX) {
      container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
    }
  }
  if (direction === "vertical" || direction === "both") {
    if (offsetTop < minY) {
      container.scrollTo({ top: offsetTop, behavior });
    } else if (offsetTop + element.clientHeight > maxY) {
      container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
    }
  }
}




/***/ }),

/***/ 649:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ form_control_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/styles/form-control.styles.ts

var form_control_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;




/***/ }),

/***/ 7034:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ee: () => (/* binding */ setDefaultAnimation),
/* harmony export */   RB: () => (/* binding */ getAnimation)
/* harmony export */ });
/* unused harmony export setAnimation */
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1346);


// src/utilities/animation-registry.ts
var defaultAnimationRegistry = /* @__PURE__ */ new Map();
var customAnimationRegistry = /* @__PURE__ */ new WeakMap();
function ensureAnimation(animation) {
  return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
}
function getLogicalAnimation(animation, dir) {
  if (dir.toLowerCase() === "rtl") {
    return {
      keyframes: animation.rtlKeyframes || animation.keyframes,
      options: animation.options
    };
  }
  return animation;
}
function setDefaultAnimation(animationName, animation) {
  defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
}
function setAnimation(el, animationName, animation) {
  customAnimationRegistry.set(el, __spreadProps(__spreadValues({}, customAnimationRegistry.get(el)), { [animationName]: ensureAnimation(animation) }));
}
function getAnimation(el, animationName, options) {
  const customAnimation = customAnimationRegistry.get(el);
  if (customAnimation == null ? void 0 : customAnimation[animationName]) {
    return getLogicalAnimation(customAnimation[animationName], options.dir);
  }
  const defaultAnimation = defaultAnimationRegistry.get(animationName);
  if (defaultAnimation) {
    return getLogicalAnimation(defaultAnimation, options.dir);
  }
  return {
    keyframes: [],
    options: { duration: 0 }
  };
}




/***/ }),

/***/ 8859:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ tag_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/tag/tag.styles.ts

var tag_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;




/***/ }),

/***/ 6695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ SlSelect)
/* harmony export */ });
/* harmony import */ var _chunk_RNK5BM2Z_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7057);
/* harmony import */ var _chunk_REFZNOFU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5639);
/* harmony import */ var _chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8148);
/* harmony import */ var _chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6977);
/* harmony import */ var _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(649);
/* harmony import */ var _chunk_5J7BMMD5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6373);
/* harmony import */ var _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6012);
/* harmony import */ var _chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7034);
/* harmony import */ var _chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7177);
/* harmony import */ var _chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1086);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7968);
/* harmony import */ var _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5292);
/* harmony import */ var _chunk_E6QAPUBK_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9660);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2391);
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6781);


















// src/components/select/select.component.ts




var SlSelect = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_13__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.formControlController = new _chunk_2RCF7SLU_js__WEBPACK_IMPORTED_MODULE_6__/* .FormControlController */ .Ud(this, {
      assumeInteractionOn: ["sl-blur", "sl-input"]
    });
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_19__/* .HasSlotController */ .X(this, "help-text", "label");
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_9__/* .LocalizeController */ .c(this);
    this.typeToSelectString = "";
    this.hasFocus = false;
    this.displayLabel = "";
    this.selectedOptions = [];
    this.valueHasChanged = false;
    this.name = "";
    this.value = "";
    this.defaultValue = "";
    this.size = "medium";
    this.placeholder = "";
    this.multiple = false;
    this.maxOptionsVisible = 3;
    this.disabled = false;
    this.clearable = false;
    this.open = false;
    this.hoist = false;
    this.filled = false;
    this.pill = false;
    this.label = "";
    this.placement = "bottom";
    this.helpText = "";
    this.form = "";
    this.required = false;
    this.getTag = (option) => {
      return (0,lit__WEBPACK_IMPORTED_MODULE_16__/* .html */ .qy)`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${(event) => this.handleTagRemove(event, option)}
      >
        ${option.getTextLabel()}
      </sl-tag>
    `;
    };
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      const target = event.target;
      const isClearButton = target.closest(".select__clear") !== null;
      const isIconButton = target.closest("sl-icon-button") !== null;
      if (isClearButton || isIconButton) {
        return;
      }
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.preventDefault();
        event.stopPropagation();
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
      if (event.key === "Enter" || event.key === " " && this.typeToSelectString === "") {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (!this.open) {
          this.show();
          return;
        }
        if (this.currentOption && !this.currentOption.disabled) {
          this.valueHasChanged = true;
          if (this.multiple) {
            this.toggleOptionSelection(this.currentOption);
          } else {
            this.setSelectedOptions(this.currentOption);
          }
          this.updateComplete.then(() => {
            this.emit("sl-input");
            this.emit("sl-change");
          });
          if (!this.multiple) {
            this.hide();
            this.displayInput.focus({ preventScroll: true });
          }
        }
        return;
      }
      if (["ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
        const allOptions = this.getAllOptions();
        const currentIndex = allOptions.indexOf(this.currentOption);
        let newIndex = Math.max(0, currentIndex);
        event.preventDefault();
        if (!this.open) {
          this.show();
          if (this.currentOption) {
            return;
          }
        }
        if (event.key === "ArrowDown") {
          newIndex = currentIndex + 1;
          if (newIndex > allOptions.length - 1)
            newIndex = 0;
        } else if (event.key === "ArrowUp") {
          newIndex = currentIndex - 1;
          if (newIndex < 0)
            newIndex = allOptions.length - 1;
        } else if (event.key === "Home") {
          newIndex = 0;
        } else if (event.key === "End") {
          newIndex = allOptions.length - 1;
        }
        this.setCurrentOption(allOptions[newIndex]);
      }
      if (event.key && event.key.length === 1 || event.key === "Backspace") {
        const allOptions = this.getAllOptions();
        if (event.metaKey || event.ctrlKey || event.altKey) {
          return;
        }
        if (!this.open) {
          if (event.key === "Backspace") {
            return;
          }
          this.show();
        }
        event.stopPropagation();
        event.preventDefault();
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = window.setTimeout(() => this.typeToSelectString = "", 1e3);
        if (event.key === "Backspace") {
          this.typeToSelectString = this.typeToSelectString.slice(0, -1);
        } else {
          this.typeToSelectString += event.key.toLowerCase();
        }
        for (const option of allOptions) {
          const label = option.getTextLabel().toLowerCase();
          if (label.startsWith(this.typeToSelectString)) {
            this.setCurrentOption(option);
            break;
          }
        }
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this && !path.includes(this)) {
        this.hide();
      }
    };
  }
  /** Gets the validity state object */
  get validity() {
    return this.valueInput.validity;
  }
  /** Gets the validation message */
  get validationMessage() {
    return this.valueInput.validationMessage;
  }
  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.handleDefaultSlotChange();
    });
    this.open = false;
  }
  addOpenListeners() {
    var _a;
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().addEventListener("focusin", this.handleDocumentFocusIn);
    }
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        if (this.open) {
          this.hide();
          this.displayInput.focus({ preventScroll: true });
        }
      };
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    if (this.getRootNode() !== document) {
      this.getRootNode().removeEventListener("focusin", this.handleDocumentFocusIn);
    }
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  handleFocus() {
    this.hasFocus = true;
    this.displayInput.setSelectionRange(0, 0);
    this.emit("sl-focus");
  }
  handleBlur() {
    this.hasFocus = false;
    this.emit("sl-blur");
  }
  handleLabelClick() {
    this.displayInput.focus();
  }
  handleComboboxMouseDown(event) {
    const path = event.composedPath();
    const isIconButton = path.some((el) => el instanceof Element && el.tagName.toLowerCase() === "sl-icon-button");
    if (this.disabled || isIconButton) {
      return;
    }
    event.preventDefault();
    this.displayInput.focus({ preventScroll: true });
    this.open = !this.open;
  }
  handleComboboxKeyDown(event) {
    if (event.key === "Tab") {
      return;
    }
    event.stopPropagation();
    this.handleDocumentKeyDown(event);
  }
  handleClearClick(event) {
    event.stopPropagation();
    if (this.value !== "") {
      this.setSelectedOptions([]);
      this.displayInput.focus({ preventScroll: true });
      this.updateComplete.then(() => {
        this.emit("sl-clear");
        this.emit("sl-input");
        this.emit("sl-change");
      });
    }
  }
  handleClearMouseDown(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  handleOptionClick(event) {
    const target = event.target;
    const option = target.closest("sl-option");
    const oldValue = this.value;
    if (option && !option.disabled) {
      this.valueHasChanged = true;
      if (this.multiple) {
        this.toggleOptionSelection(option);
      } else {
        this.setSelectedOptions(option);
      }
      this.updateComplete.then(() => this.displayInput.focus({ preventScroll: true }));
      if (this.value !== oldValue) {
        this.updateComplete.then(() => {
          this.emit("sl-input");
          this.emit("sl-change");
        });
      }
      if (!this.multiple) {
        this.hide();
        this.displayInput.focus({ preventScroll: true });
      }
    }
  }
  handleDefaultSlotChange() {
    if (!customElements.get("wa-option")) {
      customElements.whenDefined("wa-option").then(() => this.handleDefaultSlotChange());
    }
    const allOptions = this.getAllOptions();
    const val = this.valueHasChanged ? this.value : this.defaultValue;
    const value = Array.isArray(val) ? val : [val];
    const values = [];
    allOptions.forEach((option) => values.push(option.value));
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  handleTagRemove(event, option) {
    event.stopPropagation();
    if (!this.disabled) {
      this.toggleOptionSelection(option, false);
      this.updateComplete.then(() => {
        this.emit("sl-input");
        this.emit("sl-change");
      });
    }
  }
  // Gets an array of all <sl-option> elements
  getAllOptions() {
    return [...this.querySelectorAll("sl-option")];
  }
  // Gets the first <sl-option> element
  getFirstOption() {
    return this.querySelector("sl-option");
  }
  // Sets the current option, which is the option the user is currently interacting with (e.g. via keyboard). Only one
  // option may be "current" at a time.
  setCurrentOption(option) {
    const allOptions = this.getAllOptions();
    allOptions.forEach((el) => {
      el.current = false;
      el.tabIndex = -1;
    });
    if (option) {
      this.currentOption = option;
      option.current = true;
      option.tabIndex = 0;
      option.focus();
    }
  }
  // Sets the selected option(s)
  setSelectedOptions(option) {
    const allOptions = this.getAllOptions();
    const newSelectedOptions = Array.isArray(option) ? option : [option];
    allOptions.forEach((el) => el.selected = false);
    if (newSelectedOptions.length) {
      newSelectedOptions.forEach((el) => el.selected = true);
    }
    this.selectionChanged();
  }
  // Toggles an option's selected state
  toggleOptionSelection(option, force) {
    if (force === true || force === false) {
      option.selected = force;
    } else {
      option.selected = !option.selected;
    }
    this.selectionChanged();
  }
  // This method must be called whenever the selection changes. It will update the selected options cache, the current
  // value, and the display value
  selectionChanged() {
    var _a, _b, _c;
    const options = this.getAllOptions();
    this.selectedOptions = options.filter((el) => el.selected);
    if (this.multiple) {
      this.value = this.selectedOptions.map((el) => el.value);
      if (this.placeholder && this.value.length === 0) {
        this.displayLabel = "";
      } else {
        this.displayLabel = this.localize.term("numOptionsSelected", this.selectedOptions.length);
      }
    } else {
      const selectedOption = this.selectedOptions[0];
      this.value = (_a = selectedOption == null ? void 0 : selectedOption.value) != null ? _a : "";
      this.displayLabel = (_c = (_b = selectedOption == null ? void 0 : selectedOption.getTextLabel) == null ? void 0 : _b.call(selectedOption)) != null ? _c : "";
    }
    this.updateComplete.then(() => {
      this.formControlController.updateValidity();
    });
  }
  get tags() {
    return this.selectedOptions.map((option, index) => {
      if (index < this.maxOptionsVisible || this.maxOptionsVisible <= 0) {
        const tag = this.getTag(option, index);
        return (0,lit__WEBPACK_IMPORTED_MODULE_16__/* .html */ .qy)`<div @sl-remove=${(e) => this.handleTagRemove(e, option)}>
          ${typeof tag === "string" ? (0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_18__/* .unsafeHTML */ ._)(tag) : tag}
        </div>`;
      } else if (index === this.maxOptionsVisible) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_16__/* .html */ .qy)`<sl-tag size=${this.size}>+${this.selectedOptions.length - index}</sl-tag>`;
      }
      return (0,lit__WEBPACK_IMPORTED_MODULE_16__/* .html */ .qy)``;
    });
  }
  handleInvalid(event) {
    this.formControlController.setValidity(false);
    this.formControlController.emitInvalidEvent(event);
  }
  handleDisabledChange() {
    if (this.disabled) {
      this.open = false;
      this.handleOpenChange();
    }
  }
  handleValueChange() {
    const allOptions = this.getAllOptions();
    const value = Array.isArray(this.value) ? this.value : [this.value];
    this.setSelectedOptions(allOptions.filter((el) => value.includes(el.value)));
  }
  async handleOpenChange() {
    if (this.open && !this.disabled) {
      this.setCurrentOption(this.selectedOptions[0] || this.getFirstOption());
      this.emit("sl-show");
      this.addOpenListeners();
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_8__/* .stopAnimations */ .Ey)(this);
      this.listbox.hidden = false;
      this.popup.active = true;
      requestAnimationFrame(() => {
        this.setCurrentOption(this.currentOption);
      });
      const { keyframes, options } = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_7__/* .getAnimation */ .RB)(this, "select.show", { dir: this.localize.dir() });
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_8__/* .animateTo */ .jd)(this.popup.popup, keyframes, options);
      if (this.currentOption) {
        (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__/* .scrollIntoView */ .Rt)(this.currentOption, this.listbox, "vertical", "auto");
      }
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_8__/* .stopAnimations */ .Ey)(this);
      const { keyframes, options } = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_7__/* .getAnimation */ .RB)(this, "select.hide", { dir: this.localize.dir() });
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_8__/* .animateTo */ .jd)(this.popup.popup, keyframes, options);
      this.listbox.hidden = true;
      this.popup.active = false;
      this.emit("sl-after-hide");
    }
  }
  /** Shows the listbox. */
  async show() {
    if (this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = true;
    return (0,_chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_20__/* .waitForEvent */ .l)(this, "sl-after-show");
  }
  /** Hides the listbox. */
  async hide() {
    if (!this.open || this.disabled) {
      this.open = false;
      return void 0;
    }
    this.open = false;
    return (0,_chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_20__/* .waitForEvent */ .l)(this, "sl-after-hide");
  }
  /** Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid. */
  checkValidity() {
    return this.valueInput.checkValidity();
  }
  /** Gets the associated form, if one exists. */
  getForm() {
    return this.formControlController.getForm();
  }
  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.valueInput.reportValidity();
  }
  /** Sets a custom validation message. Pass an empty string to restore validity. */
  setCustomValidity(message) {
    this.valueInput.setCustomValidity(message);
    this.formControlController.updateValidity();
  }
  /** Sets focus on the control. */
  focus(options) {
    this.displayInput.focus(options);
  }
  /** Removes focus from the control. */
  blur() {
    this.displayInput.blur();
  }
  render() {
    const hasLabelSlot = this.hasSlotController.test("label");
    const hasHelpTextSlot = this.hasSlotController.test("help-text");
    const hasLabel = this.label ? true : !!hasLabelSlot;
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;
    const hasClearIcon = this.clearable && !this.disabled && this.value.length > 0;
    const isPlaceholderVisible = this.placeholder && this.value && this.value.length <= 0;
    return (0,lit__WEBPACK_IMPORTED_MODULE_16__/* .html */ .qy)`
      <div
        part="form-control"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_15__/* .classMap */ .H)({
      "form-control": true,
      "form-control--small": this.size === "small",
      "form-control--medium": this.size === "medium",
      "form-control--large": this.size === "large",
      "form-control--has-label": hasLabel,
      "form-control--has-help-text": hasHelpText
    })}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${hasLabel ? "false" : "true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_15__/* .classMap */ .H)({
      select: true,
      "select--standard": true,
      "select--filled": this.filled,
      "select--pill": this.pill,
      "select--open": this.open,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--focused": this.hasFocus,
      "select--placeholder-visible": isPlaceholderVisible,
      "select--top": this.placement === "top",
      "select--bottom": this.placement === "bottom",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large"
    })}
            placement=${this.placement}
            strategy=${this.hoist ? "fixed" : "absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open ? "true" : "false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled ? "true" : "false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple ? (0,lit__WEBPACK_IMPORTED_MODULE_16__/* .html */ .qy)`<div part="tags" class="select__tags">${this.tags}</div>` : ""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value) ? this.value.join(", ") : this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${() => this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${hasClearIcon ? (0,lit__WEBPACK_IMPORTED_MODULE_16__/* .html */ .qy)`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  ` : ""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open ? "true" : "false"}
              aria-multiselectable=${this.multiple ? "true" : "false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
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
SlSelect.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_12__/* .component_styles_default */ .$, _chunk_SI4ACBFK_js__WEBPACK_IMPORTED_MODULE_4__/* .form_control_styles_default */ .I, _chunk_REFZNOFU_js__WEBPACK_IMPORTED_MODULE_1__/* .select_styles_default */ .a];
SlSelect.dependencies = {
  "sl-icon": _chunk_E6QAPUBK_js__WEBPACK_IMPORTED_MODULE_10__/* .SlIcon */ .B,
  "sl-popup": _chunk_5J7BMMD5_js__WEBPACK_IMPORTED_MODULE_5__/* .SlPopup */ .m,
  "sl-tag": _chunk_RNK5BM2Z_js__WEBPACK_IMPORTED_MODULE_0__/* .SlTag */ .Q
};
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .query */ .P)(".select")
], SlSelect.prototype, "popup", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .query */ .P)(".select__combobox")
], SlSelect.prototype, "combobox", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .query */ .P)(".select__display-input")
], SlSelect.prototype, "displayInput", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .query */ .P)(".select__value-input")
], SlSelect.prototype, "valueInput", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .query */ .P)(".select__listbox")
], SlSelect.prototype, "listbox", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .state */ .wk)()
], SlSelect.prototype, "hasFocus", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .state */ .wk)()
], SlSelect.prototype, "displayLabel", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .state */ .wk)()
], SlSelect.prototype, "currentOption", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .state */ .wk)()
], SlSelect.prototype, "selectedOptions", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .state */ .wk)()
], SlSelect.prototype, "valueHasChanged", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)()
], SlSelect.prototype, "name", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({
    converter: {
      fromAttribute: (value) => value.split(" "),
      toAttribute: (value) => value.join(" ")
    }
  })
], SlSelect.prototype, "value", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,_chunk_GI7VDIWX_js__WEBPACK_IMPORTED_MODULE_3__/* .defaultValue */ .J)()
], SlSelect.prototype, "defaultValue", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ reflect: true })
], SlSelect.prototype, "size", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)()
], SlSelect.prototype, "placeholder", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSelect.prototype, "multiple", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ attribute: "max-options-visible", type: Number })
], SlSelect.prototype, "maxOptionsVisible", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSelect.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean })
], SlSelect.prototype, "clearable", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSelect.prototype, "open", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean })
], SlSelect.prototype, "hoist", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSelect.prototype, "filled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSelect.prototype, "pill", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)()
], SlSelect.prototype, "label", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ reflect: true })
], SlSelect.prototype, "placement", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ attribute: "help-text" })
], SlSelect.prototype, "helpText", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ reflect: true })
], SlSelect.prototype, "form", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlSelect.prototype, "required", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__/* .property */ .MZ)()
], SlSelect.prototype, "getTag", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_11__/* .watch */ .w)("disabled", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleDisabledChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_11__/* .watch */ .w)("value", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleValueChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_14__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_11__/* .watch */ .w)("open", { waitUntilFirstUpdate: true })
], SlSelect.prototype, "handleOpenChange", 1);
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_7__/* .setDefaultAnimation */ .Ee)("select.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_7__/* .setDefaultAnimation */ .Ee)("select.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});




/***/ }),

/***/ 6781:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* reexport */ o)
});

// UNUSED EXPORTS: UnsafeHTMLDirective

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(6752);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(7804);
;// ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class e extends directive/* Directive */.WL{constructor(i){if(super(i),this.it=lit_html/* nothing */.s6,i.type!==directive/* PartType */.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html/* nothing */.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html/* noChange */.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=(0,directive/* directive */.u$)(e);
//# sourceMappingURL=unsafe-html.js.map

;// ./node_modules/lit/directives/unsafe-html.js

//# sourceMappingURL=unsafe-html.js.map


/***/ })

}]);
//# sourceMappingURL=6695.js.map