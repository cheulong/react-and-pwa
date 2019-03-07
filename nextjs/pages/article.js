import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { connect } from 'react-redux';
import { removeArticle } from '../store'

class Article extends Component {
  static getInitialProps({query}) {
    return {query}
  }

  render() {
    const { deleteArticle, selectedArticle}= this.props;

    // console.log('hi',this.props.activeArticle.article.activeArticle);
    
    return (
      <div className="article-content App">
        <Link href='/'><h2>&lt; home</h2></Link>            

        <div className="page-title">
            <h1 className="title">Articles</h1>
            <hr/>
          </div>
        <div dangerouslySetInnerHTML={{ __html: selectedArticle.title }}></div>
          <p className="article-date"><small>20:41 | 3 Feb 2-19 | <a href="/#"><Link to={`/editArticle/${selectedArticle.id}`}><span> Edit </span></Link></a> | <button onClick={()=>{deleteArticle(selectedArticle.id) , Router.back()}}><Link href='/'><span className="remove-btn"> Remove </span></Link></button></small></p>
          <hr/>
        <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }}></div> 
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
          .article-subtitle {
            margin: 0;
          }
          
          .article-content {
            text-align: start;
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

const mapStateToProps = ({ selectedArticle }) => ({ selectedArticle })

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: index =>dispatch(removeArticle(index))
})

export default connect(mapStateToProps,mapDispatchToProps)(Article);
