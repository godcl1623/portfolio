/* Dependencies */
// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// components
import App from './components/App';
import ContactPrac from './components/layouts/Contact_prac'
// reducer
import reducers from './reducers';

ReactDOM.render(
  // <Provider store={createStore(reducers)}>
  //   <App />
  // </Provider>,
  <ContactPrac />,
  document.querySelector('#root')
);
