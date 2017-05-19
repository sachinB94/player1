// @flow
import React, { Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { IconButton } from '../atoms';

class RepeatControl extends Component {
  onChange = () => {
    const { value, onChange } = this.props;
    if (!value) {
      onChange('ALL');
    } else if (value === 'ALL') {
      onChange('ONE');
    } else {
      onChange(null);
    }
  };

  props: {
    value: number,
    muiTheme: { palette: { primary1Color: string, textColor: string } },
    onChange: (string | null) => void
  };

  render() {
    const { value } = this.props;

    const { primary1Color, textColor } = this.props.muiTheme.palette;

    return (
      <IconButton
        icon={value === 'ONE' ? 'repeat-one' : 'repeat'}
        iconStyle={{
          color: value ? primary1Color : textColor,
          width: 30,
          height: 30
        }}
        onClick={this.onChange}
      />
    );
  }
}

export default muiThemeable()(RepeatControl);
