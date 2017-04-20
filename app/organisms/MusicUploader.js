// @flow
import React, { Component } from 'react';

import { Upload } from '../molecules';

class MusicUploader extends Component {
  props: {
    onDirectorySelect: () => void
  };

  render() {
    const { onDirectorySelect } = this.props;
    return (
      <Upload onUpload={onDirectorySelect}>
        Upload a directory
      </Upload>
    );
  }
}

export default MusicUploader;
