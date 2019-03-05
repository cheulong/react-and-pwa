webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/reducers/article.js":
false,

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


var initialState = {
  articleList: [{
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
  }],
  article: {}
};

var articles = function articles() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
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
      return state.articleList;
      break;

    case 'SHOW_ARTICLE':
      console.log(action.payload);
      return action.payload;
      break;

    case 'REMOVE_ARTICLE':
      var _articles = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()([], state.articleList);

      _articles.splice(action.id, 1);

      return state = _articles;
      break;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (articles);

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


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  articles: _articles__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

/***/ })

})
//# sourceMappingURL=index.js.d73a4f9ede03de778e0f.hot-update.js.map