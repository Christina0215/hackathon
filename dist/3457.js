"use strict";
(self["webpackChunkhackathon"] = self["webpackChunkhackathon"] || []).push([[3457],{

/***/ 2409:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ requestInclude)
/* harmony export */ });
// src/components/include/request.ts
var includeFiles = /* @__PURE__ */ new Map();
function requestInclude(src, mode = "cors") {
  const prev = includeFiles.get(src);
  if (prev !== void 0) {
    return Promise.resolve(prev);
  }
  const fileDataPromise = fetch(src, { mode }).then(async (response) => {
    const res = {
      ok: response.ok,
      status: response.status,
      html: await response.text()
    };
    includeFiles.set(src, res);
    return res;
  });
  includeFiles.set(src, fileDataPromise);
  return fileDataPromise;
}




/***/ }),

/***/ 3457:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   requestInclude: () => (/* reexport safe */ _chunks_chunk_XNEONNEJ_js__WEBPACK_IMPORTED_MODULE_0__.E)
/* harmony export */ });
/* harmony import */ var _chunks_chunk_XNEONNEJ_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2409);
/* harmony import */ var _chunks_chunk_B3BW2AY6_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1346);





/***/ })

}]);
//# sourceMappingURL=3457.js.map