import Link from 'next/link'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { removeArticle, selectArticle,showArticles } from '../store'

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0, loading: true};
  }
  componentDidMount() {
    this.startTime();
    
  }
  startTime(){
    this.interval = setInterval(() => {
      console.log(this.state.counter)
      
        this.setState({counter: this.state.counter + 1});
        if(this.state.counter>3){
          this.setState({loading:false});
          this.clearInterterval();
      
          }
    }, 1000);
  }
  clearInterterval(){
    clearInterval(this.interval);
    this.setState({counter:0});
  }
  onRemove(id){
    this.setState({loading:true});
    this.startTime();
    this.props.deleteArticle(id)
  }
  componentWillMount() {
    this.props.showArticles();
  }
  render(){
    const {articles, selectArticle } = this.props
    return(
      <div>
      {this.state.loading && <div>
        {this.state.counter}
        <h1 className="App">Loading...</h1>
        <style jsx>
                   {` 
                  .App {
                    text-align: center;
                   width: 80%;
        margin: auto;
                  color: gray;
                   font-family: Arial;
                 `}
                 </style>
        </div>}
        {!this.state.loading && 
        <div className="App">
                <div className="content">
                    <div className="page-title">
                      <h1 className="title">Articles</h1>
                    </div>
                  {articles.map((article) =>  <div className="article-brief-container">
                <Link href='/article'><span onClick= {()=> selectArticle(article)}  dangerouslySetInnerHTML={{__html: article.title}}></span></Link>
      <p className="article-date"><small>20:41 | 3 Feb 2-19 | <Link href="/edit-article" ><span onClick= {()=> selectArticle(article)}> Edit</span></Link> | <button onClick= {()=> this.onRemove(article.id)}><span className="remove-btn"> Remove </span></button></small></p>
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
                <nav>
                  <Link href="/add-article">
                    <a>Add</a>
                  </Link>
                </nav>
        </div>
      }
      </div>
    )
  }
}





    
  
const mapStateToProps = ({ articles }) => ({ articles })

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: index =>dispatch(removeArticle(index)),
  selectArticle: article =>dispatch(selectArticle(article)),
  showArticles: () =>dispatch(showArticles())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)