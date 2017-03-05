// @flow
import glob from 'glob';
import path from 'path';
import { promisify, filter, map } from 'bluebird';
import uuid from 'node-uuid';

import type { musicListType } from '../reducers/music';

import {
  DIRECTORY_SELECT_START,
  DIRECTORY_SELECT_SUCCESS,
  DIRECTORY_SELECT_FAIL,
} from '../reducers/music';

import { isAudioFile, getMetadata } from '../utils/helpers';

const globAsync = promisify(glob);

export const directorySelect = (directory: string) => (dispatch: () => void) => {
  dispatch(directorySelectStart());

  globAsync(path.join(directory, '**'))
    .then(files => filter(files, isAudioFile))
    .then(files => map(files, getMetadata))
    .then((list) => {
      let listObject = {};
      list.forEach((item) => {
        listObject = { ...listObject, [uuid.v4()]: item };
      });
      return dispatch(directorySelectSuccess(listObject));
    })
    .catch((err) => {
      // TODO: Do something about the error
      console.log('err', err);
      dispatch(directorySelectFail());
    });
};

export const directorySelectStart = () => ({ type: DIRECTORY_SELECT_START });
export const directorySelectSuccess = (list: musicListType) => (
  { type: DIRECTORY_SELECT_SUCCESS, data: list }
);
export const directorySelectFail = () => ({ type: DIRECTORY_SELECT_FAIL });
