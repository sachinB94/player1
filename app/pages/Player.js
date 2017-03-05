// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Sound from 'react-sound';

import { Button, Card, Progress } from '../atoms';

import type { musicItemType } from '../reducers/music';
import type { queueStateType } from '../reducers/queue';

import { play, pause } from '../actions/queue';
import { currentMusicSelector } from '../selectors/queue';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eee;
`;

const CurrentMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

class Player extends Component {
  props: {
    current: musicItemType,
    status: string,
    onPlay: () => {},
    onPause: () => {}
  }

  render() {
    const { current, status, onPlay, onPause } = this.props;

    return (
      <div>
        <Card>
          {current && (
            <DetailContainer>
              <CurrentMusic>
                <div>{current.title}</div>
                <div>{current.album}</div>
                <div>{current.artist.join(', ')}</div>
              </CurrentMusic>
            </DetailContainer>
          )}
        </Card>
        {current && (
          <Sound
            url={current.file}
            playStatus={Sound.status[status]}
            onLoading={(...params) => console.log('onLoading', params)}
            onPlaying={(...params) => console.log('onPlaying', params)}
            onFinishedPlaying={(...params) => console.log('onFinishedPlaying', params)}
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
  onPause: () => dispatch(pause())
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
