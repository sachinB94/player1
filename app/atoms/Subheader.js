// @flow
import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';

export default class SubheaderComponent extends Component {
  static defaultProps = {
    children: ''
  };

  props: {
    children: string
  };

  render() {
    const { children } = this.props;

    return (
      <Subheader>
        {children}
      </Subheader>
    );
  }
}
