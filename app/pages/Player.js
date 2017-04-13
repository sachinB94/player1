// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import { Card } from '../atoms';
import { MusicBar, PlayerControl, CurrentMusicDescription } from '../organisms';

import type { musicItemType } from '../reducers/music';
import type { queueStateType } from '../reducers/queue';

import { play, pause, next, previous, setVolume } from '../actions/queue';
import { currentMusicSelector } from '../selectors/queue';

class Player extends Component {
  state: {
    duration: number,
    position: number
  };

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

  onPositionChange = (position: number) => {
    this.setState({ position });
  };

  props: {
    current: musicItemType,
    status: string,
    volume: number,
    onPlay: () => {},
    onPause: () => {},
    onNext: () => {},
    onPrevious: () => {},
    onVolumeChange: () => {}
  };

  render() {
    const {
      current,
      status,
      volume,
      onPlay,
      onPause,
      onPrevious,
      onNext,
      onVolumeChange
    } = this.props;
    const { duration, position } = this.state;

    return (
      <div id="player-container">
        <Card>
          {current
            ? <div>
                <CurrentMusicDescription
                  title={current.title}
                  artist={current.artist}
                  album={current.album}
                />
                <div style={{ margin: 10 }}>
                  <MusicBar
                    duration={duration}
                    position={position}
                    onPositionChange={this.onPositionChange}
                    onPositionDragStart={onPause}
                    onPositionDragStop={onPlay}
                  />
                </div>
              </div>
            : <div style={{ height: 100 }} />}
          <PlayerControl
            status={status}
            volume={volume}
            onPlay={onPlay}
            onPause={onPause}
            onPrevious={onPrevious}
            onNext={onNext}
            onVolumeChange={onVolumeChange}
          />
        </Card>
        {current &&
          <Sound
            url={current.file}
            playStatus={Sound.status[status]}
            position={position}
            volume={volume}
            onLoading={this.onLoading}
            onPlaying={this.onPlaying}
            onFinishedPlaying={onNext}
          />}
      </div>
    );
  }
}

const mapStateToProps = (state: { queue: queueStateType }) => ({
  current: currentMusicSelector(state),
  status: state.queue.status,
  volume: state.queue.volume
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  onPlay: () => dispatch(play()),
  onPause: () => dispatch(pause()),
  onNext: () => dispatch(next()),
  onPrevious: () => dispatch(previous()),
  onVolumeChange: (volume: number) => dispatch(setVolume(volume))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
