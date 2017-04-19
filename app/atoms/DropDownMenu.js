// @flow
import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class DropDownMenuComponent extends Component {
  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {}
  };

  props: {
    value: string | number | null,
    options: { value: string | number, label: string }[],
    onChange: () => void
  };

  render() {
    const { value, options, onChange } = this.props;

    return (
      <DropDownMenu
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
