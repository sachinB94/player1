// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { Slider } from '../atoms';

import { getFormattedTime } from '../utils/helpers';

const DurationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
`;

export default class MusicBar extends Component {
  props: {
    duration: number,
    position: number,
    onPositionChange: (number) => void,
    onPositionDragStart: () => void,
    onPositionDragStop: () => void
  };

  render() {
    const {
      duration,
      position,
      onPositionChange,
      onPositionDragStart,
      onPositionDragStop
    } = this.props;

    return (
      <div>
        <DurationContainer>
          <span>{getFormattedTime(position)}</span>
          <span>{getFormattedTime(duration)}</span>
        </DurationContainer>
        <Slider
          sliderStyle={{ margin: 0 }}
          min={0}
          max={duration}
          value={position}
          onChange={onPositionChange}
          onDragStart={onPositionDragStart}
          onDragStop={onPositionDragStop}
        />
      </div>
    );
  }
}
