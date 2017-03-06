// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sound from 'react-sound';

import { Button, Card, Slider } from '../atoms';

import type { musicItemType } from '../reducers/music';
import type { queueStateType } from '../reducers/queue';

import { play, pause, next } from '../actions/queue';
import { currentMusicSelector } from '../selectors/queue';

import { getFormattedTime } from '../utils/helpers';

const CurrentMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

class Player extends Component {
  state: {
    duration: number,
    position: number
  }

  state = {
    duration: 1,
    position: 0
  };

  onLoading = ({ duration }: { duration: number }) => {
    this.setState({ duration, position: 0 });
  };

  onPlaying = ({ position }: { position: number }) => {
    this.setState({ position });
  };

  onFinishedPlaying = () => {
    this.props.onNext();
  };

  onPositionDragStart = () => {
    this.props.onPause();
  };

  onPositionDragStop = () => {
    this.props.onPlay();
  };

  onPositionChange = (position: number) => {
    this.setState({ position });
  };

  props: {
    current: musicItemType,
    status: string,
    onPlay: () => {},
    onPause: () => {}
  }

  render() {
    const { current, status, onPlay, onPause } = this.props;
    const { duration, position } = this.state;

    return (
      <div>
        <Card>
          {current && (
            <div>
              <CurrentMusic>
                <div>{current.title}</div>
                <div>{current.album}</div>
                <div>{current.artist.join(', ')}</div>
              </CurrentMusic>
              <Slider
                max={duration}
                min={0}
                value={position}
                onChange={this.onPositionChange}
                onDragStart={this.onPositionDragStart}
                onDragStop={this.onPositionDragStop}
              />
            </div>
          )}
        </Card>
        {current && (
          <Sound
            url={current.file}
            playStatus={Sound.status[status]}
            position={position}
            onLoading={this.onLoading}
            onPlaying={this.onPlaying}
            onFinishedPlaying={this.onFinishedPlaying}
          />
        )}
        {status !== 'PLAYING' && (
          <Button onClick={onPlay}>
            Play
          </Button>
        )}
        {status === 'PLAYING' && (
          <Button onClick={onPause}>
            Pause
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: { queue: queueStateType }) => ({
  current: currentMusicSelector(state),
  status: state.queue.status
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  onPlay: () => dispatch(play()),
  onPause: () => dispatch(pause()),
  onNext: () => dispatch(next())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
