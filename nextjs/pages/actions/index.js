export const showArticles = (articles) => ({
  type: 'SHOW_ARTICLES',
  articles
})

export const showArticle = (article) => ({
  type: 'SHOW_ARTICLE',
  payload: article
})

export const removeArticle = (id) => ({
  type: 'REMOVE_ARTICLE',
  id: id
})