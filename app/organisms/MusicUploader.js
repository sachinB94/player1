// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Upload } from '../molecules';

import { directorySelect } from '../actions/music';

class MusicUploader extends Component {
  props: {
    onDirectorySelect: () => void
  };

  render() {
    return (
      <div>
        <Upload onUpload={this.props.onDirectorySelect}>
          Upload a directory
        </Upload>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: () => {}) => ({
  onDirectorySelect: (directory: string) => dispatch(directorySelect(directory))
});

export default connect(null, mapDispatchToProps)(MusicUploader);
