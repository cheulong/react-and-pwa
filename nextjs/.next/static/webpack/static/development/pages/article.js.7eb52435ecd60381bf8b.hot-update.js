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
    value: function seeMore(symbol) {
      var text = this.getTitle(symbol);

      if (text.length > 10) {
        return text.slice(0, 10) + '...';
      } else {
        return text;
      }
    }
  }, {
    key: "getTitle",
    value: function getTitle(symbol) {
      var _this3 = this;

      var newState3 = this.props.articles;
      var objIndex3 = newState3.findIndex(function (obj) {
        return obj.id === _this3.props.selectedArticle.id;
      });

      if (symbol === '-') {
        if (objIndex3 === 0) {
          objIndex3 = newState3.length;
        }

        return newState3[objIndex3 - 1].title;
      } else {
        if (objIndex3 === newState3.length - 1) {
          objIndex3 = -1;
        }

        return newState3[objIndex3 + 1].title;
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
      var _this4 = this;

      var _this$props = this.props,
          deleteArticle = _this$props.deleteArticle,
          selectedArticle = _this$props.selectedArticle,
          articles = _this$props.articles; // console.log('hi',this.props.activeArticle.article.activeArticle);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3963141749" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3963141749" + " " + "sideBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, articles.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          onClick: function onClick() {
            return _this4.onselectArticle(article);
          },
          dangerouslySetInnerHTML: {
            __html: article.title
          },
          className: "jsx-3963141749" + " " + ((article.id === selectedArticle.id ? "active" : "") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3963141749" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-3963141749" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3963141749" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.title
        },
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-3963141749" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/edit-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " Edit ")), "| ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          deleteArticle(selectedArticle.id), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.back();
        },
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3963141749" + " " + "remove-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, " Remove "))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.content
        },
        className: "jsx-3963141749",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3963141749" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: function onClick() {
          return _this4.changeArticle(selectedArticle.id, '-');
        },
        dangerouslySetInnerHTML: {
          __html: '<h2><</h2>' + this.seeMore('-')
        },
        className: "jsx-3963141749" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        onClick: function onClick() {
          return _this4.changeArticle(selectedArticle.id, '+');
        },
        dangerouslySetInnerHTML: {
          __html: this.seeMore('+') + '<h2>></h2>'
        },
        className: "jsx-3963141749" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3963141749",
        __self: this
      }, ".main.jsx-3963141749{margin-bottom:150px;}.left.jsx-3963141749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.row.jsx-3963141749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:60%;margin:auto;}.sideBar.jsx-3963141749{float:left;height:100vh;background:#EBEBEB;width:15%;}.App.jsx-3963141749{text-align:center;margin:auto;margin-top:0;color:gray;font-family:Arial;}.content.jsx-3963141749{text-align:start;color:gray;margin-top:50px;}.active.jsx-3963141749{background:white;}li.jsx-3963141749:hover{background:white;}.article-subtitle.jsx-3963141749{margin:0;}.article-content.jsx-3963141749{text-align:start;}.article-content.jsx-3963141749 h2.jsx-3963141749{margin-top:0;}.title.jsx-3963141749{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-3963141749 h2.jsx-3963141749{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9IVyxBQUdnQyxBQUdQLEFBR0EsQUFNRCxBQU9TLEFBT0gsQUFNQSxBQUdDLEFBR1QsQUFJUSxBQUdMLEFBR2EsQUFPZCxTQWhCYixFQTFCZSxBQTJDZixFQVZBLElBbkJjLEFBTWIsQUFHQSxBQU9ELENBdkJJLEVBbkJKLElBYW9CLENBbUNELEdBckJBLEVBUGYsWUE2QmdCLENBbkNULEFBT0UsQ0FRWixTQWRELENBT3FCLE1BNkJyQixZQTVCQyxFQXBCRCxBQUcrQixtSEFDcEIsVUFDRSxZQUNiIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVtb3ZlQXJ0aWNsZSxzZWxlY3RBcnRpY2xlLGNoYW5nZUFydGljbGUgfSBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xyXG4gICAgcmV0dXJuIHtxdWVyeX1cclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7Y291bnRlcjogMCwgbG9hZGluZzogdHJ1ZX07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUoKTtcclxuICAgIFxyXG4gIH1cclxuICBzdGFydFRpbWUoKXtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY291bnRlcilcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMX0pO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY291bnRlcj4zKXtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnRlcnZhbCgpO1xyXG4gICAgICBcclxuICAgICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuICBjbGVhckludGVydGVydmFsKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjowfSk7XHJcbiAgfVxyXG4gIG9uc2VsZWN0QXJ0aWNsZShpZCl7XHJcbiAgICB0aGlzLnByb3BzLnNlbGVjdEFydGljbGUxKGlkKTtcclxuICAgIHRoaXMuc3RhcnRUaW1lKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KTtcclxuXHJcbiAgfVxyXG4gIHNlZU1vcmUoc3ltYm9sKXtcclxuICAgIGxldCB0ZXh0PXRoaXMuZ2V0VGl0bGUoc3ltYm9sKTtcclxuICAgIGlmKHRleHQubGVuZ3RoPjEwKXtcclxuICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgMTApKycuLi4nO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0VGl0bGUoc3ltYm9sKXtcclxuICAgIGNvbnN0IG5ld1N0YXRlMz10aGlzLnByb3BzLmFydGljbGVzO1xyXG4gICAgbGV0IG9iakluZGV4MyA9IG5ld1N0YXRlMy5maW5kSW5kZXgob2JqID0+IG9iai5pZCA9PT0gdGhpcy5wcm9wcy5zZWxlY3RlZEFydGljbGUuaWQpOyBcclxuICAgIGlmKHN5bWJvbD09PSctJyl7XHJcbiAgICAgIGlmKG9iakluZGV4Mz09PTApe1xyXG4gICAgICAgIG9iakluZGV4Mz1uZXdTdGF0ZTMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAgbmV3U3RhdGUzW29iakluZGV4My0xXS50aXRsZTtcclxuICAgICAgXHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGlmKG9iakluZGV4Mz09PW5ld1N0YXRlMy5sZW5ndGgtMSl7XHJcbiAgICAgICAgb2JqSW5kZXgzPS0xO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAgbmV3U3RhdGUzW29iakluZGV4MysxXS50aXRsZTtcclxuICAgIH1cclxuICB9XHJcbiAgY2hhbmdlQXJ0aWNsZShpZCxzeW1ib2wpe1xyXG4gICAgdGhpcy5wcm9wcy5jaGFuZ2VBcnRpY2xlKHtpZDogaWQsIHN5bWJvbDpzeW1ib2x9KVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRlbGV0ZUFydGljbGUsIHNlbGVjdGVkQXJ0aWNsZSwgYXJ0aWNsZXN9PSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdoaScsdGhpcy5wcm9wcy5hY3RpdmVBcnRpY2xlLmFydGljbGUuYWN0aXZlQXJ0aWNsZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7Lyoge3RoaXMuc3RhdGUubG9hZGluZyAmJiA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmNvdW50ZXJ9XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkFwcFwiPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICB7YCBcclxuICAgICAgICAgICAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj59ICovfVxyXG4gICAgICAgIHtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudCBBcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVCYXJcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAge2FydGljbGVzLm1hcCgoYXJ0aWNsZSkgPT57cmV0dXJuIDxsaSBjbGFzc05hbWU9eyhhcnRpY2xlLmlkPT09c2VsZWN0ZWRBcnRpY2xlLmlkID8gXCJhY3RpdmVcIiA6IFwiXCIpfSBvbkNsaWNrPXsoKT0+IHRoaXMub25zZWxlY3RBcnRpY2xlKGFydGljbGUpfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGFydGljbGUudGl0bGUgfX0+PC9saT59ICApfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8TGluayBocmVmPScvJz48aDI+Jmx0OyBob21lPC9oMj48L0xpbms+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BcnRpY2xlczwvaDE+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZWxlY3RlZEFydGljbGUudGl0bGUgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+MjA6NDEgfCAzIEZlYiAyLTE5IHwgPExpbmsgaHJlZj1cIi9lZGl0LWFydGljbGVcIj48c3Bhbj4gRWRpdCA8L3NwYW4+PC9MaW5rPnwgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e2RlbGV0ZUFydGljbGUoc2VsZWN0ZWRBcnRpY2xlLmlkKSAsIFJvdXRlci5iYWNrKCl9fT48TGluayBocmVmPScvJz48c3BhbiBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCI+IFJlbW92ZSA8L3NwYW4+PC9MaW5rPjwvYnV0dG9uPjwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2VsZWN0ZWRBcnRpY2xlLmNvbnRlbnQgfX0+PC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCIgb25DbGljaz17KCk9PnRoaXMuY2hhbmdlQXJ0aWNsZShzZWxlY3RlZEFydGljbGUuaWQsJy0nKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnPGgyPjw8L2gyPicrdGhpcy5zZWVNb3JlKCctJykgfX0+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiIG9uQ2xpY2s9eygpPT50aGlzLmNoYW5nZUFydGljbGUoc2VsZWN0ZWRBcnRpY2xlLmlkLCcrJyl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5zZWVNb3JlKCcrJykrJzxoMj4+PC9oMj4nIH19PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgLm1haW57XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubGVmdHtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6NjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zaWRlQmFye1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG4gICAgICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuQXBwIHtcclxuXHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLmFydGljbGUtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlbGVjdGVkQXJ0aWNsZSwgYXJ0aWNsZXMgfSkgPT4gKHsgc2VsZWN0ZWRBcnRpY2xlLGFydGljbGVzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGVsZXRlQXJ0aWNsZTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSksXHJcbiAgc2VsZWN0QXJ0aWNsZTE6IGFydGljbGUgPT5kaXNwYXRjaChzZWxlY3RBcnRpY2xlKGFydGljbGUpKSxcclxuICBjaGFuZ2VBcnRpY2xlOiBvcmRlciA9PiBkaXNwYXRjaChjaGFuZ2VBcnRpY2xlKG9yZGVyKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQXJ0aWNsZSk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")));
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
//# sourceMappingURL=article.js.7eb52435ecd60381bf8b.hot-update.js.map