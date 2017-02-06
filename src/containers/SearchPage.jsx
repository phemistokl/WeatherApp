import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeatherBySearch } from '../actions';

import Button from '../components/Button.jsx';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        marginTop: 60,
    },
    searchBar: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        padding: 8,
        height: 30,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
    },
    searchButton: {
        flex: 1,
        margin: 0,
        marginLeft: 8,
    },
};

class SearchPage extends Component {
    constructor() {
        super();

        this.state = {
            search: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(event) {
        this.setState({search: event.target.value});
    }

    handleSearch() {
        console.log("Hello");
        this.props.fetchWeatherBySearch(this.state.search);
    }

    render() {
        const { weather, handleSearch } = this.props;

        return (
            <div style={styles.container}>
                <div style={styles.searchBar}>
                    <input style={styles.input} value={this.state.search} onChange={this.handleChange} />

                    <button style={styles.searchButton} onClick={this.handleSearch}>Add</button>
                </div>

                { weather ? <div>{weather.temperature}</div> : null}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    weather: state.weather,
    isFetching: state.isFetching,
});

export default connect(mapStateToProps, { fetchWeatherBySearch })(SearchPage);
