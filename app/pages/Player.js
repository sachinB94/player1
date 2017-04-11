// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sound from 'react-sound';

import { ActionButton, Card, Slider } from '../atoms';

import type { musicItemType } from '../reducers/music';
import type { queueStateType } from '../reducers/queue';

import { play, pause, next, previous } from '../actions/queue';
import { currentMusicSelector } from '../selectors/queue';

// import { getFormattedTime } from '../utils/helpers';

const CurrentMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const CurrentMusicTitle = styled.div`
  font-weight: bold;
  font-size: 15px;
`;

const CurrentMusicArtist = styled.div`
  font-size: 12px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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
    onPause: () => {},
    onNext: () => {},
    onPrevious: () => {}
  };

  render() {
    const { current, status, onPlay, onPause, onPrevious, onNext } = this.props;
    const { duration, position } = this.state;

    return (
      <div>
        <Card>
          {current &&
            <div>
              <CurrentMusic>
                <CurrentMusicTitle>{current.title}</CurrentMusicTitle>
                <CurrentMusicArtist>
                  {current.artist.join(', ')} - {current.album}
                </CurrentMusicArtist>
              </CurrentMusic>
              <Slider
                min={0}
                max={duration}
                value={position}
                onChange={this.onPositionChange}
                onDragStart={this.onPositionDragStart}
                onDragStop={this.onPositionDragStop}
              />
            </div>}
          <Actions>
            <ActionButton
              className="previous-next"
              iconStyle={{ width: 50, height: 50 }}
              icon="previous"
              onClick={onPrevious}
            />
            <div style={{ padding: '0 20px' }}>
              <ActionButton
                iconStyle={{ width: 100, height: 100 }}
                icon={status === 'PLAYING' ? 'pause' : 'play'}
                onClick={() => status === 'PLAYING' ? onPause() : onPlay()}
              />
            </div>
            <ActionButton
              className="previous-next"
              iconStyle={{ width: 40, height: 40 }}
              icon="next"
              onClick={onNext}
            />
          </Actions>
        </Card>
        {current &&
          <Sound
            url={current.file}
            playStatus={Sound.status[status]}
            position={position}
            onLoading={this.onLoading}
            onPlaying={this.onPlaying}
            onFinishedPlaying={this.onFinishedPlaying}
          />}
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
  onNext: () => dispatch(next()),
  onPrevious: () => dispatch(previous())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
