
import React from 'react'
import { shallow, mount } from 'enzyme';
import EditArticle1 from '../components/EditArticle1'
import configureStore from 'redux-mock-store'

describe('>>>H O M E --- Shallow Render REACT COMPONENTS',()=>{
    const mockStore = configureStore()
let store,container
  const initialState = {selectedArticle:[
    {
      "id":1,
      "title":"<h2>1Duo Reges: constuctio interrete.</h2>",
      "content":"<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</p>"
    }
  ]};

 beforeEach(()=>{
  store = mockStore(initialState)
  container = shallow(<EditArticle1 store={store} /> ) 
     
 })

 it('+++ render the connected(EditArticle1) component', () => {
  expect(container.length).toEqual(1)
});

it('+++ check Prop matches with initialState', () => {
  expect(container.prop('selectedArticle')).toEqual(initialState.selectedArticle)
});

});

