import { white, cyan400, blueGrey700, red500 } from 'material-ui/styles/colors';

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export const cyanOnLight = {
  ...lightBaseTheme,
  palette: {
    ...lightBaseTheme.palette,
    dangerColor: red500
  }
};

export const cyanOnDark = {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    dangerColor: red500
  }
};

export const whiteOnDark = {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: white,
    primary2Color: white,
    dangerColor: red500
  }
};

export const lightCyanOnDark = {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: cyan400,
    primary2Color: cyan400,
    dangerColor: red500
  }
};

export const cyanOnBlueGrey = {
  ...darkBaseTheme,
  palette: {
    ...darkBaseTheme.palette,
    primary1Color: cyan400,
    primary2Color: cyan400,
    alternateTextColor: blueGrey700,
    canvasColor: blueGrey700,
    dangerColor: red500
  }
};

export const themes = [
  { name: 'cyanOnLight', value: cyanOnLight },
  { name: 'cyanOnDark', value: cyanOnDark },
  { name: 'whiteOnDark', value: whiteOnDark },
  { name: 'lightCyanOnDark', value: lightCyanOnDark },
  { name: 'cyanOnBlueGrey', value: cyanOnBlueGrey }
];
