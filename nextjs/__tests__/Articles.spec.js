
import React from 'react'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import Articles from '../components/Articles'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'
import {removeArticle,reducer} from '../store'
import {createStore} from 'redux'
describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    const mockStore = configureStore()
let store,container
  const initialState = {articles:[
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
  ]};


 beforeEach(()=>{
  store = mockStore(initialState)
  container = shallow(<Articles store={store} /> ) 
     
 })

 it('+++ render the connected(Articles) component', () => {
  expect(container.length).toEqual(1)
});

it('+++ check Prop matches with initialState', () => {
  expect(container.prop('articles')).toEqual(initialState.articles)
});

});

