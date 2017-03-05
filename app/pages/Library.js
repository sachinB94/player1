// @flow
import React, { Component } from 'react';

import { MusicUploader, MusicListing } from '../organisms';

export default class Library extends Component {
  props: {
    children: HTMLElement
  };

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <MusicUploader />
        <MusicListing />
      </div>
    );
  }
}
