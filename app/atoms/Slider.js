// @flow
import React, { Component } from 'react';

import Slider from 'material-ui/Slider';

export default class Progress extends Component {
  static defaultProps = {
    min: 0,
    max: 100,
    sliderStyle: {},
    value: 0,
    onChange: () => {},
    onDragStart: () => {},
    onDragStop: () => {}
  };

  props: {
    min: number,
    max: number,
    sliderStyle: {},
    value: number,
    onChange: (number) => void,
    onDragStart: () => void,
    onDragStop: () => void
  };

  render() {
    const {
      max,
      min,
      sliderStyle,
      value,
      onChange,
      onDragStart,
      onDragStop
    } = this.props;

    return (
      <Slider
        min={min}
        max={max}
        sliderStyle={sliderStyle}
        value={value <= max ? value : max}
        onChange={(event: {}, position: number) => onChange(position)}
        onDragStart={onDragStart}
        onDragStop={onDragStop}
      />
    );
  }
}
