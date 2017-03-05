// @flow
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class Button extends Component {
  static defautlProps = {
    type: 'default',
    disabled: false,
    children: '',
    onClick: () => {}
  };

  props: {
    type: string,
    disabled: boolean,
    children: HTMLElement,
    onClick: () => void
  };

  render() {
    const { type, disabled, children, onClick } = this.props;

    return (
      <RaisedButton
        fullWidth
        disabled={disabled}
        primary={type === 'primary'}
        default={type === 'default'}
        secondary={type === 'secondary'}
        onClick={onClick}
        label={children}
      />
    );
  }
}
