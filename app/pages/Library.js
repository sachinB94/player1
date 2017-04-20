// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MusicUploader, MusicListing } from '../organisms';

import { directorySelect } from '../actions/music';
import { add } from '../actions/queue';

import type { musicStateType, musicListType } from '../reducers/music';

class Library extends Component {
  props: {
    musicList: musicListType,
    onAdd: () => void,
    onDirectorySelect: () => void
  };

  render() {
    const { musicList, onAdd, onDirectorySelect } = this.props;
    return (
      <div>
        <MusicUploader onDirectorySelect={onDirectorySelect} />
        <MusicListing musicList={musicList} onAdd={onAdd} />
      </div>
    );
  }
}

const mapStateToProps = (
  state: { music: musicStateType, settings: { theme: string } }
) => ({
  musicList: state.music.list,
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  onDirectorySelect: (directory: string) =>
    dispatch(directorySelect(directory)),
  onAdd: queue => dispatch(add(queue))
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
