"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[2745],{

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

/***/ 8466:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ getTabbableElements),
/* harmony export */   w: () => (/* binding */ getTabbableBoundary)
/* harmony export */ });
// src/internal/tabbable.ts
var computedStyleMap = /* @__PURE__ */ new WeakMap();
function getCachedComputedStyle(el) {
  let computedStyle = computedStyleMap.get(el);
  if (!computedStyle) {
    computedStyle = window.getComputedStyle(el, null);
    computedStyleMap.set(el, computedStyle);
  }
  return computedStyle;
}
function isVisible(el) {
  if (typeof el.checkVisibility === "function") {
    return el.checkVisibility({ checkOpacity: false, checkVisibilityCSS: true });
  }
  const computedStyle = getCachedComputedStyle(el);
  return computedStyle.visibility !== "hidden" && computedStyle.display !== "none";
}
function isOverflowingAndTabbable(el) {
  const computedStyle = getCachedComputedStyle(el);
  const { overflowY, overflowX } = computedStyle;
  if (overflowY === "scroll" || overflowX === "scroll") {
    return true;
  }
  if (overflowY !== "auto" || overflowX !== "auto") {
    return false;
  }
  const isOverflowingY = el.scrollHeight > el.clientHeight;
  if (isOverflowingY && overflowY === "auto") {
    return true;
  }
  const isOverflowingX = el.scrollWidth > el.clientWidth;
  if (isOverflowingX && overflowX === "auto") {
    return true;
  }
  return false;
}
function isTabbable(el) {
  const tag = el.tagName.toLowerCase();
  const tabindex = Number(el.getAttribute("tabindex"));
  const hasTabindex = el.hasAttribute("tabindex");
  if (hasTabindex && (isNaN(tabindex) || tabindex <= -1)) {
    return false;
  }
  if (el.hasAttribute("disabled")) {
    return false;
  }
  if (el.closest("[inert]")) {
    return false;
  }
  if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
    return false;
  }
  if (!isVisible(el)) {
    return false;
  }
  if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
    return true;
  }
  if (el.hasAttribute("tabindex")) {
    return true;
  }
  if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
    return true;
  }
  const isNativelyTabbable = [
    "button",
    "input",
    "select",
    "textarea",
    "a",
    "audio",
    "video",
    "summary",
    "iframe"
  ].includes(tag);
  if (isNativelyTabbable) {
    return true;
  }
  return isOverflowingAndTabbable(el);
}
function getTabbableBoundary(root) {
  var _a, _b;
  const tabbableElements = getTabbableElements(root);
  const start = (_a = tabbableElements[0]) != null ? _a : null;
  const end = (_b = tabbableElements[tabbableElements.length - 1]) != null ? _b : null;
  return { start, end };
}
function getSlottedChildrenOutsideRootElement(slotElement, root) {
  var _a;
  return ((_a = slotElement.getRootNode({ composed: true })) == null ? void 0 : _a.host) !== root;
}
function getTabbableElements(root) {
  const walkedEls = /* @__PURE__ */ new WeakMap();
  const tabbableElements = [];
  function walk(el) {
    if (el instanceof Element) {
      if (el.hasAttribute("inert") || el.closest("[inert]")) {
        return;
      }
      if (walkedEls.has(el)) {
        return;
      }
      walkedEls.set(el, true);
      if (!tabbableElements.includes(el) && isTabbable(el)) {
        tabbableElements.push(el);
      }
      if (el instanceof HTMLSlotElement && getSlottedChildrenOutsideRootElement(el, root)) {
        el.assignedElements({ flatten: true }).forEach((assignedEl) => {
          walk(assignedEl);
        });
      }
      if (el.shadowRoot !== null && el.shadowRoot.mode === "open") {
        walk(el.shadowRoot);
      }
    }
    for (const e of el.children) {
      walk(e);
    }
  }
  walk(root);
  return tabbableElements.sort((a, b) => {
    const aTabindex = Number(a.getAttribute("tabindex")) || 0;
    const bTabindex = Number(b.getAttribute("tabindex")) || 0;
    return bTabindex - aTabindex;
  });
}




/***/ }),

/***/ 3084:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ dropdown_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/dropdown/dropdown.styles.ts

var dropdown_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
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

/***/ 2745:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ SlDropdown)
/* harmony export */ });
/* harmony import */ var _chunk_LXP7GVU3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3084);
/* harmony import */ var _chunk_LXDTFLWU_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8466);
/* harmony import */ var _chunk_5J7BMMD5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6373);
/* harmony import */ var _chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7034);
/* harmony import */ var _chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7177);
/* harmony import */ var _chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1086);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7968);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1346);
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3720);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2618);
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2391);












// src/components/dropdown/dropdown.component.ts




var SlDropdown = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_8__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_5__/* .LocalizeController */ .c(this);
    this.open = false;
    this.placement = "bottom-start";
    this.disabled = false;
    this.stayOpenOnSelect = false;
    this.distance = 0;
    this.skidding = 0;
    this.hoist = false;
    this.sync = void 0;
    this.handleKeyDown = (event) => {
      if (this.open && event.key === "Escape") {
        event.stopPropagation();
        this.hide();
        this.focusOnTrigger();
      }
    };
    this.handleDocumentKeyDown = (event) => {
      var _a;
      if (event.key === "Escape" && this.open && !this.closeWatcher) {
        event.stopPropagation();
        this.focusOnTrigger();
        this.hide();
        return;
      }
      if (event.key === "Tab") {
        if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
          event.preventDefault();
          this.hide();
          this.focusOnTrigger();
          return;
        }
        setTimeout(() => {
          var _a2, _b, _c;
          const activeElement = ((_a2 = this.containingElement) == null ? void 0 : _a2.getRootNode()) instanceof ShadowRoot ? (_c = (_b = document.activeElement) == null ? void 0 : _b.shadowRoot) == null ? void 0 : _c.activeElement : document.activeElement;
          if (!this.containingElement || (activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
            this.hide();
          }
        });
      }
    };
    this.handleDocumentMouseDown = (event) => {
      const path = event.composedPath();
      if (this.containingElement && !path.includes(this.containingElement)) {
        this.hide();
      }
    };
    this.handlePanelSelect = (event) => {
      const target = event.target;
      if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
        this.hide();
        this.focusOnTrigger();
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    if (!this.containingElement) {
      this.containingElement = this;
    }
  }
  firstUpdated() {
    this.panel.hidden = !this.open;
    if (this.open) {
      this.addOpenListeners();
      this.popup.active = true;
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeOpenListeners();
    this.hide();
  }
  focusOnTrigger() {
    const trigger = this.trigger.assignedElements({ flatten: true })[0];
    if (typeof (trigger == null ? void 0 : trigger.focus) === "function") {
      trigger.focus();
    }
  }
  getMenu() {
    return this.panel.assignedElements({ flatten: true }).find((el) => el.tagName.toLowerCase() === "sl-menu");
  }
  handleTriggerClick() {
    if (this.open) {
      this.hide();
    } else {
      this.show();
      this.focusOnTrigger();
    }
  }
  async handleTriggerKeyDown(event) {
    if ([" ", "Enter"].includes(event.key)) {
      event.preventDefault();
      this.handleTriggerClick();
      return;
    }
    const menu = this.getMenu();
    if (menu) {
      const menuItems = menu.getAllItems();
      const firstMenuItem = menuItems[0];
      const lastMenuItem = menuItems[menuItems.length - 1];
      if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
        if (!this.open) {
          this.show();
          await this.updateComplete;
        }
        if (menuItems.length > 0) {
          this.updateComplete.then(() => {
            if (event.key === "ArrowDown" || event.key === "Home") {
              menu.setCurrentItem(firstMenuItem);
              firstMenuItem.focus();
            }
            if (event.key === "ArrowUp" || event.key === "End") {
              menu.setCurrentItem(lastMenuItem);
              lastMenuItem.focus();
            }
          });
        }
      }
    }
  }
  handleTriggerKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  handleTriggerSlotChange() {
    this.updateAccessibleTrigger();
  }
  //
  // Slotted triggers can be arbitrary content, but we need to link them to the dropdown panel with `aria-haspopup` and
  // `aria-expanded`. These must be applied to the "accessible trigger" (the tabbable portion of the trigger element
  // that gets slotted in) so screen readers will understand them. The accessible trigger could be the slotted element,
  // a child of the slotted element, or an element in the slotted element's shadow root.
  //
  // For example, the accessible trigger of an <sl-button> is a <button> located inside its shadow root.
  //
  // To determine this, we assume the first tabbable element in the trigger slot is the "accessible trigger."
  //
  updateAccessibleTrigger() {
    const assignedElements = this.trigger.assignedElements({ flatten: true });
    const accessibleTrigger = assignedElements.find((el) => (0,_chunk_LXDTFLWU_js__WEBPACK_IMPORTED_MODULE_1__/* .getTabbableBoundary */ .w)(el).start);
    let target;
    if (accessibleTrigger) {
      switch (accessibleTrigger.tagName.toLowerCase()) {
        case "sl-button":
        case "sl-icon-button":
          target = accessibleTrigger.button;
          break;
        default:
          target = accessibleTrigger;
      }
      target.setAttribute("aria-haspopup", "true");
      target.setAttribute("aria-expanded", this.open ? "true" : "false");
    }
  }
  /** Shows the dropdown panel. */
  async show() {
    if (this.open) {
      return void 0;
    }
    this.open = true;
    return (0,_chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_14__/* .waitForEvent */ .l)(this, "sl-after-show");
  }
  /** Hides the dropdown panel */
  async hide() {
    if (!this.open) {
      return void 0;
    }
    this.open = false;
    return (0,_chunk_B4BZKR24_js__WEBPACK_IMPORTED_MODULE_14__/* .waitForEvent */ .l)(this, "sl-after-hide");
  }
  /**
   * Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu
   * is activated.
   */
  reposition() {
    this.popup.reposition();
  }
  addOpenListeners() {
    var _a;
    this.panel.addEventListener("sl-select", this.handlePanelSelect);
    if ("CloseWatcher" in window) {
      (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        this.hide();
        this.focusOnTrigger();
      };
    } else {
      this.panel.addEventListener("keydown", this.handleKeyDown);
    }
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("mousedown", this.handleDocumentMouseDown);
  }
  removeOpenListeners() {
    var _a;
    if (this.panel) {
      this.panel.removeEventListener("sl-select", this.handlePanelSelect);
      this.panel.removeEventListener("keydown", this.handleKeyDown);
    }
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("mousedown", this.handleDocumentMouseDown);
    (_a = this.closeWatcher) == null ? void 0 : _a.destroy();
  }
  async handleOpenChange() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.updateAccessibleTrigger();
    if (this.open) {
      this.emit("sl-show");
      this.addOpenListeners();
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_4__/* .stopAnimations */ .Ey)(this);
      this.panel.hidden = false;
      this.popup.active = true;
      const { keyframes, options } = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_3__/* .getAnimation */ .RB)(this, "dropdown.show", { dir: this.localize.dir() });
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_4__/* .animateTo */ .jd)(this.popup.popup, keyframes, options);
      this.emit("sl-after-show");
    } else {
      this.emit("sl-hide");
      this.removeOpenListeners();
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_4__/* .stopAnimations */ .Ey)(this);
      const { keyframes, options } = (0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_3__/* .getAnimation */ .RB)(this, "dropdown.hide", { dir: this.localize.dir() });
      await (0,_chunk_3EPZX5HE_js__WEBPACK_IMPORTED_MODULE_4__/* .animateTo */ .jd)(this.popup.popup, keyframes, options);
      this.panel.hidden = true;
      this.popup.active = false;
      this.emit("sl-after-hide");
    }
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_11__/* .html */ .qy)`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist ? "fixed" : "absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_12__/* .ifDefined */ .J)(this.sync ? this.sync : void 0)}
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_10__/* .classMap */ .H)({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open ? "false" : "true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `;
  }
};
SlDropdown.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_7__/* .component_styles_default */ .$, _chunk_LXP7GVU3_js__WEBPACK_IMPORTED_MODULE_0__/* .dropdown_styles_default */ .H];
SlDropdown.dependencies = { "sl-popup": _chunk_5J7BMMD5_js__WEBPACK_IMPORTED_MODULE_2__/* .SlPopup */ .m };
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .query */ .P)(".dropdown")
], SlDropdown.prototype, "popup", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .query */ .P)(".dropdown__trigger")
], SlDropdown.prototype, "trigger", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .query */ .P)(".dropdown__panel")
], SlDropdown.prototype, "panel", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlDropdown.prototype, "open", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ reflect: true })
], SlDropdown.prototype, "placement", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlDropdown.prototype, "disabled", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
], SlDropdown.prototype, "stayOpenOnSelect", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ attribute: false })
], SlDropdown.prototype, "containingElement", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Number })
], SlDropdown.prototype, "distance", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Number })
], SlDropdown.prototype, "skidding", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ type: Boolean })
], SlDropdown.prototype, "hoist", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_13__/* .property */ .MZ)({ reflect: true })
], SlDropdown.prototype, "sync", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_9__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_6__/* .watch */ .w)("open", { waitUntilFirstUpdate: true })
], SlDropdown.prototype, "handleOpenChange", 1);
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_3__/* .setDefaultAnimation */ .Ee)("dropdown.show", {
  keyframes: [
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1 }
  ],
  options: { duration: 100, easing: "ease" }
});
(0,_chunk_UW6SLYOK_js__WEBPACK_IMPORTED_MODULE_3__/* .setDefaultAnimation */ .Ee)("dropdown.hide", {
  keyframes: [
    { opacity: 1, scale: 1 },
    { opacity: 0, scale: 0.9 }
  ],
  options: { duration: 100, easing: "ease" }
});




/***/ })

}]);
//# sourceMappingURL=2745.js.map