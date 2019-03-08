webpackHotUpdate(1,{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
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

/***/ })

})
//# sourceMappingURL=1.f543997cb3aaebcba44f.hot-update.js.map