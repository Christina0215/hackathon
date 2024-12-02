"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[2151],{

/***/ 4566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SlDialog)
/* harmony export */ });
/* harmony import */ var _chunk_5EJHXPFX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9234);
/* harmony import */ var _chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8148);
/* harmony import */ var _chunk_G5RKA5HF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3247);
/* harmony import */ var _chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9687);
/* harmony import */ var _chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7034);
/* harmony import */ var _chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7177);
/* harmony import */ var _chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1086);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7968);
/* harmony import */ var _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5292);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2618);
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(31);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2391);














// src/components/dialog/dialog.component.ts




var SlDialog = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_9__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_15__/* .HasSlotController */ .X(this, "footer");
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_6__/* .LocalizeController */ .c(this);
    this.modal = new _chunk_5EJHXPFX_js__WEBPACK_IMPORTED_MODULE_0__/* .Modal */ .a(this);
    this.open = false;
    this.label = "";
    this.noHeader = false;
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.modal.isActive() && this.open) {
        event.stopPropagation();
        this.requestClose("keyboard");
      }
    };
  }
  firstUpdated() {
    this.dialog.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      this.modal.activate();
      (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_1__/* .lockBodyScrolling */ .JG)(this);
    }
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    this.modal.deactivate();
    (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_1__/* .unlockBodyScrolling */ .I7)(this);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  requestClose(source) {
    const slRequestClose = this.emit("sl-request-close", {
      cancelable: true,
      detail: { source }
    });
    if (slRequestClose.defaultPrevented) {
      const animation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "dialog.denyClose", { dir: this.localize.dir() });
      (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var _a;
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => this.requestClose("keyboard");
    } else {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
  }
  removeOpenListeners() {
    var _a;
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show");
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      this.modal.activate();
      (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_1__/* .lockBodyScrolling */ .JG)(this);
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([(0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.dialog), (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.overlay)]);
      this.dialog.hidden = false;
      requestAnimationFrame(() => {
        const slInitialFocus = this.emit("sl-initial-focus", { cancelable: true });
        if (!slInitialFocus.defaultPrevented) {
          if (autoFocusTarget) {
            autoFocusTarget.focus({ preventScroll: true });
          } else {
            this.panel.focus({ preventScroll: true });
          }
        }
        if (autoFocusTarget) {
          autoFocusTarget.setAttribute("autofocus", "");
        }
      });
      const panelAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "dialog.show", { dir: this.localize.dir() });
      const overlayAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "dialog.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.panel, panelAnimation.keyframes, panelAnimation.options),
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      this.modal.deactivate();
      await Promise.all([(0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.dialog), (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.overlay)]);
      const panelAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "dialog.hide", { dir: this.localize.dir() });
      const overlayAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "dialog.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);
      this.dialog.hidden = true;
      this.overlay.hidden = false;
      this.panel.hidden = false;
      (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_1__/* .unlockBodyScrolling */ .I7)(this);
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      this.emit("sl-after-hide");
    }
  }
  /** Shows the dialog. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return (0,_chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_16__/* .waitForEvent */ .l)(this, "sl-after-show");
  }
  /** Hides the dialog */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return (0,_chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_16__/* .waitForEvent */ .l)(this, "sl-after-hide");
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_12__/* .html */ .qy)`
      <div
        part="base"
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_11__/* .classMap */ .H)({
      dialog: true,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="dialog__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_13__/* .ifDefined */ .J)(this.noHeader ? this.label : void 0)}
          aria-labelledby=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_13__/* .ifDefined */ .J)(!this.noHeader ? "title" : void 0)}
          tabindex="-1"
        >
          ${!this.noHeader ? (0,lit__WEBPACK_IMPORTED_MODULE_12__/* .html */ .qy)`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${() => this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
SlDialog.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_8__/* .component_styles_default */ .$, _chunk_G5RKA5HF_js__WEBPACK_IMPORTED_MODULE_2__/* .dialog_styles_default */ .y];
SlDialog.dependencies = {
  "sl-icon-button": _chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_3__/* .SlIconButton */ .h
};
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .query */ .P)(".dialog")
], SlDialog.prototype, "dialog", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .query */ .P)(".dialog__panel")
], SlDialog.prototype, "panel", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .query */ .P)(".dialog__overlay")
], SlDialog.prototype, "overlay", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlDialog.prototype, "open", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ reflect: true })
], SlDialog.prototype, "label", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ attribute: "no-header", type: Boolean, reflect: true })
], SlDialog.prototype, "noHeader", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_7__/* .watch */ .w)("open", { waitUntilFirstUpdate: true })
], SlDialog.prototype, "handleOpenChange", 1);
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("dialog.show", {
  keyframes: [
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("dialog.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.8 }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("dialog.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.02 }, { scale: 1 }],
  options: { duration: 250 }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("dialog.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("dialog.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});




/***/ }),

/***/ 3247:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ dialog_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/dialog/dialog.styles.ts

var dialog_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;




/***/ }),

/***/ 2151:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ dialog_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6MYQMWFA.js
var chunk_6MYQMWFA = __webpack_require__(4566);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RZSEPECD.js


// src/components/dialog/dialog.ts
var dialog_default = chunk_6MYQMWFA/* SlDialog */.A;
chunk_6MYQMWFA/* SlDialog */.A.define("sl-dialog");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5EJHXPFX.js
var chunk_5EJHXPFX = __webpack_require__(9234);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js
var chunk_RWUUFNUL = __webpack_require__(8148);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G5RKA5HF.js
var chunk_G5RKA5HF = __webpack_require__(3247);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.LXDTFLWU.js
var chunk_LXDTFLWU = __webpack_require__(8466);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3HB7VQL2.js
var chunk_3HB7VQL2 = __webpack_require__(9687);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6I2T3DLI.js
var chunk_6I2T3DLI = __webpack_require__(3987);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UW6SLYOK.js
var chunk_UW6SLYOK = __webpack_require__(7034);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3EPZX5HE.js
var chunk_3EPZX5HE = __webpack_require__(1086);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WLV3FVBR.js
var chunk_WLV3FVBR = __webpack_require__(7968);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.MAS2SHYD.js
var chunk_MAS2SHYD = __webpack_require__(1949);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.E6QAPUBK.js + 1 modules
var chunk_E6QAPUBK = __webpack_require__(9660);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.ZL53POKZ.js
var chunk_ZL53POKZ = __webpack_require__(7358);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.P7ZG6EMR.js
var chunk_P7ZG6EMR = __webpack_require__(4080);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3TFKS637.js
var chunk_3TFKS637 = __webpack_require__(9871);
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
;// ./node_modules/@shoelace-style/shoelace/dist/components/dialog/dialog.js



























/***/ })

}]);
//# sourceMappingURL=2151.js.map