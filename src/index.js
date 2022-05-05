/* Dependencies */
// libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, applyMiddleware, compose } from 'redux';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';
// components
import App from './components/App';
// reducer
import reducers from './reducers';
import store from './slices';
// inits
const rootEle = document.querySelector('#root');
const root = createRoot(rootEle);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware()));
// const store = createStore(reducers);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
