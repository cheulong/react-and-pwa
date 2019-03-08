webpackHotUpdate(1,{

/***/ "./components/EditArticle1.js":
/*!************************************!*\
  !*** ./components/EditArticle1.js ***!
  \************************************/
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







var _jsxFileName = "D:\\web\\study\\react-and-pwa\\nextjs\\components\\EditArticle1.js";









var EditArticle1 =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EditArticle1, _Component);

  function EditArticle1(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditArticle1);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EditArticle1).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "title", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSave", function (id) {
      console.log(id);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onEditorStateChange", function (editorState) {
      _this.setState({
        editorState: editorState
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (editorState) {
      _this.setState({
        editorState: editorState
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleKeyCommand", function (command) {
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].handleKeyCommand(_this.state.editorState, command);

      if (newState) {
        _this.onChange(newState);

        return 'handled';
      }

      return 'not-handled';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnderlineClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].toggleInlineStyle(_this.state.editorState, 'UNDERLINE'));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onBoldClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].toggleInlineStyle(_this.state.editorState, 'BOLD'));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onItalicClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_9__["RichUtils"].toggleInlineStyle(_this.state.editorState, 'ITALIC'));
    });

    var selectedArticle = _this.props.selectedArticle;
    _this.title = selectedArticle.title;
    var contentBlock = html_to_draftjs__WEBPACK_IMPORTED_MODULE_12___default()(_this.title);

    if (contentBlock) {
      var contentState = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(contentBlock.contentBlocks);
      var editorState = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(contentState);
      _this.state = {
        editorState: editorState
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditArticle1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedArticle = this.props.selectedArticle;
      var editorState = this.state.editorState;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1830341227" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "editorContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onUnderlineClick,
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "U"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onBoldClick,
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "B")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onItalicClick,
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "I")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "editors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.onSave(draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(editorState.getCurrentContent())));
        },
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "save")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1830341227",
        __self: this
      }, ".demo-wrapper.jsx-1830341227{width:100% !important;display:block !important;margin-bottom:25px !important;height:400px !important;}.rdw-editor-toolbar.jsx-1830341227{padding:6px 5px 0;border-radius:2px;border:1px solid #F1F1F1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:white;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:15px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.rdw-inline-wrapper.jsx-1830341227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.rdw-option-wrapper.jsx-1830341227{border:1px solid #F1F1F1;padding:5px;min-width:25px;height:20px;border-radius:2px;margin:0 4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background:white;text-transform:capitalize;}textarea.jsx-1830341227{width:100%;}.save-btn.jsx-1830341227{color:green;}.title__wrapper.jsx-1830341227{margin:0;}.App.jsx-1830341227{text-align:center;width:80%;margin:auto;color:gray;}.title.jsx-1830341227{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-1830341227 h2.jsx-1830341227{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEVkaXRBcnRpY2xlMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR1MsQUFHaUMsQUFPSixBQWFMLEFBT1ksQUFlZCxBQUlDLEFBSUgsQUFHUyxBQU9PLEFBT2QsU0FoQmIsRUFSQSxBQXlCQSxDQXJCQSxNQXZDb0IsQUE4Q1IsSUFyRGUsR0EyQmIsQUFpQ0ssR0FOTCxRQTlDYSxDQW9CVixHQTJCSixFQU1PLEtBNURZLElBdURoQyxDQTNCYyxRQWtDZCxDQXREZSxHQXFCSyxVQVZDLEdBbEJLLEtBNkJYLGFBQ0EsTUE3QmYsa0NBTzZCLGdDQVdULEVBWUssZ0JBWFIsdURBWEUsRUFZbkIsZUFYaUIsV0FzQkksOENBckJKLGVBQ0csa0JBQ0QsY0FvQkYsZUFDRSxpQkFDUywwQkFDNUIsYUF0QkEiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xcY29tcG9uZW50c1xcRWRpdEFydGljbGUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0b3IsIEVkaXRvclN0YXRlLCBSaWNoVXRpbHMsIENvbnRlbnRTdGF0ZSwgY29udmVydFRvUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgZHJhZnRUb0h0bWwgZnJvbSAnZHJhZnRqcy10by1odG1sJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGh0bWxUb0RyYWZ0IGZyb20gJ2h0bWwtdG8tZHJhZnRqcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InO1xyXG5jbGFzcyBFZGl0QXJ0aWNsZTEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHRpdGxlPScnO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIGNvbnN0IHsgc2VsZWN0ZWRBcnRpY2xlfT0gdGhpcy5wcm9wcztcclxuICAgIHRoaXMudGl0bGUgPSBzZWxlY3RlZEFydGljbGUudGl0bGU7XHJcbiAgICBcclxuICAgIGNvbnN0IGNvbnRlbnRCbG9jayA9IGh0bWxUb0RyYWZ0KHRoaXMudGl0bGUpO1xyXG4gICAgXHJcbiAgICBpZihjb250ZW50QmxvY2spIHtcclxuICAgICAgY29uc3QgY29udGVudFN0YXRlID0gQ29udGVudFN0YXRlLmNyZWF0ZUZyb21CbG9ja0FycmF5KGNvbnRlbnRCbG9jay5jb250ZW50QmxvY2tzKTtcclxuICAgICAgY29uc3QgZWRpdG9yU3RhdGUgPSBFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChjb250ZW50U3RhdGUpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGVkaXRvclN0YXRlXHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuXHJcbiAgb25TYXZlID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICBcclxuICB9O1xyXG5cclxuICBvbkVkaXRvclN0YXRlQ2hhbmdlID0gKGVkaXRvclN0YXRlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZWRpdG9yU3RhdGVcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlID0gKGVkaXRvclN0YXRlKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZWRpdG9yU3RhdGUgXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleUNvbW1hbmQgPSAoY29tbWFuZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBSaWNoVXRpbHMuaGFuZGxlS2V5Q29tbWFuZCh0aGlzLnN0YXRlLmVkaXRvclN0YXRlLCBjb21tYW5kKTtcclxuICAgIGlmIChuZXdTdGF0ZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKG5ld1N0YXRlKTtcclxuICAgICAgcmV0dXJuICdoYW5kbGVkJztcclxuICAgIH1cclxuICAgIHJldHVybiAnbm90LWhhbmRsZWQnO1xyXG4gIH1cclxuXHJcbiAgb25VbmRlcmxpbmVDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGFuZ2UoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUsICdVTkRFUkxJTkUnKSk7XHJcbiAgfVxyXG5cclxuICBvbkJvbGRDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGFuZ2UoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUsICdCT0xEJykpXHJcbiAgfVxyXG5cclxuICBvbkl0YWxpY0NsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoYW5nZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZSwgJ0lUQUxJQycpKVxyXG4gIH1cclxuXHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNlbGVjdGVkQXJ0aWNsZX09IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGVkaXRvclN0YXRlIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRlbnQgQXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+PGgyPiZsdDsgaG9tZTwvaDI+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkFydGljbGVzPC9oMT5cclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvckNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uVW5kZXJsaW5lQ2xpY2t9PlU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkJvbGRDbGlja30+PGI+QjwvYj48L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vbkl0YWxpY0NsaWNrfT48ZW0+STwvZW0+PC9idXR0b24+ICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yc1wiPlxyXG4gICAgICAgICAgPEVkaXRvciBcclxuICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwidGl0bGVfX3dyYXBwZXJcIlxyXG4gICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJkZW1vLWVkaXRvclwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxFZGl0b3IgXHJcbiAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInRpdGxlX193cmFwcGVyXCJcclxuICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHRoaXMub25TYXZlKGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSkpfT5zYXZlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAuZGVtby13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmR3LWVkaXRvci10b29sYmFyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCA1cHggMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJkdy1pbmxpbmUtd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJkdy1vcHRpb24td3JhcHBlciB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjFGMUYxO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNhdmUtYnRuIHtcclxuICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRpdGxlX193cmFwcGVyIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2VsZWN0ZWRBcnRpY2xlIH0pID0+ICh7IHNlbGVjdGVkQXJ0aWNsZSB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEVkaXRBcnRpY2xlMSk7Il19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\EditArticle1.js */"));
    }
  }]);

  return EditArticle1;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var selectedArticle = _ref.selectedArticle;
  return {
    selectedArticle: selectedArticle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps)(EditArticle1));

/***/ })

})
//# sourceMappingURL=1.1d7df1a0add2898d0126.hot-update.js.map