// @flow
import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class Progress extends Component {
  static defautlProps = {
    mode: 'indeterminate',
    max: 100,
    min: 0,
    value: 0
  };

  props: {
    mode: string,
    max: number,
    min: number,
    value: number
  };

  render() {
    const { mode, max, min, value } = this.props;

    return (
      <LinearProgress
        mode={mode}
        max={max}
        min={min}
        value={value}
      />
    );
  }
}
