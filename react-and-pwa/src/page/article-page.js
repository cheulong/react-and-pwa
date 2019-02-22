import React, { Component } from 'react';
import '../style/article-page.css';
import {Link } from 'react-router-dom';

class Article extends Component {
  article ='';
  articleList='';
  constructor(props) {
    super(props);
    this.articleList = JSON.parse(localStorage.getItem('articles'));
    this.article = this.articleList.find(this.findArticle);
  }

  findArticle = (articleList) => { 
    return articleList.id === this.props.match.params.id;
  }

  removeArticle = () => {
    const objIndex = this.articleList.findIndex((obj => obj.id == this.props.match.params.id));
    this.articleList.splice(objIndex,1);
    localStorage.clear();
    localStorage.setItem('articles', JSON.stringify(this.articleList));
  };

  render() {
    
    return (
      <div className="article-content">
      <div className="page-title">
      <Link to={`/`}><h2>&lt; home</h2></Link>            
            <h1 className="title">Articles</h1>
            <hr/>
          </div>
        <div dangerouslySetInnerHTML={{ __html: this.article.title }}></div>
          <p className="article-date"><small>20:41 | 3 Feb 2-19 | <a href="/#"><Link to={`/editArticle/${this.article.id}`}><span> Edit </span></Link></a> | <Link to={`/`}><button onClick={this.removeArticle}><span className="remove-btn"> Remove </span></button></Link></small></p>
          <hr/>
        <div dangerouslySetInnerHTML={{ __html: this.article.content }}></div>
      </div>
    );
  }
}

export default Article;
