webpackHotUpdate("static\\development\\pages\\article.js",{

/***/ "./pages/article.js":
/*!**************************!*\
  !*** ./pages/article.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store */ "./store.js");





var _jsxFileName = "D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js";







var Article =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Article, _Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Article, null, [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var query = _ref.query;
      return {
        query: query
      };
    }
  }]);

  function Article(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Article);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_2__["default"])(Article).call(this, props));
    _this.state = {
      counter: 0,
      loading: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Article, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTime();
    }
  }, {
    key: "startTime",
    value: function startTime() {
      var _this2 = this;

      this.interval = setInterval(function () {
        console.log(_this2.state.counter);

        _this2.setState({
          counter: _this2.state.counter + 1
        });

        if (_this2.state.counter > 3) {
          _this2.setState({
            loading: false
          });

          _this2.clearInterterval();
        }
      }, 1000);
    }
  }, {
    key: "clearInterterval",
    value: function clearInterterval() {
      clearInterval(this.interval);
      this.setState({
        counter: 0
      });
    }
  }, {
    key: "onselectArticle",
    value: function onselectArticle(id) {
      this.props.selectArticle1(id);
      this.startTime();
      this.setState({
        loading: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          deleteArticle = _this$props.deleteArticle,
          selectedArticle = _this$props.selectedArticle,
          articles = _this$props.articles; // console.log('hi',this.props.activeArticle.article.activeArticle);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-947943603" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-947943603" + " " + "sideBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, articles.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          onClick: function onClick() {
            return _this3.onselectArticle(article);
          },
          dangerouslySetInnerHTML: {
            __html: article.title
          },
          className: "jsx-947943603" + " " + ((article.id === selectedArticle.id ? "active" : "") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-947943603" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-947943603" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.title
        },
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-947943603" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/edit-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " Edit ")), "| ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          deleteArticle(selectedArticle.id), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.back();
        },
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-947943603" + " " + "remove-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " Remove "))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.content
        },
        className: "jsx-947943603",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-947943603" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-947943603" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "sfsfsfsfsfsf"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-947943603" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "sfsfsfsfsfsf"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "947943603",
        __self: this
      }, ".row.jsx-947943603{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:60%;margin:auto;}.sideBar.jsx-947943603{float:left;height:100vh;background:#EBEBEB;width:15%;}.App.jsx-947943603{text-align:center;margin:auto;margin-top:0;color:gray;font-family:Arial;}.content.jsx-947943603{text-align:start;color:gray;margin-top:50px;}.active.jsx-947943603{background:white;}li.jsx-947943603:hover{background:white;}.article-subtitle.jsx-947943603{margin:0;}.article-content.jsx-947943603{text-align:start;}.article-content.jsx-947943603 h2.jsx-947943603{margin-top:0;}.title.jsx-947943603{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-947943603 h2.jsx-947943603{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGVyxBQUd5QixBQU1ELEFBT1MsQUFPSCxBQU1BLEFBR0MsQUFHVCxBQUlRLEFBR0wsQUFHYSxBQU9kLFNBaEJiLEVBMUJlLEFBMkNmLEVBVkEsSUFuQmMsQUFNYixBQUdBLEFBT0QsQ0F2QkksTUFOZ0IsQ0FtQ0QsR0FyQkEsRUFQZixZQTZCZ0IsQ0FuQ1QsQUFPRSxDQVFaLFNBZEQsQ0FPcUIsTUE2QnJCLFlBNUJDLEVBakI4QixtSEFDcEIsVUFDRSxZQUNiIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVtb3ZlQXJ0aWNsZSxzZWxlY3RBcnRpY2xlIH0gZnJvbSAnLi4vc3RvcmUnXHJcblxyXG5jbGFzcyBBcnRpY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHtxdWVyeX0pIHtcclxuICAgIHJldHVybiB7cXVlcnl9XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge2NvdW50ZXI6IDAsIGxvYWRpbmc6IHRydWV9O1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuc3RhcnRUaW1lKCk7XHJcbiAgICBcclxuICB9XHJcbiAgc3RhcnRUaW1lKCl7XHJcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50ZXIpXHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IHRoaXMuc3RhdGUuY291bnRlciArIDF9KTtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ZXI+Myl7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSk7XHJcbiAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ0ZXJ2YWwoKTtcclxuICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICB9XHJcbiAgY2xlYXJJbnRlcnRlcnZhbCgpe1xyXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6MH0pO1xyXG4gIH1cclxuICBvbnNlbGVjdEFydGljbGUoaWQpe1xyXG4gICAgdGhpcy5wcm9wcy5zZWxlY3RBcnRpY2xlMShpZCk7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlfSk7XHJcblxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdGVkQXJ0aWNsZSwgYXJ0aWNsZXN9PSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdoaScsdGhpcy5wcm9wcy5hY3RpdmVBcnRpY2xlLmFydGljbGUuYWN0aXZlQXJ0aWNsZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Lyoge3RoaXMuc3RhdGUubG9hZGluZyAmJiA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmNvdW50ZXJ9XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkFwcFwiPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICB7YCBcclxuICAgICAgICAgICAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj59ICovfVxyXG4gICAgICAgIHtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudCBBcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVCYXJcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT57cmV0dXJuIDxsaSBjbGFzc05hbWU9eyhhcnRpY2xlLmlkPT09c2VsZWN0ZWRBcnRpY2xlLmlkID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKT0+IHRoaXMub25zZWxlY3RBcnRpY2xlKGFydGljbGUpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFydGljbGUudGl0bGUgfX0+PC9saT59ICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPScvJz48aDI+Jmx0OyBob21lPC9oMj48L0xpbms+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BcnRpY2xlczwvaDE+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2VsZWN0ZWRBcnRpY2xlLnRpdGxlIH19PjwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kYXRlXCI+PHNtYWxsPjIwOjQxIHwgMyBGZWIgMi0xOSB8IDxMaW5rIGhyZWY9XCIvZWRpdC1hcnRpY2xlXCI+PHNwYW4+IEVkaXQgPC9zcGFuPjwvTGluaz58IDxidXR0b24gb25DbGljaz17KCk9PntkZWxldGVBcnRpY2xlKHNlbGVjdGVkQXJ0aWNsZS5pZCkgLCBSb3V0ZXIuYmFjaygpfX0+PExpbmsgaHJlZj0nLyc+PHNwYW4gY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPiBSZW1vdmUgPC9zcGFuPjwvTGluaz48L2J1dHRvbj48L3NtYWxsPjwvcD5cclxuICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkQXJ0aWNsZS5jb250ZW50IH19PjwvZGl2PiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJsZWZ0XCI+c2ZzZnNmc2ZzZnNmPC9oMj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwicmlnaHRcIj5zZnNmc2ZzZnNmc2Y8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6NjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zaWRlQmFye1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG4gICAgICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuQXBwIHtcclxuXHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLmFydGljbGUtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlbGVjdGVkQXJ0aWNsZSwgYXJ0aWNsZXMgfSkgPT4gKHsgc2VsZWN0ZWRBcnRpY2xlLGFydGljbGVzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGVsZXRlQXJ0aWNsZTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSksXHJcbiAgc2VsZWN0QXJ0aWNsZTE6IGFydGljbGUgPT5kaXNwYXRjaChzZWxlY3RBcnRpY2xlKGFydGljbGUpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShBcnRpY2xlKTtcclxuIl19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var selectedArticle = _ref2.selectedArticle,
      articles = _ref2.articles;
  return {
    selectedArticle: selectedArticle,
    articles: articles
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: function deleteArticle(index) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_10__["removeArticle"])(index));
    },
    selectArticle1: function selectArticle1(article) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_10__["selectArticle"])(article));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Article));

/***/ })

})
//# sourceMappingURL=article.js.411ce23452cc91de79f4.hot-update.js.map