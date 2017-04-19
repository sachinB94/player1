import { stat, createReadStream } from 'fs';
import mime from 'mime';
import mm from 'musicmetadata';
import Bluebird, { promisify } from 'bluebird';

import { AUDIO_FORMATS } from '../utils/constants';

const statAsync = promisify(stat);

export const isAudioFile = file =>
  statAsync(file)
    .then(
      stats => stats.isFile() && AUDIO_FORMATS.indexOf(mime.lookup(file)) !== -1
    )
    .catch(() => false);

export const getMetadata = file =>
  new Bluebird((resolve, reject) => {
    const readableStream = createReadStream(file);
    mm(readableStream, { duration: true }, (err, metadata) => {
      readableStream.close();
      if (err) {
        return reject(err);
      }
      resolve({
        file,
        title: metadata.title,
        album: metadata.album,
        artist: metadata.artist,
        year: metadata.year,
        genre: metadata.genre
      });
    });
  });

export const getFormattedTime = milliseconds => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = (totalSeconds - minutes * 60).toString();
  return `${minutes}:${seconds.length === 1 ? '0' : ''}${seconds}`;
};

export const getArtistAndAlbum = ({ artist, album }) => {
  if (artist && artist.length && album) {
    return `${artist.join(', ')} - ${album}`;
  }
  if (artist && artist.length) {
    return artist.join(', ');
  }
  if (album) {
    return album;
  }
  return '';
};

export const sortMusicList = (list = [], sort) => {
  list.sort((item1, item2) => {
    let seq = 0;
    if (sort.key === 'title' && item1.title && item2.title) {
      seq = item1.title.localeCompare(item2.title);
    } else if (sort.key === 'album' && item1.album && item2.album) {
      seq = item1.album.localeCompare(item2.album);
    } else if (
      sort.key === 'artist' &&
      item1.artist &&
      item1.artist.length &&
      item2.artist &&
      item2.artist.length
    ) {
      seq = item1.artist[0].localeCompare(item2.artist[0]);
    } else if (sort.key === 'year' && item1.year && item2.year) {
      seq = item1.year.localeCompare(item2.year);
    } else if (
      sort.key === 'genre' &&
      item1.genre &&
      item1.genre.length &&
      item2.genre &&
      item2.genre.length
    ) {
      seq = item1.genre.localeCompare(item2.genre);
    }

    return sort.type === 'asc' ? seq : -1 * seq;
  });
  return list;
};
