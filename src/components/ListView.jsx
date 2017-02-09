import React, { Component } from 'react';

import WeatherListItem from './WeatherListItem.jsx';

export default props => {
    const { lists } = props;

    return (
        <div>
            {
                lists.length !== 0
                ? lists.map(list => <WeatherListItem key={list.id} {...list} />)
                : <p>No city to display</p>
            }
        </div>
    );
}
