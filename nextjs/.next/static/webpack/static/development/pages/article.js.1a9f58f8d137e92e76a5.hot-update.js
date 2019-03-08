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
    key: "seeMore",
    value: function seeMore(text) {
      if (text.length > 10) {
        return text.slice(0, 10) + '...';
      } else {
        return text;
      }
    }
  }, {
    key: "changeArticle",
    value: function changeArticle(id, symbol) {
      this.props.changeArticle({
        id: id,
        symbol: symbol
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
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "sideBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
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
          className: "jsx-664555662" + " " + ((article.id === selectedArticle.id ? "active" : "") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-664555662" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.title
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-664555662" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/edit-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " Edit ")), "| ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          deleteArticle(selectedArticle.id), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.back();
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-664555662" + " " + "remove-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, " Remove "))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.content
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        onClick: function onClick() {
          return _this3.changeArticle(selectedArticle.id, '-');
        },
        className: "jsx-664555662" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "\u02C2", this.seeMore(articles[selectedArticle.id].title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        onClick: function onClick() {
          return _this3.changeArticle(selectedArticle.id, '+');
        },
        className: "jsx-664555662" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, this.seeMore('1Duo Reges: constuctio interrete.'), "\u02C3"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "664555662",
        __self: this
      }, ".main.jsx-664555662{margin-bottom:150px;}.row.jsx-664555662{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:60%;margin:auto;}.sideBar.jsx-664555662{float:left;height:100vh;background:#EBEBEB;width:15%;}.App.jsx-664555662{text-align:center;margin:auto;margin-top:0;color:gray;font-family:Arial;}.content.jsx-664555662{text-align:start;color:gray;margin-top:50px;}.active.jsx-664555662{background:white;}li.jsx-664555662:hover{background:white;}.article-subtitle.jsx-664555662{margin:0;}.article-content.jsx-664555662{text-align:start;}.article-content.jsx-664555662 h2.jsx-664555662{margin-top:0;}.title.jsx-664555662{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-664555662 h2.jsx-664555662{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HVyxBQUdnQyxBQUdQLEFBTUQsQUFPUyxBQU9ILEFBTUEsQUFHQyxBQUdULEFBSVEsQUFHTCxBQUdhLEFBT2QsU0FoQmIsRUExQmUsQUEyQ2YsRUFWQSxJQW5CYyxBQU1iLEFBR0EsQUFPRCxDQXZCSSxFQWhCSixJQVVvQixDQW1DRCxHQXJCQSxFQVBmLFlBNkJnQixDQW5DVCxBQU9FLENBUVosU0FkRCxDQU9xQixNQTZCckIsWUE1QkMsRUFqQjhCLG1IQUNwQixVQUNFLFlBQ2IiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xccGFnZXNcXGFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLHNlbGVjdEFydGljbGUsY2hhbmdlQXJ0aWNsZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KSB7XHJcbiAgICByZXR1cm4ge3F1ZXJ5fVxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtjb3VudGVyOiAwLCBsb2FkaW5nOiB0cnVlfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSgpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHN0YXJ0VGltZSgpe1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudGVyKVxyXG4gICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAxfSk7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudGVyPjMpe1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICAgICAgdGhpcy5jbGVhckludGVydGVydmFsKCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gIGNsZWFySW50ZXJ0ZXJ2YWwoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOjB9KTtcclxuICB9XHJcbiAgb25zZWxlY3RBcnRpY2xlKGlkKXtcclxuICAgIHRoaXMucHJvcHMuc2VsZWN0QXJ0aWNsZTEoaWQpO1xyXG4gICAgdGhpcy5zdGFydFRpbWUoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pO1xyXG5cclxuICB9XHJcbiAgc2VlTW9yZSh0ZXh0KXtcclxuICAgIGlmKHRleHQubGVuZ3RoPjEwKXtcclxuICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgMTApKycuLi4nO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgY2hhbmdlQXJ0aWNsZShpZCxzeW1ib2wpe1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VBcnRpY2xlKHtpZDogaWQsIHN5bWJvbDpzeW1ib2x9KVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdGVkQXJ0aWNsZSwgYXJ0aWNsZXN9PSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdoaScsdGhpcy5wcm9wcy5hY3RpdmVBcnRpY2xlLmFydGljbGUuYWN0aXZlQXJ0aWNsZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Lyoge3RoaXMuc3RhdGUubG9hZGluZyAmJiA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmNvdW50ZXJ9XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkFwcFwiPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICB7YCBcclxuICAgICAgICAgICAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj59ICovfVxyXG4gICAgICAgIHtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudCBBcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVCYXJcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT57cmV0dXJuIDxsaSBjbGFzc05hbWU9eyhhcnRpY2xlLmlkPT09c2VsZWN0ZWRBcnRpY2xlLmlkID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKT0+IHRoaXMub25zZWxlY3RBcnRpY2xlKGFydGljbGUpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFydGljbGUudGl0bGUgfX0+PC9saT59ICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPScvJz48aDI+Jmx0OyBob21lPC9oMj48L0xpbms+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BcnRpY2xlczwvaDE+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZWxlY3RlZEFydGljbGUudGl0bGUgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+MjA6NDEgfCAzIEZlYiAyLTE5IHwgPExpbmsgaHJlZj1cIi9lZGl0LWFydGljbGVcIj48c3Bhbj4gRWRpdCA8L3NwYW4+PC9MaW5rPnwgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e2RlbGV0ZUFydGljbGUoc2VsZWN0ZWRBcnRpY2xlLmlkKSAsIFJvdXRlci5iYWNrKCl9fT48TGluayBocmVmPScvJz48c3BhbiBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCI+IFJlbW92ZSA8L3NwYW4+PC9MaW5rPjwvYnV0dG9uPjwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2VsZWN0ZWRBcnRpY2xlLmNvbnRlbnQgfX0+PC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxlZnRcIiBvbkNsaWNrPXsoKT0+dGhpcy5jaGFuZ2VBcnRpY2xlKHNlbGVjdGVkQXJ0aWNsZS5pZCwnLScpfT4mIzcwNjt7dGhpcy5zZWVNb3JlKGFydGljbGVzW3NlbGVjdGVkQXJ0aWNsZS5pZF0udGl0bGUpfTwvaDI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJpZ2h0XCIgb25DbGljaz17KCk9PnRoaXMuY2hhbmdlQXJ0aWNsZShzZWxlY3RlZEFydGljbGUuaWQsJysnKX0+e3RoaXMuc2VlTW9yZSgnMUR1byBSZWdlczogY29uc3R1Y3RpbyBpbnRlcnJldGUuJyl9JiM3MDc7PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6NjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zaWRlQmFye1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG4gICAgICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuQXBwIHtcclxuXHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLmFydGljbGUtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlbGVjdGVkQXJ0aWNsZSwgYXJ0aWNsZXMgfSkgPT4gKHsgc2VsZWN0ZWRBcnRpY2xlLGFydGljbGVzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGVsZXRlQXJ0aWNsZTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSksXHJcbiAgc2VsZWN0QXJ0aWNsZTE6IGFydGljbGUgPT5kaXNwYXRjaChzZWxlY3RBcnRpY2xlKGFydGljbGUpKSxcclxuICBjaGFuZ2VBcnRpY2xlOiBvcmRlciA9PiBkaXNwYXRjaChjaGFuZ2VBcnRpY2xlKG9yZGVyKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQXJ0aWNsZSk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")));
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
    },
    changeArticle: function changeArticle(order) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_10__["changeArticle"])(order));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Article));

/***/ })

})
//# sourceMappingURL=article.js.1a9f58f8d137e92e76a5.hot-update.js.map