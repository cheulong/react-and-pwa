webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/articles-page.js":
/*!********************************!*\
  !*** ./pages/articles-page.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions */ "./pages/actions/index.js");
/* harmony import */ var _component_article_brief__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/article-brief */ "./component/article-brief.js");







var _jsxFileName = "D:\\web\\study\\react-and-pwa\\nextjs\\pages\\articles-page.js";






var ArticlesPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ArticlesPage, _Component);

  function ArticlesPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ArticlesPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ArticlesPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderArticlesList", function () {
      return _this.props.articles.articles.articles.map(function (article, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_article_brief__WEBPACK_IMPORTED_MODULE_11__["default"], {
          index: index,
          selectArticle: _this.selectArticle,
          article: article,
          deleteContact: _this.deleteContact,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deleteContact", function (e, index) {
      e.preventDefault();

      _this.props.deleteContact1(index);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "selectArticle", function (e, article) {
      e.preventDefault();

      _this.props.showArticle(article);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ArticlesPage, [{
    key: "render",
    value: function render() {
      console.log(this.props.articles);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-893774959" + " " + "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-893774959" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-893774959" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-893774959" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-893774959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), this.renderArticlesList()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "893774959",
        __self: this
      }, ".App.jsx-893774959{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-893774959{text-align:start;color:gray;margin-top:50px;}.article-title.jsx-893774959{margin:0;}.article-date.jsx-893774959{margin:0;}a.jsx-893774959{-webkit-text-decoration:none;text-decoration:none;}.remove-btn.jsx-893774959{color:red;}.title.jsx-893774959{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-893774959 h2.jsx-893774959{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlcy1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDUyxBQUc2QixBQU9ELEFBT1IsQUFJQSxBQUlZLEFBSVgsQUFHZSxBQU9kLFNBckJiLEFBSUEsQ0FRQSxDQVVBLE1BN0JhLENBUEQsT0E2Qk8sR0E1QkwsQUFPSSxZQU5MLEVBNEJPLEVBcEJwQixNQVlBLENBbkJvQixTQTZCcEIsU0E1QkEiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xccGFnZXNcXGFydGljbGVzLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzaG93QXJ0aWNsZSwgcmVtb3ZlQXJ0aWNsZSwgc2hvd0FydGljbGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgQXJ0aWNsZUJyaWVmIGZyb20gJy4uL2NvbXBvbmVudC9hcnRpY2xlLWJyaWVmJztcclxuXHJcbmNsYXNzIEFydGljbGVzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlckFydGljbGVzTGlzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmFydGljbGVzLmFydGljbGVzLmFydGljbGVzLm1hcCgoYXJ0aWNsZSxpbmRleCkgPT4gPEFydGljbGVCcmllZiBpbmRleD17aW5kZXh9IHNlbGVjdEFydGljbGU9e3RoaXMuc2VsZWN0QXJ0aWNsZX0gYXJ0aWNsZT17YXJ0aWNsZX0gZGVsZXRlQ29udGFjdD17dGhpcy5kZWxldGVDb250YWN0fS8+KVxyXG4gIH1cclxuICBkZWxldGVDb250YWN0ID0gKGUsIGluZGV4KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLmRlbGV0ZUNvbnRhY3QxKGluZGV4KTtcclxuICB9XHJcbiAgc2VsZWN0QXJ0aWNsZSA9IChlLCBhcnRpY2xlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0aGlzLnByb3BzLnNob3dBcnRpY2xlKGFydGljbGUpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgY29uc29sZS5sb2codGhpcy5wcm9wcy5hcnRpY2xlcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3RoaXMucmVuZGVyQXJ0aWNsZXNMaXN0KCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YCBcclxuICAgICAgICAuQXBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hcnRpY2xlLXRpdGxlIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmFydGljbGUtZGF0ZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmVtb3ZlLWJ0biB7XHJcbiAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucGFnZS10aXRsZSBoMiB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xyXG4gIGFydGljbGVzOiBzaG93QXJ0aWNsZXMoc3RhdGUpXHJcbiAgXHJcbn0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgICBkZWxldGVDb250YWN0MTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSksXHJcbiAgICBzaG93QXJ0aWNsZTogYXJ0aWNsZSA9PmRpc3BhdGNoKHNob3dBcnRpY2xlKGFydGljbGUpKVxyXG4gIH0pXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEFydGljbGVzUGFnZSk7XHJcblxyXG4iXX0= */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\articles-page.js */"));
    }
  }]);

  return ArticlesPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: Object(_actions__WEBPACK_IMPORTED_MODULE_10__["showArticles"])(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteContact1: function deleteContact1(index) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["removeArticle"])(index));
    },
    showArticle: function showArticle(article) {
      return dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_10__["showArticle"])(article));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(ArticlesPage));

/***/ })

})
//# sourceMappingURL=index.js.f62c194dccad38966f4b.hot-update.js.map