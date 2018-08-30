import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


/* eslint-disable no-underscore-dangle */
const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware = ext && ext();
/* eslint-enable */

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));


registerServiceWorker();
