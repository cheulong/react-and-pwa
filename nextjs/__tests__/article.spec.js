
import React from 'react'
import { shallow } from 'enzyme';
import Article from '../pages/article'
import configureStore from 'redux-mock-store'
import {selectArticle,reducer} from '../store'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    const mockStore = configureStore()
let store,container

  const initState = (initialState ={articles:[
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
  }}) => {
      return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
      )
  }

 beforeEach(()=>{
  store = mockStore(initState)
  container = shallow(<Article store={store} /> ) 
     
 })

 it('+++ render the connected(Article) component', () => {
  expect(container.length).toEqual(1)
});

it('+++ check Prop matches with initialState', () => {
  expect(container.prop('articles')).toEqual(initState.articles)
});

it('+++ check Prop matches with initialState', () => {
  expect(container.prop('selectedArticle')).toEqual(initState.selectedArticle)
});

it('+++ check Prop matches with initialState', () => {
  const article =  {
    "id":2,
    "title":"<h2>2Duo Reges: constuctio interrete.</h2>",
    "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
  };
  
});
});

