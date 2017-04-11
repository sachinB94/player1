// @flow
import React, { Component } from 'react';

import Slider from 'material-ui/Slider';

export default class Progress extends Component {
  static defaultProps = {
    style: {},
    sliderStyle: {},
    axis: 'x',
    min: 0,
    max: 100,
    value: 0,
    onChange: () => {},
    onDragStart: () => {},
    onDragStop: () => {}
  };

  props: {
    style: {},
    sliderStyle: {},
    axis: string,
    min: number,
    max: number,
    value: number,
    onChange: (number) => void,
    onDragStart: () => void,
    onDragStop: () => void
  };

  render() {
    const {
      style,
      sliderStyle,
      axis,
      min,
      max,
      value,
      onChange,
      onDragStart,
      onDragStop
    } = this.props;

    return (
      <Slider
        style={style}
        sliderStyle={sliderStyle}
        axis={axis}
        min={min}
        max={max}
        value={value <= max ? value : max}
        onChange={(event: {}, position: number) => onChange(position)}
        onDragStart={onDragStart}
        onDragStop={onDragStop}
      />
    );
  }
}
