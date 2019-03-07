import React from 'react'
import { bindActionCreators } from 'redux'
import { startClock, addCount, serverRenderClock, showArticles } from '../store'
import { connect } from 'react-redux'
import Page from '../components/Page'
import Articles from '../components/Articles'

class Counter extends React.Component {
  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    // this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    // return <Page title='Index Page' linkTo='/other' />
    return <Articles />
  }
}
const mapStateToProps  = state => {
  return {
    articles: showArticles(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    // startClock: bindActionCreators(startClock, dispatch)
    // removeArticle: bindActionCreators(removeArticle, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps,
  mapStateToProps 
)(Counter)
