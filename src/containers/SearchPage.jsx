import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeatherBySearch } from '../actions';
import { saveLocation } from '../actions';

import Button from '../components/Button.jsx';
import WeatherInfo from '../components/WeatherInfo.jsx';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
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
        backgroundColor: '#fff',
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
        this.props.fetchWeatherBySearch(this.state.search);
    }

    render() {
        const { weather, handleSearch, saveLocation } = this.props;

        return (
            <div style={styles.container}>
                <div style={styles.searchBar}>
                    <input style={styles.input} value={this.state.search} onChange={this.handleChange} />

                    <Button
                        style={styles.searchButton}
                        label="Search"
                        onClick={this.handleSearch}
                    />
                </div>

                { weather ? <WeatherInfo {...weather} onSave={saveLocation} /> : null}

            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state)

    return {
        weather: state.currentWeather.weather,
        isFetching: state.currentWeather.isFetching,
    };
};

export default connect(mapStateToProps, { fetchWeatherBySearch, saveLocation })(SearchPage);
