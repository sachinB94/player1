import React, { Component } from 'react';
import styled from 'styled-components';

import {
  LargeActionButton,
  MediumActionButton,
  VolumeControl
} from '../molecules';

const Actions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

class PlayerControl extends Component {
  props: {
    status: string,
    volume: number,
    onPlay: () => void,
    onPause: () => void,
    onPrevious: () => void,
    onNext: () => void,
    onVolumeChange: () => void
  };

  render() {
    const {
      status,
      volume,
      onPlay,
      onPause,
      onPrevious,
      onNext,
      onVolumeChange
    } = this.props;

    return (
      <Container>
        <Actions>
          <MediumActionButton icon="previous" onClick={onPrevious} />
          <div style={{ padding: '0 20px' }}>
            <LargeActionButton
              icon={status === 'PLAYING' ? 'pause' : 'play'}
              onClick={() => status === 'PLAYING' ? onPause() : onPlay()}
            />
          </div>
          <MediumActionButton icon="next" onClick={onNext} />
        </Actions>
        <div>
          <VolumeControl value={volume} onChange={onVolumeChange} />
        </div>
      </Container>
    );
  }
}

export default PlayerControl;
