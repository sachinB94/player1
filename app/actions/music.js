// @flow
import glob from 'glob';
import path from 'path';
import { promisify, filter, map } from 'bluebird';
import uuid from 'node-uuid';
import isEqual from 'lodash.isequal';
import pick from 'lodash.pick';
import findIndex from 'lodash.findindex';

import type { musicListType, musicStateType } from '../reducers/music';

import {
  DIRECTORY_SELECT_START,
  DIRECTORY_SELECT_SUCCESS,
  DIRECTORY_SELECT_FAIL
} from '../reducers/music';

import { isAudioFile, getMetadata } from '../utils/helpers';

const globAsync = promisify(glob);

export const directorySelectStart = () => ({ type: DIRECTORY_SELECT_START });
export const directorySelectSuccess = (list: musicListType) => ({
  type: DIRECTORY_SELECT_SUCCESS,
  data: list
});
export const directorySelectFail = () => ({ type: DIRECTORY_SELECT_FAIL });

export const directorySelect = (directory: string) =>
  (dispatch: () => void, getState: () => { music: musicStateType }) => {
    dispatch(directorySelectStart());

    const { music } = getState();

    globAsync(path.join(directory, '**'))
      .then(files => filter(files, isAudioFile))
      .then(files => map(files, getMetadata))
      .then(list => {
        let listObject = {};
        list.forEach(item => {
          const pos = findIndex(Object.keys(music.list), key =>
            isEqual(
              pick(music.list[key], ['title', 'album', 'artist']),
              pick(item, ['title', 'album', 'artist'])
            ));

          if (pos !== -1) {
            return;
          }
          const key = uuid.v4();
          listObject = { ...listObject, [key]: { ...item, key } };
        });
        return dispatch(directorySelectSuccess(listObject));
      })
      .catch(err => {
        // TODO: Do something about the error
        console.log('err', err);
        dispatch(directorySelectFail());
      });
  };
