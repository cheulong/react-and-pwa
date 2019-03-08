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
      }, ".App.jsx-2343279872{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-2343279872{text-align:start;color:gray;margin-top:50px;}.article-title.jsx-2343279872{margin:0;}.article-date.jsx-2343279872{margin:0;}a.jsx-2343279872{-webkit-text-decoration:none;text-decoration:none;}.remove-btn.jsx-2343279872{color:red;}.title.jsx-2343279872{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-2343279872 h2.jsx-2343279872{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCVyxBQUcrQixBQU9ILEFBT1AsQUFJQSxBQUlZLEFBSVgsQUFHZSxBQU9kLFNBckJiLEFBSUEsQ0FRQSxDQVVBLE1BN0JhLENBUEQsT0E2Qk8sR0E1QmhCLEFBT2UsWUFOTixFQTRCUSxFQXBCcEIsTUFZRCxDQW5CcUIsU0E2QnBCLFNBNUJBIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBDbG9jayBmcm9tICcuL0Nsb2NrJ1xyXG5pbXBvcnQgQWRkQ291bnQgZnJvbSAnLi9BZGRDb3VudCdcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLCBzZWxlY3RBcnRpY2xlIH0gZnJvbSAnLi4vc3RvcmUnXHJcblxyXG5jbGFzcyBBcnRpY2xlcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgIGFydGljbGVzPScnO1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5hcnRpY2xlcyA9IHRoaXMucHJvcHMuc2hvd0FydGljbGVzKCk7XHJcbiAgICBjb25zb2xlLmxvZygnYXJ0aWNlbCcsdGhpcy5hcnRpY2xlcyk7XHJcbiAgICBcclxuICB9XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdEFydGljbGUgfSA9IHRoaXMucHJvcHNcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BcnRpY2xlczwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIHt0aGlzLmFydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT4gIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1icmllZi1jb250YWluZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPXt7IHBhdGhuYW1lOiAnL2FydGljbGUnLCBxdWVyeTogeyBpZDogYCR7YXJ0aWNsZS5pZH1gIH0gfX0gYXM9e1wiL2FydGljbGUvXCIrYCR7YXJ0aWNsZS5pZH1gfT48c3BhbiBvbkNsaWNrPSB7KCk9PiBzZWxlY3RBcnRpY2xlKGFydGljbGUpfSAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGFydGljbGUudGl0bGV9fT48L3NwYW4+PC9MaW5rPlxyXG4gICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+MjA6NDEgfCAzIEZlYiAyLTE5IHwgPExpbmsgaHJlZj1cIi9lZGl0LWFydGljbGVcIiA+PHNwYW4+IEVkaXQ8L3NwYW4+PC9MaW5rPiB8IDxidXR0b24gb25DbGljaz0geygpPT4gZGVsZXRlQXJ0aWNsZShhcnRpY2xlLmlkKX0+PHNwYW4gY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPiBSZW1vdmUgPC9zcGFuPjwvYnV0dG9uPjwvc21hbGw+PC9wPlxyXG4gPC9kaXY+KX0gKi99XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICB3aWR0aDogODAlO1xyXG5tYXJnaW46IGF1dG87XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5hcnRpY2xlLXRpdGxlIHtcclxuICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgLmFydGljbGUtZGF0ZSB7XHJcbiAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIGEge1xyXG4gICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIC5yZW1vdmUtYnRuIHtcclxuICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGB9XHJcbiAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgPExpbmsgaHJlZj1cIi9lZGl0LWFydGljbGVcIj5cclxuICAgICAgICAgICAgIDxhPk5hdmlnYXRlPC9hPlxyXG4gICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgPC9uYXY+XHJcbiA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGFydGljbGVzIH0pID0+ICh7IGFydGljbGVzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGVsZXRlQXJ0aWNsZTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSksXHJcbiAgc2VsZWN0QXJ0aWNsZTogYXJ0aWNsZSA9PmRpc3BhdGNoKHNlbGVjdEFydGljbGUoYXJ0aWNsZSkpLFxyXG4gIHNob3dBcnRpY2xlczogKCkgPT5kaXNwYXRjaChzaG93QXJ0aWNsZXMoKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEFydGljbGVzKSJdfQ== */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\Articles.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("nav", {
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
    showArticles: function (_showArticles) {
      function showArticles() {
        return _showArticles.apply(this, arguments);
      }

      showArticles.toString = function () {
        return _showArticles.toString();
      };

      return showArticles;
    }(function () {
      return dispatch(showArticles());
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Articles));

/***/ })

})
//# sourceMappingURL=index.js.4b6ea371188267af3eac.hot-update.js.map