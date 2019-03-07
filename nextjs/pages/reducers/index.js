import { combineReducers } from 'redux'
import articles from './articles'
import activeArticle from './active-article';

const allReducers = combineReducers({
  articles,
  activeArticle
});

export default allReducers;