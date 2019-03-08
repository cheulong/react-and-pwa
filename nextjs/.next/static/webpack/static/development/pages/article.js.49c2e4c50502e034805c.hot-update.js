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
        className: "jsx-664555662" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "sideBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-664555662",
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
          className: "jsx-664555662" + " " + ((article.id === selectedArticle.id ? "active" : "") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662",
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
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-664555662" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.title
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-664555662" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/edit-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, " Edit ")), "| ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          deleteArticle(selectedArticle.id), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.back();
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-664555662" + " " + "remove-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, " Remove "))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.content
        },
        className: "jsx-664555662",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-664555662" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-664555662" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "1Duo Reges: constuctio interrete."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-664555662" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "3Duo Reges: constuctio interrete."))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "664555662",
        __self: this
      }, ".main.jsx-664555662{margin-bottom:150px;}.row.jsx-664555662{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:60%;margin:auto;}.sideBar.jsx-664555662{float:left;height:100vh;background:#EBEBEB;width:15%;}.App.jsx-664555662{text-align:center;margin:auto;margin-top:0;color:gray;font-family:Arial;}.content.jsx-664555662{text-align:start;color:gray;margin-top:50px;}.active.jsx-664555662{background:white;}li.jsx-664555662:hover{background:white;}.article-subtitle.jsx-664555662{margin:0;}.article-content.jsx-664555662{text-align:start;}.article-content.jsx-664555662 h2.jsx-664555662{margin-top:0;}.title.jsx-664555662{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-664555662 h2.jsx-664555662{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGVyxBQUdnQyxBQUdQLEFBTUQsQUFPUyxBQU9ILEFBTUEsQUFHQyxBQUdULEFBSVEsQUFHTCxBQUdhLEFBT2QsU0FoQmIsRUExQmUsQUEyQ2YsRUFWQSxJQW5CYyxBQU1iLEFBR0EsQUFPRCxDQXZCSSxFQWhCSixJQVVvQixDQW1DRCxHQXJCQSxFQVBmLFlBNkJnQixDQW5DVCxBQU9FLENBUVosU0FkRCxDQU9xQixNQTZCckIsWUE1QkMsRUFqQjhCLG1IQUNwQixVQUNFLFlBQ2IiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xccGFnZXNcXGFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLHNlbGVjdEFydGljbGUgfSBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xyXG4gICAgcmV0dXJuIHtxdWVyeX1cclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7Y291bnRlcjogMCwgbG9hZGluZzogdHJ1ZX07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUoKTtcclxuICAgIFxyXG4gIH1cclxuICBzdGFydFRpbWUoKXtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY291bnRlcilcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMX0pO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY291bnRlcj4zKXtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnRlcnZhbCgpO1xyXG4gICAgICBcclxuICAgICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuICBjbGVhckludGVydGVydmFsKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjowfSk7XHJcbiAgfVxyXG4gIG9uc2VsZWN0QXJ0aWNsZShpZCl7XHJcbiAgICB0aGlzLnByb3BzLnNlbGVjdEFydGljbGUxKGlkKTtcclxuICAgIHRoaXMuc3RhcnRUaW1lKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KTtcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0ZWRBcnRpY2xlLCBhcnRpY2xlc309IHRoaXMucHJvcHM7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2hpJyx0aGlzLnByb3BzLmFjdGl2ZUFydGljbGUuYXJ0aWNsZS5hY3RpdmVBcnRpY2xlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuY291bnRlcn1cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiQXBwXCI+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2Pn0gKi99XHJcbiAgICAgICAge1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250ZW50IEFwcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZUJhclwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PntyZXR1cm4gPGxpIGNsYXNzTmFtZT17KGFydGljbGUuaWQ9PT1zZWxlY3RlZEFydGljbGUuaWQgPyBcImFjdGl2ZVwiIDogXCJcIil9IG9uQ2xpY2s9eygpPT4gdGhpcy5vbnNlbGVjdEFydGljbGUoYXJ0aWNsZSl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXJ0aWNsZS50aXRsZSB9fT48L2xpPn0gICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxoMj4mbHQ7IGhvbWU8L2gyPjwvTGluaz4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkFydGljbGVzPC9oMT5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkQXJ0aWNsZS50aXRsZSB9fT48L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtZGF0ZVwiPjxzbWFsbD4yMDo0MSB8IDMgRmViIDItMTkgfCA8TGluayBocmVmPVwiL2VkaXQtYXJ0aWNsZVwiPjxzcGFuPiBFZGl0IDwvc3Bhbj48L0xpbms+fCA8YnV0dG9uIG9uQ2xpY2s9eygpPT57ZGVsZXRlQXJ0aWNsZShzZWxlY3RlZEFydGljbGUuaWQpICwgUm91dGVyLmJhY2soKX19PjxMaW5rIGhyZWY9Jy8nPjxzcGFuIGNsYXNzTmFtZT1cInJlbW92ZS1idG5cIj4gUmVtb3ZlIDwvc3Bhbj48L0xpbms+PC9idXR0b24+PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZWxlY3RlZEFydGljbGUuY29udGVudCB9fT48L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibGVmdFwiPjFEdW8gUmVnZXM6IGNvbnN0dWN0aW8gaW50ZXJyZXRlLjwvaDI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJpZ2h0XCI+M0R1byBSZWdlczogY29uc3R1Y3RpbyBpbnRlcnJldGUuPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjE1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnJvd3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6NjAlO1xyXG4gICAgICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zaWRlQmFye1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRUJFQkVCO1xyXG4gICAgICAgICAgICB3aWR0aDoxNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAuQXBwIHtcclxuXHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLmFydGljbGUtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQgaDJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlbGVjdGVkQXJ0aWNsZSwgYXJ0aWNsZXMgfSkgPT4gKHsgc2VsZWN0ZWRBcnRpY2xlLGFydGljbGVzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGVsZXRlQXJ0aWNsZTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSksXHJcbiAgc2VsZWN0QXJ0aWNsZTE6IGFydGljbGUgPT5kaXNwYXRjaChzZWxlY3RBcnRpY2xlKGFydGljbGUpKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsbWFwRGlzcGF0Y2hUb1Byb3BzKShBcnRpY2xlKTtcclxuIl19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")));
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
//# sourceMappingURL=article.js.49c2e4c50502e034805c.hot-update.js.map