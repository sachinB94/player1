import { stat, createReadStream } from 'fs';
import mime from 'mime';
import mm from 'musicmetadata';
import Bluebird, { promisify } from 'bluebird';

import { AUDIO_FORMATS } from '../utils/constants';

const statAsync = promisify(stat);

const stringCompare = (string1, string2) => {
  if (!string1 && !string2) {
    return 0;
  }
  if (string1 === null) {
    return 1;
  }
  if (string2 === null) {
    return -1;
  }
  return string2.toLowerCase().localeCompare(string2.toLowerCase());
};

const arrayCompare = (array1, array2) => {
  if ((!array1 || !array1.length) && (!array2 || !array2.length)) {
    return 0;
  }
  if (!array1 || !array1.length) {
    return 1;
  }
  if (!array2 || !array2.length) {
    return -1;
  }
  return array1[0].toLowerCase().localeCompare(array2[0].toLowerCase());
};

const numberCompare = (number1, number2) => {
  if (!number1 && !number2) {
    return 0;
  }
  if (!number1) {
    return 1;
  }
  if (!number2) {
    return -1;
  }
  return number1 - number2;
};

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
        title: metadata.title.trim(),
        album: metadata.album.trim(),
        artist: metadata.artist.map(a => a.trim()),
        year: metadata.year ? parseInt(metadata.year.trim(), 10) : null,
        genre: metadata.genre.map(g => g.trim())
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
    if (sort.key === 'title') {
      seq = stringCompare(item1.title, item2.title);
    } else if (sort.key === 'album') {
      seq = stringCompare(item1.album, item2.album);
    } else if (sort.key === 'artist') {
      seq = arrayCompare(item1.artist, item2.artist[0]);
    } else if (sort.key === 'genre') {
      seq = arrayCompare(item1.genre, item2.genre[0]);
    } else if (sort.key === 'year') {
      seq = numberCompare(item1.year, item2.year);
    }

    return sort.type === 'asc' ? seq : -1 * seq;
  });
  return list;
};
