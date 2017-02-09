import React, { Component } from 'react';
//import Modal from 'react-modal';

//import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button.jsx';

import WeatherImage from './WeatherImage.jsx';

const styles = {
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    location: {
        fontSize: 30,
    },
    temperature: {
        fontSize: 40,
    },
    description: {
        fontSize: 20,
        fontStyle: 'italic',
    }
};

export default class WeatherInfo extends Component {
    render() {
      const { city, country, temperature, imageType, humidity, weatherDescription, onSave } = this.props;
      //const weatherInfoByType = WeatherImage.weatherTypes[imageType] || {};
      //const dynamicStyles = { backgroundColor: weatherInfoByType.color };

      return (
              <div style={styles.container}>
                  <WeatherImage type={imageType} size={100} />
                  <div style={styles.temperature}>{temperature} C</div>
                  <div style={styles.location}>{city}, {country}</div>
                  <div style={styles.description}>{weatherDescription}</div>
                  <Button
                      style={styles.searchButton}
                      label="Save"
                      onClick={onSave}
                  />
              </div>
      );
    }
}
