// @flow
import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AvPlay from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvNext from 'material-ui/svg-icons/av/skip-next';
import AvPrevious from 'material-ui/svg-icons/av/skip-previous';

export default class ActionButton extends Component {
  static defaultProps = {
    icon: '',
    className: '',
    iconStyle: {},
    onClick: () => {}
  };

  props: {
    icon: string,
    className: string,
    iconStyle: {},
    onClick: () => void
  };

  render() {
    const { icon, className, iconStyle, onClick } = this.props;

    const getIcon = () => {
      switch (icon) {
        case 'play':
          return <AvPlay />;
        case 'pause':
          return <AvPause />;
        case 'previous':
          return <AvPrevious />;
        case 'next':
          return <AvNext />;
        default:
          return '';
      }
    };

    return (
      <FloatingActionButton
        className={className}
        iconStyle={iconStyle}
        onClick={onClick}
      >
        {getIcon()}
      </FloatingActionButton>
    );
  }
}
