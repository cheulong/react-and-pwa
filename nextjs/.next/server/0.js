exports.ids = [0];
exports.modules = {

/***/ "./components/AddArticle1.js":
/*!***********************************!*\
  !*** ./components/AddArticle1.js ***!
  \***********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draftjs-to-html */ "draftjs-to-html");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! html-to-draftjs */ "html-to-draftjs");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-no-ssr */ "react-no-ssr");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _pages_article__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/article */ "./pages/article.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store */ "./store.js");







var _jsxFileName = "D:\\web\\study\\react-and-pwa\\nextjs\\components\\AddArticle1.js";











var AddArticle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(AddArticle, _Component);

  function AddArticle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddArticle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AddArticle).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "title", '<h2></h2>');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "content", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onAdd", function (title1, content1) {
      _this.props.addArticle({
        'title': title1,
        'content': content1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onEditorStateChange", function (editorState) {
      _this.setState({
        editorState: editorState
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onEditorStateChange1", function (editorState1) {
      _this.setState({
        editorState1: editorState1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (editorState1) {
      _this.setState({
        editorState1: editorState1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyCommand", function (command) {
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].handleKeyCommand(_this.state.editorState1, command);

      if (newState) {
        _this.onChange(newState);

        return 'handled';
      }

      return 'not-handled';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnderlineClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].toggleInlineStyle(_this.state.editorState1, 'UNDERLINE'));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onBoldClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].toggleInlineStyle(_this.state.editorState1, 'BOLD'));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onItalicClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].toggleInlineStyle(_this.state.editorState1, 'ITALIC'));
    });

    var contentBlock = html_to_draftjs__WEBPACK_IMPORTED_MODULE_12___default()(_this.title);
    var contentBlock1 = html_to_draftjs__WEBPACK_IMPORTED_MODULE_12___default()(_this.content);

    if (contentBlock || contentBlock1) {
      var contentState = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(contentBlock.contentBlocks);
      var editorState = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(contentState);
      var contentState1 = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(contentBlock1.contentBlocks);
      var editorState1 = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(contentState1);
      _this.state = {
        editorState: editorState,
        editorState1: editorState1,
        counter: 0,
        loading: true
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddArticle, [{
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
    key: "render",
    value: function render() {
      var _this3 = this;

      var selectedArticle = this.props.selectedArticle;
      var _this$state = this.state,
          editorState = _this$state.editorState,
          editorState1 = _this$state.editorState1;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, this.state.loading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-845889546",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, this.state.counter, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-845889546" + " " + "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "845889546",
        __self: this
      }, ".App.jsx-845889546{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFkZEFydGljbGUxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHb0IsQUFHdUMsa0JBQ1QsVUFDVCxZQUNTLFdBQ1Esa0JBQUMiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xcY29tcG9uZW50c1xcQWRkQXJ0aWNsZTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRvciwgRWRpdG9yU3RhdGUsIFJpY2hVdGlscywgQ29udGVudFN0YXRlLCBjb252ZXJ0VG9SYXcgfSBmcm9tICdkcmFmdC1qcyc7XHJcbmltcG9ydCBkcmFmdFRvSHRtbCBmcm9tICdkcmFmdGpzLXRvLWh0bWwnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgaHRtbFRvRHJhZnQgZnJvbSAnaHRtbC10by1kcmFmdGpzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IE5vU1NSIGZyb20gJ3JlYWN0LW5vLXNzcic7XHJcbmltcG9ydCBhcnRpY2xlIGZyb20gJy4uL3BhZ2VzL2FydGljbGUnO1xyXG5pbXBvcnQgeyBhZGRBcnRpY2xlIH0gZnJvbSAnLi4vc3RvcmUnXHJcblxyXG5jbGFzcyBBZGRBcnRpY2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICB0aXRsZSA9ICc8aDI+PC9oMj4nO1xyXG4gIGNvbnRlbnQ9Jyc7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRlbnRCbG9jayA9IGh0bWxUb0RyYWZ0KHRoaXMudGl0bGUpO1xyXG4gICAgY29uc3QgY29udGVudEJsb2NrMSA9IGh0bWxUb0RyYWZ0KHRoaXMuY29udGVudCk7XHJcbiAgICBcclxuICAgIGlmKGNvbnRlbnRCbG9ja3x8Y29udGVudEJsb2NrMSkge1xyXG4gICAgICBjb25zdCBjb250ZW50U3RhdGUgPSBDb250ZW50U3RhdGUuY3JlYXRlRnJvbUJsb2NrQXJyYXkoY29udGVudEJsb2NrLmNvbnRlbnRCbG9ja3MpO1xyXG4gICAgICBjb25zdCBlZGl0b3JTdGF0ZSA9IEVkaXRvclN0YXRlLmNyZWF0ZVdpdGhDb250ZW50KGNvbnRlbnRTdGF0ZSk7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRTdGF0ZTEgPSBDb250ZW50U3RhdGUuY3JlYXRlRnJvbUJsb2NrQXJyYXkoY29udGVudEJsb2NrMS5jb250ZW50QmxvY2tzKTtcclxuICAgICAgY29uc3QgZWRpdG9yU3RhdGUxID0gRWRpdG9yU3RhdGUuY3JlYXRlV2l0aENvbnRlbnQoY29udGVudFN0YXRlMSk7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgZWRpdG9yU3RhdGUsZWRpdG9yU3RhdGUxLGNvdW50ZXI6IDAsIGxvYWRpbmc6IHRydWVcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUoKTtcclxuICAgIFxyXG4gIH1cclxuICBzdGFydFRpbWUoKXtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY291bnRlcilcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMX0pO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY291bnRlcj4zKXtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnRlcnZhbCgpO1xyXG4gICAgICBcclxuICAgICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuICBjbGVhckludGVydGVydmFsKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjowfSk7XHJcbiAgfVxyXG4gIG9uQWRkID0gKHRpdGxlMSxjb250ZW50MSkgPT4ge1xyXG5cclxuICAgIHRoaXMucHJvcHMuYWRkQXJ0aWNsZSh7J3RpdGxlJzogdGl0bGUxLCAnY29udGVudCc6Y29udGVudDF9KVxyXG4gIH07XHJcblxyXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlZGl0b3JTdGF0ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBvbkVkaXRvclN0YXRlQ2hhbmdlMSA9IChlZGl0b3JTdGF0ZTEpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlZGl0b3JTdGF0ZTFcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlID0gKGVkaXRvclN0YXRlMSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVkaXRvclN0YXRlMVxyXG4gICAgfSkgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlDb21tYW5kID0gKGNvbW1hbmQpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0gUmljaFV0aWxzLmhhbmRsZUtleUNvbW1hbmQodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsIGNvbW1hbmQpO1xyXG4gICAgaWYgKG5ld1N0YXRlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UobmV3U3RhdGUpO1xyXG4gICAgICByZXR1cm4gJ2hhbmRsZWQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdub3QtaGFuZGxlZCc7XHJcbiAgfVxyXG5cclxuICBvblVuZGVybGluZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoYW5nZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsICdVTkRFUkxJTkUnKSk7XHJcbiAgfVxyXG5cclxuICBvbkJvbGRDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGFuZ2UoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUxLCAnQk9MRCcpKVxyXG4gIH1cclxuXHJcbiAgb25JdGFsaWNDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGFuZ2UoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUxLCAnSVRBTElDJykpXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc2VsZWN0ZWRBcnRpY2xlfT0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgZWRpdG9yU3RhdGUsZWRpdG9yU3RhdGUxIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuY291bnRlcn1cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiQXBwXCI+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7fVxyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgXHJcbiA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudCBBcHBcIj5cclxuIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gPExpbmsgaHJlZj0nLyc+PGgyPiZsdDsgaG9tZTwvaDI+PC9MaW5rPlxyXG4gICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICAgPGhyLz5cclxuICAgICA8L2Rpdj5cclxuIFxyXG4gICA8RWRpdG9yIFxyXG4gICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwidGl0bGVfX3dyYXBwZXJcIlxyXG4gICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICBvbkNoYW5nZT17dGhpcy5vbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgIC8+XHJcbiAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kYXRlXCI+PHNtYWxsPjxMaW5rIGhyZWY9Jy8nPjxidXR0b24gb25DbGljaz17KCkgPT50aGlzLm9uQWRkKGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSksZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlMS5nZXRDdXJyZW50Q29udGVudCgpKSkpfT48c3BhbiBjbGFzc05hbWU9XCJzYXZlLWJ0blwiPiBBZGQgPC9zcGFuPjwvYnV0dG9uPjwvTGluaz48L3NtYWxsPjwvcD5cclxuICAgICA8aHIvPlxyXG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yQ29udGFpbmVyXCI+XHJcbiAgIDxidXR0b24gb25DbGljaz17dGhpcy5vblVuZGVybGluZUNsaWNrfT5VPC9idXR0b24+XHJcbiAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkJvbGRDbGlja30+PGI+QjwvYj48L2J1dHRvbj5cclxuICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uSXRhbGljQ2xpY2t9PjxlbT5JPC9lbT48L2J1dHRvbj4gICAgICAgIFxyXG4gICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvcnNcIj5cclxuICAgICA8RWRpdG9yIFxyXG4gICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZTF9XHJcbiAgICAgd3JhcHBlckNsYXNzTmFtZT1cInRpdGxlX193cmFwcGVyXCJcclxuICAgICBlZGl0b3JDbGFzc05hbWU9XCJkZW1vLWVkaXRvclwiXHJcbiAgICAgb25DaGFuZ2U9e3RoaXMub25FZGl0b3JTdGF0ZUNoYW5nZTF9XHJcbiAgICAgLz5cclxuICAgICA8L2Rpdj5cclxuIDwvZGl2PlxyXG5cclxuIDxzdHlsZSBqc3g+XHJcbiB7YFxyXG4gLmRlbW8td3JhcHBlciB7XHJcbiAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gXHJcbiAucmR3LWVkaXRvci10b29sYmFyIHtcclxuICAgcGFkZGluZzogNnB4IDVweCAwO1xyXG4gICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjE7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gfVxyXG5cclxuIC5yZHctaW5saW5lLXdyYXBwZXIge1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgIGZsZXgtd3JhcDogd3JhcDtcclxuIH1cclxuIFxyXG4gLnJkdy1vcHRpb24td3JhcHBlciB7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjE7XHJcbiAgIHBhZGRpbmc6IDVweDtcclxuICAgbWluLXdpZHRoOiAyNXB4O1xyXG4gICBoZWlnaHQ6IDIwcHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgbWFyZ2luOiAwIDRweDtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gfVxyXG4gXHJcbiB0ZXh0YXJlYSB7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4gXHJcbiAuc2F2ZS1idG4ge1xyXG4gICBjb2xvcjogZ3JlZW47XHJcbiB9XHJcbiBcclxuIC50aXRsZV9fd3JhcHBlciB7XHJcbiAgIG1hcmdpbjogMDtcclxuIH1cclxuIC5BcHAge1xyXG4gICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgd2lkdGg6IDgwJTtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBjb2xvcjogZ3JheTtcclxuIH1cclxuIFxyXG4gLnRpdGxlIHtcclxuICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuIFxyXG4gfVxyXG4gXHJcbiAucGFnZS10aXRsZSBoMiB7XHJcbiAgIGZsb2F0OiBsZWZ0O1xyXG4gfVxyXG4gYH1cclxuIDwvc3R5bGU+XHJcbjwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgYWRkQXJ0aWNsZTogYXJ0aWNsZSA9PmRpc3BhdGNoKGFkZEFydGljbGUoYXJ0aWNsZSkpXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKEFkZEFydGljbGUpOyJdfQ== */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\AddArticle1.js */")), !this.state.loading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1421980012" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1421980012" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1421980012" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1421980012" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.onAdd(draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(editorState.getCurrentContent())), draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(editorState1.getCurrentContent())));
        },
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1421980012" + " " + "save-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, " Add "))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1421980012" + " " + "editorContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onUnderlineClick,
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "U"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onBoldClick,
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "B")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onItalicClick,
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-1421980012",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "I")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1421980012" + " " + "editors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState1,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1421980012",
        __self: this
      }, ".demo-wrapper.jsx-1421980012{width:100% !important;display:block !important;margin-bottom:25px !important;height:400px !important;}.rdw-editor-toolbar.jsx-1421980012{padding:6px 5px 0;border-radius:2px;border:1px solid #F1F1F1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:white;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:15px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.rdw-inline-wrapper.jsx-1421980012{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.rdw-option-wrapper.jsx-1421980012{border:1px solid #F1F1F1;padding:5px;min-width:25px;height:20px;border-radius:2px;margin:0 4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background:white;text-transform:capitalize;}textarea.jsx-1421980012{width:100%;}.save-btn.jsx-1421980012{color:green;}.title__wrapper.jsx-1421980012{margin:0;}.App.jsx-1421980012{text-align:start;width:80%;margin:auto;color:gray;}.title.jsx-1421980012{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-1421980012 h2.jsx-1421980012{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEFkZEFydGljbGUxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9KRSxBQUcwQixBQU9KLEFBYUwsQUFPWSxBQWVkLEFBSUMsQUFJSCxBQUdRLEFBT1EsQUFPZCxTQWhCYixFQVJBLEFBeUJBLENBckJBLEtBT1ksQ0E5Q1EsSUFQTyxHQTJCYixBQWlDSyxFQU5MLFNBOUNhLENBb0JWLEVBMkJKLEdBTU8sS0E1RFksR0F1RGhDLEVBM0JjLFFBa0NkLENBdERlLEdBcUJLLFVBVkMsR0FsQkssS0E2QlgsYUFDQSxNQTdCZixrQ0FPNkIsZ0NBV1QsRUFZSyxnQkFYUix1REFYRSxFQVluQixlQVhpQixXQXNCSSw4Q0FyQkosZUFDRyxrQkFDRCxjQW9CRixlQUNFLGlCQUNTLDBCQUM1QixhQXRCQSIsImZpbGUiOiJEOlxcd2ViXFxzdHVkeVxccmVhY3QtYW5kLXB3YVxcbmV4dGpzXFxjb21wb25lbnRzXFxBZGRBcnRpY2xlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JTdGF0ZSwgUmljaFV0aWxzLCBDb250ZW50U3RhdGUsIGNvbnZlcnRUb1JhdyB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gJ2RyYWZ0anMtdG8taHRtbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBodG1sVG9EcmFmdCBmcm9tICdodG1sLXRvLWRyYWZ0anMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJztcclxuaW1wb3J0IGFydGljbGUgZnJvbSAnLi4vcGFnZXMvYXJ0aWNsZSc7XHJcbmltcG9ydCB7IGFkZEFydGljbGUgfSBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmNsYXNzIEFkZEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHRpdGxlID0gJzxoMj48L2gyPic7XHJcbiAgY29udGVudD0nJztcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudEJsb2NrID0gaHRtbFRvRHJhZnQodGhpcy50aXRsZSk7XHJcbiAgICBjb25zdCBjb250ZW50QmxvY2sxID0gaHRtbFRvRHJhZnQodGhpcy5jb250ZW50KTtcclxuICAgIFxyXG4gICAgaWYoY29udGVudEJsb2NrfHxjb250ZW50QmxvY2sxKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRTdGF0ZSA9IENvbnRlbnRTdGF0ZS5jcmVhdGVGcm9tQmxvY2tBcnJheShjb250ZW50QmxvY2suY29udGVudEJsb2Nrcyk7XHJcbiAgICAgIGNvbnN0IGVkaXRvclN0YXRlID0gRWRpdG9yU3RhdGUuY3JlYXRlV2l0aENvbnRlbnQoY29udGVudFN0YXRlKTtcclxuICAgICAgY29uc3QgY29udGVudFN0YXRlMSA9IENvbnRlbnRTdGF0ZS5jcmVhdGVGcm9tQmxvY2tBcnJheShjb250ZW50QmxvY2sxLmNvbnRlbnRCbG9ja3MpO1xyXG4gICAgICBjb25zdCBlZGl0b3JTdGF0ZTEgPSBFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChjb250ZW50U3RhdGUxKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBlZGl0b3JTdGF0ZSxlZGl0b3JTdGF0ZTEsY291bnRlcjogMCwgbG9hZGluZzogdHJ1ZVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICBcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSgpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHN0YXJ0VGltZSgpe1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudGVyKVxyXG4gICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAxfSk7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudGVyPjMpe1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICAgICAgdGhpcy5jbGVhckludGVydGVydmFsKCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gIGNsZWFySW50ZXJ0ZXJ2YWwoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOjB9KTtcclxuICB9XHJcbiAgb25BZGQgPSAodGl0bGUxLGNvbnRlbnQxKSA9PiB7XHJcblxyXG4gICAgdGhpcy5wcm9wcy5hZGRBcnRpY2xlKHsndGl0bGUnOiB0aXRsZTEsICdjb250ZW50Jzpjb250ZW50MX0pXHJcbiAgfTtcclxuXHJcbiAgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IChlZGl0b3JTdGF0ZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVkaXRvclN0YXRlXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UxID0gKGVkaXRvclN0YXRlMSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVkaXRvclN0YXRlMVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSAoZWRpdG9yU3RhdGUxKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZWRpdG9yU3RhdGUxXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleUNvbW1hbmQgPSAoY29tbWFuZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBSaWNoVXRpbHMuaGFuZGxlS2V5Q29tbWFuZCh0aGlzLnN0YXRlLmVkaXRvclN0YXRlMSwgY29tbWFuZCk7XHJcbiAgICBpZiAobmV3U3RhdGUpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZShuZXdTdGF0ZSk7XHJcbiAgICAgIHJldHVybiAnaGFuZGxlZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ25vdC1oYW5kbGVkJztcclxuICB9XHJcblxyXG4gIG9uVW5kZXJsaW5lQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZSh0aGlzLnN0YXRlLmVkaXRvclN0YXRlMSwgJ1VOREVSTElORScpKTtcclxuICB9XHJcblxyXG4gIG9uQm9sZENsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoYW5nZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsICdCT0xEJykpXHJcbiAgfVxyXG5cclxuICBvbkl0YWxpY0NsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoYW5nZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsICdJVEFMSUMnKSlcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzZWxlY3RlZEFydGljbGV9PSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBlZGl0b3JTdGF0ZSxlZGl0b3JTdGF0ZTEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPGRpdj5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jb3VudGVyfVxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJBcHBcIj5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAge2AgXHJcbiAgICAgICAgICAgICAgICAgIC5BcHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDt9XHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZyAmJiBcclxuIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1jb250ZW50IEFwcFwiPlxyXG4gPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiA8TGluayBocmVmPScvJz48aDI+Jmx0OyBob21lPC9oMj48L0xpbms+XHJcbiAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BcnRpY2xlczwvaDE+XHJcbiAgICAgICA8aHIvPlxyXG4gICAgIDwvZGl2PlxyXG4gXHJcbiAgIDxFZGl0b3IgXHJcbiAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ0aXRsZV9fd3JhcHBlclwiXHJcbiAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIlxyXG4gICAgIG9uQ2hhbmdlPXt0aGlzLm9uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgLz5cclxuICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+PExpbmsgaHJlZj0nLyc+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PnRoaXMub25BZGQoZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKSxkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUxLmdldEN1cnJlbnRDb250ZW50KCkpKSl9PjxzcGFuIGNsYXNzTmFtZT1cInNhdmUtYnRuXCI+IEFkZCA8L3NwYW4+PC9idXR0b24+PC9MaW5rPjwvc21hbGw+PC9wPlxyXG4gICAgIDxoci8+XHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JDb250YWluZXJcIj5cclxuICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uVW5kZXJsaW5lQ2xpY2t9PlU8L2J1dHRvbj5cclxuICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQm9sZENsaWNrfT48Yj5CPC9iPjwvYnV0dG9uPlxyXG4gICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGFsaWNDbGlja30+PGVtPkk8L2VtPjwvYnV0dG9uPiAgICAgICAgXHJcbiAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yc1wiPlxyXG4gICAgIDxFZGl0b3IgXHJcbiAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlMX1cclxuICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwidGl0bGVfX3dyYXBwZXJcIlxyXG4gICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICBvbkNoYW5nZT17dGhpcy5vbkVkaXRvclN0YXRlQ2hhbmdlMX1cclxuICAgICAvPlxyXG4gICAgIDwvZGl2PlxyXG4gPC9kaXY+XHJcblxyXG4gPHN0eWxlIGpzeD5cclxuIHtgXHJcbiAuZGVtby13cmFwcGVyIHtcclxuICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiBcclxuIC5yZHctZWRpdG9yLXRvb2xiYXIge1xyXG4gICBwYWRkaW5nOiA2cHggNXB4IDA7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI0YxRjFGMTtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiB9XHJcblxyXG4gLnJkdy1pbmxpbmUtd3JhcHBlciB7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgZmxleC13cmFwOiB3cmFwO1xyXG4gfVxyXG4gXHJcbiAucmR3LW9wdGlvbi13cmFwcGVyIHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgI0YxRjFGMTtcclxuICAgcGFkZGluZzogNXB4O1xyXG4gICBtaW4td2lkdGg6IDI1cHg7XHJcbiAgIGhlaWdodDogMjBweDtcclxuICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICBtYXJnaW46IDAgNHB4O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiB9XHJcbiBcclxuIHRleHRhcmVhIHtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiBcclxuIC5zYXZlLWJ0biB7XHJcbiAgIGNvbG9yOiBncmVlbjtcclxuIH1cclxuIFxyXG4gLnRpdGxlX193cmFwcGVyIHtcclxuICAgbWFyZ2luOiAwO1xyXG4gfVxyXG4gLkFwcCB7XHJcbiAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICB3aWR0aDogODAlO1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIGNvbG9yOiBncmF5O1xyXG4gfVxyXG4gXHJcbiAudGl0bGUge1xyXG4gICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gXHJcbiB9XHJcbiBcclxuIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgZmxvYXQ6IGxlZnQ7XHJcbiB9XHJcbiBgfVxyXG4gPC9zdHlsZT5cclxuPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICBcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBhZGRBcnRpY2xlOiBhcnRpY2xlID0+ZGlzcGF0Y2goYWRkQXJ0aWNsZShhcnRpY2xlKSlcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLG1hcERpc3BhdGNoVG9Qcm9wcykoQWRkQXJ0aWNsZSk7Il19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\AddArticle1.js */")));
    }
  }]);

  return AddArticle;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addArticle: function addArticle(article) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["addArticle"])(article));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(null, mapDispatchToProps)(AddArticle));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/router.js":
/*!*************************************!*\
  !*** ./node_modules/next/router.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "./node_modules/next/dist/client/router.js")


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
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
    key: "render",
    value: function render() {
      var _this$props = this.props,
          deleteArticle = _this$props.deleteArticle,
          selectedArticle = _this$props.selectedArticle; // console.log('hi',this.props.activeArticle.article.activeArticle);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.loading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-827099695",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.state.counter, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-827099695" + " " + "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "827099695",
        __self: this
      }, ".App.jsx-827099695{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDb0IsQUFHdUMsa0JBQ1QsVUFDVCxZQUNTLFdBQ1Esa0JBQ3BCIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgcmVtb3ZlQXJ0aWNsZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuY2xhc3MgQXJ0aWNsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyh7cXVlcnl9KSB7XHJcbiAgICByZXR1cm4ge3F1ZXJ5fVxyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtjb3VudGVyOiAwLCBsb2FkaW5nOiB0cnVlfTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLnN0YXJ0VGltZSgpO1xyXG4gICAgXHJcbiAgfVxyXG4gIHN0YXJ0VGltZSgpe1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jb3VudGVyKVxyXG4gICAgICBcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOiB0aGlzLnN0YXRlLmNvdW50ZXIgKyAxfSk7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jb3VudGVyPjMpe1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzpmYWxzZX0pO1xyXG4gICAgICAgICAgdGhpcy5jbGVhckludGVydGVydmFsKCk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgfVxyXG4gIGNsZWFySW50ZXJ0ZXJ2YWwoKXtcclxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOjB9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkZWxldGVBcnRpY2xlLCBzZWxlY3RlZEFydGljbGV9PSB0aGlzLnByb3BzO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKCdoaScsdGhpcy5wcm9wcy5hY3RpdmVBcnRpY2xlLmFydGljbGUuYWN0aXZlQXJ0aWNsZSk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxkaXY+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuY291bnRlcn1cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiQXBwXCI+TG9hZGluZy4uLjwvaDE+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2Pn1cclxuICAgICAgICB7IXRoaXMuc3RhdGUubG9hZGluZyAmJiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudCBBcHBcIj5cclxuICAgICAgICA8TGluayBocmVmPScvJz48aDI+Jmx0OyBob21lPC9oMj48L0xpbms+ICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS10aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5BcnRpY2xlczwvaDE+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2VsZWN0ZWRBcnRpY2xlLnRpdGxlIH19PjwvZGl2PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYXJ0aWNsZS1kYXRlXCI+PHNtYWxsPjIwOjQxIHwgMyBGZWIgMi0xOSB8IDxMaW5rIGhyZWY9XCIvZWRpdC1hcnRpY2xlXCI+PHNwYW4+IEVkaXQgPC9zcGFuPjwvTGluaz58IDxidXR0b24gb25DbGljaz17KCk9PntkZWxldGVBcnRpY2xlKHNlbGVjdGVkQXJ0aWNsZS5pZCkgLCBSb3V0ZXIuYmFjaygpfX0+PExpbmsgaHJlZj0nLyc+PHNwYW4gY2xhc3NOYW1lPVwicmVtb3ZlLWJ0blwiPiBSZW1vdmUgPC9zcGFuPjwvTGluaz48L2J1dHRvbj48L3NtYWxsPjwvcD5cclxuICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkQXJ0aWNsZS5jb250ZW50IH19PjwvZGl2PiBcclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgIC5BcHAge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLmFydGljbGUtc3VidGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5hcnRpY2xlLWNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLnBhZ2UtdGl0bGUgaDIge1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlbGVjdGVkQXJ0aWNsZSB9KSA9PiAoeyBzZWxlY3RlZEFydGljbGUgfSlcclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBkZWxldGVBcnRpY2xlOiBpbmRleCA9PmRpc3BhdGNoKHJlbW92ZUFydGljbGUoaW5kZXgpKVxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoQXJ0aWNsZSk7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")), !this.state.loading && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3299938022" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-3299938022" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        className: "jsx-3299938022" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.title
        },
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-3299938022" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("small", {
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "20:41 | 3 Feb 2-19 | ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/edit-article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, " Edit ")), "| ", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        onClick: function onClick() {
          deleteArticle(selectedArticle.id), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.back();
        },
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        className: "jsx-3299938022" + " " + "remove-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, " Remove "))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("hr", {
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: selectedArticle.content
        },
        className: "jsx-3299938022",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3299938022",
        __self: this
      }, ".App.jsx-3299938022{text-align:center;width:80%;margin:auto;color:gray;font-family:Arial;}.content.jsx-3299938022{text-align:start;color:gray;margin-top:50px;}.article-subtitle.jsx-3299938022{margin:0;}.article-content.jsx-3299938022{text-align:start;}.title.jsx-3299938022{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-3299938022 h2.jsx-3299938022{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXHBhZ2VzXFxhcnRpY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FVyxBQUdpQyxBQU9ILEFBTVIsQUFJUSxBQUdRLEFBT2QsU0FiYixFQWNBLE1BcEJjLEFBVWQsQ0FqQmEsT0FvQk0sR0FuQmYsQUFPZSxZQU5OLEVBbUJPLEVBWG5CLE9BUG9CLFNBb0JyQixTQW5CQyIsImZpbGUiOiJEOlxcd2ViXFxzdHVkeVxccmVhY3QtYW5kLXB3YVxcbmV4dGpzXFxwYWdlc1xcYXJ0aWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHJlbW92ZUFydGljbGUgfSBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmNsYXNzIEFydGljbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xyXG4gICAgcmV0dXJuIHtxdWVyeX1cclxuICB9XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7Y291bnRlcjogMCwgbG9hZGluZzogdHJ1ZX07XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zdGFydFRpbWUoKTtcclxuICAgIFxyXG4gIH1cclxuICBzdGFydFRpbWUoKXtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuY291bnRlcilcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgMX0pO1xyXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY291bnRlcj4zKXtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6ZmFsc2V9KTtcclxuICAgICAgICAgIHRoaXMuY2xlYXJJbnRlcnRlcnZhbCgpO1xyXG4gICAgICBcclxuICAgICAgICAgIH1cclxuICAgIH0sIDEwMDApO1xyXG4gIH1cclxuICBjbGVhckludGVydGVydmFsKCl7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjowfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGVsZXRlQXJ0aWNsZSwgc2VsZWN0ZWRBcnRpY2xlfT0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygnaGknLHRoaXMucHJvcHMuYWN0aXZlQXJ0aWNsZS5hcnRpY2xlLmFjdGl2ZUFydGljbGUpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3RoaXMuc3RhdGUubG9hZGluZyAmJiA8ZGl2PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmNvdW50ZXJ9XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIkFwcFwiPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICB7YCBcclxuICAgICAgICAgICAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgeyF0aGlzLnN0YXRlLmxvYWRpbmcgJiYgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRlbnQgQXBwXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+PGgyPiZsdDsgaG9tZTwvaDI+PC9MaW5rPiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNlbGVjdGVkQXJ0aWNsZS50aXRsZSB9fT48L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtZGF0ZVwiPjxzbWFsbD4yMDo0MSB8IDMgRmViIDItMTkgfCA8TGluayBocmVmPVwiL2VkaXQtYXJ0aWNsZVwiPjxzcGFuPiBFZGl0IDwvc3Bhbj48L0xpbms+fCA8YnV0dG9uIG9uQ2xpY2s9eygpPT57ZGVsZXRlQXJ0aWNsZShzZWxlY3RlZEFydGljbGUuaWQpICwgUm91dGVyLmJhY2soKX19PjxMaW5rIGhyZWY9Jy8nPjxzcGFuIGNsYXNzTmFtZT1cInJlbW92ZS1idG5cIj4gUmVtb3ZlIDwvc3Bhbj48L0xpbms+PC9idXR0b24+PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICA8aHIvPlxyXG4gICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzZWxlY3RlZEFydGljbGUuY29udGVudCB9fT48L2Rpdj4gXHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAuQXBwIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5hcnRpY2xlLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuYXJ0aWNsZS1jb250ZW50IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+fVxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBzZWxlY3RlZEFydGljbGUgfSkgPT4gKHsgc2VsZWN0ZWRBcnRpY2xlIH0pXHJcblxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgZGVsZXRlQXJ0aWNsZTogaW5kZXggPT5kaXNwYXRjaChyZW1vdmVBcnRpY2xlKGluZGV4KSlcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEFydGljbGUpO1xyXG4iXX0= */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\pages\\article.js */")));
    }
  }]);

  return Article;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var mapStateToProps = function mapStateToProps(_ref2) {
  var selectedArticle = _ref2.selectedArticle;
  return {
    selectedArticle: selectedArticle
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteArticle: function deleteArticle(index) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_10__["removeArticle"])(index));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Article));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, serverRenderClock, startClock, addCount, showArticles, selectArticle, removeArticle, addArticle, saveArticle, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderClock", function() { return serverRenderClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startClock", function() { return startClock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCount", function() { return addCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArticles", function() { return showArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectArticle", function() { return selectArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArticle", function() { return removeArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addArticle", function() { return addArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveArticle", function() { return saveArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_4__);





var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  articles: [{
    "id": 1,
    "title": "<h2>1Duo Reges: constuctio interrete.</h2>",
    "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  }, {
    "id": 2,
    "title": "<h2>2Duo Reges: constuctio interrete.</h2>",
    "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  }, {
    "id": 3,
    "title": "<h2>3Duo Reges: constuctio interrete.</h2>",
    "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  }, {
    "id": 4,
    "title": "<h2>4Duo Reges: constuctio interrete.</h2>",
    "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  }],
  selectedArticle: {
    "id": 1,
    "title": "<h2>1Duo Reges: constuctio interrete.</h2>",
    "content": "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  }
};
var actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  SHOW_ARTICLES: 'SHOW_ARTICLES',
  REMOVE_ARTICLE: 'REMOVE_ARTICLE',
  SELECT_ARTICLE: 'SELECT_ARTICLE',
  SAVE_ARTICLE: 'SAVE_ARTICLE',
  ADD_ARTICLE: 'ADD_ARTICLE' // REDUCERS

};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.TICK:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      });

    case actionTypes.ADD_ARTICLE:
      var newState2 = state.articles;
      newState2.push({
        'id': state.articles.length + 1,
        "title": action.article.title,
        "content": action.article.content
      });
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        articles: newState2
      });

    case actionTypes.SHOW_ARTICLES:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state);

    case actionTypes.SELECT_ARTICLE:
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        selectedArticle: action.article
      });

    case actionTypes.SAVE_ARTICLE:
      var newState = state.articles;
      var objIndex = newState.findIndex(function (obj) {
        return obj.id === action.article.id;
      });
      newState[objIndex] = {
        "id": action.article.id,
        "title": action.article.title,
        "content": action.article.content
      };
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        articles: newState
      });

    case actionTypes.REMOVE_ARTICLE:
      var newState1 = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()([], state.articles);

      var objIndex1 = newState1.findIndex(function (obj) {
        return obj.id === action.id;
      });
      console.log(objIndex1);
      console.log(action.id);
      newState1.splice(objIndex1, 1);
      return _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
        articles: newState1
      });

    default:
      return state;
  }
}; // ACTIONS

var serverRenderClock = function serverRenderClock(isServer) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.TICK,
      light: !isServer,
      ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
    });
  };
};
var startClock = function startClock() {
  return function (dispatch) {
    return setInterval(function () {
      return dispatch({
        type: actionTypes.TICK,
        light: true,
        ts: _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()()
      });
    }, 1000);
  };
};
var addCount = function addCount() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ADD
    });
  };
};
var showArticles = function showArticles() {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SHOW_ARTICLES
    });
  };
};
var selectArticle = function selectArticle(article) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SELECT_ARTICLE,
      article: article
    });
  };
};
var removeArticle = function removeArticle(id) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.REMOVE_ARTICLE,
      id: id
    });
  };
};
var addArticle = function addArticle(article) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.ADD_ARTICLE,
      article: article
    });
  };
};
var saveArticle = function saveArticle(article) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SAVE_ARTICLE,
      article: article
    });
  };
};
var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4___default.a)));
};

/***/ })

};;
//# sourceMappingURL=0.js.map