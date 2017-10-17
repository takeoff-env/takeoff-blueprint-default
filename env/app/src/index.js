/* global REDUX_DEV_TOOLS */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import registerServiceWorker from './lib/registerServiceWorker';
import './style/index.scss';
import pkg from '../package.json';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import api from './services/api';

/**
 * Init is provided as a async function, so you could do async calls before you render your application
 */
const init = async (containerId = 'container') => {
    let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);

    let store;
    if (REDUX_DEV_TOOLS) {
        store = createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        );
    } else {
        store = createStoreWithMiddleware(reducers);
    }

    registerServiceWorker();

    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <App version={pkg.version} />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById(containerId)
    );
};

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <Router>
                        <NextApp version={pkg.version} />
                    </Router>
                </Provider>
            </AppContainer>,
            init()
        );
    });
}

init();
