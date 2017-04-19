// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { SelectableList, ListItem, IconButton } from '../atoms';
import { Sorter } from '../molecules';

import type { musicItemType } from '../reducers/music';

import { getArtistAndAlbum } from '../utils/helpers';
import { MUSIC_SORT_OPTIONS } from '../utils/constants';

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & div {
    flex: 1;
  }
`;

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
    onDelete: () => void,
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

    const containerElement = props => (
      <ListItemContainer>
        <div {...props} />
        <IconButton icon="delete" onClick={() => onDelete(props.value)} />
      </ListItemContainer>
    );

    return (
      <SelectableList title={title} value={value} onChange={onChange}>
        {list.map(item => (
          <ListItem
            innerDivStyle={{}}
            containerElement={containerElement}
            id={`queue_${item.key}`}
            key={item.key}
            value={item.key}
            primaryText={item.title}
            secondaryText={getArtistAndAlbum(item)}
          />
        ))}
      </SelectableList>
    );
  }
}

export default QueueList;
