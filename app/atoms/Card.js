// @flow
import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default class MaterialCard extends Component {
  static defautlProps = {
    title: null,
    children: '',
  };

  props: {
    title: HTMLElement,
    children: HTMLElement
  };

  render() {
    const { title, children } = this.props;

    return (
      <Card>
        {title && <CardHeader title={title} />}
        <CardText>
          {children}
        </CardText>
      </Card>
    );
  }
}
