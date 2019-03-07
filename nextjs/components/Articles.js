import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import AddCount from './AddCount'

export default connect(state => state)(

  ({ title, linkTo, lastUpdate, light, articles }) => {
    console.log(articles);

    return (
<div className="App">
        <div className="content">
            <div className="page-title">
              <h1 className="title">Articles</h1>
              <hr/>
            </div>
          {articles.map((article,index) =>  <div className="article-brief-container">
        {/* <Link href={{ pathname: '/article-page', query: { id: `${this.props.article.id}` } }} as={"/article/"+`${this.props.article.id}`}><span dangerouslySetInnerHTML={{__html: this.props.article.title}}></span></Link> */}
        <span dangerouslySetInnerHTML={{__html: article.title}}></span>
        <p className="article-date"><small>20:41 | 3 Feb 2-19 | <a href="/#" ><span> Edit</span></a> | <button ><span className="remove-btn"> Remove </span></button></small></p>
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
          <Link href={linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
</div>





    )
  }
)
