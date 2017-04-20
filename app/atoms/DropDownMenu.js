// @flow
import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class DropDownMenuComponent extends Component {
  static defaultProps = {
    value: null,
    options: [],
    style: {},
    onChange: () => {}
  };

  props: {
    value: string | number | null,
    options: { value: string | number, label: string }[],
    style: {},
    onChange: () => void
  };

  render() {
    const { value, options, style, onChange } = this.props;

    return (
      <DropDownMenu
        style={style}
        onChange={(event, index, newValue) => onChange(newValue)}
        value={value}
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            value={option.value}
            primaryText={option.label}
          />
        ))}
      </DropDownMenu>
    );
  }
}

export default DropDownMenuComponent;
