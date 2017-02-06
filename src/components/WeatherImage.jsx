import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const styles = {
    iconButton: {
        padding: 8,
    },
};

export default class WeatherImage extends Component {
    static weatherType = {
      '11d': {
          icon: 'ios-thunderstorm',
          color: 'steelblue',
      },
      '09d': {
          icon: 'ios-rainy',
          color: 'lightblue',
      },
      '10d': {
          icon: 'ios-rainy',
          color: 'lightblue',
      },
      '13d': {
          icon: 'ios-snow',
          color: 'lightblue',
      },
      '50d': {
          icon: 'ios-thunderstorm',
          color: 'lightblue',
      },
      '01d': {
          icon: 'ios-sunny',
          color: 'gold',
      },
      '01n': {
          icon: 'ios-sunny',
          color: 'gold',
      },
      '02n': {
          icon: 'ios-partly-sunny',
          color: 'moccasin',
      },
      '01d': {
          icon: 'ios-cloud',
          color: 'lightblue',
      },
      '01n': {
          icon: 'ios-cloud',
          color: 'lightblue',
      },
      '03n': {
          icon: 'ios-cloud',
          color: 'lightblue',
      },
      '03n': {
          icon: 'ios-cloud',
          color: 'lightblue',
      },
      '50d': {
          icon: 'ios-cloud',
          color: 'grey',
      },
    };

    render() {
        const { type, size } = this.props;

        return (
          <div style={{
              padding: 8,
              borderRadius: 5,
              backgroundColor: WeatherImage.weatherTypes[type].color
          }}>
            <Icon
                name={WeatherImage.weatherTypes[type].icon}
                color="white"
                size={size}
            />
          </div>
        );
    }
}
