// @flow
import React, { Component } from 'react';

import { SelectableList, ListItem } from '../atoms';
import { Theme } from '../molecules';

import { themes } from '../utils/themes';

export default class ThemeSelector extends Component {
  props: {
    theme: string,
    onChange: (string) => void
  };

  render() {
    const { theme, onChange } = this.props;

    return (
      <SelectableList title="Select theme" value={theme} onChange={onChange}>
        {themes.map(item => (
          <ListItem
            key={item.name}
            value={item.name}
            primaryText={<Theme theme={item.value} />}
          />
        ))}
      </SelectableList>
    );
  }
}
