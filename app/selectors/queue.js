import { createSelector } from 'reselect';

import { sortMusicList } from '../utils/helpers';

import { musicListSelector } from './music';

const queueSelector = state => state.queue;

export const currentMusicSelector = createSelector(
  [musicListSelector, queueSelector],
  (musicList, { current }) => musicList[current]
);

export const queueListSelector = createSelector(
  [musicListSelector, queueSelector],
  (musicList = {}, { sortBy, list = [] }) =>
    sortMusicList(list.map(key => ({ ...musicList[key], key })), sortBy)
);
