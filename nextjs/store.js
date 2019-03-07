import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  articles : [
    {
      "id":1,
      "title":"<h2>1Duo Reges: constuctio interrete.</h2>",
      "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
    },
    {
      "id":2,
      "title":"<h2>2Duo Reges: constuctio interrete.</h2>",
      "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
    },
    {
      "id":3,
      "title":"<h2>3Duo Reges: constuctio interrete.</h2>",
      "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
    },
    {
      "id":4,
      "title":"<h2>4Duo Reges: constuctio interrete.</h2>",
      "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
    }
  ]
}

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  SHOW_ARTICLES: 'SHOW_ARTICLES',
  REMOVE_ARTICLE: 'REMOVE_ARTICLE'

}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    // case actionTypes.ADD:
    //   return Object.assign({}, state, {
    //     count: state.count + 1
    //   })
    case actionTypes.SHOW_ARTICLES:
      return state.articles;

    case actionTypes.REMOVE_ARTICLE:
    const newState = Object.assign([], state.articles);      
    newState.splice(action.id, 1);
    return Object.assign({}, state, {
      articles: newState
    })

    default:
      return state
  }
}

// ACTIONS
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
    1000
  )
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const showArticles = () => dispatch => {
  return dispatch({ type: actionTypes.SHOW_ARTICLES })
}

export const removeArticle = (id) => dispatch => {
  return dispatch({ type: actionTypes.REMOVE_ARTICLE, id})
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
