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

  function Articles(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Articles);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Articles).call(this, props));
    _this.state = {
      counter: 0,
      loading: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Articles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.state.counter, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Loading...")), !this.state.loading && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3704945765" + " " + "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3704945765" + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3704945765" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-3704945765" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Articles")), articles.map(function (article) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-3704945765" + " " + "article-brief-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
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
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          onClick: function onClick() {
            return selectArticle(article);
          },
          dangerouslySetInnerHTML: {
            __html: article.title
          },
          className: "jsx-3704945765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3704945765" + " " + "article-date",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("small", {
          className: "jsx-3704945765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/edit-article",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          onClick: function onClick() {
            return selectArticle(article);
          },
          className: "jsx-3704945765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, " Edit")), " | ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          onClick: function onClick() {
            return deleteArticle(article.id);
          },
          className: "jsx-3704945765",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "jsx-3704945765" + " " + "remove-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, " Remove ")))));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3704945765",
        __self: this
      }, ".App.jsx-3704945765{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-3704945765{text-align:start;color:gray;margin-top:50px;}.article-title.jsx-3704945765{margin:0;}.article-date.jsx-3704945765{margin:0;}a.jsx-3704945765{-webkit-text-decoration:none;text-decoration:none;}.remove-btn.jsx-3704945765{color:red;}.title.jsx-3704945765{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-3704945765 h2.jsx-3704945765{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFydGljbGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEb0IsQUFHdUMsQUFPSCxBQU9QLEFBSUEsQUFJWSxBQUlYLEFBR2UsQUFPZCxTQXJCYixBQUlBLENBUUEsQ0FVQSxNQTdCYSxDQVBELE9BNkJPLEdBNUJoQixBQU9lLFlBTk4sRUE0QlEsRUFwQnBCLE1BWUQsQ0FuQnFCLFNBNkJwQixTQTVCQSIsImZpbGUiOiJEOlxcd2ViXFxzdHVkeVxccmVhY3QtYW5kLXB3YVxcbmV4dGpzXFxjb21wb25lbnRzXFxBcnRpY2xlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9DbG9jaydcclxuaW1wb3J0IEFkZENvdW50IGZyb20gJy4vQWRkQ291bnQnXHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcmVtb3ZlQXJ0aWNsZSwgc2VsZWN0QXJ0aWNsZSxzaG93QXJ0aWNsZXMgfSBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmNsYXNzIEFydGljbGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtjb3VudGVyOiAwLCBsb2FkaW5nOiB0cnVlfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmNvdW50ZXIpXHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IHRoaXMuc3RhdGUuY291bnRlciArIDF9KTtcclxuICAgICAgICBpZih0aGlzLnN0YXRlLmNvdW50ZXI+Myl7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlfSk7XHJcbiAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ0ZXJ2YWwoKTtcclxuICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIFxyXG4gIH1cclxuICBjbGVhckludGVydGVydmFsKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjowfSk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcclxuICAgIHRoaXMucHJvcHMuc2hvd0FydGljbGVzKCk7XHJcbiAgICBjb25zb2xlLmxvZygnYXJ0aWNlbCcsdGhpcy5wcm9wcy5hcnRpY2xlcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3Qge2FydGljbGVzLCBkZWxldGVBcnRpY2xlLCBzZWxlY3RBcnRpY2xlIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jb3VudGVyfVxyXG4gICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+ICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtYnJpZWYtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9hcnRpY2xlJywgcXVlcnk6IHsgaWQ6IGAke2FydGljbGUuaWR9YCB9IH19IGFzPXtcIi9hcnRpY2xlL1wiK2Ake2FydGljbGUuaWR9YH0+PHNwYW4gb25DbGljaz0geygpPT4gc2VsZWN0QXJ0aWNsZShhcnRpY2xlKX0gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBhcnRpY2xlLnRpdGxlfX0+PC9zcGFuPjwvTGluaz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+MjA6NDEgfCAzIEZlYiAyLTE5IHwgPExpbmsgaHJlZj1cIi9lZGl0LWFydGljbGVcIiA+PHNwYW4gb25DbGljaz0geygpPT4gc2VsZWN0QXJ0aWNsZShhcnRpY2xlKX0+IEVkaXQ8L3NwYW4+PC9MaW5rPiB8IDxidXR0b24gb25DbGljaz0geygpPT4gZGVsZXRlQXJ0aWNsZShhcnRpY2xlLmlkKX0+PHNwYW4gY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPiBSZW1vdmUgPC9zcGFuPjwvYnV0dG9uPjwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAge2AgXHJcbiAgICAgICAgICAgICAgICAgIC5BcHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgLmFydGljbGUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC5hcnRpY2xlLWRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgLnJlbW92ZS1idG4ge1xyXG4gICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRkLWFydGljbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGE+QWRkPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuLy8gICAgIHJldHVybihcclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbi8vICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+ICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtYnJpZWYtY29udGFpbmVyXCI+XHJcbi8vICAgICAgICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogJy9hcnRpY2xlJywgcXVlcnk6IHsgaWQ6IGAke2FydGljbGUuaWR9YCB9IH19IGFzPXtcIi9hcnRpY2xlL1wiK2Ake2FydGljbGUuaWR9YH0+PHNwYW4gb25DbGljaz0geygpPT4gc2VsZWN0QXJ0aWNsZShhcnRpY2xlKX0gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBhcnRpY2xlLnRpdGxlfX0+PC9zcGFuPjwvTGluaz5cclxuLy8gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kYXRlXCI+PHNtYWxsPjIwOjQxIHwgMyBGZWIgMi0xOSB8IDxMaW5rIGhyZWY9XCIvZWRpdC1hcnRpY2xlXCIgPjxzcGFuIG9uQ2xpY2s9IHsoKT0+IHNlbGVjdEFydGljbGUoYXJ0aWNsZSl9PiBFZGl0PC9zcGFuPjwvTGluaz4gfCA8YnV0dG9uIG9uQ2xpY2s9IHsoKT0+IGRlbGV0ZUFydGljbGUoYXJ0aWNsZS5pZCl9PjxzcGFuIGNsYXNzTmFtZT1cInJlbW92ZS1idG5cIj4gUmVtb3ZlIDwvc3Bhbj48L2J1dHRvbj48L3NtYWxsPjwvcD5cclxuLy8gIDwvZGl2Pil9XHJcbi8vICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuLy8gICAgICAgICAgIHtgIFxyXG4vLyAgICAgICAgICAgLkFwcCB7XHJcbi8vICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4vLyBtYXJnaW46IGF1dG87XHJcbi8vICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbi8vICAgICAgICAgIH1cclxuLy8gICAgICAgICAuY29udGVudCB7XHJcbi8vICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuLy8gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuLy8gICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgIC5hcnRpY2xlLXRpdGxlIHtcclxuLy8gICAgICAgICAgICBtYXJnaW46IDA7XHJcbi8vICAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgICAgICAgLmFydGljbGUtZGF0ZSB7XHJcbi8vICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgIGEge1xyXG4vLyAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgIC5yZW1vdmUtYnRuIHtcclxuLy8gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4vLyAgICAgICAgICB9XHJcbi8vICAgICAgICAgIC50aXRsZSB7XHJcbi8vICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuLy8gICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuLy8gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4vLyAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgICAgICB9XHJcbi8vICAgICAgICAgIGB9XHJcbi8vICAgICAgICAgIDwvc3R5bGU+XHJcbi8vICAgICAgICAgIDxuYXY+XHJcbi8vICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZGQtYXJ0aWNsZVwiPlxyXG4vLyAgICAgICAgICAgICAgPGE+QWRkPC9hPlxyXG4vLyAgICAgICAgICAgIDwvTGluaz5cclxuLy8gICAgICAgICAgPC9uYXY+XHJcbi8vICA8L2Rpdj5cclxuLy8gICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGFydGljbGVzIH0pID0+ICh7IGFydGljbGVzIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGVsZXRlQXJ0aWNsZTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSksXHJcbiAgc2VsZWN0QXJ0aWNsZTogYXJ0aWNsZSA9PmRpc3BhdGNoKHNlbGVjdEFydGljbGUoYXJ0aWNsZSkpLFxyXG4gIHNob3dBcnRpY2xlczogKCkgPT5kaXNwYXRjaChzaG93QXJ0aWNsZXMoKSlcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXHJcbiAgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xyXG4pKEFydGljbGVzKSJdfQ== */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\Articles.js */"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("nav", {
        className: "jsx-3704945765",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/add-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-3704945765",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Add"))))); //     return(
      //       <div className="App">
      //         <div className="content">
      //             <div className="page-title">
      //               <h1 className="title">Articles</h1>
      //             </div>
      //           {articles.map((article) =>  <div className="article-brief-container">
      //         <Link href={{ pathname: '/article', query: { id: `${article.id}` } }} as={"/article/"+`${article.id}`}><span onClick= {()=> selectArticle(article)}  dangerouslySetInnerHTML={{__html: article.title}}></span></Link>
      //          <p className="article-date"><small>20:41 | 3 Feb 2-19 | <Link href="/edit-article" ><span onClick= {()=> selectArticle(article)}> Edit</span></Link> | <button onClick= {()=> deleteArticle(article.id)}><span className="remove-btn"> Remove </span></button></small></p>
      //  </div>)}
      //          </div>
      //           <style jsx>
      //           {` 
      //           .App {
      //             text-align: center;
      //            width: 80%;
      // margin: auto;
      //           color: gray;
      //            font-family: Arial;
      //          }
      //         .content {
      //           text-align: start;
      //            color: gray;
      //            margin-top: 50px;
      //          }
      //          .article-title {
      //            margin: 0;
      //          }
      //          .article-date {
      //            margin: 0;
      //          }
      //          a {
      //            text-decoration: none;
      //         }
      //          .remove-btn {
      //            color: red;
      //          }
      //          .title {
      //            text-transform: uppercase;
      //            font-size: 2.2rem;
      //            text-align: center;
      //          }
      //          .page-title h2 {
      //            float: left;
      //          }
      //          `}
      //          </style>
      //          <nav>
      //            <Link href="/add-article">
      //              <a>Add</a>
      //            </Link>
      //          </nav>
      //  </div>
      //     )
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
//# sourceMappingURL=index.js.69e69991de824268c371.hot-update.js.map