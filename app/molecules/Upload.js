// @flow
import React, { Component } from 'react';
import { remote } from 'electron';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { IconButton } from '../atoms';

const { dialog } = remote;

class Upload extends Component {
  onUploadClick = () => {
    const paths = dialog.showOpenDialog({ properties: ['openDirectory'] });
    if (paths && paths.length) {
      this.props.onUpload(paths[0]);
    }
  };

  props: {
    muiTheme: { palette: { primary1Color: string } },
    onUpload: () => void
  };

  render() {
    const { primary1Color } = this.props.muiTheme.palette;

    return (
      <IconButton
        icon="add-circle-outline"
        iconStyle={{ color: primary1Color, fontSize: 20 }}
        onClick={this.onUploadClick}
      />
    );
  }
}

export default muiThemeable()(Upload);
