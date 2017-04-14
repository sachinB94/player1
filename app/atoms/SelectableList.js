// @flow
import React, { Component } from 'react';
import { List, ListItem, makeSelectable } from 'material-ui/List';

import Subheader from './Subheader';

const SelectableList = makeSelectable(List);

class SelectableListComponent extends Component {
  static defaultProps = {
    title: null,
    value: null,
    children: '',
    onChange: () => {}
  };

  props: {
    title: string,
    value: string | number,
    children: HTMLElement,
    onChange: () => void
  };

  render() {
    const { title, value, children, onChange } = this.props;

    return (
      <SelectableList
        value={value}
        onChange={(event: {}, itemValue: string | number) =>
          onChange(itemValue)}
      >
        {title && <Subheader>{title}</Subheader>}
        {children}
      </SelectableList>
    );
  }
}

export default SelectableListComponent;
export { ListItem };
