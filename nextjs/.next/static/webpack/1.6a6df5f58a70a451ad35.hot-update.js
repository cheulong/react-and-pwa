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
/* harmony import */ var _pages_article__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/article */ "./pages/article.js");







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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "content", '');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSave", function (title1, content1) {
      saveArticle({
        title: title1,
        content: content1
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

    var selectedArticle = _this.props.selectedArticle;
    _this.title = selectedArticle.title;
    _this.content = selectedArticle.content;
    var contentBlock = html_to_draftjs__WEBPACK_IMPORTED_MODULE_12___default()(_this.title);
    var contentBlock1 = html_to_draftjs__WEBPACK_IMPORTED_MODULE_12___default()(_this.content);

    if (contentBlock || contentBlock1) {
      var contentState = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(contentBlock.contentBlocks);
      var editorState = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(contentState);
      var contentState1 = draft_js__WEBPACK_IMPORTED_MODULE_9__["ContentState"].createFromBlockArray(contentBlock1.contentBlocks);
      var editorState1 = draft_js__WEBPACK_IMPORTED_MODULE_9__["EditorState"].createWithContent(contentState1);
      _this.state = {
        editorState: editorState,
        editorState1: editorState1
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditArticle1, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var selectedArticle = this.props.selectedArticle;
      var _this$state = this.state,
          editorState = _this$state.editorState,
          editorState1 = _this$state.editorState1;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-1830341227" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-1830341227" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.onSave(draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(editorState.getCurrentContent())), draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(editorState1.getCurrentContent())));
        },
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-1830341227" + " " + "save-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, " Save "))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "editorContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onUnderlineClick,
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "U"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onBoldClick,
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, "B")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onItalicClick,
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-1830341227",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "I")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1830341227" + " " + "editors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState1,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1830341227",
        __self: this
      }, ".demo-wrapper.jsx-1830341227{width:100% !important;display:block !important;margin-bottom:25px !important;height:400px !important;}.rdw-editor-toolbar.jsx-1830341227{padding:6px 5px 0;border-radius:2px;border:1px solid #F1F1F1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:white;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:15px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.rdw-inline-wrapper.jsx-1830341227{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.rdw-option-wrapper.jsx-1830341227{border:1px solid #F1F1F1;padding:5px;min-width:25px;height:20px;border-radius:2px;margin:0 4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background:white;text-transform:capitalize;}textarea.jsx-1830341227{width:100%;}.save-btn.jsx-1830341227{color:green;}.title__wrapper.jsx-1830341227{margin:0;}.App.jsx-1830341227{text-align:center;width:80%;margin:auto;color:gray;}.title.jsx-1830341227{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-1830341227 h2.jsx-1830341227{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEVkaXRBcnRpY2xlMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSFMsQUFHaUMsQUFPSixBQWFMLEFBT1ksQUFlZCxBQUlDLEFBSUgsQUFHUyxBQU9PLEFBT2QsU0FoQmIsRUFSQSxBQXlCQSxDQXJCQSxNQXZDb0IsQUE4Q1IsSUFyRGUsR0EyQmIsQUFpQ0ssR0FOTCxRQTlDYSxDQW9CVixHQTJCSixFQU1PLEtBNURZLElBdURoQyxDQTNCYyxRQWtDZCxDQXREZSxHQXFCSyxVQVZDLEdBbEJLLEtBNkJYLGFBQ0EsTUE3QmYsa0NBTzZCLGdDQVdULEVBWUssZ0JBWFIsdURBWEUsRUFZbkIsZUFYaUIsV0FzQkksOENBckJKLGVBQ0csa0JBQ0QsY0FvQkYsZUFDRSxpQkFDUywwQkFDNUIsYUF0QkEiLCJmaWxlIjoiRDpcXHdlYlxcc3R1ZHlcXHJlYWN0LWFuZC1wd2FcXG5leHRqc1xcY29tcG9uZW50c1xcRWRpdEFydGljbGUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBFZGl0b3IsIEVkaXRvclN0YXRlLCBSaWNoVXRpbHMsIENvbnRlbnRTdGF0ZSwgY29udmVydFRvUmF3IH0gZnJvbSAnZHJhZnQtanMnO1xyXG5pbXBvcnQgZHJhZnRUb0h0bWwgZnJvbSAnZHJhZnRqcy10by1odG1sJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGh0bWxUb0RyYWZ0IGZyb20gJ2h0bWwtdG8tZHJhZnRqcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBOb1NTUiBmcm9tICdyZWFjdC1uby1zc3InO1xyXG5pbXBvcnQgYXJ0aWNsZSBmcm9tICcuLi9wYWdlcy9hcnRpY2xlJztcclxuY2xhc3MgRWRpdEFydGljbGUxIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICB0aXRsZT0nJztcclxuICBjb250ZW50PScnO1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIGNvbnN0IHsgc2VsZWN0ZWRBcnRpY2xlfT0gdGhpcy5wcm9wcztcclxuICAgIHRoaXMudGl0bGUgPSBzZWxlY3RlZEFydGljbGUudGl0bGU7XHJcbiAgICB0aGlzLmNvbnRlbnQgPSBzZWxlY3RlZEFydGljbGUuY29udGVudDtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGVudEJsb2NrID0gaHRtbFRvRHJhZnQodGhpcy50aXRsZSk7XHJcbiAgICBjb25zdCBjb250ZW50QmxvY2sxID0gaHRtbFRvRHJhZnQodGhpcy5jb250ZW50KTtcclxuICAgIFxyXG4gICAgaWYoY29udGVudEJsb2NrfHxjb250ZW50QmxvY2sxKSB7XHJcbiAgICAgIGNvbnN0IGNvbnRlbnRTdGF0ZSA9IENvbnRlbnRTdGF0ZS5jcmVhdGVGcm9tQmxvY2tBcnJheShjb250ZW50QmxvY2suY29udGVudEJsb2Nrcyk7XHJcbiAgICAgIGNvbnN0IGVkaXRvclN0YXRlID0gRWRpdG9yU3RhdGUuY3JlYXRlV2l0aENvbnRlbnQoY29udGVudFN0YXRlKTtcclxuICAgICAgY29uc3QgY29udGVudFN0YXRlMSA9IENvbnRlbnRTdGF0ZS5jcmVhdGVGcm9tQmxvY2tBcnJheShjb250ZW50QmxvY2sxLmNvbnRlbnRCbG9ja3MpO1xyXG4gICAgICBjb25zdCBlZGl0b3JTdGF0ZTEgPSBFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChjb250ZW50U3RhdGUxKTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBlZGl0b3JTdGF0ZSxlZGl0b3JTdGF0ZTFcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgXHJcbiAgfVxyXG5cclxuICBvblNhdmUgPSAodGl0bGUxLGNvbnRlbnQxKSA9PiB7XHJcblxyXG4gICAgc2F2ZUFydGljbGUoe3RpdGxlOiB0aXRsZTEsIGNvbnRlbnQ6Y29udGVudDF9KVxyXG4gIH07XHJcblxyXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UgPSAoZWRpdG9yU3RhdGUpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlZGl0b3JTdGF0ZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBvbkVkaXRvclN0YXRlQ2hhbmdlMSA9IChlZGl0b3JTdGF0ZTEpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBlZGl0b3JTdGF0ZTFcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlID0gKGVkaXRvclN0YXRlMSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVkaXRvclN0YXRlMVxyXG4gICAgfSkgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlDb21tYW5kID0gKGNvbW1hbmQpID0+IHtcclxuICAgIGNvbnN0IG5ld1N0YXRlID0gUmljaFV0aWxzLmhhbmRsZUtleUNvbW1hbmQodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsIGNvbW1hbmQpO1xyXG4gICAgaWYgKG5ld1N0YXRlKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UobmV3U3RhdGUpO1xyXG4gICAgICByZXR1cm4gJ2hhbmRsZWQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICdub3QtaGFuZGxlZCc7XHJcbiAgfVxyXG5cclxuICBvblVuZGVybGluZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoYW5nZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsICdVTkRFUkxJTkUnKSk7XHJcbiAgfVxyXG5cclxuICBvbkJvbGRDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGFuZ2UoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUxLCAnQk9MRCcpKVxyXG4gIH1cclxuXHJcbiAgb25JdGFsaWNDbGljayA9ICgpID0+IHtcclxuICAgIHRoaXMub25DaGFuZ2UoUmljaFV0aWxzLnRvZ2dsZUlubGluZVN0eWxlKHRoaXMuc3RhdGUuZWRpdG9yU3RhdGUxLCAnSVRBTElDJykpXHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc2VsZWN0ZWRBcnRpY2xlfT0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgZWRpdG9yU3RhdGUsZWRpdG9yU3RhdGUxIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWNvbnRlbnQgQXBwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLyc+PGgyPiZsdDsgaG9tZTwvaDI+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkFydGljbGVzPC9oMT5cclxuICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxFZGl0b3IgXHJcbiAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInRpdGxlX193cmFwcGVyXCJcclxuICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkVkaXRvclN0YXRlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhcnRpY2xlLWRhdGVcIj48c21hbGw+PExpbmsgaHJlZj0nLyc+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PnRoaXMub25TYXZlKGRyYWZ0VG9IdG1sKGNvbnZlcnRUb1JhdyhlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpKSksZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlMS5nZXRDdXJyZW50Q29udGVudCgpKSkpfT48c3BhbiBjbGFzc05hbWU9XCJzYXZlLWJ0blwiPiBTYXZlIDwvc3Bhbj48L2J1dHRvbj48L0xpbms+PC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWRpdG9yQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25VbmRlcmxpbmVDbGlja30+VTwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uQm9sZENsaWNrfT48Yj5CPC9iPjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9uSXRhbGljQ2xpY2t9PjxlbT5JPC9lbT48L2J1dHRvbj4gICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JzXCI+XHJcbiAgICAgICAgICAgIDxFZGl0b3IgXHJcbiAgICAgICAgICAgIGVkaXRvclN0YXRlPXtlZGl0b3JTdGF0ZTF9XHJcbiAgICAgICAgICAgIHdyYXBwZXJDbGFzc05hbWU9XCJ0aXRsZV9fd3JhcHBlclwiXHJcbiAgICAgICAgICAgIGVkaXRvckNsYXNzTmFtZT1cImRlbW8tZWRpdG9yXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FZGl0b3JTdGF0ZUNoYW5nZTF9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgLmRlbW8td3JhcHBlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJkdy1lZGl0b3ItdG9vbGJhciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggNXB4IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjFGMUYxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZHctaW5saW5lLXdyYXBwZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5yZHctb3B0aW9uLXdyYXBwZXIge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0YxRjFGMTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIG1pbi13aWR0aDogMjVweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zYXZlLWJ0biB7XHJcbiAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aXRsZV9fd3JhcHBlciB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5BcHAge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucGFnZS10aXRsZSBoMiB7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IHNlbGVjdGVkQXJ0aWNsZSB9KSA9PiAoeyBzZWxlY3RlZEFydGljbGUgfSlcclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xyXG4gIHNhdmVBcnRpY2xlOiBhcnRpY2xlID0+ZGlzcGF0Y2goc2F2ZUFydGljbGUoYXJ0aWNsZSkpLFxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcyxtYXBEaXNwYXRjaFRvUHJvcHMpKEVkaXRBcnRpY2xlMSk7Il19 */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\EditArticle1.js */"));
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

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    saveArticle: function (_saveArticle) {
      function saveArticle(_x) {
        return _saveArticle.apply(this, arguments);
      }

      saveArticle.toString = function () {
        return _saveArticle.toString();
      };

      return saveArticle;
    }(function (article) {
      return dispatch(saveArticle(article));
    })
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(EditArticle1));

/***/ })

})
//# sourceMappingURL=1.6a6df5f58a70a451ad35.hot-update.js.map