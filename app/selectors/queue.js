import { createSelector } from 'reselect';

import { musicListSelector } from './music';

const queueSelector = state => state.queue;

export const currentMusicSelector = createSelector(
  [musicListSelector, queueSelector],
  (list, { current }) => list[current]
);
