import { stat, createReadStream } from 'fs';
import mime from 'mime';
import mm from 'musicmetadata';
import Bluebird, { promisify } from 'bluebird';

import { AUDIO_FORMATS } from '../utils/constants';

const statAsync = promisify(stat);

export const isAudioFile = file => (
  statAsync(file)
  .then(stats => stats.isFile() && AUDIO_FORMATS.indexOf(mime.lookup(file)) !== -1)
  .catch(() => false)
);

export const getMetadata = file => new Bluebird((resolve, reject) => {
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
