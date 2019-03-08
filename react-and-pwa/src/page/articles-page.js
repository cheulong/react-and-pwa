import React, { Component } from 'react';
import '../style/articles-page.css';
import ArticleBrief from '../component/article-brief';
import {Link } from 'react-router-dom';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {articleList: JSON.parse(localStorage.getItem('articles'))};
  }

  removeArticle = (id) => {
    const articleList = Object.assign([], this.state.articleList);
    articleList.splice(id,1);
    this.setState({articleList:articleList})
    // localStorage.clear();
    // localStorage.setItem('articles', JSON.stringify(articleList));
  };

  renderArticleList = () => {
    return this.state.articleList.map((article,index) => <li><ArticleBrief article={article} removeArticle={()=>this.removeArticle(index)}/></li>);
  }

  render() {
    return (
        <div className="content">
          <div className="page-title">
            <h1 className="title">Articles</h1>
            <hr/>
          </div>
          <ul>
            {this.renderArticleList()}
          </ul>
          <nav>
                  <Link to={"/add-article"}>
                    <a>Add</a>
                  </Link>
                </nav>
        </div>
    );
  }
}

export default Articles;
