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
    key: "componentDidMount",
    value: function componentDidMount() {
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
      }, ".App.jsx-2343279872{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-2343279872{text-align:start;color:gray;margin-top:50px;}.article-title.jsx-2343279872{margin:0;}.article-date.jsx-2343279872{margin:0;}a.jsx-2343279872{-webkit-text-decoration:none;text-decoration:none;}.remove-btn.jsx-2343279872{color:red;}.title.jsx-2343279872{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-2343279872 h2.jsx-2343279872{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCVyxBQUcrQixBQU9ILEFBT1AsQUFJQSxBQUlZLEFBSVgsQUFHZSxBQU9kLFNBckJiLEFBSUEsQ0FRQSxDQVVBLE1BN0JhLENBUEQsT0E2Qk8sR0E1QmhCLEFBT2UsWUFOTixFQTRCUSxFQXBCcEIsTUFZRCxDQW5CcUIsU0E2QnBCLFNBNUJBIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJ1xyXG5pbXBvcnQgQWRkQ291bnQgZnJvbSAnLi9BZGRDb3VudCdcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLCBzZWxlY3RBcnRpY2xlLHNob3dBcnRpY2xlcyB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY2xhc3MgQXJ0aWNsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICBhcnRpY2xlcz0nJztcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuYXJ0aWNsZXMgPSB0aGlzLnByb3BzLnNob3dBcnRpY2xlcygpO1xyXG4gICAgY29uc29sZS5sb2coJ2FydGljZWwnLHRoaXMuYXJ0aWNsZXMpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3QgeyBkZWxldGVBcnRpY2xlLCBzZWxlY3RBcnRpY2xlIH0gPSB0aGlzLnByb3BzXHJcbiAgICBcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiB7dGhpcy5hcnRpY2xlcy5tYXAoKGFydGljbGUpID0+ICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtYnJpZWYtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9hcnRpY2xlJywgcXVlcnk6IHsgaWQ6IGAke2FydGljbGUuaWR9YCB9IH19IGFzPXtcIi9hcnRpY2xlL1wiK2Ake2FydGljbGUuaWR9YH0+PHNwYW4gb25DbGljaz0geygpPT4gc2VsZWN0QXJ0aWNsZShhcnRpY2xlKX0gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBhcnRpY2xlLnRpdGxlfX0+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kYXRlXCI+PHNtYWxsPjIwOjQxIHwgMyBGZWIgMi0xOSB8IDxMaW5rIGhyZWY9XCIvZWRpdC1hcnRpY2xlXCIgPjxzcGFuPiBFZGl0PC9zcGFuPjwvTGluaz4gfCA8YnV0dG9uIG9uQ2xpY2s9IHsoKT0+IGRlbGV0ZUFydGljbGUoYXJ0aWNsZS5pZCl9PjxzcGFuIGNsYXNzTmFtZT1cInJlbW92ZS1idG5cIj4gUmVtb3ZlIDwvc3Bhbj48L2J1dHRvbj48L3NtYWxsPjwvcD5cclxuIDwvZGl2Pil9ICovfVxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YCBcclxuICAgICAgICAgIC5BcHAge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgd2lkdGg6IDgwJTtcclxubWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XHJcbiAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5hcnRpY2xlLWRhdGUge1xyXG4gICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICBhIHtcclxuICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAucmVtb3ZlLWJ0biB7XHJcbiAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBgfVxyXG4gICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZWRpdC1hcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICA8YT5OYXZpZ2F0ZTwvYT5cclxuICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgIDwvbmF2PlxyXG4gPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4gIFxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBhcnRpY2xlcyB9KSA9PiAoeyBhcnRpY2xlcyB9KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGRlbGV0ZUFydGljbGU6IGluZGV4ID0+ZGlzcGF0Y2gocmVtb3ZlQXJ0aWNsZShpbmRleCkpLFxyXG4gIHNlbGVjdEFydGljbGU6IGFydGljbGUgPT5kaXNwYXRjaChzZWxlY3RBcnRpY2xlKGFydGljbGUpKSxcclxuICBzaG93QXJ0aWNsZXM6ICgpID0+ZGlzcGF0Y2goc2hvd0FydGljbGVzKCkpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShBcnRpY2xlcykiXX0= */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\Articles.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("nav", {
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
//# sourceMappingURL=index.js.15ab19b0474b2b22f297.hot-update.js.map