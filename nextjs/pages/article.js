import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router'
import { connect } from 'react-redux';
import { removeArticle } from '../store'

class Article extends Component {
  static getInitialProps({query}) {
    return {query}
  }
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
  render() {
    const { deleteArticle, selectedArticle}= this.props;

    // console.log('hi',this.props.activeArticle.article.activeArticle);
    
    return (
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
        <div className="article-content App">
        <Link href='/'><h2>&lt; home</h2></Link>            

        <div className="page-title">
            <h1 className="title">Articles</h1>
            <hr/>
          </div>
        <div dangerouslySetInnerHTML={{ __html: selectedArticle.title }}></div>
          <p className="article-date"><small>20:41 | 3 Feb 2-19 | <Link href="/edit-article"><span> Edit </span></Link>| <button onClick={()=>{deleteArticle(selectedArticle.id) , Router.back()}}><Link href='/'><span className="remove-btn"> Remove </span></Link></button></small></p>
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
      </div>}
    </div>

      
    );
  }
}

const mapStateToProps = ({ selectedArticle }) => ({ selectedArticle })

const mapDispatchToProps = (dispatch) => ({
  deleteArticle: index =>dispatch(removeArticle(index))

})

export default connect(mapStateToProps,mapDispatchToProps)(Article);
