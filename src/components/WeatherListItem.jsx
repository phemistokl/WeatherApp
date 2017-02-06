import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import IconButton from './IconButton.jsx';
import WeatherImage from './WeatherImage.jsx';

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
                        {temperature}C / {humidity}%
                    </div>
                </div>
                <div style={styles.toolbar}>
                    <IconButton name="ios-refresh" />
                    <IconButton name="ios-trash" />
                </div>
            </div>
        );
    }
}
