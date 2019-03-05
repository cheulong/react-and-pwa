import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import ArticlesPage from './articles-page';
import ArticlePage from './article-page';

const store = createStore(rootReducer)

const Index = () => (
  <Provider store={store}>
    <ArticlesPage />
    <ArticlePage />
  </Provider>
);

export default Index;
