// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MusicUploader, MusicListing } from '../organisms';

class Library extends Component {
  render() {
    return (
      <div>
        <MusicUploader />
        <MusicListing />
      </div>
    );
  }
}

const mapStateToProps = (state: { settings: { theme: string } }) => ({
  theme: state.settings.theme
});

export default connect(mapStateToProps)(Library);
