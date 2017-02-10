import React, { Component } from 'react';

const styles = {
    button: {
        padding: 6,
        borderRadius: 5,
        backgroundColor: '#3fc7fa',
        width: 162,
        margin: 8,
        pointerEvents: "cursor",
        borderWidth: 0.5,
        borderColor: '#3fc7fa',
        cursor: 'pointer',
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
};

export default class Button extends Component {
  render() {
    const { label, style, onClick } = this.props;

    return (
      <div style={styles.button} onClick={onClick}>
          <div style={styles.text}>{label}</div>
      </div>
    );
  }
}
