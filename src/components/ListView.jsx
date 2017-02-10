import React, { Component } from 'react';

import WeatherListItem from './WeatherListItem.jsx';

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: 16,
        marginBottom: 16,
    },
    text: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16,
    }
};

export default props => {
    const { lists } = props;

    return (
        <div style={styles.container}>
            {
                lists.length !== 0
                ? lists.map(list => <WeatherListItem key={list.id} {...list} />)
                : <p style={styles.text}>No city to display</p>
            }
        </div>
    );
}
