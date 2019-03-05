
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { showArticle, removeArticle, showArticles } from './actions'
import ArticleBrief from '../component/article-brief';

class ArticlesPage extends Component {

  renderArticlesList = () => {
    return this.props.articles.articles.articles.map((article,index) => <ArticleBrief index={index} selectArticle={this.selectArticle} article={article} deleteContact={this.deleteContact}/>)
  }
  deleteContact = (e, index) => {
    e.preventDefault();
    this.props.deleteContact1(index);
  }
  selectArticle = (e, article) => {
    e.preventDefault();
    this.props.showArticle(article);
  }
  render() {
  console.log(this.props.articles);

    return (
      <div className="App">
        <div className="content">
            <div className="page-title">
              <h1 className="title">Articles</h1>
              <hr/>
            </div>
          {this.renderArticlesList()}
        </div>
        <style jsx>
        {` 
        .App {
          text-align: center;
          width: 80%;
          margin: auto;
          color: gray;
          font-family: Arial;
        }
        .content {
          text-align: start;
          color: gray;
          margin-top: 50px;
        
        }
        
        .article-title {
          margin: 0;
        }
        
        .article-date {
          margin: 0;
        }
        
        a {
          text-decoration: none;
        }
        
        .remove-btn {
          color: red;
        }
        .title {
          text-transform: uppercase;
          font-size: 2.2rem;
          text-align: center;
        
        }
        
        .page-title h2 {
          float: left;
        }
        `}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  articles: showArticles(state)
  
})

const mapDispatchToProps = (dispatch) => ({
    deleteContact1: index =>dispatch(removeArticle(index)),
    showArticle: article =>dispatch(showArticle(article))
  })

  export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);

