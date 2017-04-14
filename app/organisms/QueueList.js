// @flow
import React, { Component } from 'react';

import { SelectableList, ListItem, IconButton } from '../atoms';

import type { musicItemType } from '../reducers/music';

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
    onChange: () => void,
    onDelete: () => void
  };

  render() {
    const { list, value, onChange, onDelete } = this.props;

    return (
      <SelectableList title="Queue" value={value} onChange={onChange}>
        {list.map(item => (
          <ListItem
            innerDivStyle={{}}
            id={`queue_${item.key}`}
            key={item.key}
            value={item.key}
            primaryText={item.title}
            secondaryText={`${item.artist.join(', ')} - ${item.album}`}
            rightIconButton={
              <IconButton icon="delete" onClick={() => onDelete(item.key)} />
            }
          />
        ))}
      </SelectableList>
    );
  }
}

export default QueueList;
