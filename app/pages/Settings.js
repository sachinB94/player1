// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import muiThemeable from 'material-ui/styles/muiThemeable';

import { IconButton, Drawer } from '../atoms';
import { ThemeSelector } from '../organisms';

import { changeTheme } from '../actions/settings';

class Settings extends Component {
  state = {
    open: false
  };

  state: {
    open: boolean
  };

  onDrawerChange = open => {
    this.setState({ open });
  };

  openDrawer = () => {
    this.setState({ open: true });
  };

  closeDrawer = () => {
    this.setState({ open: false });
  };

  props: {
    theme: string,
    muiTheme: { palette: { textColor: string } },
    onChangeTheme: () => void
  };

  render() {
    const { theme, onChangeTheme } = this.props;
    const { open } = this.state;

    const { textColor } = this.props.muiTheme.palette;

    return (
      <div>
        <IconButton
          icon="settings"
          iconStyle={{ color: textColor }}
          onClick={this.openDrawer}
        />
        <Drawer openSecondary open={open} onChange={this.onDrawerChange}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              icon="close"
              iconStyle={{ color: textColor }}
              onClick={this.closeDrawer}
            />
          </div>
          <ThemeSelector theme={theme} onChange={onChangeTheme} />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state: { settings: { theme: string } }) => ({
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  onChangeTheme: theme => dispatch(changeTheme(theme))
});

export default muiThemeable()(
  connect(mapStateToProps, mapDispatchToProps)(Settings)
);
