// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { Card, SelectableList } from '../atoms';

class SideMenu extends Component {
  props: {
    pathname: string,
    switchTo: () => void
  };

  render() {
    const { pathname, switchTo } = this.props;

    const listItems = [
      { text: 'Library', value: '/library', leftIcon: 'library' },
      { text: 'Queue', value: '/queue', leftIcon: 'queue' }
    ];
    return (
      <Card
        containerStyle={{ height: '100%' }}
        style={{ padding: 0, width: 200 }}
      >
        <SelectableList
          title="Menu"
          value={pathname}
          items={listItems}
          onChange={switchTo}
        />
      </Card>
    );
  }
}

const mapStateToProps = (
  state: { routing: { locationBeforeTransitions: { pathname: string } } }
) => ({
  pathname: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = (dispatch: () => {}) => ({
  switchTo: route => dispatch(push(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
