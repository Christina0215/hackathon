"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[8546],{

/***/ 6989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ tree_styles_default)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2618);
// src/components/tree/tree.styles.ts

var tree_styles_default = (0,lit__WEBPACK_IMPORTED_MODULE_0__/* .css */ .AH)`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;




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

/***/ 9327:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ SlTree)
/* harmony export */ });
/* harmony import */ var _chunk_G7B7WU5W_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6989);
/* harmony import */ var _chunk_JVZ7GUNC_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3381);
/* harmony import */ var _chunk_HF7GESMZ_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5151);
/* harmony import */ var _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7968);
/* harmony import */ var _chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1465);
/* harmony import */ var _chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1101);
/* harmony import */ var _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3710);
/* harmony import */ var _chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1346);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2618);
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2391);









// src/components/tree/tree.component.ts


function syncCheckboxes(changedTreeItem, initialSync = false) {
  function syncParentItem(treeItem) {
    const children = treeItem.getChildrenItems({ includeDisabled: false });
    if (children.length) {
      const allChecked = children.every((item) => item.selected);
      const allUnchecked = children.every((item) => !item.selected && !item.indeterminate);
      treeItem.selected = allChecked;
      treeItem.indeterminate = !allChecked && !allUnchecked;
    }
  }
  function syncAncestors(treeItem) {
    const parentItem = treeItem.parentElement;
    if (_chunk_JVZ7GUNC_js__WEBPACK_IMPORTED_MODULE_1__/* .SlTreeItem */ .P.isTreeItem(parentItem)) {
      syncParentItem(parentItem);
      syncAncestors(parentItem);
    }
  }
  function syncDescendants(treeItem) {
    for (const childItem of treeItem.getChildrenItems()) {
      childItem.selected = initialSync ? treeItem.selected || childItem.selected : !childItem.disabled && treeItem.selected;
      syncDescendants(childItem);
    }
    if (initialSync) {
      syncParentItem(treeItem);
    }
  }
  syncDescendants(changedTreeItem);
  syncAncestors(changedTreeItem);
}
var SlTree = class extends _chunk_UYAO2JRR_js__WEBPACK_IMPORTED_MODULE_5__/* .ShoelaceElement */ .f {
  constructor() {
    super();
    this.selection = "single";
    this.clickTarget = null;
    this.localize = new _chunk_WLV3FVBR_js__WEBPACK_IMPORTED_MODULE_2__/* .LocalizeController */ .c(this);
    // Initializes new items by setting the `selectable` property and the expanded/collapsed icons if any
    this.initTreeItem = (item) => {
      item.selectable = this.selection === "multiple";
      ["expand", "collapse"].filter((status) => !!this.querySelector(`[slot="${status}-icon"]`)).forEach((status) => {
        const existingIcon = item.querySelector(`[slot="${status}-icon"]`);
        const expandButtonIcon = this.getExpandButtonIcon(status);
        if (!expandButtonIcon)
          return;
        if (existingIcon === null) {
          item.append(expandButtonIcon);
        } else if (existingIcon.hasAttribute("data-default")) {
          existingIcon.replaceWith(expandButtonIcon);
        } else {
        }
      });
    };
    this.handleTreeChanged = (mutations) => {
      for (const mutation of mutations) {
        const addedNodes = [...mutation.addedNodes].filter(_chunk_JVZ7GUNC_js__WEBPACK_IMPORTED_MODULE_1__/* .SlTreeItem */ .P.isTreeItem);
        const removedNodes = [...mutation.removedNodes].filter(_chunk_JVZ7GUNC_js__WEBPACK_IMPORTED_MODULE_1__/* .SlTreeItem */ .P.isTreeItem);
        addedNodes.forEach(this.initTreeItem);
        if (this.lastFocusedItem && removedNodes.includes(this.lastFocusedItem)) {
          this.lastFocusedItem = null;
        }
      }
    };
    this.handleFocusOut = (event) => {
      const relatedTarget = event.relatedTarget;
      if (!relatedTarget || !this.contains(relatedTarget)) {
        this.tabIndex = 0;
      }
    };
    this.handleFocusIn = (event) => {
      const target = event.target;
      if (event.target === this) {
        this.focusItem(this.lastFocusedItem || this.getAllTreeItems()[0]);
      }
      if (_chunk_JVZ7GUNC_js__WEBPACK_IMPORTED_MODULE_1__/* .SlTreeItem */ .P.isTreeItem(target) && !target.disabled) {
        if (this.lastFocusedItem) {
          this.lastFocusedItem.tabIndex = -1;
        }
        this.lastFocusedItem = target;
        this.tabIndex = -1;
        target.tabIndex = 0;
      }
    };
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
    this.addEventListener("sl-lazy-change", this.handleSlotChange);
  }
  async connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "tree");
    this.setAttribute("tabindex", "0");
    await this.updateComplete;
    this.mutationObserver = new MutationObserver(this.handleTreeChanged);
    this.mutationObserver.observe(this, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback();
    (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  // Generates a clone of the expand icon element to use for each tree item
  getExpandButtonIcon(status) {
    const slot = status === "expand" ? this.expandedIconSlot : this.collapsedIconSlot;
    const icon = slot.assignedElements({ flatten: true })[0];
    if (icon) {
      const clone = icon.cloneNode(true);
      [clone, ...clone.querySelectorAll("[id]")].forEach((el) => el.removeAttribute("id"));
      clone.setAttribute("data-default", "");
      clone.slot = `${status}-icon`;
      return clone;
    }
    return null;
  }
  selectItem(selectedItem) {
    const previousSelection = [...this.selectedItems];
    if (this.selection === "multiple") {
      selectedItem.selected = !selectedItem.selected;
      if (selectedItem.lazy) {
        selectedItem.expanded = true;
      }
      syncCheckboxes(selectedItem);
    } else if (this.selection === "single" || selectedItem.isLeaf) {
      const items = this.getAllTreeItems();
      for (const item of items) {
        item.selected = item === selectedItem;
      }
    } else if (this.selection === "leaf") {
      selectedItem.expanded = !selectedItem.expanded;
    }
    const nextSelection = this.selectedItems;
    if (previousSelection.length !== nextSelection.length || nextSelection.some((item) => !previousSelection.includes(item))) {
      Promise.all(nextSelection.map((el) => el.updateComplete)).then(() => {
        this.emit("sl-selection-change", { detail: { selection: nextSelection } });
      });
    }
  }
  getAllTreeItems() {
    return [...this.querySelectorAll("sl-tree-item")];
  }
  focusItem(item) {
    item == null ? void 0 : item.focus();
  }
  handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "Enter", " "].includes(event.key)) {
      return;
    }
    if (event.composedPath().some((el) => {
      var _a;
      return ["input", "textarea"].includes((_a = el == null ? void 0 : el.tagName) == null ? void 0 : _a.toLowerCase());
    })) {
      return;
    }
    const items = this.getFocusableItems();
    const isLtr = this.localize.dir() === "ltr";
    const isRtl = this.localize.dir() === "rtl";
    if (items.length > 0) {
      event.preventDefault();
      const activeItemIndex = items.findIndex((item) => item.matches(":focus"));
      const activeItem = items[activeItemIndex];
      const focusItemAt = (index) => {
        const item = items[(0,_chunk_HF7GESMZ_js__WEBPACK_IMPORTED_MODULE_9__/* .clamp */ .q)(index, 0, items.length - 1)];
        this.focusItem(item);
      };
      const toggleExpand = (expanded) => {
        activeItem.expanded = expanded;
      };
      if (event.key === "ArrowDown") {
        focusItemAt(activeItemIndex + 1);
      } else if (event.key === "ArrowUp") {
        focusItemAt(activeItemIndex - 1);
      } else if (isLtr && event.key === "ArrowRight" || isRtl && event.key === "ArrowLeft") {
        if (!activeItem || activeItem.disabled || activeItem.expanded || activeItem.isLeaf && !activeItem.lazy) {
          focusItemAt(activeItemIndex + 1);
        } else {
          toggleExpand(true);
        }
      } else if (isLtr && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
        if (!activeItem || activeItem.disabled || activeItem.isLeaf || !activeItem.expanded) {
          focusItemAt(activeItemIndex - 1);
        } else {
          toggleExpand(false);
        }
      } else if (event.key === "Home") {
        focusItemAt(0);
      } else if (event.key === "End") {
        focusItemAt(items.length - 1);
      } else if (event.key === "Enter" || event.key === " ") {
        if (!activeItem.disabled) {
          this.selectItem(activeItem);
        }
      }
    }
  }
  handleClick(event) {
    const target = event.target;
    const treeItem = target.closest("sl-tree-item");
    const isExpandButton = event.composedPath().some((el) => {
      var _a;
      return (_a = el == null ? void 0 : el.classList) == null ? void 0 : _a.contains("tree-item__expand-button");
    });
    if (!treeItem || treeItem.disabled || target !== this.clickTarget) {
      return;
    }
    if (isExpandButton) {
      treeItem.expanded = !treeItem.expanded;
    } else {
      this.selectItem(treeItem);
    }
  }
  handleMouseDown(event) {
    this.clickTarget = event.target;
  }
  handleSlotChange() {
    const items = this.getAllTreeItems();
    items.forEach(this.initTreeItem);
  }
  async handleSelectionChange() {
    const isSelectionMultiple = this.selection === "multiple";
    const items = this.getAllTreeItems();
    this.setAttribute("aria-multiselectable", isSelectionMultiple ? "true" : "false");
    for (const item of items) {
      item.selectable = isSelectionMultiple;
    }
    if (isSelectionMultiple) {
      await this.updateComplete;
      [...this.querySelectorAll(":scope > sl-tree-item")].forEach(
        (treeItem) => syncCheckboxes(treeItem, true)
      );
    }
  }
  /** @internal Returns the list of tree items that are selected in the tree. */
  get selectedItems() {
    const items = this.getAllTreeItems();
    const isSelected = (item) => item.selected;
    return items.filter(isSelected);
  }
  /** @internal Gets focusable tree items in the tree. */
  getFocusableItems() {
    const items = this.getAllTreeItems();
    const collapsedItems = /* @__PURE__ */ new Set();
    return items.filter((item) => {
      var _a;
      if (item.disabled)
        return false;
      const parent = (_a = item.parentElement) == null ? void 0 : _a.closest("[role=treeitem]");
      if (parent && (!parent.expanded || parent.loading || collapsedItems.has(parent))) {
        collapsedItems.add(item);
      }
      return !collapsedItems.has(item);
    });
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_7__/* .html */ .qy)`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `;
  }
};
SlTree.styles = [_chunk_TUVJKY7S_js__WEBPACK_IMPORTED_MODULE_4__/* .component_styles_default */ .$, _chunk_G7B7WU5W_js__WEBPACK_IMPORTED_MODULE_0__/* .tree_styles_default */ .a];
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .query */ .P)("slot:not([name])")
], SlTree.prototype, "defaultSlot", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .query */ .P)("slot[name=expand-icon]")
], SlTree.prototype, "expandedIconSlot", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .query */ .P)("slot[name=collapse-icon]")
], SlTree.prototype, "collapsedIconSlot", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__/* .property */ .MZ)()
], SlTree.prototype, "selection", 2);
(0,_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_6__/* .__decorateClass */ .Cc)([
  (0,_chunk_CCJUT23E_js__WEBPACK_IMPORTED_MODULE_3__/* .watch */ .w)("selection")
], SlTree.prototype, "handleSelectionChange", 1);




/***/ }),

/***/ 8546:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ tree_default)
});

// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.QJNQUZGC.js
var chunk_QJNQUZGC = __webpack_require__(9327);
;// ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.6CLVNFXX.js


// src/components/tree/tree.ts
var tree_default = chunk_QJNQUZGC/* SlTree */.Y;
chunk_QJNQUZGC/* SlTree */.Y.define("sl-tree");



// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.G7B7WU5W.js
var chunk_G7B7WU5W = __webpack_require__(6989);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.JVZ7GUNC.js + 1 modules
var chunk_JVZ7GUNC = __webpack_require__(3381);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.BWVSW6TI.js
var chunk_BWVSW6TI = __webpack_require__(8346);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.4Y6VMQSD.js
var chunk_4Y6VMQSD = __webpack_require__(9702);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.R3NF57O3.js
var chunk_R3NF57O3 = __webpack_require__(5881);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.GI7VDIWX.js
var chunk_GI7VDIWX = __webpack_require__(6977);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.SI4ACBFK.js
var chunk_SI4ACBFK = __webpack_require__(649);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.TLKDQ5JG.js
var chunk_TLKDQ5JG = __webpack_require__(7154);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.7DUCI5S4.js
var chunk_7DUCI5S4 = __webpack_require__(7650);
// EXTERNAL MODULE: ./node_modules/@shoelace-style/shoelace/dist/chunks/chunk.2RCF7SLU.js
var chunk_2RCF7SLU = __webpack_require__(6012);
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
;// ./node_modules/@shoelace-style/shoelace/dist/components/tree/tree.js































/***/ })

}]);
//# sourceMappingURL=8546.js.map