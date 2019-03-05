import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux'
import { showArticles } from './actions'

class ArticleBrief extends Component {

  render() {
    return (
      <div className="article-brief-container">
        <Link href={{ pathname: '/article-page', query: { id: `${this.props.article.id}` } }} as={"/article/"+`${this.props.article.id}`}><span dangerouslySetInnerHTML={{__html: this.props.article.title}}></span></Link>
        <p className="article-date"><small>20:41 | 3 Feb 2-19 | <a href="/#" ><span> Edit</span></a> | <button><span className="remove-btn"> Remove </span></button></small></p>
      </div>
    );
  }
}

export default ArticleBrief;