// @flow
import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { SelectableList, ListItem, getIcon } from '../atoms';

class SideMenu extends Component {
  props: {
    value: string,
    muiTheme: { palette: { textColor: string } },
    onChange: () => void
  };

  render() {
    const { value, onChange } = this.props;

    const { textColor } = this.props.muiTheme.palette;

    return (
      <SelectableList title="Menu" value={value} onChange={onChange}>
        <ListItem
          value="/library"
          primaryText="Library"
          leftIcon={getIcon('library', { color: textColor })}
        />
        <ListItem
          value="/queue"
          primaryText="Queue"
          leftIcon={getIcon('queue', { color: textColor })}
        />
      </SelectableList>
    );
  }
}

export default muiThemeable()(SideMenu);
