import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div style={{ flex: 1 }}>
                {this.props.children}
            </div>
        );
    }
}
