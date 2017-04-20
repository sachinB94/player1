// @flow
import React, { Component } from 'react';

import { Button } from '../atoms';

import type { musicListType } from '../reducers/music';

class MusicUploader extends Component {
  props: {
    musicList: musicListType,
    onAdd: () => void
  };

  render() {
    const { musicList, onAdd } = this.props;
    return (
      <div>
        <Button type="primary" onClick={() => onAdd(Object.keys(musicList))}>
          Play All
        </Button>
      </div>
    );
  }
}

export default MusicUploader;
