import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import WeatherApp from './containers/WeatherApp.jsx';

import store from './store';

import './assets/main.css';

ReactDOM.render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>,
    document.getElementById('root')
);
