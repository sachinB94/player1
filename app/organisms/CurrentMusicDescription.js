import React from 'react';

import styled from 'styled-components';

const CurrentMusic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const CurrentMusicTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const CurrentMusicArtist = styled.div`
  font-size: 15px;
  margin-top: 5px;
`;

class CurrentMusicDescription extends React.Component {
  props: {
    title: string,
    artist: string[],
    album: string
  };

  render() {
    const { title, artist, album } = this.props;
    return (
      <CurrentMusic>
        <CurrentMusicTitle>{title}</CurrentMusicTitle>
        <CurrentMusicArtist>
          {artist.join(', ')} - {album}
        </CurrentMusicArtist>
      </CurrentMusic>
    );
  }
}

export default CurrentMusicDescription;
