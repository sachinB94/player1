// @flow
import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import { getIcon } from './icon';

class IconMenuComponent extends Component {
  static defaultProps = {
    icon: '',
    value: null,
    options: [],
    onChange: () => {}
  };

  props: {
    icon: string,
    value: string | number | null,
    options: { value: string | number, label: string }[],
    muiTheme: { palette: { textColor: string } },
    onChange: () => void
  };

  render() {
    const { icon, value, options, onChange } = this.props;
    const { textColor } = this.props.muiTheme.palette;

    return (
      <IconMenu
        iconButtonElement={
          <IconButton iconStyle={{ color: textColor }}>
            {getIcon(icon)}
          </IconButton>
        }
        onChange={(event, newValue) => onChange(newValue)}
        value={value}
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            value={option.value}
            primaryText={option.label}
          />
        ))}
      </IconMenu>
    );
  }
}

export default muiThemeable()(IconMenuComponent);
