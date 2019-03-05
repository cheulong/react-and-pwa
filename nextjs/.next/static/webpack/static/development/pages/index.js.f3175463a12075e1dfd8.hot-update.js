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
      console.log(action.payload);
      return action.payload;
      break;
  }

  return state;
});

/***/ })

})
//# sourceMappingURL=index.js.f3175463a12075e1dfd8.hot-update.js.map