// @flow
import React from 'react';
import AvPlay from 'material-ui/svg-icons/av/play-arrow';
import AvPause from 'material-ui/svg-icons/av/pause';
import AvNext from 'material-ui/svg-icons/av/skip-next';
import AvPrevious from 'material-ui/svg-icons/av/skip-previous';
import AvVolumeMute from 'material-ui/svg-icons/av/volume-mute';
import AvVolumeUp from 'material-ui/svg-icons/av/volume-up';
import AvQueue from 'material-ui/svg-icons/av/queue-music';
import AvLibrary from 'material-ui/svg-icons/av/library-music';
import ActionDelete from 'material-ui/svg-icons/action/delete';

export const getIcon = (icon: ?string, props: {} = {}) => {
  switch (icon) {
    case 'play':
      return <AvPlay {...props} />;
    case 'pause':
      return <AvPause {...props} />;
    case 'previous':
      return <AvPrevious {...props} />;
    case 'next':
      return <AvNext {...props} />;
    case 'volumeMute':
      return <AvVolumeMute {...props} />;
    case 'volumeUp':
      return <AvVolumeUp {...props} />;
    case 'queue':
      return <AvQueue {...props} />;
    case 'library':
      return <AvLibrary {...props} />;
    case 'delete':
      return <ActionDelete {...props} />;
    default:
      return '';
  }
};
