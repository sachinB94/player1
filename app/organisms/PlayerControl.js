import React, { Component } from 'react';
import styled from 'styled-components';

import { remote } from 'electron';

import {
  LargeActionButton,
  MediumActionButton,
  VolumeControl,
  RepeatControl
} from '../molecules';

const { app, globalShortcut } = remote;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const VolumeContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const RepeatContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
`;

class PlayerControl extends Component {
  componentDidMount() {
    if (app.isReady()) {
      this.attachMediaListeners();
    } else {
      app.on('ready', () => this.attachMediaListeners());
    }

    app.on('will-quit', () => {
      globalShortcut.unregister('MediaPlayPause');
      globalShortcut.unregister('MediaNextTrack');
      globalShortcut.unregister('MediaPreviousTrack');
    });
  }

  attachMediaListeners = () => {
    globalShortcut.register(
      'MediaPlayPause',
      () =>
        this.props.status === 'PLAYING'
          ? this.props.onPause()
          : this.props.onPlay()
    );
    globalShortcut.register('MediaNextTrack', () => this.props.onNext());
    globalShortcut.register('MediaPreviousTrack', () =>
      this.props.onPrevious());
  };

  props: {
    status: string,
    volume: number,
    repeat: string | null,
    onPlay: () => void,
    onPause: () => void,
    onPrevious: () => void,
    onNext: () => void,
    onVolumeChange: () => void,
    onRepeatChange: () => void
  };

  render() {
    const {
      status,
      volume,
      repeat,
      onPlay,
      onPause,
      onPrevious,
      onNext,
      onVolumeChange,
      onRepeatChange
    } = this.props;

    return (
      <div style={{ position: 'relative' }}>
        <RepeatContainer>
          <RepeatControl value={repeat} onChange={onRepeatChange} />
        </RepeatContainer>
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
        <VolumeContainer>
          <VolumeControl value={volume} onChange={onVolumeChange} />
        </VolumeContainer>
      </div>
    );
  }
}

export default PlayerControl;
