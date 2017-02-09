import React, { Component } from 'react';

const styles = {
    iconButton: {
        padding: 8,
    },
};

export default class WeatherImage extends Component {
    static weatherTypes = {
      '01d': {
          icon: '01',
          color: 'gold',
      },
      '01n': {
          icon: '01',
          color: 'grey',
      },
      '02d': {
          icon: '02',
          color: 'moccasin',
      },
      '02n': {
          icon: '02',
          color: 'grey',
      },
      '03d': {
          icon: '03',
          color: 'lightblue',
      },
      '03n': {
          icon: '03',
          color: 'grey',
      },
      '04d': {
          icon: '04',
          color: 'lightblue',
      },
      '04n': {
          icon: '04',
          color: 'grey',
      },
      '09d': {
          icon: '09',
          color: 'lightblue',
      },
      '09n': {
          icon: '09',
          color: 'grey',
      },
      '10d': {
          icon: '10',
          color: 'lightblue',
      },
      '10n': {
          icon: '10',
          color: 'grey',
      },
      '11d': {
          icon: '11',
          color: 'steelblue',
      },
      '11n': {
          icon: '11',
          color: 'grey',
      },
      '13d': {
          icon: '13',
          color: 'lightblue',
      },
      '13n': {
          icon: '13',
          color: 'grey',
      },
      '50d': {
          icon: '50',
          color: 'lightblue',
      },
      '50n': {
          icon: '50',
          color: 'grey',
      },
    };
    render() {
        const { type, size } = this.props;
        const src = `icons/sw-${WeatherImage.weatherTypes[type].icon}.svg`;
        const weatherInfoByType = WeatherImage.weatherTypes[type] || {};

        return (
          <div style={{
              padding: 8,
              borderRadius: 5,
              backgroundColor: weatherInfoByType.color,
          }}>
              <img size={size} src={src} alt=""/>
          </div>
        );
    }
}
