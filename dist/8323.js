"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[8323],{

/***/ 1465:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ watch)
/* harmony export */ });
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1346);


// src/internal/watch.ts
function watch(propertyName, options) {
  const resolvedOptions = (0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_0__/* .__spreadValues */ .IA)({
    waitUntilFirstUpdate: false
  }, options);
  return (proto, decoratedFnName) => {
    const { update } = proto;
    const watchedProperties = Array.isArray(propertyName) ? propertyName : [propertyName];
    proto.update = function(changedProps) {
      watchedProperties.forEach((property) => {
        const key = property;
        if (changedProps.has(key)) {
          const oldValue = changedProps.get(key);
          const newValue = this[key];
          if (oldValue !== newValue) {
            if (!resolvedOptions.waitUntilFirstUpdate || this.hasUpdated) {
              this[decoratedFnName](oldValue, newValue);
            }
          }
        }
      });
      update.call(this, changedProps);
    };
  };
}




/***/ }),

/***/ 7369:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ SlAnimation)
/* harmony export */ });
/* harmony import */ var _chunk_TJOP7HQP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2920);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3710);
/* harmony import */ var _chunk_XVVDUPMB_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9454);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1346);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2391);







// src/components/animation/animation.component.ts


var SlAnimation = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_3__/* .ShoelaceElement */ .f {
  constructor() {
    super(...arguments);
    this.hasStarted = false;
    this.name = "none";
    this.play = false;
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "auto";
    this.iterations = Infinity;
    this.iterationStart = 0;
    this.playbackRate = 1;
    this.handleAnimationFinish = () => {
      this.play = false;
      this.hasStarted = false;
      this.emit("sl-finish");
    };
    this.handleAnimationCancel = () => {
      this.play = false;
      this.hasStarted = false;
      this.emit("sl-cancel");
    };
  }
  /** Gets and sets the current animation time. */
  get currentTime() {
    var _a, _b;
    return (_b = (_a = this.animation) == null ? void 0 : _a.currentTime) != null ? _b : 0;
  }
  set currentTime(time) {
    if (this.animation) {
      this.animation.currentTime = time;
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.createAnimation();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.destroyAnimation();
  }
  handleSlotChange() {
    this.destroyAnimation();
    this.createAnimation();
  }
  async createAnimation() {
    var _a, _b;
    const easing = (_a = _chunk_TJOP7HQP_js__WEBPACK_IMPORTED_MODULE_0__/* .animations.easings */ .WT.easings[this.easing]) != null ? _a : this.easing;
    const keyframes = (_b = this.keyframes) != null ? _b : _chunk_TJOP7HQP_js__WEBPACK_IMPORTED_MODULE_0__/* .animations */ .WT[this.name];
    const slot = await this.defaultSlot;
    const element = slot.assignedElements()[0];
    if (!element || !keyframes) {
      return false;
    }
    this.destroyAnimation();
    this.animation = element.animate(keyframes, {
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationStart: this.iterationStart,
      iterations: this.iterations
    });
    this.animation.playbackRate = this.playbackRate;
    this.animation.addEventListener("cancel", this.handleAnimationCancel);
    this.animation.addEventListener("finish", this.handleAnimationFinish);
    if (this.play) {
      this.hasStarted = true;
      this.emit("sl-start");
    } else {
      this.animation.pause();
    }
    return true;
  }
  destroyAnimation() {
    if (this.animation) {
      this.animation.cancel();
      this.animation.removeEventListener("cancel", this.handleAnimationCancel);
      this.animation.removeEventListener("finish", this.handleAnimationFinish);
      this.hasStarted = false;
    }
  }
  handleAnimationChange() {
    if (!this.hasUpdated) {
      return;
    }
    this.createAnimation();
  }
  handlePlayChange() {
    if (this.animation) {
      if (this.play && !this.hasStarted) {
        this.hasStarted = true;
        this.emit("sl-start");
      }
      if (this.play) {
        this.animation.play();
      } else {
        this.animation.pause();
      }
      return true;
    }
    return false;
  }
  handlePlaybackRateChange() {
    if (this.animation) {
      this.animation.playbackRate = this.playbackRate;
    }
  }
  /** Clears all keyframe effects caused by this animation and aborts its playback. */
  cancel() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.cancel();
  }
  /** Sets the playback time to the end of the animation corresponding to the current playback direction. */
  finish() {
    var _a;
    (_a = this.animation) == null ? void 0 : _a.finish();
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_6__/* .html */ .qy)` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }
};
SlAnimation.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_2__/* .component_styles_default */ .$, _chunk_XVVDUPMB_js__WEBPACK_IMPORTED_MODULE_4__/* .animation_styles_default */ .m];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .queryAsync */ .nJ)("slot")
], SlAnimation.prototype, "defaultSlot", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()
], SlAnimation.prototype, "name", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ type: Boolean, reflect: true })
], SlAnimation.prototype, "play", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ type: Number })
], SlAnimation.prototype, "delay", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()
], SlAnimation.prototype, "direction", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ type: Number })
], SlAnimation.prototype, "duration", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()
], SlAnimation.prototype, "easing", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ attribute: "end-delay", type: Number })
], SlAnimation.prototype, "endDelay", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()
], SlAnimation.prototype, "fill", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ type: Number })
], SlAnimation.prototype, "iterations", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ attribute: "iteration-start", type: Number })
], SlAnimation.prototype, "iterationStart", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ attribute: false })
], SlAnimation.prototype, "keyframes", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({ attribute: "playback-rate", type: Number })
], SlAnimation.prototype, "playbackRate", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)([
    "name",
    "delay",
    "direction",
    "duration",
    "easing",
    "endDelay",
    "fill",
    "iterations",
    "iterationsStart",
    "keyframes"
  ])
], SlAnimation.prototype, "handleAnimationChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("play")
], SlAnimation.prototype, "handlePlayChange", 1);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_5__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_1__/* .watch */ .w)("playbackRate")
], SlAnimation.prototype, "handlePlaybackRateChange", 1);




/***/ }),

/***/ 1101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ component_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/styles/component.styles.ts

var component_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;




/***/ }),

/***/ 9454:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ animation_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/animation/animation.styles.ts

var animation_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    display: contents;
  }
`;




/***/ }),

/***/ 8323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ animation_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.NVJTNTPW.js
var chunk_NVJTNTPW = __webpack_require__(7369);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.M5MS3BT5.js


// src/components/animation/animation.ts
var animation_default = chunk_NVJTNTPW/* SlAnimation */.g;
chunk_NVJTNTPW/* SlAnimation */.g.define("sl-animation");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TJOP7HQP.js + 100 modules
var chunk_TJOP7HQP = __webpack_require__(2920);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CCJUT23E.js
var chunk_CCJUT23E = __webpack_require__(1465);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.XVVDUPMB.js
var chunk_XVVDUPMB = __webpack_require__(9454);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
;// ./node_modules/@shoelace-style/shoelace/dist/components/animation/animation.js











/***/ })

}]);
//# sourceMappingURL=8323.js.map