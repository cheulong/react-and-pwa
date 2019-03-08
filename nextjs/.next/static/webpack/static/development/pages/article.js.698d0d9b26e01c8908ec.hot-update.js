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
    key: "getTitle",
    value: function getTitle() {
      var newState3 = this.props.articles;
      var objIndex3 = newState3.findIndex(function (obj) {
        return obj.id === selectedArticle.id;
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
      var _this3 = this;

      var _this$props = this.props,
          deleteArticle = _this$props.deleteArticle,
          selectedArticle = _this$props.selectedArticle,
          articles = _this$props.articles; // console.log('hi',this.props.activeArticle.article.activeArticle);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "sideBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
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
            lineNumber: 93
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-664555662" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.title
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-664555662" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/edit-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, " Edit ")), "| ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          deleteArticle(selectedArticle.id), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.back();
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-664555662" + " " + "remove-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, " Remove "))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.content
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        onClick: function onClick() {
          return _this3.changeArticle(selectedArticle.id, '-');
        },
        className: "jsx-664555662" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, "\u02C2", this.seeMore(articles[selectedArticle.id].title)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        onClick: function onClick() {
          return _this3.changeArticle(selectedArticle.id, '+');
        },
        className: "jsx-664555662" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, this.seeMore('1Duo Reges: constuctio interrete.'), "\u02C3"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "664555662",
        __self: this
      }, ".main.jsx-664555662{margin-bottom:150px;}.row.jsx-664555662{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:60%;margin:auto;}.sideBar.jsx-664555662{float:left;height:100vh;background:#EBEBEB;width:15%;}.App.jsx-664555662{text-align:center;margin:auto;margin-top:0;color:gray;font-family:Arial;}.content.jsx-664555662{text-align:start;color:gray;margin-top:50px;}.active.jsx-664555662{background:white;}li.jsx-664555662:hover{background:white;}.article-subtitle.jsx-664555662{margin:0;}.article-content.jsx-664555662{text-align:start;}.article-content.jsx-664555662 h2.jsx-664555662{margin-top:0;}.title.jsx-664555662{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-664555662 h2.jsx-664555662{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1IVyxBQUdnQyxBQUdQLEFBTUQsQUFPUyxBQU9ILEFBTUEsQUFHQyxBQUdULEFBSVEsQUFHTCxBQUdhLEFBT2QsU0FoQmIsRUExQmUsQUEyQ2YsRUFWQSxJQW5CYyxBQU1iLEFBR0EsQUFPRCxDQXZCSSxFQWhCSixJQVVvQixDQW1DRCxHQXJCQSxFQVBmLFlBNkJnQixDQW5DVCxBQU9FLENBUVosU0FkRCxDQU9xQixNQTZCckIsWUE1QkMsRUFqQjhCLG1IQUNwQixVQUNFLFlBQ2IiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xccGFnZXNcXGFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLHNlbGVjdEFydGljbGUsY2hhbmdlQXJ0aWNsZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KSB7XHJcbiAgICByZXR1cm4ge3F1ZXJ5fVxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtjb3VudGVyOiAwLCBsb2FkaW5nOiB0cnVlfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSgpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHN0YXJ0VGltZSgpe1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudGVyKVxyXG4gICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAxfSk7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudGVyPjMpe1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICAgICAgdGhpcy5jbGVhckludGVydGVydmFsKCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gIGNsZWFySW50ZXJ0ZXJ2YWwoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOjB9KTtcclxuICB9XHJcbiAgb25zZWxlY3RBcnRpY2xlKGlkKXtcclxuICAgIHRoaXMucHJvcHMuc2VsZWN0QXJ0aWNsZTEoaWQpO1xyXG4gICAgdGhpcy5zdGFydFRpbWUoKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pO1xyXG5cclxuICB9XHJcbiAgc2VlTW9yZSh0ZXh0KXtcclxuICAgIGlmKHRleHQubGVuZ3RoPjEwKXtcclxuICAgICAgcmV0dXJuIHRleHQuc2xpY2UoMCwgMTApKycuLi4nO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0VGl0bGUoKXtcclxuICAgIGNvbnN0IG5ld1N0YXRlMz10aGlzLnByb3BzLmFydGljbGVzO1xyXG4gICAgbGV0IG9iakluZGV4MyA9IG5ld1N0YXRlMy5maW5kSW5kZXgob2JqID0+IG9iai5pZCA9PT0gc2VsZWN0ZWRBcnRpY2xlLmlkKTsgXHJcbiAgICBpZihzeW1ib2w9PT0nLScpe1xyXG4gICAgICBpZihvYmpJbmRleDM9PT0wKXtcclxuICAgICAgICBvYmpJbmRleDM9bmV3U3RhdGUzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gIG5ld1N0YXRlM1tvYmpJbmRleDMtMV0udGl0bGU7XHJcbiAgICAgIFxyXG4gICAgfWVsc2Uge1xyXG4gICAgICBpZihvYmpJbmRleDM9PT1uZXdTdGF0ZTMubGVuZ3RoLTEpe1xyXG4gICAgICAgIG9iakluZGV4Mz0tMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gIG5ld1N0YXRlM1tvYmpJbmRleDMrMV0udGl0bGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNoYW5nZUFydGljbGUoaWQsc3ltYm9sKXtcclxuICAgIHRoaXMucHJvcHMuY2hhbmdlQXJ0aWNsZSh7aWQ6IGlkLCBzeW1ib2w6c3ltYm9sfSlcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZWxldGVBcnRpY2xlLCBzZWxlY3RlZEFydGljbGUsIGFydGljbGVzfT0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnaGknLHRoaXMucHJvcHMuYWN0aXZlQXJ0aWNsZS5hcnRpY2xlLmFjdGl2ZUFydGljbGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jb3VudGVyfVxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJBcHBcIj5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAge2AgXHJcbiAgICAgICAgICAgICAgICAgIC5BcHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+fSAqL31cclxuICAgICAgICB7XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRlbnQgQXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQmFyXCI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+e3JldHVybiA8bGkgY2xhc3NOYW1lPXsoYXJ0aWNsZS5pZD09PXNlbGVjdGVkQXJ0aWNsZS5pZCA/IFwiYWN0aXZlXCIgOiBcIlwiKX0gb25DbGljaz17KCk9PiB0aGlzLm9uc2VsZWN0QXJ0aWNsZShhcnRpY2xlKX0gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhcnRpY2xlLnRpdGxlIH19PjwvbGk+fSAgKX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+PGgyPiZsdDsgaG9tZTwvaDI+PC9MaW5rPiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2VsZWN0ZWRBcnRpY2xlLnRpdGxlIH19PjwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kYXRlXCI+PHNtYWxsPjIwOjQxIHwgMyBGZWIgMi0xOSB8IDxMaW5rIGhyZWY9XCIvZWRpdC1hcnRpY2xlXCI+PHNwYW4+IEVkaXQgPC9zcGFuPjwvTGluaz58IDxidXR0b24gb25DbGljaz17KCk9PntkZWxldGVBcnRpY2xlKHNlbGVjdGVkQXJ0aWNsZS5pZCkgLCBSb3V0ZXIuYmFjaygpfX0+PExpbmsgaHJlZj0nLyc+PHNwYW4gY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPiBSZW1vdmUgPC9zcGFuPjwvTGluaz48L2J1dHRvbj48L3NtYWxsPjwvcD5cclxuICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkQXJ0aWNsZS5jb250ZW50IH19PjwvZGl2PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJsZWZ0XCIgb25DbGljaz17KCk9PnRoaXMuY2hhbmdlQXJ0aWNsZShzZWxlY3RlZEFydGljbGUuaWQsJy0nKX0+JiM3MDY7e3RoaXMuc2VlTW9yZShhcnRpY2xlc1tzZWxlY3RlZEFydGljbGUuaWRdLnRpdGxlKX08L2gyPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJyaWdodFwiIG9uQ2xpY2s9eygpPT50aGlzLmNoYW5nZUFydGljbGUoc2VsZWN0ZWRBcnRpY2xlLmlkLCcrJyl9Pnt0aGlzLnNlZU1vcmUoJzFEdW8gUmVnZXM6IGNvbnN0dWN0aW8gaW50ZXJyZXRlLicpfSYjNzA3OzwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAubWFpbntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxNTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5yb3d7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOjYwJTtcclxuICAgICAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2lkZUJhcntcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0VCRUJFQjtcclxuICAgICAgICAgICAgd2lkdGg6MTUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLkFwcCB7XHJcblxyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDowO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5hY3RpdmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBsaTpob3ZlcntcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuYXJ0aWNsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXJ0aWNsZS1jb250ZW50IGgye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzZWxlY3RlZEFydGljbGUsIGFydGljbGVzIH0pID0+ICh7IHNlbGVjdGVkQXJ0aWNsZSxhcnRpY2xlcyB9KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGRlbGV0ZUFydGljbGU6IGluZGV4ID0+ZGlzcGF0Y2gocmVtb3ZlQXJ0aWNsZShpbmRleCkpLFxyXG4gIHNlbGVjdEFydGljbGUxOiBhcnRpY2xlID0+ZGlzcGF0Y2goc2VsZWN0QXJ0aWNsZShhcnRpY2xlKSksXHJcbiAgY2hhbmdlQXJ0aWNsZTogb3JkZXIgPT4gZGlzcGF0Y2goY2hhbmdlQXJ0aWNsZShvcmRlcikpXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEFydGljbGUpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")));
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
//# sourceMappingURL=article.js.698d0d9b26e01c8908ec.hot-update.js.map