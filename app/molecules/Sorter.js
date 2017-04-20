// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { DropDownMenu, IconButton } from '../atoms';

const SortArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

class Sorter extends Component {
  props: {
    title: string | null,
    value: { key: string, type: string },
    options: { value: string | number, label: string }[],
    muiTheme: { palette: { primary1Color: string, textColor: string } },
    onChange: () => void
  };

  render() {
    const { title, value, options, onChange } = this.props;

    const { primary1Color, textColor } = this.props.muiTheme.palette;

    return (
      <div style={{ display: 'flex' }}>
        {title && <span>{title}</span>}
        <DropDownMenu
          style={{ marginTop: -5, marginRight: -15 }}
          value={value.key}
          options={options}
          onChange={key => onChange({ ...this.props.value, key })}
        />
        <SortArrowContainer>
          <IconButton
            icon="arrow-up"
            style={{ width: 24, height: 24, padding: 0 }}
            iconStyle={{
              color: value.type === 'desc' ? primary1Color : textColor
            }}
            onClick={() => onChange({ ...this.props.value, type: 'desc' })}
          />
          <IconButton
            icon="arrow-down"
            style={{ width: 24, height: 24, padding: 0 }}
            iconStyle={{
              color: value.type === 'asc' ? primary1Color : textColor
            }}
            onClick={() => onChange({ ...this.props.value, type: 'asc' })}
          />
        </SortArrowContainer>
      </div>
    );
  }
}

export default muiThemeable()(Sorter);
