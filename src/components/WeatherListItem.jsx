import React, { Component } from 'react';

//import Icon from 'react-native-vector-icons/Ionicons';

//import Button from './Button.jsx';
import WeatherImage from './WeatherImage.jsx';

const styles = {
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
        marginRight: 8,
        marginLeft: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },
    toolbar: {
        flexDirection: 'row',
        flex: 0.1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        flex: 0.1,
    },
    iconButton: {
        padding: 8,
    },
    city: {
        fontSize: 18,
    },
    temperature: {
        fontSize: 14,
        color: 'grey',
    },
    data: {
        flex: 0.8,
        padding: 16,
    },
};

export default class WeatherListItem extends Component {
    render() {
        const { imageType, city, temperature, humidity } = this.props;

        return (
            <div style={styles.container}>
                <WeatherImage type={imageType} size={40} />
                <div style={styles.data}>
                    <div style={styles.city}>
                        {city}
                    </div>
                    <div style={styles.temperature}>
                        {temperature} C / {humidity}%
                    </div>
                </div>
            </div>
        );
    }
}
