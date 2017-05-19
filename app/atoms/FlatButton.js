// @flow
import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class ActionButton extends Component {
  static defaultProps = {
    fullWidth: false,
    style: {},
    children: '',
    onClick: () => {}
  };

  props: {
    fullWidth: boolean,
    style: {},
    children: HTMLElement,
    onClick: () => void
  };

  render() {
    const { fullWidth, style, children, onClick } = this.props;

    return (
      <FlatButton fullWidth={fullWidth} style={style} onClick={onClick}>
        {children}
      </FlatButton>
    );
  }
}
