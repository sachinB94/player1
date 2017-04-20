// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { ListItem, IconButton } from '../atoms';

import type { musicItemType } from '../reducers/music';

import { getArtistAndAlbum } from '../utils/helpers';

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & div {
    flex: 1;
  }
`;

const PrimaryTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  & div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const Year = styled.div`
  width: 50px;
  opacity: 0.7;
  font-size: 12px;
`;

const Genre = styled.div`
  width: 50px;
  opacity: 0.7;
  font-size: 14px;
`;

class MusicListItem extends Component {
  props: {
    item: musicItemType,
    onDelete: () => void
  };

  render() {
    const { item, onDelete } = this.props;

    const containerElement = props => (
      <ListItemContainer>
        <div {...props} />
        <IconButton icon="delete" onClick={onDelete} />
      </ListItemContainer>
    );

    const primaryText = (
      <PrimaryTextContainer>
        <div>
          <span style={{ marginBottom: 5 }}>{item.title}</span>
          <span style={{ fontSize: 14, opacity: 0.7 }}>
            {getArtistAndAlbum(item)}
          </span>
        </div>
        <Year>{item.year}</Year>
        <Genre>{item.genre}</Genre>
      </PrimaryTextContainer>
    );

    return (
      <ListItem
        containerElement={containerElement}
        id={`queue_${item.key}`}
        key={item.key}
        value={item.key}
        primaryText={primaryText}
      />
    );
  }
}

export default MusicListItem;
