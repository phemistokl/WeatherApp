import React, { Component } from 'react';
import Modal from 'react-modal';

import Button from './Button';

const styles = {
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        padding: 8,
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
    },
};

export default class AddLocation extends Component {
    constructor() {
      super();

      this.state = {
        modalIsOpen: false
      };

      this.openModal = this.openModal.bind(this);
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.refs.subtitle.style.color = '#f00';
    }

    closeModal() {
      this.setState({modalIsOpen: false});
    }

    render() {
      const { visible, onClose } = this.props;

      return (
          <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
          >
              <div style={styles.container}>
                  <input style={styles.input} />
                  <Button label="Add" />
                  <Button onPress={onClose} label="Cancel" />
              </div>
      );
    }
}
