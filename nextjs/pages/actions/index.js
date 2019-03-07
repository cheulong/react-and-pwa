export const showArticles = (articles) => ({
  type: 'SHOW_ARTICLES',
  articles
})
export const showArticle = (article) => ({
  type: 'SHOW_ARTICLE',
  article
})
export const selectArticle = (article) => ({
  type: 'ARTICLE_SELECTED',
  payload: article
})

export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  id: id
})