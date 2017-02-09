import React, { Component } from 'react';
import { connect } from 'react-redux';

import { refreshSavedLocation } from '../actions';

import ListView from '../components/ListView.jsx';

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
    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.props.locations
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.locations !== this.props.locations) {
            this.setState({
                dataSource: nextProps.locations
            });
        }
    }

    render() {
        return (
            <div style={styles.container}>
                    <ListView lists={this.state.dataSource} />
                )

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
