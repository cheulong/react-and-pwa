webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Articles.js":
/*!********************************!*\
  !*** ./components/Articles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Clock */ "./components/Clock.js");
/* harmony import */ var _AddCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AddCount */ "./components/AddCount.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../store */ "./store.js");







var _jsxFileName = "D:\\web\\study\\react-and-pwa\\nextjs\\components\\Articles.js";








var Articles =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Articles, _Component);

  function Articles() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Articles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Articles)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "articles", '');

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Articles, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.articles = this.props.showArticles();
      console.log('articel', this.articles);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          deleteArticle = _this$props.deleteArticle,
          selectArticle = _this$props.selectArticle;
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2343279872" + " " + "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2343279872" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-2343279872" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", {
        className: "jsx-2343279872" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "Articles"))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2343279872",
        __self: this
      }, ".App.jsx-2343279872{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-2343279872{text-align:start;color:gray;margin-top:50px;}.article-title.jsx-2343279872{margin:0;}.article-date.jsx-2343279872{margin:0;}a.jsx-2343279872{-webkit-text-decoration:none;text-decoration:none;}.remove-btn.jsx-2343279872{color:red;}.title.jsx-2343279872{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-2343279872 h2.jsx-2343279872{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCVyxBQUcrQixBQU9ILEFBT1AsQUFJQSxBQUlZLEFBSVgsQUFHZSxBQU9kLFNBckJiLEFBSUEsQ0FRQSxDQVVBLE1BN0JhLENBUEQsT0E2Qk8sR0E1QmhCLEFBT2UsWUFOTixFQTRCUSxFQXBCcEIsTUFZRCxDQW5CcUIsU0E2QnBCLFNBNUJBIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJ1xyXG5pbXBvcnQgQWRkQ291bnQgZnJvbSAnLi9BZGRDb3VudCdcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLCBzZWxlY3RBcnRpY2xlLHNob3dBcnRpY2xlcyB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY2xhc3MgQXJ0aWNsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICBhcnRpY2xlcz0nJztcclxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XHJcbiAgICB0aGlzLmFydGljbGVzID0gdGhpcy5wcm9wcy5zaG93QXJ0aWNsZXMoKTtcclxuICAgIGNvbnNvbGUubG9nKCdhcnRpY2VsJyx0aGlzLmFydGljbGVzKTtcclxuICAgIFxyXG4gIH1cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0QXJ0aWNsZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkFydGljbGVzPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Lyoge3RoaXMuYXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PiAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWJyaWVmLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6ICcvYXJ0aWNsZScsIHF1ZXJ5OiB7IGlkOiBgJHthcnRpY2xlLmlkfWAgfSB9fSBhcz17XCIvYXJ0aWNsZS9cIitgJHthcnRpY2xlLmlkfWB9PjxzcGFuIG9uQ2xpY2s9IHsoKT0+IHNlbGVjdEFydGljbGUoYXJ0aWNsZSl9ICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogYXJ0aWNsZS50aXRsZX19Pjwvc3Bhbj48L0xpbms+XHJcbiAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtZGF0ZVwiPjxzbWFsbD4yMDo0MSB8IDMgRmViIDItMTkgfCA8TGluayBocmVmPVwiL2VkaXQtYXJ0aWNsZVwiID48c3Bhbj4gRWRpdDwvc3Bhbj48L0xpbms+IHwgPGJ1dHRvbiBvbkNsaWNrPSB7KCk9PiBkZWxldGVBcnRpY2xlKGFydGljbGUuaWQpfT48c3BhbiBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCI+IFJlbW92ZSA8L3NwYW4+PC9idXR0b24+PC9zbWFsbD48L3A+XHJcbiA8L2Rpdj4pfSAqL31cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2AgXHJcbiAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbm1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgLmFydGljbGUtdGl0bGUge1xyXG4gICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAuYXJ0aWNsZS1kYXRlIHtcclxuICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgLnJlbW92ZS1idG4ge1xyXG4gICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAucGFnZS10aXRsZSBoMiB7XHJcbiAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgYH1cclxuICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICA8TGluayBocmVmPVwiL2VkaXQtYXJ0aWNsZVwiPlxyXG4gICAgICAgICAgICAgPGE+TmF2aWdhdGU8L2E+XHJcbiAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICA8L25hdj5cclxuIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICBcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgYXJ0aWNsZXMgfSkgPT4gKHsgYXJ0aWNsZXMgfSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBkZWxldGVBcnRpY2xlOiBpbmRleCA9PmRpc3BhdGNoKHJlbW92ZUFydGljbGUoaW5kZXgpKSxcclxuICBzZWxlY3RBcnRpY2xlOiBhcnRpY2xlID0+ZGlzcGF0Y2goc2VsZWN0QXJ0aWNsZShhcnRpY2xlKSksXHJcbiAgc2hvd0FydGljbGVzOiAoKSA9PmRpc3BhdGNoKHNob3dBcnRpY2xlcygpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoQXJ0aWNsZXMpIl19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\Articles.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("nav", {
        className: "jsx-2343279872",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/edit-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        className: "jsx-2343279872",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Navigate"))));
    }
  }]);

  return Articles;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var articles = _ref.articles;
  return {
    articles: articles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: function deleteArticle(index) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_13__["removeArticle"])(index));
    },
    selectArticle: function selectArticle(article) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_13__["selectArticle"])(article));
    },
    showArticles: function showArticles() {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_13__["showArticles"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Articles));

/***/ })

})
//# sourceMappingURL=index.js.1a6438772229c73d5b18.hot-update.js.map