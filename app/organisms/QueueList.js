// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { SelectableList, ListItem, FlatButton } from '../atoms';
import { MusicListItem } from '../molecules';

import type { musicItemType } from '../reducers/music';

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
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
    muiTheme: { palette: { dangerColor: string } },
    onChange: () => void,
    onDelete: (string) => void,
    onDeleteAll: () => void
  };

  render() {
    const { list, value, onChange, onDelete, onDeleteAll } = this.props;

    const { dangerColor } = this.props.muiTheme.palette;

    const title = (
      <Title>
        <span>Queue</span>
        {list && list.length
          ? <FlatButton style={{ color: dangerColor }} onClick={onDeleteAll}>
              Delete All
            </FlatButton>
          : ''}
      </Title>
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

export default muiThemeable()(QueueList);
