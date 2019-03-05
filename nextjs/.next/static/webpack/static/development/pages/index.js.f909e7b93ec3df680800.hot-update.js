webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/reducers/articles.js":
/*!************************************!*\
  !*** ./pages/reducers/articles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");


var articleList = [{
  "id": 1,
  "title": "<h2>1Duo Reges: constuctio interrete.</h2>",
  "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
}, {
  "id": 2,
  "title": "<h2>2Duo Reges: constuctio interrete.</h2>",
  "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
}, {
  "id": 3,
  "title": "<h2>3Duo Reges: constuctio interrete.</h2>",
  "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
}, {
  "id": 4,
  "title": "<h2>4Duo Reges: constuctio interrete.</h2>",
  "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
}];

var articles = function articles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : articleList;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state), [{
        id: action.id,
        text: action.text,
        completed: false
      }]);
      break;

    case 'SHOW_ARTICLES':
      return state;
      break;

    case 'SHOW_ARTICLE':
      console.log(action.payload);
      return action.payload;
      break;

    case 'REMOVE_ARTICLE':
      var _articles = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()([], state);

      _articles.splice(action.id, 1);

      return state = _articles;
      break;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (articles);

/***/ })

})
//# sourceMappingURL=index.js.f909e7b93ec3df680800.hot-update.js.map