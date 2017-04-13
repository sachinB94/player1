// @flow
import React, { Component } from 'react';

import { MusicUploader, MusicListing } from '../organisms';

export default class Library extends Component {
  render() {
    return (
      <div>
        <MusicUploader />
        <MusicListing />
      </div>
    );
  }
}
