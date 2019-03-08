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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_11__);







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
      var newState = draft_js__WEBPACK_IMPORTED_MODULE_8__["RichUtils"].handleKeyCommand(_this.state.editorState, command);

      if (newState) {
        _this.onChange(newState);

        return 'handled';
      }

      return 'not-handled';
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUnderlineClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_8__["RichUtils"].toggleInlineStyle(_this.state.editorState, 'UNDERLINE'));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onBoldClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_8__["RichUtils"].toggleInlineStyle(_this.state.editorState, 'BOLD'));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onItalicClick", function () {
      _this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_8__["RichUtils"].toggleInlineStyle(_this.state.editorState, 'ITALIC'));
    });

    var selectedArticle = _this.props.selectedArticle;
    _this.title = selectedArticle.title;
    var contentBlock = html_to_draftjs__WEBPACK_IMPORTED_MODULE_10___default()(_this.title);

    if (contentBlock) {
      var contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

      var _editorState = draft_js__WEBPACK_IMPORTED_MODULE_8__["EditorState"].createWithContent(contentState);

      _this.state = {
        editorState: _editorState
      };
    }

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditArticle1, [{
    key: "render",
    value: function render() {
      var selectedArticle = this.props.selectedArticle;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "editorContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_no_ssr__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.onUnderlineClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "U"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.onBoldClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "B")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.onItalicClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "I")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "editors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, selectedArticle.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_8__["Editor"], {
        editorState: editorState,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onEditorStateChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }))));
    }
  }]);

  return EditArticle1;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var selectedArticle = _ref.selectedArticle;
  return {
    selectedArticle: selectedArticle
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(EditArticle1));

/***/ }),

/***/ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-to-draftjs/dist/html-to-draftjs.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"),__webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js")):undefined}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,o,u){var a=e.nodeName.toLowerCase();if(u){var c=u(a,e);if(c){var s=l.Entity.__create(c.type,c.mutability,c.data||{});return{chunk:(0,d.getAtomicBlockChunk)(s)}}}if("#text"===a&&"\n"!==e.textContent)return(0,d.createTextChunk)(e,t,o);if("br"===a)return{chunk:(0,d.getSoftNewlineChunk)()};if("img"===a&&e instanceof HTMLImageElement){var f={};f.src=e.getAttribute?e.getAttribute("src")||e.src:e.src,f.alt=e.alt,f.height=e.style.height,f.width=e.style.width,e.style.float&&(f.alignment=e.style.float);var m=l.Entity.__create("IMAGE","MUTABLE",f);return{chunk:(0,d.getAtomicBlockChunk)(m)}}if("iframe"===a&&e instanceof HTMLIFrameElement){var k={};k.src=e.getAttribute?e.getAttribute("src")||e.src:e.src,k.height=e.height,k.width=e.width;var y=l.Entity.__create("EMBEDDED_LINK","MUTABLE",k);return{chunk:(0,d.getAtomicBlockChunk)(y)}}var b=(0,h.default)(a,r),x=void 0;b&&("ul"===a||"ol"===a?(r=a,n+=1):("unordered-list-item"!==b&&"ordered-list-item"!==b&&(r="",n=-1),M?(x=(0,d.getFirstBlockChunk)(b,(0,g.default)(e)),M=!1):x=(0,d.getBlockDividerChunk)(b,n,(0,g.default)(e)))),x||(x=(0,d.getEmptyChunk)()),t=(0,p.default)(a,e,t);for(var C=e.firstChild;C;){var E=(0,v.default)(C),w=i(C,t,n,r,E||o,u),_=w.chunk;x=(0,d.joinChunks)(x,_);C=C.nextSibling}return{chunk:x}}function o(e,t){var n=e.trim().replace(x,b),r=(0,s.default)(n);return r?(M=!0,{chunk:i(r,new a.OrderedSet,-1,"",void 0,t).chunk}):null}function u(e,t){var n=o(e,t);if(n){var r=n.chunk,i=new a.OrderedMap({});r.entities&&r.entities.forEach(function(e){e&&(i=i.set(e,l.Entity.__get(e)))});var u=0;return{contentBlocks:r.text.split("\r").map(function(e,t){var n=u+e.length,i=r&&r.inlines.slice(u,n),o=r&&r.entities.slice(u,n),c=new a.List(i.map(function(e,t){var n={style:e,entity:null};return o[t]&&(n.entity=o[t]),l.CharacterMetadata.create(n)}));return u=n,new l.ContentBlock({key:(0,l.genKey)(),type:r&&r.blocks[t]&&r.blocks[t].type||"unstyled",depth:r&&r.blocks[t]&&r.blocks[t].depth,data:r&&r.blocks[t]&&r.blocks[t].data||new a.Map({}),text:e,characterList:c})}),entityMap:i}}return null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var l=n(1),a=n(0),c=n(4),s=r(c),d=n(5),f=n(6),h=r(f),m=n(7),p=r(m),k=n(8),g=r(k),y=n(9),v=r(y),b=" ",x=new RegExp("&nbsp;","g"),M=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){var t,n=null;return document.implementation&&document.implementation.createHTMLDocument&&(t=document.implementation.createHTMLDocument("foo"),t.documentElement.innerHTML=e,n=t.getElementsByTagName("body")[0]),n};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.joinChunks=t.getAtomicBlockChunk=t.getBlockDividerChunk=t.getFirstBlockChunk=t.getEmptyChunk=t.getSoftNewlineChunk=t.createTextChunk=t.getWhitespaceChunk=void 0;var r=n(0),i=t.getWhitespaceChunk=function(e){return{text:" ",inlines:[new r.OrderedSet],entities:[e],blocks:[]}};t.createTextChunk=function(e,t,n){var r=e.textContent;return""===r.trim()?{chunk:i(n)}:{chunk:{text:r,inlines:Array(r.length).fill(t),entities:Array(r.length).fill(n),blocks:[]}}},t.getSoftNewlineChunk=function(){return{text:"\n",inlines:[new r.OrderedSet],entities:new Array(1),blocks:[]}},t.getEmptyChunk=function(){return{text:"",inlines:[],entities:[],blocks:[]}},t.getFirstBlockChunk=function(e,t){return{text:"",inlines:[],entities:[],blocks:[{type:e,depth:0,data:t||new r.Map({})}]}},t.getBlockDividerChunk=function(e,t,n){return{text:"\r",inlines:[],entities:[],blocks:[{type:e,depth:Math.max(0,Math.min(4,t)),data:n||new r.Map({})}]}},t.getAtomicBlockChunk=function(e){return{text:"\r ",inlines:[new r.OrderedSet],entities:[e],blocks:[{type:"atomic",depth:0,data:new r.Map({})}]}},t.joinChunks=function(e,t){return{text:e.text+t.text,inlines:e.inlines.concat(t.inlines),entities:e.entities.concat(t.entities),blocks:e.blocks.concat(t.blocks)}}},function(e,t,n){"use strict";function r(e,t){var n=o.filter(function(n){return n.element===e&&(!n.wrapper||n.wrapper===t)||n.wrapper===e||n.aliasedElements&&n.aliasedElements.indexOf(e)>-1}).keySeq().toSet().toArray();if(1===n.length)return n[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(0),o=new i.Map({"header-one":{element:"h1"},"header-two":{element:"h2"},"header-three":{element:"h3"},"header-four":{element:"h4"},"header-five":{element:"h5"},"header-six":{element:"h6"},"unordered-list-item":{element:"li",wrapper:"ul"},"ordered-list-item":{element:"li",wrapper:"ol"},blockquote:{element:"blockquote"},code:{element:"pre"},atomic:{element:"figure"},unstyled:{element:"p",aliasedElements:["div"]}})},function(e,t,n){"use strict";function r(e,t,n){var r=i[e],o=void 0;if(r)o=n.add(r).toOrderedSet();else if(t instanceof HTMLElement){o=n;var u=t;o=o.withMutations(function(e){var t=u.style.color,n=u.style.backgroundColor,r=u.style.fontSize,i=u.style.fontFamily.replace(/^"|"$/g,"");t&&e.add("color-"+t.replace(/ /g,"")),n&&e.add("bgcolor-"+n.replace(/ /g,"")),r&&e.add("fontsize-"+r.replace(/px$/g,"")),i&&e.add("fontfamily-"+i)}).toOrderedSet()}return o}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i={code:"CODE",del:"STRIKETHROUGH",em:"ITALIC",strong:"BOLD",ins:"UNDERLINE",sub:"SUBSCRIPT",sup:"SUPERSCRIPT"}},function(e,t,n){"use strict";function r(e){if(e.style.textAlign)return new i.Map({"text-align":e.style.textAlign})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var i=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(e){var t=void 0;if(e instanceof HTMLAnchorElement){var n={};e.dataset&&void 0!==e.dataset.mention?(n.url=e.href,n.text=e.innerHTML,n.value=e.dataset.value,t=r.Entity.__create("MENTION","IMMUTABLE",n)):(n.url=e.getAttribute?e.getAttribute("href")||e.href:e.href,n.title=e.innerHTML,n.targetOption=e.target,t=r.Entity.__create("LINK","MUTABLE",n))}return t};t.default=i}])});

/***/ })

})
//# sourceMappingURL=1.fe5b9bed446a1321c5cc.hot-update.js.map