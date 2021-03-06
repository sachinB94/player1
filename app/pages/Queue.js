// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card } from '../atoms';
import { QueueList } from '../organisms';

import { playFrom, remove, removeAll } from '../actions/queue';
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
    onMusicChange: () => void,
    onMusicDelete: () => void,
    onMusicDeleteAll: () => void
  };

  render() {
    const {
      list,
      current,
      onMusicChange,
      onMusicDelete,
      onMusicDeleteAll
    } = this.props;

    return (
      <Card
        id="queue-container"
        containerStyle={{ height: '100%', overflowY: 'auto' }}
        style={{ padding: 0 }}
      >
        <QueueList
          list={list}
          value={current}
          onChange={onMusicChange}
          onDelete={onMusicDelete}
          onDeleteAll={onMusicDeleteAll}
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
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => void) => ({
  onMusicChange: id => dispatch(playFrom(id)),
  onMusicDelete: id => dispatch(remove(id)),
  onMusicDeleteAll: () => dispatch(removeAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
