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
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-no-ssr */ "./node_modules/react-no-ssr/index.js");
/* harmony import */ var react_no_ssr__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_no_ssr__WEBPACK_IMPORTED_MODULE_12__);







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
    var contentBlock = html_to_draftjs__WEBPACK_IMPORTED_MODULE_11___default()(_this.title);

    if (contentBlock) {
      var contentState = draft_js__WEBPACK_IMPORTED_MODULE_8__["ContentState"].createFromBlockArray(contentBlock.contentBlocks);
      var editorState = draft_js__WEBPACK_IMPORTED_MODULE_8__["EditorState"].createWithContent(contentState);
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
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "editorContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.onUnderlineClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, "U"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.onBoldClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "B")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.onItalicClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("em", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "I")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "editors",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, selectedArticle.title), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(draft_js__WEBPACK_IMPORTED_MODULE_8__["Editor"], {
        editorState: editorState,
        wrapperClassName: "title__wrapper",
        editorClassName: "demo-editor",
        onChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.onSave(draftjs_to_html__WEBPACK_IMPORTED_MODULE_9___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_8__["convertToRaw"])(editorState.getCurrentContent())));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "save"));
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps)(EditArticle1));

/***/ }),

/***/ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js":
/*!*************************************************************!*\
  !*** ./node_modules/draftjs-to-html/lib/draftjs-to-html.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

/**
* Utility function to execute callback for eack key->value pair.
*/
function forEach(obj, callback) {
  if (obj) {
    for (var key in obj) {
      // eslint-disable-line no-restricted-syntax
      if ({}.hasOwnProperty.call(obj, key)) {
        callback(key, obj[key]);
      }
    }
  }
}

/**
* The function returns true if the string passed to it has no content.
*/
function isEmptyString(str) {
  if (str === undefined || str === null || str.length === 0 || str.trim().length === 0) {
    return true;
  }
  return false;
}

/**
* Mapping block-type to corresponding html tag.
*/
var blockTypesMapping = {
  unstyled: 'p',
  'header-one': 'h1',
  'header-two': 'h2',
  'header-three': 'h3',
  'header-four': 'h4',
  'header-five': 'h5',
  'header-six': 'h6',
  'unordered-list-item': 'ul',
  'ordered-list-item': 'ol',
  blockquote: 'blockquote',
  code: 'pre'
};

/**
* Function will return HTML tag for a block.
*/
function getBlockTag(type) {
  return type && blockTypesMapping[type];
}

/**
* Function will return style string for a block.
*/
function getBlockStyle(data) {
  var styles = '';
  forEach(data, function (key, value) {
    if (value) {
      styles += key + ':' + value + ';';
    }
  });
  return styles;
}

/**
* The function returns an array of hashtag-sections in blocks.
* These will be areas in block which have hashtags applicable to them.
*/
function getHashtagRanges(blockText, hashtagConfig) {
  var sections = [];
  if (hashtagConfig) {
    var counter = 0;
    var startIndex = 0;
    var text = blockText;
    var trigger = hashtagConfig.trigger || '#';
    var separator = hashtagConfig.separator || ' ';
    for (; text.length > 0 && startIndex >= 0;) {
      if (text[0] === trigger) {
        startIndex = 0;
        counter = 0;
        text = text.substr(trigger.length);
      } else {
        startIndex = text.indexOf(separator + trigger);
        if (startIndex >= 0) {
          text = text.substr(startIndex + (separator + trigger).length);
          counter += startIndex + separator.length;
        }
      }
      if (startIndex >= 0) {
        var endIndex = text.indexOf(separator) >= 0 ? text.indexOf(separator) : text.length;
        var hashtag = text.substr(0, endIndex);
        if (hashtag && hashtag.length > 0) {
          sections.push({
            offset: counter,
            length: hashtag.length + trigger.length,
            type: 'HASHTAG'
          });
        }
        counter += trigger.length;
      }
    }
  }
  return sections;
}

/**
* The function returns an array of entity-sections in blocks.
* These will be areas in block which have same entity or no entity applicable to them.
*/
function getSections(block, hashtagConfig) {
  var sections = [];
  var lastOffset = 0;
  var sectionRanges = block.entityRanges.map(function (range) {
    var offset = range.offset,
        length = range.length,
        key = range.key;

    return {
      offset: offset,
      length: length,
      key: key,
      type: 'ENTITY'
    };
  });
  sectionRanges = sectionRanges.concat(getHashtagRanges(block.text, hashtagConfig));
  sectionRanges = sectionRanges.sort(function (s1, s2) {
    return s1.offset - s2.offset;
  });
  sectionRanges.forEach(function (r) {
    if (r.offset > lastOffset) {
      sections.push({
        start: lastOffset,
        end: r.offset
      });
    }
    sections.push({
      start: r.offset,
      end: r.offset + r.length,
      entityKey: r.key,
      type: r.type
    });
    lastOffset = r.offset + r.length;
  });
  if (lastOffset < block.text.length) {
    sections.push({
      start: lastOffset,
      end: block.text.length
    });
  }
  return sections;
}

/**
* Function to check if the block is an atomic entity block.
*/
function isAtomicEntityBlock(block) {
  if (block.entityRanges.length > 0 && (isEmptyString(block.text) || block.type === 'atomic')) {
    return true;
  }
  return false;
}

/**
* The function will return array of inline styles applicable to the block.
*/
function getStyleArrayForBlock(block) {
  var text = block.text,
      inlineStyleRanges = block.inlineStyleRanges;

  var inlineStyles = {
    BOLD: new Array(text.length),
    ITALIC: new Array(text.length),
    UNDERLINE: new Array(text.length),
    STRIKETHROUGH: new Array(text.length),
    CODE: new Array(text.length),
    SUPERSCRIPT: new Array(text.length),
    SUBSCRIPT: new Array(text.length),
    COLOR: new Array(text.length),
    BGCOLOR: new Array(text.length),
    FONTSIZE: new Array(text.length),
    FONTFAMILY: new Array(text.length),
    length: text.length
  };
  if (inlineStyleRanges && inlineStyleRanges.length > 0) {
    inlineStyleRanges.forEach(function (range) {
      var offset = range.offset;

      var length = offset + range.length;
      for (var i = offset; i < length; i += 1) {
        if (range.style.indexOf('color-') === 0) {
          inlineStyles.COLOR[i] = range.style.substring(6);
        } else if (range.style.indexOf('bgcolor-') === 0) {
          inlineStyles.BGCOLOR[i] = range.style.substring(8);
        } else if (range.style.indexOf('fontsize-') === 0) {
          inlineStyles.FONTSIZE[i] = range.style.substring(9);
        } else if (range.style.indexOf('fontfamily-') === 0) {
          inlineStyles.FONTFAMILY[i] = range.style.substring(11);
        } else if (inlineStyles[range.style]) {
          inlineStyles[range.style][i] = true;
        }
      }
    });
  }
  return inlineStyles;
}

/**
* The function will return inline style applicable at some offset within a block.
*/
function getStylesAtOffset(inlineStyles, offset) {
  var styles = {};
  if (inlineStyles.COLOR[offset]) {
    styles.COLOR = inlineStyles.COLOR[offset];
  }
  if (inlineStyles.BGCOLOR[offset]) {
    styles.BGCOLOR = inlineStyles.BGCOLOR[offset];
  }
  if (inlineStyles.FONTSIZE[offset]) {
    styles.FONTSIZE = inlineStyles.FONTSIZE[offset];
  }
  if (inlineStyles.FONTFAMILY[offset]) {
    styles.FONTFAMILY = inlineStyles.FONTFAMILY[offset];
  }
  if (inlineStyles.UNDERLINE[offset]) {
    styles.UNDERLINE = true;
  }
  if (inlineStyles.ITALIC[offset]) {
    styles.ITALIC = true;
  }
  if (inlineStyles.BOLD[offset]) {
    styles.BOLD = true;
  }
  if (inlineStyles.STRIKETHROUGH[offset]) {
    styles.STRIKETHROUGH = true;
  }
  if (inlineStyles.CODE[offset]) {
    styles.CODE = true;
  }
  if (inlineStyles.SUBSCRIPT[offset]) {
    styles.SUBSCRIPT = true;
  }
  if (inlineStyles.SUPERSCRIPT[offset]) {
    styles.SUPERSCRIPT = true;
  }
  return styles;
}

/**
* Function returns true for a set of styles if the value of these styles at an offset
* are same as that on the previous offset.
*/
function sameStyleAsPrevious(inlineStyles, styles, index) {
  var sameStyled = true;
  if (index > 0 && index < inlineStyles.length) {
    styles.forEach(function (style) {
      sameStyled = sameStyled && inlineStyles[style][index] === inlineStyles[style][index - 1];
    });
  } else {
    sameStyled = false;
  }
  return sameStyled;
}

/**
* Function returns html for text depending on inline style tags applicable to it.
*/
function addInlineStyleMarkup(style, content) {
  if (style === 'BOLD') {
    return '<strong>' + content + '</strong>';
  } else if (style === 'ITALIC') {
    return '<em>' + content + '</em>';
  } else if (style === 'UNDERLINE') {
    return '<ins>' + content + '</ins>';
  } else if (style === 'STRIKETHROUGH') {
    return '<del>' + content + '</del>';
  } else if (style === 'CODE') {
    return '<code>' + content + '</code>';
  } else if (style === 'SUPERSCRIPT') {
    return '<sup>' + content + '</sup>';
  } else if (style === 'SUBSCRIPT') {
    return '<sub>' + content + '</sub>';
  }
  return content;
}

/**
* The function returns text for given section of block after doing required character replacements.
*/
function getSectionText(text) {
  if (text && text.length > 0) {
    var chars = text.map(function (ch) {
      switch (ch) {
        case '\n':
          return '<br>';
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        default:
          return ch;
      }
    });
    return chars.join('');
  }
  return '';
}

/**
* Function returns html for text depending on inline style tags applicable to it.
*/
function addStylePropertyMarkup(styles, text) {
  if (styles && (styles.COLOR || styles.BGCOLOR || styles.FONTSIZE || styles.FONTFAMILY)) {
    var styleString = 'style="';
    if (styles.COLOR) {
      styleString += 'color: ' + styles.COLOR + ';';
    }
    if (styles.BGCOLOR) {
      styleString += 'background-color: ' + styles.BGCOLOR + ';';
    }
    if (styles.FONTSIZE) {
      styleString += 'font-size: ' + styles.FONTSIZE + (/^\d+$/.test(styles.FONTSIZE) ? 'px' : '') + ';';
    }
    if (styles.FONTFAMILY) {
      styleString += 'font-family: ' + styles.FONTFAMILY + ';';
    }
    styleString += '"';
    return '<span ' + styleString + '>' + text + '</span>';
  }
  return text;
}

/**
* Function will return markup for Entity.
*/
function getEntityMarkup(entityMap, entityKey, text, customEntityTransform) {
  var entity = entityMap[entityKey];
  if (typeof customEntityTransform === 'function') {
    var html = customEntityTransform(entity, text);
    if (html) {
      return html;
    }
  }
  if (entity.type === 'MENTION') {
    return '<a href="' + entity.data.url + '" class="wysiwyg-mention" data-mention data-value="' + entity.data.value + '">' + text + '</a>';
  }
  if (entity.type === 'LINK') {
    var targetOption = entity.data.targetOption || '_self';
    return '<a href="' + entity.data.url + '" target="' + targetOption + '">' + text + '</a>';
  }
  if (entity.type === 'IMAGE') {
    return '<img src="' + entity.data.src + '" alt="' + entity.data.alt + '" style="float:' + (entity.data.alignment || 'none') + ';height: ' + entity.data.height + ';width: ' + entity.data.width + '"/>';
  }
  if (entity.type === 'EMBEDDED_LINK') {
    return '<iframe width="' + entity.data.width + '" height="' + entity.data.height + '" src="' + entity.data.src + '" frameBorder="0"></iframe>';
  }
  return text;
}

/**
* For a given section in a block the function will return a further list of sections,
* with similar inline styles applicable to them.
*/
function getInlineStyleSections(block, styles, start, end) {
  var styleSections = [];
  var text = block.text;

  if (text.length > 0) {
    var inlineStyles = getStyleArrayForBlock(block);
    var section = void 0;
    for (var i = start; i < end; i += 1) {
      if (i !== start && sameStyleAsPrevious(inlineStyles, styles, i)) {
        section.text.push(text[i]);
        section.end = i + 1;
      } else {
        section = {
          styles: getStylesAtOffset(inlineStyles, i),
          text: [text[i]],
          start: i,
          end: i + 1
        };
        styleSections.push(section);
      }
    }
  }
  return styleSections;
}

/**
* Replace leading blank spaces by &nbsp;
*/
function trimLeadingZeros(sectionText) {
  if (sectionText) {
    var replacedText = sectionText;
    for (var i = 0; i < replacedText.length; i += 1) {
      if (sectionText[i] === ' ') {
        replacedText = replacedText.replace(' ', '&nbsp;');
      } else {
        break;
      }
    }
    return replacedText;
  }
  return sectionText;
}

/**
* Replace trailing blank spaces by &nbsp;
*/
function trimTrailingZeros(sectionText) {
  if (sectionText) {
    var replacedText = sectionText;
    for (var i = replacedText.length - 1; i >= 0; i -= 1) {
      if (replacedText[i] === ' ') {
        replacedText = replacedText.substring(0, i) + '&nbsp;' + replacedText.substring(i + 1);
      } else {
        break;
      }
    }
    return replacedText;
  }
  return sectionText;
}

/**
* The method returns markup for section to which inline styles
* like BOLD, ITALIC, UNDERLINE, STRIKETHROUGH, CODE, SUPERSCRIPT, SUBSCRIPT are applicable.
*/
function getStyleTagSectionMarkup(styleSection) {
  var styles = styleSection.styles,
      text = styleSection.text;

  var content = getSectionText(text);
  forEach(styles, function (style, value) {
    content = addInlineStyleMarkup(style, content, value);
  });
  return content;
}

/**
* The method returns markup for section to which inline styles
like color, background-color, font-size are applicable.
*/
function getInlineStyleSectionMarkup(block, styleSection) {
  var styleTagSections = getInlineStyleSections(block, ['BOLD', 'ITALIC', 'UNDERLINE', 'STRIKETHROUGH', 'CODE', 'SUPERSCRIPT', 'SUBSCRIPT'], styleSection.start, styleSection.end);
  var styleSectionText = '';
  styleTagSections.forEach(function (stylePropertySection) {
    styleSectionText += getStyleTagSectionMarkup(stylePropertySection);
  });
  styleSectionText = addStylePropertyMarkup(styleSection.styles, styleSectionText);
  return styleSectionText;
}

/*
* The method returns markup for an entity section.
* An entity section is a continuous section in a block
* to which same entity or no entity is applicable.
*/
function getSectionMarkup(block, entityMap, section, customEntityTransform) {
  var entityInlineMarkup = [];
  var inlineStyleSections = getInlineStyleSections(block, ['COLOR', 'BGCOLOR', 'FONTSIZE', 'FONTFAMILY'], section.start, section.end);
  inlineStyleSections.forEach(function (styleSection) {
    entityInlineMarkup.push(getInlineStyleSectionMarkup(block, styleSection));
  });
  var sectionText = entityInlineMarkup.join('');
  if (section.type === 'ENTITY') {
    if (section.entityKey !== undefined && section.entityKey !== null) {
      sectionText = getEntityMarkup(entityMap, section.entityKey, sectionText, customEntityTransform); // eslint-disable-line max-len
    }
  } else if (section.type === 'HASHTAG') {
    sectionText = '<a href="' + sectionText + '" class="wysiwyg-hashtag">' + sectionText + '</a>';
  }
  return sectionText;
}

/**
* Function will return the markup for block preserving the inline styles and
* special characters like newlines or blank spaces.
*/
function getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform) {
  var blockMarkup = [];
  var sections = getSections(block, hashtagConfig);
  sections.forEach(function (section, index) {
    var sectionText = getSectionMarkup(block, entityMap, section, customEntityTransform);
    if (index === 0) {
      sectionText = trimLeadingZeros(sectionText);
    }
    if (index === sections.length - 1) {
      sectionText = trimTrailingZeros(sectionText);
    }
    blockMarkup.push(sectionText);
  });
  return blockMarkup.join('');
}

/**
* Function will return html for the block.
*/
function getBlockMarkup(block, entityMap, hashtagConfig, directional, customEntityTransform) {
  var blockHtml = [];
  if (isAtomicEntityBlock(block)) {
    blockHtml.push(getEntityMarkup(entityMap, block.entityRanges[0].key, undefined, customEntityTransform));
  } else {
    var blockTag = getBlockTag(block.type);
    if (blockTag) {
      blockHtml.push('<' + blockTag);
      var blockStyle = getBlockStyle(block.data);
      if (blockStyle) {
        blockHtml.push(' style="' + blockStyle + '"');
      }
      if (directional) {
        blockHtml.push(' dir = "auto"');
      }
      blockHtml.push('>');
      blockHtml.push(getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform));
      blockHtml.push('</' + blockTag + '>');
    }
  }
  blockHtml.push('\n');
  return blockHtml.join('');
}

/**
* Function to check if a block is of type list.
*/
function isList(blockType) {
  return blockType === 'unordered-list-item' || blockType === 'ordered-list-item';
}

/**
* Function will return html markup for a list block.
*/
function getListMarkup(listBlocks, entityMap, hashtagConfig, directional, customEntityTransform) {
  var listHtml = [];
  var nestedListBlock = [];
  var previousBlock = void 0;
  listBlocks.forEach(function (block) {
    var nestedBlock = false;
    if (!previousBlock) {
      listHtml.push('<' + getBlockTag(block.type) + '>\n');
    } else if (previousBlock.type !== block.type) {
      listHtml.push('</' + getBlockTag(previousBlock.type) + '>\n');
      listHtml.push('<' + getBlockTag(block.type) + '>\n');
    } else if (previousBlock.depth === block.depth) {
      if (nestedListBlock && nestedListBlock.length > 0) {
        listHtml.push(getListMarkup(nestedListBlock, entityMap, hashtagConfig, directional, customEntityTransform));
        nestedListBlock = [];
      }
    } else {
      nestedBlock = true;
      nestedListBlock.push(block);
    }
    if (!nestedBlock) {
      listHtml.push('<li');
      var blockStyle = getBlockStyle(block.data);
      if (blockStyle) {
        listHtml.push(' style="' + blockStyle + '"');
      }
      if (directional) {
        listHtml.push(' dir = "auto"');
      }
      listHtml.push('>');
      listHtml.push(getBlockInnerMarkup(block, entityMap, hashtagConfig, customEntityTransform));
      listHtml.push('</li>\n');
      previousBlock = block;
    }
  });
  if (nestedListBlock && nestedListBlock.length > 0) {
    listHtml.push(getListMarkup(nestedListBlock, entityMap, hashtagConfig, directional, customEntityTransform));
  }
  listHtml.push('</' + getBlockTag(previousBlock.type) + '>\n');
  return listHtml.join('');
}

/**
* The function will generate html markup for given draftjs editorContent.
*/
function draftToHtml(editorContent, hashtagConfig, directional, customEntityTransform) {
  var html = [];
  if (editorContent) {
    var blocks = editorContent.blocks,
        entityMap = editorContent.entityMap;

    if (blocks && blocks.length > 0) {
      var listBlocks = [];
      blocks.forEach(function (block) {
        if (isList(block.type)) {
          listBlocks.push(block);
        } else {
          if (listBlocks.length > 0) {
            var listHtml = getListMarkup(listBlocks, entityMap, hashtagConfig, customEntityTransform); // eslint-disable-line max-len
            html.push(listHtml);
            listBlocks = [];
          }
          var blockHtml = getBlockMarkup(block, entityMap, hashtagConfig, directional, customEntityTransform);
          html.push(blockHtml);
        }
      });
      if (listBlocks.length > 0) {
        var listHtml = getListMarkup(listBlocks, entityMap, hashtagConfig, directional, customEntityTransform); // eslint-disable-line max-len
        html.push(listHtml);
        listBlocks = [];
      }
    }
  }
  return html.join('');
}

return draftToHtml;

})));


/***/ })

})
//# sourceMappingURL=1.9b0d6301c4fd4c48d784.hot-update.js.map