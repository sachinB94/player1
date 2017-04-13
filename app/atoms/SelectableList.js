// @flow
import React, { Component } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Subheader from './Subheader';

import { getIcon } from './icon';

type listItem = {
  value: string | number,
  text: string,
  leftIcon: string
};

const SelectableList = makeSelectable(List);

class SelectableListComponent extends Component {
  static defaultProps = {
    title: null,
    items: [],
    value: null,
    onChange: () => {}
  };

  props: {
    title: string,
    items: listItem[],
    value: string | number,
    muiTheme: { palette: { textColor: string } },
    onChange: () => void
  };

  render() {
    const { title, items, value, muiTheme, onChange } = this.props;

    const textColor = muiTheme.palette.textColor;

    return (
      <SelectableList
        value={value}
        onChange={(event: {}, itemValue: string | number) =>
          onChange(itemValue)}
      >
        {title && <Subheader>{title}</Subheader>}
        {items.map(item => (
          <ListItem
            key={item.value}
            value={item.value}
            primaryText={item.text}
            leftIcon={getIcon(item.leftIcon, { color: textColor })}
          />
        ))}
      </SelectableList>
    );
  }
}

export default muiThemeable()(SelectableListComponent);
