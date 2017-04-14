import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  flex: 1;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const ArtistAlbum = styled.div`
  font-size: 15px;
  margin-top: 5px;
`;

class MusicDetails extends React.Component {
  static defaultProps = {
    align: 'center',
    artist: []
  };

  props: {
    title: string,
    artist: string[],
    album: string,
    align: string
  };

  render() {
    const { title, artist, album, align } = this.props;
    return (
      <Container align={align}>
        <Title>{title}</Title>
        <ArtistAlbum>
          {artist.join(', ')} - {album}
        </ArtistAlbum>
      </Container>
    );
  }
}

export default MusicDetails;
