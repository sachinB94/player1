// @flow
import React, { Component } from 'react';

import { SelectableList, ListItem } from '../atoms';
import { MusicListItem, Sorter } from '../molecules';

import type { musicItemType } from '../reducers/music';

import { MUSIC_SORT_OPTIONS } from '../utils/constants';

class QueueList extends Component {
  componentDidMount() {
    const { value } = this.props;
    if (value) {
      const valueListItem = document.getElementById(`queue_${value}`);
      if (valueListItem) {
        valueListItem.scrollIntoView();
      }
    }
  }

  props: {
    list: musicItemType[],
    value: string,
    sortBy: { key: string, type: string },
    onChange: () => void,
    onDelete: (string) => void,
    onSort: () => void
  };

  render() {
    const { list, value, sortBy, onChange, onDelete, onSort } = this.props;

    const title = (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>Queue</span>
        <Sorter
          title="Sort By"
          value={sortBy}
          options={MUSIC_SORT_OPTIONS}
          onChange={onSort}
        />
      </div>
    );

    return (
      <SelectableList title={title} value={value} onChange={onChange}>
        {list.map(item => (
          <ListItem
            containerElement={props => (
              <MusicListItem.Container
                elementProps={props}
                onDelete={() => onDelete(item.key)}
              />
            )}
            id={`queue_${item.key}`}
            key={item.key}
            value={item.key}
            primaryText={<MusicListItem.PrimaryText item={item} />}
          />
        ))}
      </SelectableList>
    );
  }
}

export default QueueList;
