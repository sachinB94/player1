// @flow
import React, { Component } from 'react';

import { DropDownMenu } from '../atoms';

class Sorter extends Component {
  props: {
    title: string | null,
    value: { key: string, type: string },
    options: { value: string | number, label: string }[],
    onChange: () => void
  };

  render() {
    const { title, value, options, onChange } = this.props;

    return (
      <div style={{ display: 'flex' }}>
        {title && <span>{title}</span>}
        <DropDownMenu
          value={value.key}
          options={options}
          onChange={key => onChange({ ...this.props.value, key })}
        />
      </div>
    );
  }
}

export default Sorter;
