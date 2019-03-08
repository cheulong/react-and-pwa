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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Clock */ "./components/Clock.js");
/* harmony import */ var _AddCount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AddCount */ "./components/AddCount.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store */ "./store.js");





var _jsxFileName = "D:\\web\\study\\react-and-pwa\\nextjs\\components\\Articles.js";








var Articles =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Articles, _Component);

  function Articles() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Articles);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Articles).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Articles, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.props.showArticles();
      console.log('articel', this.props.articles);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          articles = _this$props.articles,
          deleteArticle = _this$props.deleteArticle,
          selectArticle = _this$props.selectArticle;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2343279872" + " " + "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2343279872" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2343279872" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-2343279872" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Articles")), articles.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-2343279872" + " " + "article-brief-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: {
            pathname: '/article',
            query: {
              id: "".concat(article.id)
            }
          },
          as: "/article/" + "".concat(article.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          onClick: function onClick() {
            return selectArticle(article);
          },
          dangerouslySetInnerHTML: {
            __html: article.title
          },
          className: "jsx-2343279872",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2343279872" + " " + "article-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", {
          className: "jsx-2343279872",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/edit-article",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          onClick: function onClick() {
            return selectArticle(article);
          },
          className: "jsx-2343279872",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, " Edit")), " | ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          onClick: function onClick() {
            return deleteArticle(article.id);
          },
          className: "jsx-2343279872",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-2343279872" + " " + "remove-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, " Remove ")))));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2343279872",
        __self: this
      }, ".App.jsx-2343279872{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-2343279872{text-align:start;color:gray;margin-top:50px;}.article-title.jsx-2343279872{margin:0;}.article-date.jsx-2343279872{margin:0;}a.jsx-2343279872{-webkit-text-decoration:none;text-decoration:none;}.remove-btn.jsx-2343279872{color:red;}.title.jsx-2343279872{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-2343279872 h2.jsx-2343279872{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCVyxBQUcrQixBQU9ILEFBT1AsQUFJQSxBQUlZLEFBSVgsQUFHZSxBQU9kLFNBckJiLEFBSUEsQ0FRQSxDQVVBLE1BN0JhLENBUEQsT0E2Qk8sR0E1QmhCLEFBT2UsWUFOTixFQTRCUSxFQXBCcEIsTUFZRCxDQW5CcUIsU0E2QnBCLFNBNUJBIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJ1xyXG5pbXBvcnQgQWRkQ291bnQgZnJvbSAnLi9BZGRDb3VudCdcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLCBzZWxlY3RBcnRpY2xlLHNob3dBcnRpY2xlcyB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY2xhc3MgQXJ0aWNsZXMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuc2hvd0FydGljbGVzKCk7XHJcbiAgICBjb25zb2xlLmxvZygnYXJ0aWNlbCcsdGhpcy5wcm9wcy5hcnRpY2xlcyk7XHJcbiAgICBcclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB7YXJ0aWNsZXMsIGRlbGV0ZUFydGljbGUsIHNlbGVjdEFydGljbGUgfSA9IHRoaXMucHJvcHNcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BcnRpY2xlczwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1icmllZi1jb250YWluZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL2FydGljbGUnLCBxdWVyeTogeyBpZDogYCR7YXJ0aWNsZS5pZH1gIH0gfX0gYXM9e1wiL2FydGljbGUvXCIrYCR7YXJ0aWNsZS5pZH1gfT48c3BhbiBvbkNsaWNrPSB7KCk9PiBzZWxlY3RBcnRpY2xlKGFydGljbGUpfSAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGFydGljbGUudGl0bGV9fT48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+MjA6NDEgfCAzIEZlYiAyLTE5IHwgPExpbmsgaHJlZj1cIi9lZGl0LWFydGljbGVcIiA+PHNwYW4gb25DbGljaz0geygpPT4gc2VsZWN0QXJ0aWNsZShhcnRpY2xlKX0+IEVkaXQ8L3NwYW4+PC9MaW5rPiB8IDxidXR0b24gb25DbGljaz0geygpPT4gZGVsZXRlQXJ0aWNsZShhcnRpY2xlLmlkKX0+PHNwYW4gY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPiBSZW1vdmUgPC9zcGFuPjwvYnV0dG9uPjwvc21hbGw+PC9wPlxyXG4gPC9kaXY+KX1cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2AgXHJcbiAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbm1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgLmFydGljbGUtdGl0bGUge1xyXG4gICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAuYXJ0aWNsZS1kYXRlIHtcclxuICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgLnJlbW92ZS1idG4ge1xyXG4gICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAucGFnZS10aXRsZSBoMiB7XHJcbiAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgYH1cclxuICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICA8TGluayBocmVmPVwiL2FkZC1hcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICA8YT5BZGQ8L2E+XHJcbiAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICA8L25hdj5cclxuIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuICBcclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgYXJ0aWNsZXMgfSkgPT4gKHsgYXJ0aWNsZXMgfSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBkZWxldGVBcnRpY2xlOiBpbmRleCA9PmRpc3BhdGNoKHJlbW92ZUFydGljbGUoaW5kZXgpKSxcclxuICBzZWxlY3RBcnRpY2xlOiBhcnRpY2xlID0+ZGlzcGF0Y2goc2VsZWN0QXJ0aWNsZShhcnRpY2xlKSksXHJcbiAgc2hvd0FydGljbGVzOiAoKSA9PmRpc3BhdGNoKHNob3dBcnRpY2xlcygpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcclxuICBtYXBTdGF0ZVRvUHJvcHMsXHJcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzXHJcbikoQXJ0aWNsZXMpIl19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\Articles.js */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
        className: "jsx-2343279872",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/add-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-2343279872",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "Add"))));
    }
  }]);

  return Articles;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var articles = _ref.articles;
  return {
    articles: articles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: function deleteArticle(index) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["removeArticle"])(index));
    },
    selectArticle: function selectArticle(article) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["selectArticle"])(article));
    },
    showArticles: function showArticles() {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_11__["showArticles"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Articles));

/***/ })

})
//# sourceMappingURL=index.js.53a8ab92a21ff4c158bd.hot-update.js.map