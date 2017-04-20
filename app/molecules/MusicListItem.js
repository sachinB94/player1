// @flow
import React from 'react';
import styled from 'styled-components';

import { IconButton } from '../atoms';

import type { musicItemType } from '../reducers/music';

import { getArtistAndAlbum } from '../utils/helpers';

const ListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div {
    flex: 1;
  }
`;

const PrimaryTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

const Title = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

export default {
  Container: (
    { elementProps, onDelete }: { elementProps: {}, onDelete: () => {} }
  ) => (
    <ListItemContainer>
      <div {...elementProps} />
      <IconButton icon="delete" onClick={onDelete} />
    </ListItemContainer>
  ),

  PrimaryText: ({ item }: { item: musicItemType }) => (
    <PrimaryTextContainer>
      <Title>
        <span style={{ marginBottom: 5 }}>{item.title}</span>
        <span style={{ fontSize: 14, opacity: 0.7 }}>
          {getArtistAndAlbum(item)}
        </span>
      </Title>
      <Year>{item.year}</Year>
      <Genre>{item.genre}</Genre>
    </PrimaryTextContainer>
  )
};
