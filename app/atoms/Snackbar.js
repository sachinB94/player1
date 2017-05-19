// @flow
import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

export default class SnackbarComponent extends Component {
  static defaultProps = {
    open: false,
    message: '',
    onClose: () => {}
  };

  props: {
    open: boolean,
    message: string,
    onClose: () => void
  };

  render() {
    const { open, message, onClose } = this.props;

    return (
      <Snackbar
        autoHideDuration={3000}
        open={open}
        message={message}
        onRequestClose={onClose}
      />
    );
  }
}
