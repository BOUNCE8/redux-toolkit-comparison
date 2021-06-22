import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'

import {App} from '../../App';

describe('with react testing library', () => {
  const initialState = {output:10}
  const mockStore = configureStore()
  let store;

it('renders the correct content', () => {
   //Render a React component to the DOM
  const root = document.createElement('div');
  store = mockStore(initialState)
  ReactDOM.render(<Provider store={store}><App /></Provider>, root);

  // Use DOM APIs (querySelector) to make ssertions.
  // expect(root.querySelector('h1')?.textContent).toBe('Yep');
});
});


