// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { Slider, IconButton } from '../atoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class VolumeControl extends Component {
  props: {
    value: number,
    muiTheme: { palette: { primary1Color: string, textColor: string } },
    onChange: (number) => void
  };

  render() {
    const { value, onChange } = this.props;

    const { primary1Color, textColor } = this.props.muiTheme.palette;

    return (
      <Container>
        <div>
          <IconButton
            icon="volumeUp"
            iconStyle={{ color: value === 100 ? primary1Color : textColor }}
            onClick={() => onChange(100)}
          />
        </div>
        <Slider
          axis="y"
          style={{ height: 74 }}
          sliderStyle={{ margin: 0 }}
          min={0}
          max={100}
          value={value}
          onChange={onChange}
        />
        <IconButton
          icon="volumeMute"
          iconStyle={{ color: value === 0 ? primary1Color : textColor }}
          onClick={() => onChange(0)}
        />
      </Container>
    );
  }
}

export default muiThemeable()(VolumeControl);
