import { createSelector } from 'reselect';

import { musicObjectSelector } from './music';

const queueSelector = state => state.queue;

export const currentMusicSelector = createSelector(
  [musicObjectSelector, queueSelector],
  (musicObject, { current }) => musicObject[current]
);

export const queueListSelector = createSelector(
  [musicObjectSelector, queueSelector],
  (musicObject = {}, { list = [] }) =>
    list.map(key => ({ ...musicObject[key], key }))
);
