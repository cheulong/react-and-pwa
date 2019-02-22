import React, { Component } from 'react';
import '../style/article-brief.css';
import {Link } from 'react-router-dom';

class ArticleBrief extends Component {

  render() {
    return (
      <div className="article-brief-container">
        <Link to={`/article/${this.props.article.id}`}><span dangerouslySetInnerHTML={{__html: this.props.article.title}}></span></Link>
        <p className="article-date"><small>20:41 | 3 Feb 2-19 | <a href="/#" ><span><Link to={`/editArticle/${this.props.article.id}`}> Edit </Link></span></a> | <button onClick={this.props.removeArticle}><span className="remove-btn"> Remove </span></button></small></p>
      </div>
    );
  }
}

export default ArticleBrief;
