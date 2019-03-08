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
        className: "jsx-3746115320" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3746115320" + " " + "sideBar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3746115320",
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
          className: "jsx-3746115320" + " " + ((article.id === selectedArticle.id ? "active" : "") || ""),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3746115320",
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
        className: "jsx-3746115320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3746115320" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-3746115320" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3746115320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.title
        },
        className: "jsx-3746115320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-3746115320" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-3746115320",
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
        className: "jsx-3746115320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " Edit ")), "| ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          deleteArticle(selectedArticle.id), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.back();
        },
        className: "jsx-3746115320",
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
        className: "jsx-3746115320" + " " + "remove-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, " Remove "))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3746115320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.content
        },
        className: "jsx-3746115320",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3746115320" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-3746115320" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "sfsfsfsfsfsf"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-3746115320" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "sfsfsfsfsfsf"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3746115320",
        __self: this
      }, ".row.jsx-3746115320{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.sideBar.jsx-3746115320{float:left;height:100vh;background:#EBEBEB;width:15%;}.App.jsx-3746115320{text-align:center;margin:auto;margin-top:0;color:gray;font-family:Arial;}.content.jsx-3746115320{text-align:start;color:gray;margin-top:50px;}.active.jsx-3746115320{background:white;}li.jsx-3746115320:hover{background:white;}.article-subtitle.jsx-3746115320{margin:0;}.article-content.jsx-3746115320{text-align:start;}.article-content.jsx-3746115320 h2.jsx-3746115320{margin-top:0;}.title.jsx-3746115320{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-3746115320 h2.jsx-3746115320{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGVyxBQUd5QixBQUdELEFBT1MsQUFPSCxBQU1BLEFBR0MsQUFHVCxBQUlRLEFBR0wsQUFHYSxBQU9kLFNBaEJiLEVBMUJlLEFBMkNmLEVBVkEsSUFuQmMsQUFNYixBQUdBLEFBT0QsQ0F2QkksTUFOZ0IsQ0FtQ0QsR0FyQkEsRUFQZixZQTZCZ0IsQ0FuQ1QsQUFPRSxDQVFaLFNBZEQsQ0FPcUIsTUE2QnJCLFlBNUJDLEVBZEQiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xccGFnZXNcXGFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyByZW1vdmVBcnRpY2xlLHNlbGVjdEFydGljbGUgfSBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xyXG4gICAgcmV0dXJuIHtxdWVyeX1cclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7Y291bnRlcjogMCwgbG9hZGluZzogdHJ1ZX07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUoKTtcclxuICAgIFxyXG4gIH1cclxuICBzdGFydFRpbWUoKXtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY291bnRlcilcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMX0pO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY291bnRlcj4zKXtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnRlcnZhbCgpO1xyXG4gICAgICBcclxuICAgICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuICBjbGVhckludGVydGVydmFsKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjowfSk7XHJcbiAgfVxyXG4gIG9uc2VsZWN0QXJ0aWNsZShpZCl7XHJcbiAgICB0aGlzLnByb3BzLnNlbGVjdEFydGljbGUxKGlkKTtcclxuICAgIHRoaXMuc3RhcnRUaW1lKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KTtcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0ZWRBcnRpY2xlLCBhcnRpY2xlc309IHRoaXMucHJvcHM7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coJ2hpJyx0aGlzLnByb3BzLmFjdGl2ZUFydGljbGUuYXJ0aWNsZS5hY3RpdmVBcnRpY2xlKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsvKiB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuY291bnRlcn1cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiQXBwXCI+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2Pn0gKi99XHJcbiAgICAgICAge1xyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250ZW50IEFwcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZUJhclwiPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7YXJ0aWNsZXMubWFwKChhcnRpY2xlKSA9PntyZXR1cm4gPGxpIGNsYXNzTmFtZT17KGFydGljbGUuaWQ9PT1zZWxlY3RlZEFydGljbGUuaWQgPyBcImFjdGl2ZVwiIDogXCJcIil9IG9uQ2xpY2s9eygpPT4gdGhpcy5vbnNlbGVjdEFydGljbGUoYXJ0aWNsZSl9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYXJ0aWNsZS50aXRsZSB9fT48L2xpPn0gICl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPjxoMj4mbHQ7IGhvbWU8L2gyPjwvTGluaz4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkFydGljbGVzPC9oMT5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZWxlY3RlZEFydGljbGUudGl0bGUgfX0+PC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+MjA6NDEgfCAzIEZlYiAyLTE5IHwgPExpbmsgaHJlZj1cIi9lZGl0LWFydGljbGVcIj48c3Bhbj4gRWRpdCA8L3NwYW4+PC9MaW5rPnwgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+e2RlbGV0ZUFydGljbGUoc2VsZWN0ZWRBcnRpY2xlLmlkKSAsIFJvdXRlci5iYWNrKCl9fT48TGluayBocmVmPScvJz48c3BhbiBjbGFzc05hbWU9XCJyZW1vdmUtYnRuXCI+IFJlbW92ZSA8L3NwYW4+PC9MaW5rPjwvYnV0dG9uPjwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgPGhyLz5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2VsZWN0ZWRBcnRpY2xlLmNvbnRlbnQgfX0+PC9kaXY+IFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImxlZnRcIj5zZnNmc2ZzZnNmc2Y8L2gyPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJyaWdodFwiPnNmc2ZzZnNmc2ZzZjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAucm93e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2lkZUJhcntcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0VCRUJFQjtcclxuICAgICAgICAgICAgd2lkdGg6MTUlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgLkFwcCB7XHJcblxyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDowO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5hY3RpdmV7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBsaTpob3ZlcntcclxuICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuYXJ0aWNsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXJ0aWNsZS1jb250ZW50IGgye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzZWxlY3RlZEFydGljbGUsIGFydGljbGVzIH0pID0+ICh7IHNlbGVjdGVkQXJ0aWNsZSxhcnRpY2xlcyB9KVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIGRlbGV0ZUFydGljbGU6IGluZGV4ID0+ZGlzcGF0Y2gocmVtb3ZlQXJ0aWNsZShpbmRleCkpLFxyXG4gIHNlbGVjdEFydGljbGUxOiBhcnRpY2xlID0+ZGlzcGF0Y2goc2VsZWN0QXJ0aWNsZShhcnRpY2xlKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQXJ0aWNsZSk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")));
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
//# sourceMappingURL=article.js.7cfa68d88b384ad4118f.hot-update.js.map