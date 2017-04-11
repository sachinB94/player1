// @flow
import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';

import { getIcon } from './icon';

export default class ActionButton extends Component {
  static defaultProps = {
    icon: '',
    iconStyle: {},
    onClick: () => {}
  };

  props: {
    icon: string,
    iconStyle: {},
    onClick: () => void
  };

  render() {
    const { icon, iconStyle, onClick } = this.props;

    return (
      <IconButton iconStyle={iconStyle} onClick={onClick}>
        {getIcon(icon)}
      </IconButton>
    );
  }
}
