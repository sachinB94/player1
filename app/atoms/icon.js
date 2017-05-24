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
import AvRepeat from 'material-ui/svg-icons/av/repeat';
import AvRepeatOne from 'material-ui/svg-icons/av/repeat-one';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ContentAddCircleOutline
  from 'material-ui/svg-icons/content/add-circle-outline';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import HardwareKeyboardArrowDown
  from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import HardwareKeyboardArrowUp
  from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

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
    case 'repeat':
      return <AvRepeat {...props} />;
    case 'repeat-one':
      return <AvRepeatOne {...props} />;
    case 'add-circle-outline':
      return <ContentAddCircleOutline {...props} />;
    case 'delete':
      return <ActionDelete {...props} />;
    case 'settings':
      return <ActionSettings {...props} />;
    case 'close':
      return <NavigationClose {...props} />;
    case 'arrow-up':
      return <HardwareKeyboardArrowUp {...props} />;
    case 'arrow-down':
      return <HardwareKeyboardArrowDown {...props} />;
    default:
      return '';
  }
};
