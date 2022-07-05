import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App';

import store from './slices';

const rootEle = document.querySelector('#root');
const root = createRoot(rootEle);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
