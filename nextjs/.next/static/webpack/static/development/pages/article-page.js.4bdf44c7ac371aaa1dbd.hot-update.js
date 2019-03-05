webpackHotUpdate("static\\development\\pages\\article-page.js",{

/***/ "./pages/actions/index.js":
/*!********************************!*\
  !*** ./pages/actions/index.js ***!
  \********************************/
/*! exports provided: showArticles, showArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArticles", function() { return showArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showArticle", function() { return showArticle; });
var showArticles = function showArticles(articles) {
  return {
    type: 'SHOW_ARTICLES',
    articles: articles
  };
};
var showArticle = function showArticle(article) {
  return {
    type: 'SHOW_ARTICLE',
    article: article
  };
};

/***/ })

})
//# sourceMappingURL=article-page.js.4bdf44c7ac371aaa1dbd.hot-update.js.map