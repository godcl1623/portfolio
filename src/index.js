/* Dependencies */
// libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// components
import App from './components/App';
// reducer
import store from './slices';
// inits
const rootEle = document.querySelector('#root');
const root = createRoot(rootEle);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
