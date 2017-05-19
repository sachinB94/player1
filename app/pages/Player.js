// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sound from 'react-sound';

import { Card } from '../atoms';
import { MusicBar, PlayerControl, MusicDetails } from '../organisms';

import type { musicItemType } from '../reducers/music';
import type { queueStateType } from '../reducers/queue';

import {
  play,
  pause,
  next,
  previous,
  setRepeat,
  setVolume
} from '../actions/queue';
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

  onNext = () => {
    this.setState({ position: 0 });
    this.props.onNext();
  };

  onPrevious = () => {
    this.setState({ position: 0 });
    this.props.onPrevious();
  };

  props: {
    current: musicItemType,
    status: string,
    volume: number,
    repeat: string | null,
    onPlay: () => {},
    onPause: () => {},
    onNext: () => {},
    onPrevious: () => {},
    onVolumeChange: () => {},
    onRepeatChange: () => {}
  };

  render() {
    const {
      current,
      status,
      volume,
      repeat,
      onPlay,
      onPause,
      onVolumeChange,
      onRepeatChange
    } = this.props;
    const { duration, position } = this.state;

    return (
      <div id="player-container">
        <Card>
          {current
            ? <div>
                <MusicDetails
                  align="center"
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
            repeat={repeat}
            onPlay={onPlay}
            onPause={onPause}
            onPrevious={this.onPrevious}
            onNext={this.onNext}
            onVolumeChange={onVolumeChange}
            onRepeatChange={onRepeatChange}
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
            onFinishedPlaying={this.onNext}
          />}
      </div>
    );
  }
}

const mapStateToProps = (
  state: { queue: queueStateType, settings: { theme: string } }
) => ({
  current: currentMusicSelector(state),
  status: state.queue.status,
  volume: state.queue.volume,
  repeat: state.queue.repeat,
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => void) => ({
  onPlay: () => dispatch(play()),
  onPause: () => dispatch(pause()),
  onNext: () => dispatch(next()),
  onPrevious: () => dispatch(previous()),
  onRepeatChange: (repeat: string | null) => dispatch(setRepeat(repeat)),
  onVolumeChange: (volume: number) => dispatch(setVolume(volume))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
