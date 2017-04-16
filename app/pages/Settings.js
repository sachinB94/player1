// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IconMenu } from '../atoms';

import { changeTheme } from '../actions/settings';

import { themes } from '../utils/themes';

class Settings extends Component {
  props: {
    theme: string,
    onChangeTheme: () => void
  };

  render() {
    const { theme, onChangeTheme } = this.props;

    return (
      <IconMenu
        icon="settings"
        value={theme}
        options={themes}
        onChange={onChangeTheme}
      />
    );
  }
}

const mapStateToProps = (state: { settings: { theme: string } }) => ({
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  onChangeTheme: theme => dispatch(changeTheme(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
