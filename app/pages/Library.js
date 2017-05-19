// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from '../atoms';
import { MusicList } from '../organisms';

import { directorySelect, sort, remove } from '../actions/music';
import { add } from '../actions/queue';
import { musicListSelector } from '../selectors/music';

import type { musicStateType, musicItemType } from '../reducers/music';

class Library extends Component {
  static defaltProps = {
    list: []
  };

  props: {
    list: musicItemType[],
    sortBy: { key: string, type: string },
    onAdd: () => void,
    onMusicDelete: () => void,
    onDirectorySelect: () => void,
    onSort: () => void
  };

  render() {
    const {
      list,
      sortBy,
      onAdd,
      onMusicDelete,
      onDirectorySelect,
      onSort
    } = this.props;

    return (
      <Card
        id="queue-container"
        containerStyle={{ height: '100%', overflowY: 'auto' }}
        style={{ padding: 0 }}
      >
        <MusicList
          sortBy={sortBy}
          list={list}
          onAdd={onAdd}
          onDelete={onMusicDelete}
          onDirectorySelect={onDirectorySelect}
          onSort={onSort}
        />
      </Card>
    );
  }
}

const mapStateToProps = (
  state: { music: musicStateType, settings: { theme: string } }
) => ({
  list: musicListSelector(state),
  sortBy: state.music.sortBy,
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => void) => ({
  onDirectorySelect: directory => dispatch(directorySelect(directory)),
  onAdd: queue => dispatch(add(queue)),
  onMusicDelete: id => dispatch(remove(id)),
  onSort: sortBy => dispatch(sort(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);
