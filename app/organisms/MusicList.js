// @flow
import React, { Component } from 'react';

import { List, ListItem } from '../atoms';
import { MusicListItem, Sorter, Upload } from '../molecules';

import type { musicItemType } from '../reducers/music';

import { MUSIC_SORT_OPTIONS } from '../utils/constants';

class QueueList extends Component {
  props: {
    list: musicItemType[],
    sortBy: { key: string, type: string },
    onDirectorySelect: () => void,
    onAdd: () => void,
    onDelete: (string) => void,
    onSort: () => void
  };

  render() {
    const {
      list,
      sortBy,
      onDirectorySelect,
      onAdd,
      onDelete,
      onSort
    } = this.props;

    const title = (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <span>Library</span>
          <div style={{ marginLeft: 10 }}>
            <Upload onUpload={onDirectorySelect} />
          </div>
        </div>
        <Sorter
          title="Sort By"
          value={sortBy}
          options={MUSIC_SORT_OPTIONS}
          onChange={onSort}
        />
      </div>
    );

    return (
      <List title={title}>
        {list.map(item => (
          <ListItem
            containerElement={props => (
              <MusicListItem.Container
                elementProps={props}
                onDelete={() => onDelete(item.key)}
              />
            )}
            key={item.key}
            value={item.key}
            primaryText={<MusicListItem.PrimaryText item={item} />}
            onClick={() => onAdd([item.key])}
          />
        ))}
      </List>
    );
  }
}

export default QueueList;
