// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { List, ListItem, FlatButton } from '../atoms';
import { MusicListItem, Upload } from '../molecules';

import type { musicItemType } from '../reducers/music';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

class QueueList extends Component {
  props: {
    list: musicItemType[],
    muiTheme: { palette: { dangerColor: string } },
    onDirectorySelect: () => void,
    onAdd: () => void,
    onDelete: (string) => void,
    onDeleteAll: () => void
  };

  render() {
    const {
      list,
      onDirectorySelect,
      onAdd,
      onDelete,
      onDeleteAll
    } = this.props;

    const { dangerColor } = this.props.muiTheme.palette;

    const title = (
      <Title>
        <div style={{ display: 'flex' }}>
          <span>Library</span>
          <div style={{ marginLeft: 10 }}>
            <Upload onUpload={onDirectorySelect} />
          </div>
        </div>
        {list && list.length
          ? <div>
              <FlatButton onClick={() => onAdd(list.map(({ key }) => key))}>
                Play all
              </FlatButton>
              <FlatButton style={{ color: dangerColor }} onClick={onDeleteAll}>
                Delete All
              </FlatButton>
            </div>
          : ''}
      </Title>
    );

    return (
      <List title={title} style={{ padding: 0 }}>
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

export default muiThemeable()(QueueList);
