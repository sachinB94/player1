// @flow
import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Player from './Player';
import SideMenu from './SideMenu';

export default class App extends Component {
  componentDidMount() {
    this.setMenuHeight();
  }

  setMenuHeight = () => {
    const player = document.getElementById('player-container');
    const menu = document.getElementById('menu-container');
    if (document.documentElement && player && menu) {
      const viewportHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );
      const playerHeight = player.offsetHeight;

      menu.style.height = `${viewportHeight - playerHeight - 2}px`;
    }
  };

  props: {
    children: HTMLElement
  };

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <div>
          <Player />
          <div id="menu-container" style={{ display: 'flex', paddingTop: 2 }}>
            <div style={{ paddingRight: 2 }}>
              <SideMenu />
            </div>
            <div style={{ flex: 1 }}>
              {this.props.children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
