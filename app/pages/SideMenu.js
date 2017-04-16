// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Card } from '../atoms';
import { SideMenuList } from '../organisms';

class SideMenu extends Component {
  props: {
    pathname: string,
    switchTo: () => void
  };

  render() {
    const { pathname, switchTo } = this.props;

    return (
      <Card
        containerStyle={{ height: '100%' }}
        style={{ padding: 0, width: 200 }}
      >
        <SideMenuList value={pathname} onChange={switchTo} />
      </Card>
    );
  }
}

const mapStateToProps = (
  state: {
    routing: { locationBeforeTransitions: { pathname: string } },
    settings: { theme: string }
  }
) => ({
  pathname: state.routing.locationBeforeTransitions.pathname,
  theme: state.settings.theme
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  switchTo: route => dispatch(push(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
