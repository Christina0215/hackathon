"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[4832],{

/***/ 1529:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ drawer_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/drawer/drawer.styles.ts

var drawer_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;




/***/ }),

/***/ 7602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ SlDrawer)
/* harmony export */ });
/* harmony import */ var _chunk_BRQKZQRB_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1529);
/* harmony import */ var _chunk_5EJHXPFX_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9234);
/* harmony import */ var _chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8148);
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














// src/components/drawer/drawer.component.ts





// src/internal/string.ts
function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// src/components/drawer/drawer.component.ts
var SlDrawer = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_9__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.hasSlotController = new _chunk_NYIIDP5N_js__WEBPACK_IMPORTED_MODULE_15__/* .HasSlotController */ .X(this, "footer");
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_6__/* .LocalizeController */ .c(this);
    this.modal = new _chunk_5EJHXPFX_js__WEBPACK_IMPORTED_MODULE_1__/* .Modal */ .a(this);
    this.open = false;
    this.label = "";
    this.placement = "end";
    this.contained = false;
    this.noHeader = false;
    this.handleDocumentKeyDown = (event) => {
      if (this.contained) {
        return;
      }
      if (event.key === "Escape" && this.modal.isActive() && this.open) {
        event.stopImmediatePropagation();
        this.requestClose("keyboard");
      }
    };
  }
  firstUpdated() {
    this.drawer.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      if (!this.contained) {
        this.modal.activate();
        (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__/* .lockBodyScrolling */ .JG)(this);
      }
    }
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__/* .unlockBodyScrolling */ .I7)(this);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  requestClose(source) {
    const slRequestClose = this.emit("sl-request-close", {
      cancelable: true,
      detail: { source }
    });
    if (slRequestClose.defaultPrevented) {
      const animation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "drawer.denyClose", { dir: this.localize.dir() });
      (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.panel, animation.keyframes, animation.options);
      return;
    }
    this.hide();
  }
  addOpenListeners() {
    var _a;
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      if (!this.contained) {
        this.closeWatcher = new CloseWatcher();
        this.closeWatcher.onclose = () => this.requestClose("keyboard");
      }
    } else {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
    }
  }
  removeOpenListeners() {
    var _a;
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  async handleOpenChange() {
    if (this.open) {
      this.emit("sl-show");
      this.addOpenListeners();
      this.originalTrigger = document.activeElement;
      if (!this.contained) {
        this.modal.activate();
        (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__/* .lockBodyScrolling */ .JG)(this);
      }
      const autoFocusTarget = this.querySelector("[autofocus]");
      if (autoFocusTarget) {
        autoFocusTarget.removeAttribute("autofocus");
      }
      await Promise.all([(0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.drawer), (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.overlay)]);
      this.drawer.hidden = false;
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
      const panelAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, `drawer.show${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "drawer.overlay.show", { dir: this.localize.dir() });
      await Promise.all([
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.panel, panelAnimation.keyframes, panelAnimation.options),
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
      ]);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      if (!this.contained) {
        this.modal.deactivate();
        (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__/* .unlockBodyScrolling */ .I7)(this);
      }
      await Promise.all([(0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.drawer), (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .stopAnimations */ .Ey)(this.overlay)]);
      const panelAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`, {
        dir: this.localize.dir()
      });
      const overlayAnimation = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .getAnimation */ .RB)(this, "drawer.overlay.hide", { dir: this.localize.dir() });
      await Promise.all([
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.overlay, overlayAnimation.keyframes, overlayAnimation.options).then(() => {
          this.overlay.hidden = true;
        }),
        (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_5__/* .animateTo */ .jd)(this.panel, panelAnimation.keyframes, panelAnimation.options).then(() => {
          this.panel.hidden = true;
        })
      ]);
      this.drawer.hidden = true;
      this.overlay.hidden = false;
      this.panel.hidden = false;
      const trigger = this.originalTrigger;
      if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
        setTimeout(() => trigger.focus());
      }
      this.emit("sl-after-hide");
    }
  }
  handleNoModalChange() {
    if (this.open && !this.contained) {
      this.modal.activate();
      (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__/* .lockBodyScrolling */ .JG)(this);
    }
    if (this.open && this.contained) {
      this.modal.deactivate();
      (0,_chunk_RWUUFNUL_js__WEBPACK_IMPORTED_MODULE_2__/* .unlockBodyScrolling */ .I7)(this);
    }
  }
  /** Shows the drawer. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return (0,_chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_16__/* .waitForEvent */ .l)(this, "sl-after-show");
  }
  /** Hides the drawer */
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
      drawer: true,
      "drawer--open": this.open,
      "drawer--top": this.placement === "top",
      "drawer--end": this.placement === "end",
      "drawer--bottom": this.placement === "bottom",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--rtl": this.localize.dir() === "rtl",
      "drawer--has-footer": this.hasSlotController.test("footer")
    })}
      >
        <div part="overlay" class="drawer__overlay" @click=${() => this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_13__/* .ifDefined */ .J)(this.noHeader ? this.label : void 0)}
          aria-labelledby=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_13__/* .ifDefined */ .J)(!this.noHeader ? "title" : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? (0,lit__WEBPACK_IMPORTED_MODULE_12__/* .html */ .qy)`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${() => this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              ` : ""}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;
  }
};
SlDrawer.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_8__/* .component_styles_default */ .$, _chunk_BRQKZQRB_js__WEBPACK_IMPORTED_MODULE_0__/* .drawer_styles_default */ .X];
SlDrawer.dependencies = { "sl-icon-button": _chunk_3HB7VQL2_js__WEBPACK_IMPORTED_MODULE_3__/* .SlIconButton */ .h };
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .query */ .P)(".drawer")
], SlDrawer.prototype, "drawer", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .query */ .P)(".drawer__panel")
], SlDrawer.prototype, "panel", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .query */ .P)(".drawer__overlay")
], SlDrawer.prototype, "overlay", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlDrawer.prototype, "open", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ reflect: true })
], SlDrawer.prototype, "label", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ reflect: true })
], SlDrawer.prototype, "placement", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlDrawer.prototype, "contained", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_14__/* .property */ .MZ)({ attribute: "no-header", type: Boolean, reflect: true })
], SlDrawer.prototype, "noHeader", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_7__/* .watch */ .w)("open", { waitUntilFirstUpdate: true })
], SlDrawer.prototype, "handleOpenChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_10__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_7__/* .watch */ .w)("contained", { waitUntilFirstUpdate: true })
], SlDrawer.prototype, "handleNoModalChange", 1);
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.showTop", {
  keyframes: [
    { opacity: 0, translate: "0 -100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.hideTop", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 -100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.showEnd", {
  keyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.hideEnd", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.showBottom", {
  keyframes: [
    { opacity: 0, translate: "0 100%" },
    { opacity: 1, translate: "0 0" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.hideBottom", {
  keyframes: [
    { opacity: 1, translate: "0 0" },
    { opacity: 0, translate: "0 100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.showStart", {
  keyframes: [
    { opacity: 0, translate: "-100%" },
    { opacity: 1, translate: "0" }
  ],
  rtlKeyframes: [
    { opacity: 0, translate: "100%" },
    { opacity: 1, translate: "0" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.hideStart", {
  keyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "-100%" }
  ],
  rtlKeyframes: [
    { opacity: 1, translate: "0" },
    { opacity: 0, translate: "100%" }
  ],
  options: { duration: 250, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.denyClose", {
  keyframes: [{ scale: 1 }, { scale: 1.01 }, { scale: 1 }],
  options: { duration: 250 }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.overlay.show", {
  keyframes: [{ opacity: 0 }, { opacity: 1 }],
  options: { duration: 250 }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_4__/* .setDefaultAnimation */ .Ee)("drawer.overlay.hide", {
  keyframes: [{ opacity: 1 }, { opacity: 0 }],
  options: { duration: 250 }
});




/***/ }),

/***/ 4832:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ drawer_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XS2AIRJE.js
var chunk_XS2AIRJE = __webpack_require__(7602);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TD43AHZJ.js


// src/components/drawer/drawer.ts
var drawer_default = chunk_XS2AIRJE/* SlDrawer */.D;
chunk_XS2AIRJE/* SlDrawer */.D.define("sl-drawer");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BRQKZQRB.js
var chunk_BRQKZQRB = __webpack_require__(1529);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.5EJHXPFX.js
var chunk_5EJHXPFX = __webpack_require__(9234);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.RWUUFNUL.js
var chunk_RWUUFNUL = __webpack_require__(8148);
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
;// ./node_modules/@shoelace-style/shoelace/dist/components/drawer/drawer.js



























/***/ })

}]);
//# sourceMappingURL=4832.js.map