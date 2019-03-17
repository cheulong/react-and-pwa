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
  ],
  selectedArticle: {
    "id":1,
    "title":"<h2>1Duo Reges: constuctio interrete.</h2>",
    "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  }
}

export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  SHOW_ARTICLES: 'SHOW_ARTICLES',
  REMOVE_ARTICLE: 'REMOVE_ARTICLE',
  SELECT_ARTICLE: 'SELECT_ARTICLE',
  SAVE_ARTICLE: 'SAVE_ARTICLE',
  ADD_ARTICLE: 'ADD_ARTICLE',
  CHANGE_ARTICLE: 'CHANGE_ARTICLE'

}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.ADD_ARTICLE:
    const newState2 = state.articles;
    newState2.push({
      'id':state.articles.length+1,
      "title":action.article.title,
      "content":action.article.content
    })
      return Object.assign({}, state, {
        articles: newState2
      })
    case actionTypes.SHOW_ARTICLES:
    
      return Object.assign({}, state);

    case actionTypes.SELECT_ARTICLE:
    return (() => Object.assign({}, state, {
      selectedArticle: action.article
    }))

    case actionTypes.CHANGE_ARTICLE:
    const newState3 = state.articles;
    let objIndex3 = newState3.findIndex(obj => obj.id === action.updateArticle.id); 
    if(action.updateArticle.symbol==='-'){
      if(objIndex3===0){
        objIndex3=newState3.length;
      }
      return Object.assign({}, state, {
        selectedArticle: newState3[objIndex3-1]
      })
    }else {
      if(objIndex3===newState3.length-1){
        objIndex3=-1;
      }
      return Object.assign({}, state, {
        selectedArticle: newState3[objIndex3+1]
      })
    }
    

    case actionTypes.SAVE_ARTICLE:
    const newState =state.articles;     
    const objIndex = newState.findIndex((obj => obj.id === action.article.id)); 
    newState[objIndex]={
      "id":action.article.id,
      "title":action.article.title,
      "content":action.article.content
    };
    return Object.assign({}, state, {
      articles: newState
    })

    case actionTypes.REMOVE_ARTICLE:
    const newState1 = Object.assign([], state.articles); 
        
    const objIndex1 = newState1.findIndex((obj => obj.id === action.id)); 
    Object.assign([], state, {
      selectedArticle: state.articles[0]
    })

    newState1.splice(objIndex1, 1);
    return Object.assign({}, state, {
      articles: newState1
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

export const selectArticle = (article) => dispatch => {
  return (() => dispatch({ type: actionTypes.SELECT_ARTICLE, article }))
}

export const removeArticle = (id) => dispatch => {
  return dispatch({ type: actionTypes.REMOVE_ARTICLE, id})
}

export const addArticle = (article) => dispatch => {
  return dispatch({ type: actionTypes.ADD_ARTICLE, article})
}

export const saveArticle = (article) => dispatch => {
  return dispatch({ type: actionTypes.SAVE_ARTICLE, article})
}

export const changeArticle = (updateArticle) => dispatch => {
  return dispatch({ type: actionTypes.CHANGE_ARTICLE, updateArticle})
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
