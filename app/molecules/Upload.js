// @flow
import React, { Component } from 'react';
import { remote } from 'electron';

import { Button } from '../atoms';

const { dialog } = remote;

export default class Upload extends Component {
  onUploadClick = () => {
    const paths = dialog.showOpenDialog({ properties: ['openDirectory'] });
    if (paths && paths.length) {
      this.props.onUpload(paths[0]);
    }
  };

  props: {
    children: HTMLElement,
    onUpload: () => void
  };

  render() {
    return (
      <Button onClick={this.onUploadClick}>
        {this.props.children}
      </Button>
    );
  }
}
