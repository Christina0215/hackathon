"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[9540],{

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

/***/ 9973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ carousel_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/carousel/carousel.styles.ts

var carousel_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;




/***/ }),

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

/***/ 3510:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ AutoplayController)
/* harmony export */ });
// src/components/carousel/autoplay-controller.ts
var AutoplayController = class {
  constructor(host, tickCallback) {
    this.timerId = 0;
    this.activeInteractions = 0;
    this.paused = false;
    this.stopped = true;
    this.pause = () => {
      if (!this.activeInteractions++) {
        this.paused = true;
        this.host.requestUpdate();
      }
    };
    this.resume = () => {
      if (!--this.activeInteractions) {
        this.paused = false;
        this.host.requestUpdate();
      }
    };
    host.addController(this);
    this.host = host;
    this.tickCallback = tickCallback;
  }
  hostConnected() {
    this.host.addEventListener("mouseenter", this.pause);
    this.host.addEventListener("mouseleave", this.resume);
    this.host.addEventListener("focusin", this.pause);
    this.host.addEventListener("focusout", this.resume);
    this.host.addEventListener("touchstart", this.pause, { passive: true });
    this.host.addEventListener("touchend", this.resume);
  }
  hostDisconnected() {
    this.stop();
    this.host.removeEventListener("mouseenter", this.pause);
    this.host.removeEventListener("mouseleave", this.resume);
    this.host.removeEventListener("focusin", this.pause);
    this.host.removeEventListener("focusout", this.resume);
    this.host.removeEventListener("touchstart", this.pause);
    this.host.removeEventListener("touchend", this.resume);
  }
  start(interval) {
    this.stop();
    this.stopped = false;
    this.timerId = window.setInterval(() => {
      if (!this.paused) {
        this.tickCallback();
      }
    }, interval);
  }
  stop() {
    clearInterval(this.timerId);
    this.stopped = true;
    this.host.requestUpdate();
  }
};




/***/ }),

/***/ 5151:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ clamp)
/* harmony export */ });
// src/internal/math.ts
function clamp(value, min, max) {
  const noNegativeZero = (n) => Object.is(n, -0) ? 0 : n;
  if (value < min) {
    return noNegativeZero(min);
  }
  if (value > max) {
    return noNegativeZero(max);
  }
  return noNegativeZero(value);
}




/***/ }),

/***/ 1156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ SlCarousel)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.HF7GESMZ.js
var chunk_HF7GESMZ = __webpack_require__(5151);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.F4VGSDIW.js
var chunk_F4VGSDIW = __webpack_require__(3510);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BMOWACWC.js
var chunk_BMOWACWC = __webpack_require__(9973);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B4BZKR24.js
var chunk_B4BZKR24 = __webpack_require__(7177);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.3EPZX5HE.js
var chunk_3EPZX5HE = __webpack_require__(1086);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.WLV3FVBR.js
var chunk_WLV3FVBR = __webpack_require__(7968);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.E6QAPUBK.js + 1 modules
var chunk_E6QAPUBK = __webpack_require__(9660);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.CCJUT23E.js
var chunk_CCJUT23E = __webpack_require__(1465);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TUVJKY7S.js
var chunk_TUVJKY7S = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.UYAO2JRR.js
var chunk_UYAO2JRR = __webpack_require__(3710);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.B3BW2AY6.js
var chunk_B3BW2AY6 = __webpack_require__(1346);
// EXTERNAL MODULE: ./node_modules/lit/directives/class-map.js + 1 modules
var class_map = __webpack_require__(3720);
// EXTERNAL MODULE: ./node_modules/lit/decorators.js + 6 modules
var decorators = __webpack_require__(2391);
// EXTERNAL MODULE: ./node_modules/lit/index.js + 1 modules
var lit = __webpack_require__(2618);
;// ./node_modules/lit-html/directives/map.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*o(o,f){if(void 0!==o){let i=0;for(const t of o)yield f(t,i++)}}
//# sourceMappingURL=map.js.map

;// ./node_modules/lit-html/directives/range.js
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*range_o(o,t,e=1){const i=void 0===t?0:o;t??=o;for(let o=i;e>0?o<t:t<o;o+=e)yield o}
//# sourceMappingURL=range.js.map

;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.KLASTODS.js












// src/components/carousel/carousel.component.ts





var SlCarousel = class extends chunk_UYAO2JRR/* ShoelaceElement */.f {
  constructor() {
    super(...arguments);
    this.loop = false;
    this.navigation = false;
    this.pagination = false;
    this.autoplay = false;
    this.autoplayInterval = 3e3;
    this.slidesPerPage = 1;
    this.slidesPerMove = 1;
    this.orientation = "horizontal";
    this.mouseDragging = false;
    this.activeSlide = 0;
    this.scrolling = false;
    this.dragging = false;
    this.autoplayController = new chunk_F4VGSDIW/* AutoplayController */.a(this, () => this.next());
    this.localize = new chunk_WLV3FVBR/* LocalizeController */.c(this);
    this.pendingSlideChange = false;
    this.handleMouseDrag = (event) => {
      if (!this.dragging) {
        this.scrollContainer.style.setProperty("scroll-snap-type", "none");
        this.dragging = true;
      }
      this.scrollContainer.scrollBy({
        left: -event.movementX,
        top: -event.movementY,
        behavior: "instant"
      });
    };
    this.handleMouseDragEnd = () => {
      const scrollContainer = this.scrollContainer;
      document.removeEventListener("pointermove", this.handleMouseDrag, { capture: true });
      const startLeft = scrollContainer.scrollLeft;
      const startTop = scrollContainer.scrollTop;
      scrollContainer.style.removeProperty("scroll-snap-type");
      scrollContainer.style.setProperty("overflow", "hidden");
      const finalLeft = scrollContainer.scrollLeft;
      const finalTop = scrollContainer.scrollTop;
      scrollContainer.style.removeProperty("overflow");
      scrollContainer.style.setProperty("scroll-snap-type", "none");
      scrollContainer.scrollTo({ left: startLeft, top: startTop, behavior: "instant" });
      requestAnimationFrame(async () => {
        if (startLeft !== finalLeft || startTop !== finalTop) {
          scrollContainer.scrollTo({
            left: finalLeft,
            top: finalTop,
            behavior: (0,chunk_3EPZX5HE/* prefersReducedMotion */.Oe)() ? "auto" : "smooth"
          });
          await (0,chunk_B4BZKR24/* waitForEvent */.l)(scrollContainer, "scrollend");
        }
        scrollContainer.style.removeProperty("scroll-snap-type");
        this.dragging = false;
        this.handleScrollEnd();
      });
    };
    this.handleSlotChange = (mutations) => {
      const needsInitialization = mutations.some(
        (mutation) => [...mutation.addedNodes, ...mutation.removedNodes].some(
          (el) => this.isCarouselItem(el) && !el.hasAttribute("data-clone")
        )
      );
      if (needsInitialization) {
        this.initializeSlides();
      }
      this.requestUpdate();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "region");
    this.setAttribute("aria-label", this.localize.term("carousel"));
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  firstUpdated() {
    this.initializeSlides();
    this.mutationObserver = new MutationObserver(this.handleSlotChange);
    this.mutationObserver.observe(this, {
      childList: true,
      subtree: true
    });
  }
  willUpdate(changedProperties) {
    if (changedProperties.has("slidesPerMove") || changedProperties.has("slidesPerPage")) {
      this.slidesPerMove = Math.min(this.slidesPerMove, this.slidesPerPage);
    }
  }
  getPageCount() {
    const slidesCount = this.getSlides().length;
    const { slidesPerPage, slidesPerMove, loop } = this;
    const pages = loop ? slidesCount / slidesPerMove : (slidesCount - slidesPerPage) / slidesPerMove + 1;
    return Math.ceil(pages);
  }
  getCurrentPage() {
    return Math.ceil(this.activeSlide / this.slidesPerMove);
  }
  canScrollNext() {
    return this.loop || this.getCurrentPage() < this.getPageCount() - 1;
  }
  canScrollPrev() {
    return this.loop || this.getCurrentPage() > 0;
  }
  /** @internal Gets all carousel items. */
  getSlides({ excludeClones = true } = {}) {
    return [...this.children].filter(
      (el) => this.isCarouselItem(el) && (!excludeClones || !el.hasAttribute("data-clone"))
    );
  }
  handleKeyDown(event) {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const target = event.target;
      const isRtl = this.localize.dir() === "rtl";
      const isFocusInPagination = target.closest('[part~="pagination-item"]') !== null;
      const isNext = event.key === "ArrowDown" || !isRtl && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft";
      const isPrevious = event.key === "ArrowUp" || !isRtl && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight";
      event.preventDefault();
      if (isPrevious) {
        this.previous();
      }
      if (isNext) {
        this.next();
      }
      if (event.key === "Home") {
        this.goToSlide(0);
      }
      if (event.key === "End") {
        this.goToSlide(this.getSlides().length - 1);
      }
      if (isFocusInPagination) {
        this.updateComplete.then(() => {
          var _a;
          const activePaginationItem = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(
            '[part~="pagination-item--active"]'
          );
          if (activePaginationItem) {
            activePaginationItem.focus();
          }
        });
      }
    }
  }
  handleMouseDragStart(event) {
    const canDrag = this.mouseDragging && event.button === 0;
    if (canDrag) {
      event.preventDefault();
      document.addEventListener("pointermove", this.handleMouseDrag, { capture: true, passive: true });
      document.addEventListener("pointerup", this.handleMouseDragEnd, { capture: true, once: true });
    }
  }
  handleScroll() {
    this.scrolling = true;
    if (!this.pendingSlideChange) {
      this.synchronizeSlides();
    }
  }
  /** @internal Synchronizes the slides with the IntersectionObserver API. */
  synchronizeSlides() {
    const io = new IntersectionObserver(
      (entries) => {
        io.disconnect();
        for (const entry of entries) {
          const slide = entry.target;
          slide.toggleAttribute("inert", !entry.isIntersecting);
          slide.classList.toggle("--in-view", entry.isIntersecting);
          slide.setAttribute("aria-hidden", entry.isIntersecting ? "false" : "true");
        }
        const firstIntersecting = entries.find((entry) => entry.isIntersecting);
        if (!firstIntersecting) {
          return;
        }
        const slidesWithClones = this.getSlides({ excludeClones: false });
        const slidesCount = this.getSlides().length;
        const slideIndex = slidesWithClones.indexOf(firstIntersecting.target);
        const normalizedIndex = this.loop ? slideIndex - this.slidesPerPage : slideIndex;
        this.activeSlide = (Math.ceil(normalizedIndex / this.slidesPerMove) * this.slidesPerMove + slidesCount) % slidesCount;
        if (!this.scrolling) {
          if (this.loop && firstIntersecting.target.hasAttribute("data-clone")) {
            const clonePosition = Number(firstIntersecting.target.getAttribute("data-clone"));
            this.goToSlide(clonePosition, "instant");
          }
        }
      },
      {
        root: this.scrollContainer,
        threshold: 0.6
      }
    );
    this.getSlides({ excludeClones: false }).forEach((slide) => {
      io.observe(slide);
    });
  }
  handleScrollEnd() {
    if (!this.scrolling || this.dragging)
      return;
    this.scrolling = false;
    this.pendingSlideChange = false;
    this.synchronizeSlides();
  }
  isCarouselItem(node) {
    return node instanceof Element && node.tagName.toLowerCase() === "sl-carousel-item";
  }
  initializeSlides() {
    this.getSlides({ excludeClones: false }).forEach((slide, index) => {
      slide.classList.remove("--in-view");
      slide.classList.remove("--is-active");
      slide.setAttribute("aria-label", this.localize.term("slideNum", index + 1));
      if (slide.hasAttribute("data-clone")) {
        slide.remove();
      }
    });
    this.updateSlidesSnap();
    if (this.loop) {
      this.createClones();
    }
    this.synchronizeSlides();
    this.goToSlide(this.activeSlide, "auto");
  }
  createClones() {
    const slides = this.getSlides();
    const slidesPerPage = this.slidesPerPage;
    const lastSlides = slides.slice(-slidesPerPage);
    const firstSlides = slides.slice(0, slidesPerPage);
    lastSlides.reverse().forEach((slide, i) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("data-clone", String(slides.length - i - 1));
      this.prepend(clone);
    });
    firstSlides.forEach((slide, i) => {
      const clone = slide.cloneNode(true);
      clone.setAttribute("data-clone", String(i));
      this.append(clone);
    });
  }
  handleSlideChange() {
    const slides = this.getSlides();
    slides.forEach((slide, i) => {
      slide.classList.toggle("--is-active", i === this.activeSlide);
    });
    if (this.hasUpdated) {
      this.emit("sl-slide-change", {
        detail: {
          index: this.activeSlide,
          slide: slides[this.activeSlide]
        }
      });
    }
  }
  updateSlidesSnap() {
    const slides = this.getSlides();
    const slidesPerMove = this.slidesPerMove;
    slides.forEach((slide, i) => {
      const shouldSnap = (i + slidesPerMove) % slidesPerMove === 0;
      if (shouldSnap) {
        slide.style.removeProperty("scroll-snap-align");
      } else {
        slide.style.setProperty("scroll-snap-align", "none");
      }
    });
  }
  handleAutoplayChange() {
    this.autoplayController.stop();
    if (this.autoplay) {
      this.autoplayController.start(this.autoplayInterval);
    }
  }
  /**
   * Move the carousel backward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  previous(behavior = "smooth") {
    this.goToSlide(this.activeSlide - this.slidesPerMove, behavior);
  }
  /**
   * Move the carousel forward by `slides-per-move` slides.
   *
   * @param behavior - The behavior used for scrolling.
   */
  next(behavior = "smooth") {
    this.goToSlide(this.activeSlide + this.slidesPerMove, behavior);
  }
  /**
   * Scrolls the carousel to the slide specified by `index`.
   *
   * @param index - The slide index.
   * @param behavior - The behavior used for scrolling.
   */
  goToSlide(index, behavior = "smooth") {
    const { slidesPerPage, loop } = this;
    const slides = this.getSlides();
    const slidesWithClones = this.getSlides({ excludeClones: false });
    if (!slides.length) {
      return;
    }
    const newActiveSlide = loop ? (index + slides.length) % slides.length : (0,chunk_HF7GESMZ/* clamp */.q)(index, 0, slides.length - slidesPerPage);
    this.activeSlide = newActiveSlide;
    const isRtl = this.localize.dir() === "rtl";
    const nextSlideIndex = (0,chunk_HF7GESMZ/* clamp */.q)(
      index + (loop ? slidesPerPage : 0) + (isRtl ? slidesPerPage - 1 : 0),
      0,
      slidesWithClones.length - 1
    );
    const nextSlide = slidesWithClones[nextSlideIndex];
    this.scrollToSlide(nextSlide, (0,chunk_3EPZX5HE/* prefersReducedMotion */.Oe)() ? "auto" : behavior);
  }
  scrollToSlide(slide, behavior = "smooth") {
    const scrollContainer = this.scrollContainer;
    const scrollContainerRect = scrollContainer.getBoundingClientRect();
    const nextSlideRect = slide.getBoundingClientRect();
    const nextLeft = nextSlideRect.left - scrollContainerRect.left;
    const nextTop = nextSlideRect.top - scrollContainerRect.top;
    if (nextLeft || nextTop) {
      this.pendingSlideChange = true;
      scrollContainer.scrollTo({
        left: nextLeft + scrollContainer.scrollLeft,
        top: nextTop + scrollContainer.scrollTop,
        behavior
      });
    }
  }
  render() {
    const { slidesPerMove, scrolling } = this;
    const pagesCount = this.getPageCount();
    const currentPage = this.getCurrentPage();
    const prevEnabled = this.canScrollPrev();
    const nextEnabled = this.canScrollNext();
    const isLtr = this.localize.dir() === "rtl";
    return (0,lit/* html */.qy)`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${(0,class_map/* classMap */.H)({
      carousel__slides: true,
      "carousel__slides--horizontal": this.orientation === "horizontal",
      "carousel__slides--vertical": this.orientation === "vertical",
      "carousel__slides--dragging": this.dragging
    })}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${scrolling ? "true" : "false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation ? (0,lit/* html */.qy)`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${(0,class_map/* classMap */.H)({
      "carousel__navigation-button": true,
      "carousel__navigation-button--previous": true,
      "carousel__navigation-button--disabled": !prevEnabled
    })}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${prevEnabled ? "false" : "true"}"
                  @click=${prevEnabled ? () => this.previous() : null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${isLtr ? "chevron-left" : "chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${(0,class_map/* classMap */.H)({
      "carousel__navigation-button": true,
      "carousel__navigation-button--next": true,
      "carousel__navigation-button--disabled": !nextEnabled
    })}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${nextEnabled ? "false" : "true"}"
                  @click=${nextEnabled ? () => this.next() : null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${isLtr ? "chevron-right" : "chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            ` : ""}
        ${this.pagination ? (0,lit/* html */.qy)`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${o(range_o(pagesCount), (index) => {
      const isActive = index === currentPage;
      return (0,lit/* html */.qy)`
                    <button
                      part="pagination-item ${isActive ? "pagination-item--active" : ""}"
                      class="${(0,class_map/* classMap */.H)({
        "carousel__pagination-item": true,
        "carousel__pagination-item--active": isActive
      })}"
                      role="tab"
                      aria-selected="${isActive ? "true" : "false"}"
                      aria-label="${this.localize.term("goToSlide", index + 1, pagesCount)}"
                      tabindex=${isActive ? "0" : "-1"}
                      @click=${() => this.goToSlide(index * slidesPerMove)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `;
    })}
              </div>
            ` : ""}
      </div>
    `;
  }
};
SlCarousel.styles = [chunk_TUVJKY7S/* component_styles_default */.$, chunk_BMOWACWC/* carousel_styles_default */.K];
SlCarousel.dependencies = { "sl-icon": chunk_E6QAPUBK/* SlIcon */.B };
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Boolean, reflect: true })
], SlCarousel.prototype, "loop", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Boolean, reflect: true })
], SlCarousel.prototype, "navigation", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Boolean, reflect: true })
], SlCarousel.prototype, "pagination", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Boolean, reflect: true })
], SlCarousel.prototype, "autoplay", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Number, attribute: "autoplay-interval" })
], SlCarousel.prototype, "autoplayInterval", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Number, attribute: "slides-per-page" })
], SlCarousel.prototype, "slidesPerPage", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Number, attribute: "slides-per-move" })
], SlCarousel.prototype, "slidesPerMove", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)()
], SlCarousel.prototype, "orientation", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* property */.MZ)({ type: Boolean, reflect: true, attribute: "mouse-dragging" })
], SlCarousel.prototype, "mouseDragging", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* query */.P)(".carousel__slides")
], SlCarousel.prototype, "scrollContainer", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* query */.P)(".carousel__pagination")
], SlCarousel.prototype, "paginationContainer", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* state */.wk)()
], SlCarousel.prototype, "activeSlide", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* state */.wk)()
], SlCarousel.prototype, "scrolling", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* state */.wk)()
], SlCarousel.prototype, "dragging", 2);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,decorators/* eventOptions */.Ls)({ passive: true })
], SlCarousel.prototype, "handleScroll", 1);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,chunk_CCJUT23E/* watch */.w)("loop", { waitUntilFirstUpdate: true }),
  (0,chunk_CCJUT23E/* watch */.w)("slidesPerPage", { waitUntilFirstUpdate: true })
], SlCarousel.prototype, "initializeSlides", 1);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,chunk_CCJUT23E/* watch */.w)("activeSlide")
], SlCarousel.prototype, "handleSlideChange", 1);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,chunk_CCJUT23E/* watch */.w)("slidesPerMove")
], SlCarousel.prototype, "updateSlidesSnap", 1);
(0,chunk_B3BW2AY6/* __decorateClass */.Cc)([
  (0,chunk_CCJUT23E/* watch */.w)("autoplay")
], SlCarousel.prototype, "handleAutoplayChange", 1);




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

/***/ 9091:
/***/ (() => {

// src/internal/scrollend-polyfill.ts
var debounce = (fn, delay) => {
  let timerId = 0;
  return function(...args) {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
};
var decorate = (proto, method, decorateFn) => {
  const superFn = proto[method];
  proto[method] = function(...args) {
    superFn.call(this, ...args);
    decorateFn.call(this, superFn, ...args);
  };
};
var isSupported = "onscrollend" in window;
if (!isSupported) {
  const pointers = /* @__PURE__ */ new Set();
  const scrollHandlers = /* @__PURE__ */ new WeakMap();
  const handlePointerDown = (event) => {
    for (const touch of event.changedTouches) {
      pointers.add(touch.identifier);
    }
  };
  const handlePointerUp = (event) => {
    for (const touch of event.changedTouches) {
      pointers.delete(touch.identifier);
    }
  };
  document.addEventListener("touchstart", handlePointerDown, true);
  document.addEventListener("touchend", handlePointerUp, true);
  document.addEventListener("touchcancel", handlePointerUp, true);
  decorate(EventTarget.prototype, "addEventListener", function(addEventListener, type) {
    if (type !== "scrollend")
      return;
    const handleScrollEnd = debounce(() => {
      if (!pointers.size) {
        this.dispatchEvent(new Event("scrollend"));
      } else {
        handleScrollEnd();
      }
    }, 100);
    addEventListener.call(this, "scroll", handleScrollEnd, { passive: true });
    scrollHandlers.set(this, handleScrollEnd);
  });
  decorate(EventTarget.prototype, "removeEventListener", function(removeEventListener, type) {
    if (type !== "scrollend")
      return;
    const scrollHandler = scrollHandlers.get(this);
    if (scrollHandler) {
      removeEventListener.call(this, "scroll", scrollHandler, { passive: true });
    }
  });
}


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




/***/ }),

/***/ 8504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Rt: () => (/* binding */ f),
/* harmony export */   mY: () => (/* binding */ m),
/* harmony export */   qb: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports TemplateResultType, clearPart, getCommittedValue, getDirectiveClass, insertPart, isCompiledTemplateResult, isDirectiveResult, isPrimitive, removePart, setChildPartValue */
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6752);

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:t}=_lit_html_js__WEBPACK_IMPORTED_MODULE_0__/* ._$LH */ .ge,i=o=>null===o||"object"!=typeof o&&"function"!=typeof o,n={HTML:1,SVG:2,MATHML:3},e=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,l=o=>null!=o?._$litType$?.h,c=o=>void 0!==o?._$litDirective$,d=o=>o?._$litDirective$,f=o=>void 0===o.strings,s=()=>document.createComment(""),r=(o,i,n)=>{const e=o._$AA.parentNode,l=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=e.insertBefore(s(),l),c=e.insertBefore(s(),l);n=new t(i,c,o,o.options)}else{const t=n._$AB.nextSibling,i=n._$AM,c=i!==o;if(c){let t;n._$AQ?.(o),n._$AM=o,void 0!==n._$AP&&(t=o._$AU)!==i._$AU&&n._$AP(t)}if(t!==l||c){let o=n._$AA;for(;o!==t;){const t=o.nextSibling;e.insertBefore(o,l),o=t}}}return n},v=(o,t,i=o)=>(o._$AI(t,i),o),u={},m=(o,t=u)=>o._$AH=t,p=o=>o._$AH,M=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}},h=o=>{o._$AR()};
//# sourceMappingURL=directive-helpers.js.map


/***/ }),

/***/ 7804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OA: () => (/* binding */ t),
/* harmony export */   WL: () => (/* binding */ i),
/* harmony export */   u$: () => (/* binding */ e)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map


/***/ }),

/***/ 3720:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* reexport */ e)
});

// EXTERNAL MODULE: ./node_modules/lit-html/lit-html.js
var lit_html = __webpack_require__(6752);
// EXTERNAL MODULE: ./node_modules/lit-html/directive.js
var directive = __webpack_require__(7804);
;// ./node_modules/lit-html/directives/class-map.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=(0,directive/* directive */.u$)(class extends directive/* Directive */.WL{constructor(t){if(super(t),t.type!==directive/* PartType */.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return lit_html/* noChange */.c0}});
//# sourceMappingURL=class-map.js.map

;// ./node_modules/lit/directives/class-map.js

//# sourceMappingURL=class-map.js.map


/***/ })

}]);
//# sourceMappingURL=9540.js.map