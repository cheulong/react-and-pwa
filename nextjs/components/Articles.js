import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'
import React, { Component } from 'react'
import { removeArticle } from '../store'

class Articles extends Component {
  render(){
    const { articles, deleteArticle } = this.props
    
    return(
      <div className="App">
        <div className="content">
            <div className="page-title">
              <h1 className="title">Articles</h1>
            </div>
          {articles.map((article,index) =>  <div className="article-brief-container">
        {/* <Link href={{ pathname: '/article-page', query: { id: `${this.props.article.id}` } }} as={"/article/"+`${this.props.article.id}`}><span dangerouslySetInnerHTML={{__html: this.props.article.title}}></span></Link> */}
         <span dangerouslySetInnerHTML={{__html: article.title}}></span>
         <p className="article-date"><small>20:41 | 3 Feb 2-19 | <a href="/#" ><span> Edit</span></a> | <button onClick= {()=> deleteArticle(index)}><span className="remove-btn"> Remove </span></button></small></p>
 </div>)}
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
         {/* <nav>
           <Link href={linkTo}>
             <a>Navigate</a>
           </Link>
         </nav> */}
 </div>
    )
  }
}





    
  
const mapStateToProps = ({ articles }) => ({ articles })

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: index =>dispatch(removeArticle(index))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)