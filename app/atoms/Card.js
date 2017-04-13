// @flow
import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default class MaterialCard extends Component {
  static defaultProps = {
    title: null,
    children: '',
    style: {},
    containerStyle: {}
  };

  props: {
    title: HTMLElement,
    children: HTMLElement,
    style: {},
    containerStyle: {}
  };

  render() {
    const { title, children, style, containerStyle } = this.props;

    return (
      <Card style={containerStyle}>
        {title && <CardHeader title={title} />}
        <CardText style={style}>
          {children}
        </CardText>
      </Card>
    );
  }
}
