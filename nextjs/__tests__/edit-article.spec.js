
import React from 'react';
import { shallow } from 'enzyme';
import {EditArticle} from '../pages/edit-article'

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<EditArticle />);
   });
});