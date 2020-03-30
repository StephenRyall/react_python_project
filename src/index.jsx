import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './components/dashboard/index';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store} history={history}>
        <Dashboard />
    </Provider>,
    rootElement);