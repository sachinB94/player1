import { stat, createReadStream } from 'fs';
import mime from 'mime';
import mm from 'musicmetadata';
import Bluebird, { promisify, filter } from 'bluebird';
import storage from 'electron-json-storage';

import { initialState as musicInitialState } from '../reducers/music';
import { initialState as queueInitialState } from '../reducers/queue';
import { initialState as settingsInitialState } from '../reducers/settings';

import { AUDIO_FORMATS } from '../utils/constants';

const statAsync = promisify(stat);

const getFileName = file => file.substring(file.lastIndexOf('/') + 1, file.lastIndexOf('.'));

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
        title: metadata.title || getFileName(file),
        album: metadata.album,
        artist: metadata.artist,
        year: metadata.year ? parseInt(metadata.year.trim(), 10) : null,
        genre: metadata.genre.filter(g => g && g !== 'genre')
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

export const getInitialState = () =>
  new Bluebird((resolve, reject) => {
    storage.get('music_state', (error, data = {}) => {
      if (error) {
        return reject(error);
      }

      const initialState = {
        ...data,
        music: data.music || musicInitialState,
        queue: { ...(data.queue || queueInitialState), status: 'STOPPED' },
        settings: data.settings || settingsInitialState
      };

      const musicListByFile = {};
      Object.keys(initialState.music.list).forEach(key => {
        musicListByFile[
          initialState.music.list[key].file
        ] = initialState.music.list[key];
      });

      filter(Object.keys(musicListByFile), isAudioFile)
        .then(files => {
          const musicList = {};

          files.forEach(file => {
            musicList[musicListByFile[file].key] = musicListByFile[file];
          });

          const queueList = initialState.queue.list.filter(
            key => !!musicList[key]
          );

          initialState.music.list = musicList;
          initialState.queue.list = queueList;

          if (
            initialState.queue.current &&
            queueList.indexOf(initialState.queue.current) === -1
          ) {
            initialState.queue.current = null;
          }

          return resolve(initialState);
        })
        .catch(reject);
    });
  });
