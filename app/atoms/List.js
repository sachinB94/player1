// @flow
import React, { Component } from 'react';
import { List } from 'material-ui/List';

import Subheader from './Subheader';

class ListComponent extends Component {
  static defaultProps = {
    title: null,
    children: ''
  };

  props: {
    title: string | HTMLElement,
    children: HTMLElement
  };

  render() {
    const { title, children } = this.props;

    return (
      <List>
        {title && <Subheader>{title}</Subheader>}
        {children}
      </List>
    );
  }
}

export default ListComponent;
