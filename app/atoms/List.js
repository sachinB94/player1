// @flow
import React, { Component } from 'react';
import { List } from 'material-ui/List';

import Subheader from './Subheader';

class ListComponent extends Component {
  static defaultProps = {
    title: null,
    style: {},
    children: ''
  };

  props: {
    title: string | HTMLElement,
    style: {},
    children: HTMLElement
  };

  render() {
    const { title, style, children } = this.props;

    return (
      <List style={style}>
        {title && <Subheader>{title}</Subheader>}
        {children}
      </List>
    );
  }
}

export default ListComponent;
