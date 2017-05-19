import { createSelector } from 'reselect';

import { sortMusicList } from '../utils/helpers';

const musicSelector = state => state.music;

export const musicObjectSelector = createSelector(
  musicSelector,
  ({ list }) => list
);

export const musicListSelector = createSelector(
  [musicObjectSelector, musicSelector],
  (musicObject = {}, { sortBy }) =>
    sortMusicList(Object.keys(musicObject).map(key => musicObject[key]), sortBy)
);
