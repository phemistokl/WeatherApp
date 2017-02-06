import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../actions';

import WeatherListItem from '../components/WeatherListItem.jsx';
import AddLocation from '../components/AddLocation.jsx';
import Button from '../components/Button.jsx';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#fff',
        marginTop: 60,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
};

class LocationList extends Component {
    constructor() {
        super();

        this.state = {
            addingLocation: false
        };
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.toolbar}>
                    <div onPress={() => this.setState({ addingLocation: true })}>
                        <div style={styles.addLocation}>Add</div>
                    </div>
                </div>
                <WeatherListItem
                    city="Kiev"
                    temperature={5}
                    humidity={40}
                    imageType="02d"
                />
                <WeatherListItem
                    city="Kiev"
                    temperature={5}
                    humidity={40}
                    imageType="02d"
                />
                <WeatherListItem
                    city="Kiev"
                    temperature={5}
                    humidity={40}
                    imageType="02d"
                />
                <WeatherListItem
                    city="Kiev"
                    temperature={5}
                    humidity={40}
                    imageType="02d"
                />

                <AddLocation
                    visibly={this.state.addingLocation}
                    onAddLocation={city => this.props.addLocation(city)}
                    onClose={() => this.setState({ addingLocation: false })}
                />
            </div>
        );
    }
}

const getLocationsArray = state => Object.keys(state).map(id => ({ ...state[id], id}));

const mapStateToProps = state => ({
    locations: getLocationsArray(state),
});

export default connect(mapStateToProps, { fetchWeather })(LocationsList);
