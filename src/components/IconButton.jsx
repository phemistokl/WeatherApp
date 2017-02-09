import React, { Component } from 'react';

//import Icon from 'react-native-vector-icons/Ionicons';

const styles = {
    iconButton: {
        padding: 8,
    },
};

export default class IconButton extends Component ({
  render() {
    const { name, color = 'darkgrey', onPress } = this.props;

    return (
      <div style={styles.iconButton} onPress={onPress}>
        <Icon name={name} color={color} size={24} />
      </div>
    );
  }
})
