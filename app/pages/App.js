// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Player from './Player';
import SideMenu from './SideMenu';
import Settings from './Settings';

import * as themes from '../utils/themes';

class App extends Component {
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
    children: HTMLElement,
    theme: string
  };

  render() {
    const { menuHeight } = this.state;
    const { theme, children } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(themes[theme])}>
        <div>
          <div style={{ position: 'absolute', right: 10, top: 10 }}>
            <Settings />
          </div>
          <Player />
          <div
            id="menu-container"
            style={{ display: 'flex', paddingTop: 2, height: menuHeight }}
          >
            <div style={{ paddingRight: 2 }}>
              <SideMenu />
            </div>
            <div style={{ flex: 1 }}>
              {children}
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state: { settings: { theme: string } }) => ({
  theme: state.settings.theme
});

export default connect(mapStateToProps)(App);
