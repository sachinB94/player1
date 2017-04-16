import { white, cyan400, blueGrey700 } from 'material-ui/styles/colors';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export const themes = [
  { value: 'cyanOnLight', label: 'Cyan / Light' },
  { value: 'cyanOnDark', label: 'Cyan / Dark' },
  { value: 'whiteOnDark', label: 'white / Dark' },
  { value: 'lightCyanOnDark', label: 'Light Cyan / Dark' },
  { value: 'cyanOnBlueGrey', label: 'Cyan / Blue Grey' }
];

export const cyanOnLight = lightBaseTheme;
export const cyanOnDark = darkBaseTheme;

export const whiteOnDark = {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: white,
    primary2Color: white
  }
};

export const lightCyanOnDark = {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: cyan400,
    primary2Color: cyan400
  }
};

export const cyanOnBlueGrey = {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: cyan400,
    primary2Color: cyan400,
    alternateTextColor: blueGrey700,
    canvasColor: blueGrey700
  }
};