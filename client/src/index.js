// package dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// project imports
import ApiClient from './helpers/ApiClient';
import clientMiddleware from './helpers/clientMiddleware';
import reducer from './reduxModules/reducer';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// TODO: push to own file
const theme = {
  background: '',
  backgroundGrey: '#F2F3F4',
  border: '',
  primary: '#893168',
  secondary: '',
  text: '#373D3F',
  lightText: '',
  link: '#367692',
};

const client = new ApiClient();
const middleware = applyMiddleware(clientMiddleware(client), thunk, logger); // logger needs to be last
// don't need 'compose' because none of the middleware are store enhancers
const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
