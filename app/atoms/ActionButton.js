// @flow
import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import { getIcon } from './icon';

export default class ActionButton extends Component {
  static defaultProps = {
    icon: '',
    mini: false,
    className: '',
    iconStyle: {},
    onClick: () => {}
  };

  props: {
    icon: string,
    mini: boolean,
    className: string,
    iconStyle: {},
    onClick: () => void
  };

  render() {
    const { icon, mini, className, iconStyle, onClick } = this.props;

    return (
      <FloatingActionButton
        mini={mini}
        className={className}
        iconStyle={iconStyle}
        onClick={onClick}
      >
        {getIcon(icon)}
      </FloatingActionButton>
    );
  }
}
