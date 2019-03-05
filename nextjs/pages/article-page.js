import React, { Component } from 'react';
import Link from 'next/link';
import { showArticle } from './actions'

class ArticlePage extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div className="article-content">
        <div className="page-title">
        <Link href="/"><h2>&lt; home</h2></Link>            
            <h1 className="title">Articles</h1>
            <hr/>
          </div>
        {/* <div dangerouslySetInnerHTML={{ __html: this.article.title }}></div> */}
          {/* <p className="article-date"><small>20:41 | 3 Feb 2-19 | <a href="/#"><Link to={`/editArticle/${this.article.id}`}><span> Edit </span></Link></a> | <Link to={`/`}><button onClick={this.removeArticle}><span className="remove-btn"> Remove </span></button></Link></small></p> */}
          <hr/>
        {/* <div dangerouslySetInnerHTML={{ __html: this.article.content }}></div> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  article: showArticle(state)
  
})

export default ArticlePage;
