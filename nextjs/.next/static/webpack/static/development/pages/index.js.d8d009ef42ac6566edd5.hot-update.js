webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/reducers/article.js":
/*!***********************************!*\
  !*** ./pages/reducers/article.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ARTICLE_SELECT':
      return action.payload;
      break;
  }

  return state;
});

/***/ }),

/***/ "./pages/reducers/index.js":
/*!*********************************!*\
  !*** ./pages/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _articles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles */ "./pages/reducers/articles.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article */ "./pages/reducers/article.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  articles: _articles__WEBPACK_IMPORTED_MODULE_1__["default"],
  article: _article__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ })

})
//# sourceMappingURL=index.js.d8d009ef42ac6566edd5.hot-update.js.map