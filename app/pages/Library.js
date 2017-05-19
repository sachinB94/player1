// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from '../atoms';
import { MusicList } from '../organisms';

import { directorySelect, remove } from '../actions/music';
import { add } from '../actions/queue';
import { musicListSelector } from '../selectors/music';

import type { musicStateType, musicItemType } from '../reducers/music';

class Library extends Component {
  static defaltProps = {
    list: []
  };

  props: {
    list: musicItemType[],
    onAdd: () => void,
    onMusicDelete: () => void,
    onDirectorySelect: () => void
  };

  render() {
    const {
      list,
      onAdd,
      onMusicDelete,
      onDirectorySelect
    } = this.props;

    return (
      <Card
        id="queue-container"
        containerStyle={{ height: '100%', overflowY: 'auto' }}
        style={{ padding: 0 }}
      >
        <MusicList
          list={list}
          onAdd={onAdd}
          onDelete={onMusicDelete}
          onDirectorySelect={onDirectorySelect}
        />
      </Card>
    );
  }
}

const mapStateToProps = (
  state: { music: musicStateType, settings: { theme: string } }
) => ({
  list: musicListSelector(state),
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => void) => ({
  onDirectorySelect: directory => dispatch(directorySelect(directory)),
  onAdd: queue => dispatch(add(queue)),
  onMusicDelete: id => dispatch(remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
