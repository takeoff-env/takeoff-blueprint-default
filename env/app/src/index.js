import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import registerServiceWorker from './lib/registerServiceWorker';
import './style/index.scss';
import pkg from '../package.json';

/**
 * Init is provided as a async function, so you could do async calls before you render your application
 */
const init = async (containerId = 'container') => {

  registerServiceWorker();

  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById(containerId)
  );
}



// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      init()
    );
  });
}

init();
