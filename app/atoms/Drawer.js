// @flow
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';

export default class DrawerComponent extends Component {
  static defaultProps = {
    children: '',
    openSecondary: false,
    open: false,
    onChange: () => {}
  };

  props: {
    children: HTMLElement,
    openSecondary: boolean,
    open: boolean,
    onChange: () => void
  };

  render() {
    const { children, openSecondary, open, onChange } = this.props;

    return (
      <Drawer
        docked={false}
        openSecondary={openSecondary}
        open={open}
        onRequestChange={onChange}
      >
        {children}
      </Drawer>
    );
  }
}
