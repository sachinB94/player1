// @flow
import React, { Component } from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Player from './Player';
import SideMenu from './SideMenu';

export default class App extends Component {
  state = {
    menuHeight: 'auto'
  };

  state: {
    menuHeight: string
  };

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

      this.setState({ menuHeight: `${viewportHeight - playerHeight - 2}px` });
    }
  };

  props: {
    children: HTMLElement
  };

  render() {
    const { menuHeight } = this.state;
    const { children } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
        <div>
          <Player />
          <div
            id="menu-container"
            style={{ display: 'flex', paddingTop: 2, height: menuHeight }}
          >
            <div style={{ paddingRight: 2 }}>
              <SideMenu />
            </div>
            <div style={{ flex: 1 }}>
              {React.Children.map(children, child =>
                React.cloneElement(child, {
                  containerHeight: menuHeight
                }))}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
