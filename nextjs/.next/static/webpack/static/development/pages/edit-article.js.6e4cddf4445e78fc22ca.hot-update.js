webpackHotUpdate("static\\development\\pages\\edit-article.js",{

/***/ "./pages/edit-article.js":
/*!*******************************!*\
  !*** ./pages/edit-article.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\web\\study\\react-and-pwa\\nextjs\\pages\\edit-article.js";
 // import { EditorState, convertToRaw, ContentState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



var EditArticle =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(EditArticle, _Component);

  function EditArticle() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditArticle);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EditArticle).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditArticle, [{
    key: "render",
    // article ='';
    // articleList='';
    // constructor(props) {
    //   super(props);
    //   this.articleList = JSON.parse(localStorage.getItem('articles'));
    //   this.article = this.articleList.find(this.findArticle);
    //   const title = this.article.title;
    //   const html = this.article.content;
    //   const contentBlock1 = htmlToDraft(title);
    //   const contentBlock = htmlToDraft(html);
    //   if (contentBlock1||contentBlock) {
    //     const contentState1 = ContentState.createFromBlockArray(contentBlock1.contentBlocks);
    //     const editorState1 = EditorState.createWithContent(contentState1);
    //     const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    //     const editorState = EditorState.createWithContent(contentState);
    //     this.state = {
    //       editorState1,editorState
    //     };
    //   }
    // }
    // findArticle = (articleList) => { 
    //   return articleList.id === this.props.match.params.id;
    // }
    // updateArticle = (articleList) => { 
    //   if(articleList.id === this.props.match.params.id) {
    //     articleList.title = this.article.title;
    //     articleList.content = this.article.content;
    //   }
    //   return articleList.id === this.props.match.params.id;
    // }
    // onEditorStateChange1 = (editorState1) => {
    //   this.setState({
    //     editorState1,
    //   });
    // };
    // onEditorStateChange = (editorState) => {
    //   this.setState({
    //     editorState,
    //   });
    // };
    // saveArticle = (title,content) => {
    //   this.article.title = title;
    //   this.article.content = content;
    //   const objIndex = this.articleList.findIndex((obj => obj.id === this.props.match.params.id));
    //   this.articleList[objIndex].title=this.article.title;
    //   this.articleList[objIndex].content=this.article.content;
    //   localStorage.clear();
    //   localStorage.setItem('articles', JSON.stringify(this.articleList));
    // }
    value: function render() {
      // const { editorState1, editorState } = this.state;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "article-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "page-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "< home")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Articles"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })));
    }
  }]);

  return EditArticle;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (EditArticle);

/***/ })

})
//# sourceMappingURL=edit-article.js.6e4cddf4445e78fc22ca.hot-update.js.map