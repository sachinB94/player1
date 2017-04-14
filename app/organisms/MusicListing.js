// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from '../atoms';

import type { musicStateType, musicListType } from '../reducers/music';

import { set } from '../actions/queue';

class MusicUploader extends Component {
  props: {
    musicList: musicListType,
    onAdd: () => void
  };

  render() {
    return (
      <div>
        <Button
          type="primary"
          onClick={() => this.props.onAdd(Object.keys(this.props.musicList))}
        >
          Play All
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state: { music: musicStateType }) => ({
  musicList: state.music.list
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  onAdd: queue => dispatch(set(queue))
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicUploader);
