// @flow
import React from 'react';
import AvPlay from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvNext from 'material-ui/svg-icons/av/skip-next';
import AvPrevious from 'material-ui/svg-icons/av/skip-previous';
import AvVolumeMute from 'material-ui/svg-icons/av/volume-mute';
import AvVolumeUp from 'material-ui/svg-icons/av/volume-up';

export const getIcon = (icon: string) => {
  switch (icon) {
    case 'play':
      return <AvPlay />;
    case 'pause':
      return <AvPause />;
    case 'previous':
      return <AvPrevious />;
    case 'next':
      return <AvNext />;
    case 'volumeMute':
      return <AvVolumeMute />;
    case 'volumeUp':
      return <AvVolumeUp />;
    default:
      return '';
  }
};
