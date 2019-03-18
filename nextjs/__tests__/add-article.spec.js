
import React from 'react';
import { shallow } from 'enzyme';
import {AddArticle} from '../pages/add-article'

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<AddArticle />);
   });
});