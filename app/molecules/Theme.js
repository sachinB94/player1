// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

const Layer1 = styled.div`
  width: 95%;
  height: 8px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ primaryColor }) => primaryColor};
  border-bottom: none;
`;

const Layer2 = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${({ primaryColor }) => primaryColor};
`;

const Layer3 = styled.div`
  width: 95%;
  height: 8px;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ primaryColor }) => primaryColor};
  border-top: none;
`;

export default class Theme extends Component {
  props: {
    theme: { palette: { primary1Color: string, canvasColor: string } }
  };

  render() {
    const { primary1Color, canvasColor } = this.props.theme.palette;

    return (
      <Container>
        <Layer1 color={canvasColor} primaryColor={primary1Color} />
        <Layer2 primaryColor={primary1Color} />
        <Layer3 color={canvasColor} primaryColor={primary1Color} />
      </Container>
    );
  }
}
