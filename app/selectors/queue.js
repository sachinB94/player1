import { createSelector } from 'reselect';

import { sortMusicList } from '../utils/helpers';

import { musicObjectSelector } from './music';

const queueSelector = state => state.queue;

export const currentMusicSelector = createSelector(
  [musicObjectSelector, queueSelector],
  (musicObject, { current }) => musicObject[current]
);

export const queueListSelector = createSelector(
  [musicObjectSelector, queueSelector],
  (musicObject = {}, { sortBy, list = [] }) =>
    sortMusicList(list.map(key => ({ ...musicObject[key], key })), sortBy)
);
