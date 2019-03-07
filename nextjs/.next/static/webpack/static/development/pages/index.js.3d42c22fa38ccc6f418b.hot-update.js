webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, serverRenderClock, startClock, addCount, showArticles, removeArticle, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCount", function() { return addCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArticles", function() { return showArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArticle", function() { return removeArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);





var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  articles: [{
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
  }]
};
var actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  SHOW_ARTICLES: 'SHOW_ARTICLES',
  REMOVE_ARTICLE: 'REMOVE_ARTICLE' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.TICK:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });
    // case actionTypes.ADD:
    //   return Object.assign({}, state, {
    //     count: state.count + 1
    //   })

    case actionTypes.SHOW_ARTICLES:
      return state.articleList;

    case actionTypes.REMOVE_ARTICLE:
      var articles = state.articles;
      console.log(articles.filter(function (val) {
        return val.id !== action.id;
      }));
    // return Object.assign({}, state, {
    //   articles: hi.filter( val => val !== action.id )
    // })

    default:
      return state;
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      light: !isServer,
      ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
    });
  };
};
var startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({
        type: actionTypes.TICK,
        light: true,
        ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
      });
    }, 1000);
  };
};
var addCount = function addCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ADD
    });
  };
};
var showArticles = function showArticles() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SHOW_ARTICLES
    });
  };
};
var removeArticle = function removeArticle(id) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.REMOVE_ARTICLE,
      id: id
    });
  };
};
var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
};

/***/ })

})
//# sourceMappingURL=index.js.3d42c22fa38ccc6f418b.hot-update.js.map