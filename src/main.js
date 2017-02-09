import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import App from './containers/App.jsx';
import SearchPage from './containers/SearchPage.jsx';
import SavedLocations from './containers/SavedLocations.jsx';

import store from './store';

import './assets/main.css';

const routes = (
    <Route component={App}>
        <Route path="/" component={SearchPage} />
        <Route path="bookmark" component={SavedLocations} />
    </Route>
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
