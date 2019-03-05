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
      console.log(_this.props.articles.articles.articles.articleList);
      return _this.props.articles.articles.articles.articleList.map(function (article, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_component_article_brief__WEBPACK_IMPORTED_MODULE_11__["default"], {
          index: index,
          selectArticle: _this.selectArticle,
          article: article,
          deleteContact: _this.deleteContact,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
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
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-893774959" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-893774959" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-893774959" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-893774959",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      })), this.renderArticlesList()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "893774959",
        __self: this
      }, ".App.jsx-893774959{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-893774959{text-align:start;color:gray;margin-top:50px;}.article-title.jsx-893774959{margin:0;}.article-date.jsx-893774959{margin:0;}a.jsx-893774959{-webkit-text-decoration:none;text-decoration:none;}.remove-btn.jsx-893774959{color:red;}.title.jsx-893774959{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-893774959 h2.jsx-893774959{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlcy1wYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDUyxBQUc2QixBQU9ELEFBT1IsQUFJQSxBQUlZLEFBSVgsQUFHZSxBQU9kLFNBckJiLEFBSUEsQ0FRQSxDQVVBLE1BN0JhLENBUEQsT0E2Qk8sR0E1QkwsQUFPSSxZQU5MLEVBNEJPLEVBcEJwQixNQVlBLENBbkJvQixTQTZCcEIsU0E1QkEiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xccGFnZXNcXGFydGljbGVzLXBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzaG93QXJ0aWNsZSwgcmVtb3ZlQXJ0aWNsZSwgc2hvd0FydGljbGVzIH0gZnJvbSAnLi9hY3Rpb25zJ1xyXG5pbXBvcnQgQXJ0aWNsZUJyaWVmIGZyb20gJy4uL2NvbXBvbmVudC9hcnRpY2xlLWJyaWVmJztcclxuXHJcbmNsYXNzIEFydGljbGVzUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlckFydGljbGVzTGlzdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYXJ0aWNsZXMuYXJ0aWNsZXMuYXJ0aWNsZXMuYXJ0aWNsZUxpc3QpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5hcnRpY2xlcy5hcnRpY2xlcy5hcnRpY2xlcy5hcnRpY2xlTGlzdC5tYXAoKGFydGljbGUsaW5kZXgpID0+IDxBcnRpY2xlQnJpZWYgaW5kZXg9e2luZGV4fSBzZWxlY3RBcnRpY2xlPXt0aGlzLnNlbGVjdEFydGljbGV9IGFydGljbGU9e2FydGljbGV9IGRlbGV0ZUNvbnRhY3Q9e3RoaXMuZGVsZXRlQ29udGFjdH0vPilcclxuICB9XHJcbiAgZGVsZXRlQ29udGFjdCA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5kZWxldGVDb250YWN0MShpbmRleCk7XHJcbiAgfVxyXG4gIHNlbGVjdEFydGljbGUgPSAoZSwgYXJ0aWNsZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5zaG93QXJ0aWNsZShhcnRpY2xlKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuYXJ0aWNsZXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkFydGljbGVzPC9oMT5cclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckFydGljbGVzTGlzdCgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2AgXHJcbiAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYXJ0aWNsZS10aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hcnRpY2xlLWRhdGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJlbW92ZS1idG4ge1xyXG4gICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcclxuICBhcnRpY2xlczogc2hvd0FydGljbGVzKHN0YXRlKVxyXG4gIFxyXG59KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gICAgZGVsZXRlQ29udGFjdDE6IGluZGV4ID0+ZGlzcGF0Y2gocmVtb3ZlQXJ0aWNsZShpbmRleCkpLFxyXG4gICAgc2hvd0FydGljbGU6IGFydGljbGUgPT5kaXNwYXRjaChzaG93QXJ0aWNsZShhcnRpY2xlKSlcclxuICB9KVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcyxcclxuICBtYXBEaXNwYXRjaFRvUHJvcHNcclxuKShBcnRpY2xlc1BhZ2UpO1xyXG5cclxuIl19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\articles-page.js */"));
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
//# sourceMappingURL=index.js.5ce3b203e158e15a4740.hot-update.js.map