// @flow
import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Player from './Player';

export default class App extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <div>
          <Player />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
