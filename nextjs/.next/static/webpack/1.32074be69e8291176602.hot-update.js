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
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../store */ "./store.js");







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
      _this.props.saveArticle({
        'id': +_this.props.selectedArticle.id,
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
        className: "jsx-3865571003" + " " + "article-content App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3865571003" + " " + "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3865571003" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3865571003" + " " + "article-date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("small", {
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.onSave(draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(editorState.getCurrentContent())), draftjs_to_html__WEBPACK_IMPORTED_MODULE_10___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_9__["convertToRaw"])(editorState1.getCurrentContent())));
        },
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "jsx-3865571003" + " " + "save-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, " Save "))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3865571003" + " " + "editorContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onUnderlineClick,
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, "U"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onBoldClick,
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("b", {
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "B")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.onItalicClick,
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("em", {
        className: "jsx-3865571003",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "I")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3865571003" + " " + "editors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_9__["Editor"], {
        editorState: editorState1,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3865571003",
        __self: this
      }, ".demo-wrapper.jsx-3865571003{width:100% !important;display:block !important;margin-bottom:25px !important;height:400px !important;}.rdw-editor-toolbar.jsx-3865571003{padding:6px 5px 0;border-radius:2px;border:1px solid #F1F1F1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:white;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:15px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.article-content.jsx-3865571003{text-align:start;}.rdw-inline-wrapper.jsx-3865571003{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:6px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.rdw-option-wrapper.jsx-3865571003{border:1px solid #F1F1F1;padding:5px;min-width:25px;height:20px;border-radius:2px;margin:0 4px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;background:white;text-transform:capitalize;}textarea.jsx-3865571003{width:100%;}.save-btn.jsx-3865571003{color:green;}.title__wrapper.jsx-3865571003{margin:0;}.App.jsx-3865571003{text-align:center;width:80%;margin:auto;color:gray;}.title.jsx-3865571003{text-transform:uppercase;font-size:2.2rem;text-align:center;}.page-title.jsx-3865571003 h2.jsx-3865571003{float:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEVkaXRBcnRpY2xlMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSFMsQUFHaUMsQUFPSixBQVlELEFBR0osQUFPWSxBQWVkLEFBSUMsQUFJSCxBQUdTLEFBT08sQUFPZCxTQWhCYixFQVJBLEFBeUJBLENBckJBLEtBN0JBLENBWm9CLEFBZ0RSLElBdkRlLEdBNkJiLEFBaUNLLEdBTkwsUUFoRGEsQ0FzQlYsR0EyQkosRUFNTyxLQTlEWSxJQXlEaEMsQ0EzQmMsUUFrQ2QsQ0F4RGUsR0F1QkssVUFWQyxHQXBCSyxLQStCWCxhQUNBLE1BL0JmLGtDQU82QixnQ0FhVCxFQVlLLGdCQVhSLHVEQWJFLEVBY25CLGVBYmlCLFdBd0JJLDhDQXZCSixlQUNHLGtCQUNELGNBc0JGLGVBQ0UsaUJBQ1MsMEJBQzVCLGFBeEJBIiwiZmlsZSI6IkQ6XFx3ZWJcXHN0dWR5XFxyZWFjdC1hbmQtcHdhXFxuZXh0anNcXGNvbXBvbmVudHNcXEVkaXRBcnRpY2xlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRWRpdG9yLCBFZGl0b3JTdGF0ZSwgUmljaFV0aWxzLCBDb250ZW50U3RhdGUsIGNvbnZlcnRUb1JhdyB9IGZyb20gJ2RyYWZ0LWpzJztcclxuaW1wb3J0IGRyYWZ0VG9IdG1sIGZyb20gJ2RyYWZ0anMtdG8taHRtbCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBodG1sVG9EcmFmdCBmcm9tICdodG1sLXRvLWRyYWZ0anMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTm9TU1IgZnJvbSAncmVhY3Qtbm8tc3NyJztcclxuaW1wb3J0IGFydGljbGUgZnJvbSAnLi4vcGFnZXMvYXJ0aWNsZSc7XHJcbmltcG9ydCB7IHNhdmVBcnRpY2xlIH0gZnJvbSAnLi4vc3RvcmUnXHJcblxyXG5jbGFzcyBFZGl0QXJ0aWNsZTEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHRpdGxlPScnO1xyXG4gIGNvbnRlbnQ9Jyc7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgY29uc3QgeyBzZWxlY3RlZEFydGljbGV9PSB0aGlzLnByb3BzO1xyXG4gICAgdGhpcy50aXRsZSA9IHNlbGVjdGVkQXJ0aWNsZS50aXRsZTtcclxuICAgIHRoaXMuY29udGVudCA9IHNlbGVjdGVkQXJ0aWNsZS5jb250ZW50O1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50QmxvY2sgPSBodG1sVG9EcmFmdCh0aGlzLnRpdGxlKTtcclxuICAgIGNvbnN0IGNvbnRlbnRCbG9jazEgPSBodG1sVG9EcmFmdCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgXHJcbiAgICBpZihjb250ZW50QmxvY2t8fGNvbnRlbnRCbG9jazEpIHtcclxuICAgICAgY29uc3QgY29udGVudFN0YXRlID0gQ29udGVudFN0YXRlLmNyZWF0ZUZyb21CbG9ja0FycmF5KGNvbnRlbnRCbG9jay5jb250ZW50QmxvY2tzKTtcclxuICAgICAgY29uc3QgZWRpdG9yU3RhdGUgPSBFZGl0b3JTdGF0ZS5jcmVhdGVXaXRoQ29udGVudChjb250ZW50U3RhdGUpO1xyXG4gICAgICBjb25zdCBjb250ZW50U3RhdGUxID0gQ29udGVudFN0YXRlLmNyZWF0ZUZyb21CbG9ja0FycmF5KGNvbnRlbnRCbG9jazEuY29udGVudEJsb2Nrcyk7XHJcbiAgICAgIGNvbnN0IGVkaXRvclN0YXRlMSA9IEVkaXRvclN0YXRlLmNyZWF0ZVdpdGhDb250ZW50KGNvbnRlbnRTdGF0ZTEpO1xyXG4gICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgIGVkaXRvclN0YXRlLGVkaXRvclN0YXRlMVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4gIG9uU2F2ZSA9ICh0aXRsZTEsY29udGVudDEpID0+IHtcclxuXHJcbiAgICB0aGlzLnByb3BzLnNhdmVBcnRpY2xlKHsnaWQnOit0aGlzLnByb3BzLnNlbGVjdGVkQXJ0aWNsZS5pZCwndGl0bGUnOiB0aXRsZTEsICdjb250ZW50Jzpjb250ZW50MX0pXHJcbiAgfTtcclxuXHJcbiAgb25FZGl0b3JTdGF0ZUNoYW5nZSA9IChlZGl0b3JTdGF0ZSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVkaXRvclN0YXRlXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIG9uRWRpdG9yU3RhdGVDaGFuZ2UxID0gKGVkaXRvclN0YXRlMSkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGVkaXRvclN0YXRlMVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSAoZWRpdG9yU3RhdGUxKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgZWRpdG9yU3RhdGUxXHJcbiAgICB9KSBcclxuICB9XHJcblxyXG4gIGhhbmRsZUtleUNvbW1hbmQgPSAoY29tbWFuZCkgPT4ge1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBSaWNoVXRpbHMuaGFuZGxlS2V5Q29tbWFuZCh0aGlzLnN0YXRlLmVkaXRvclN0YXRlMSwgY29tbWFuZCk7XHJcbiAgICBpZiAobmV3U3RhdGUpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZShuZXdTdGF0ZSk7XHJcbiAgICAgIHJldHVybiAnaGFuZGxlZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ25vdC1oYW5kbGVkJztcclxuICB9XHJcblxyXG4gIG9uVW5kZXJsaW5lQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKFJpY2hVdGlscy50b2dnbGVJbmxpbmVTdHlsZSh0aGlzLnN0YXRlLmVkaXRvclN0YXRlMSwgJ1VOREVSTElORScpKTtcclxuICB9XHJcblxyXG4gIG9uQm9sZENsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoYW5nZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsICdCT0xEJykpXHJcbiAgfVxyXG5cclxuICBvbkl0YWxpY0NsaWNrID0gKCkgPT4ge1xyXG4gICAgdGhpcy5vbkNoYW5nZShSaWNoVXRpbHMudG9nZ2xlSW5saW5lU3R5bGUodGhpcy5zdGF0ZS5lZGl0b3JTdGF0ZTEsICdJVEFMSUMnKSlcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBzZWxlY3RlZEFydGljbGV9PSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgeyBlZGl0b3JTdGF0ZSxlZGl0b3JTdGF0ZTEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtY29udGVudCBBcHBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICA8TGluayBocmVmPScvJz48aDI+Jmx0OyBob21lPC9oMj48L0xpbms+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QXJ0aWNsZXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPEVkaXRvciBcclxuICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlfVxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lPVwidGl0bGVfX3dyYXBwZXJcIlxyXG4gICAgICAgICAgICBlZGl0b3JDbGFzc05hbWU9XCJkZW1vLWVkaXRvclwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRWRpdG9yU3RhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFydGljbGUtZGF0ZVwiPjxzbWFsbD48TGluayBocmVmPScvJz48YnV0dG9uIG9uQ2xpY2s9eygpID0+dGhpcy5vblNhdmUoZHJhZnRUb0h0bWwoY29udmVydFRvUmF3KGVkaXRvclN0YXRlLmdldEN1cnJlbnRDb250ZW50KCkpKSxkcmFmdFRvSHRtbChjb252ZXJ0VG9SYXcoZWRpdG9yU3RhdGUxLmdldEN1cnJlbnRDb250ZW50KCkpKSl9PjxzcGFuIGNsYXNzTmFtZT1cInNhdmUtYnRuXCI+IFNhdmUgPC9zcGFuPjwvYnV0dG9uPjwvTGluaz48L3NtYWxsPjwvcD5cclxuICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JDb250YWluZXJcIj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5vblVuZGVybGluZUNsaWNrfT5VPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25Cb2xkQ2xpY2t9PjxiPkI8L2I+PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25JdGFsaWNDbGlja30+PGVtPkk8L2VtPjwvYnV0dG9uPiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkaXRvcnNcIj5cclxuICAgICAgICAgICAgPEVkaXRvciBcclxuICAgICAgICAgICAgZWRpdG9yU3RhdGU9e2VkaXRvclN0YXRlMX1cclxuICAgICAgICAgICAgd3JhcHBlckNsYXNzTmFtZT1cInRpdGxlX193cmFwcGVyXCJcclxuICAgICAgICAgICAgZWRpdG9yQ2xhc3NOYW1lPVwiZGVtby1lZGl0b3JcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkVkaXRvclN0YXRlQ2hhbmdlMX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAuZGVtby13cmFwcGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAucmR3LWVkaXRvci10b29sYmFyIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDZweCA1cHggMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGMUYxRjE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFydGljbGUtY29udGVudCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJkdy1pbmxpbmUtd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnJkdy1vcHRpb24td3JhcHBlciB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRjFGMUYxO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNhdmUtYnRuIHtcclxuICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRpdGxlX193cmFwcGVyIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLkFwcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5wYWdlLXRpdGxlIGgyIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgc2VsZWN0ZWRBcnRpY2xlIH0pID0+ICh7IHNlbGVjdGVkQXJ0aWNsZSB9KVxyXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XHJcbiAgc2F2ZUFydGljbGU6IGFydGljbGUgPT5kaXNwYXRjaChzYXZlQXJ0aWNsZShhcnRpY2xlKSksXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLG1hcERpc3BhdGNoVG9Qcm9wcykoRWRpdEFydGljbGUxKTsiXX0= */\n/*@ sourceURL=D:\\web\\study\\react-and-pwa\\nextjs\\components\\EditArticle1.js */"));
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
    saveArticle: function saveArticle(article) {
      return dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_16__["saveArticle"])(article));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["connect"])(mapStateToProps, mapDispatchToProps)(EditArticle1));

/***/ })

})
//# sourceMappingURL=1.32074be69e8291176602.hot-update.js.map