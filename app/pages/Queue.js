// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from '../atoms';
import { QueueList } from '../organisms';

import { playFrom, remove, sort } from '../actions/queue';
import type { queueStateType } from '../reducers/queue';
import { queueListSelector } from '../selectors/queue';

import type { musicItemType } from '../reducers/music';

class Queue extends Component {
  static defaltProps = {
    list: [],
    current: null
  };

  props: {
    list: musicItemType[],
    current: string | null,
    sortBy: { key: string, type: string },
    onMusicChange: () => void,
    onMusicDelete: () => void,
    onSort: () => void
  };

  render() {
    const {
      list,
      current,
      sortBy,
      onMusicChange,
      onMusicDelete,
      onSort
    } = this.props;

    return (
      <Card
        id="queue-container"
        containerStyle={{ height: '100%', overflowY: 'auto' }}
        style={{ padding: 0 }}
      >
        <QueueList
          sortBy={sortBy}
          list={list}
          value={current}
          onChange={onMusicChange}
          onDelete={onMusicDelete}
          onSort={onSort}
        />
      </Card>
    );
  }
}

const mapStateToProps = (
  state: { queue: queueStateType, settings: { theme: string } }
) => ({
  list: queueListSelector(state),
  current: state.queue.current,
  theme: state.settings.theme,
  sortBy: state.queue.sortBy
});

const mapDispatchToProps = (dispatch: () => void) => ({
  onMusicChange: id => dispatch(playFrom(id)),
  onMusicDelete: id => dispatch(remove(id)),
  onSort: sortBy => dispatch(sort(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
