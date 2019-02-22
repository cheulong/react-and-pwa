import React, { Component } from 'react';
import './App.css';
import Articles from './page/articles-page';
import Article from './page/article-page';
import EditArticle from './page/edit-article-page';
import { BrowserRouter, Route } from 'react-router-dom';

const articles = [
  {
    "id":"1",
    "title":"<h2>1Duo Reges: constuctio interrete.</h2>",
    "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  },
  {
    "id":"2",
    "title":"<h2>2Duo Reges: constuctio interrete.</h2>",
    "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  },
  {
    "id":"3",
    "title":"<h2>3Duo Reges: constuctio interrete.</h2>",
    "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  },
  {
    "id":"4",
    "title":"<h2>4Duo Reges: constuctio interrete.</h2>",
    "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  }
];

localStorage.setItem('articles', JSON.stringify(articles));
class App extends Component {
  articleList = JSON.parse(localStorage.getItem('articles'));
  
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Articles}/>
          <Route path='/article/:id' component={Article}/>
          <Route path='/editArticle/:id' component={EditArticle}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
