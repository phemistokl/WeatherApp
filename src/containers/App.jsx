import React, { Component } from 'react';

import SearchPage from './SearchPage.jsx';
//import SavedLocations from './SavedLocations.jsx';

export default class App extends Component {
    render() {
        return (
            <div style={{ flex: 1 }}>
                <SearchPage />
            </div>
        );
    }
}
