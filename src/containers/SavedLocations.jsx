import React, { Component } from 'react';
import { connect } from 'react-redux';

import { refreshSavedLocation } from '../actions';

import WeatherListItem from '../components/WeatherListItem.jsx';
//import AddLocation from '../components/AddLocation.jsx';
//import Button from '../components/Button.jsx';

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

class SavedLocations extends Component {
    constructor() {
        super();
    }

    componentWillReceiveProps() {

    }

    render() {
        console.log(this.props.locations);
        return (
            <div style={styles.container}>
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
            </div>
        );
    }
}

const getLocationsArray = state => {
    const locations = state.savedLocations;

    return Object.keys(locations).map(id => ({ ...locations[id], id}));
};

const mapStateToProps = state => ({
    locations: getLocationsArray(state),
});

export default connect(mapStateToProps, { refreshSavedLocation })(SavedLocations);
