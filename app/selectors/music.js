import { createSelector } from 'reselect';

const musicSelector = state => state.music;

export const musicObjectSelector = createSelector(
  musicSelector,
  ({ list }) => list
);

export const musicListSelector = createSelector(
  [musicObjectSelector],
  (musicObject = {}) => Object.keys(musicObject).map(key => musicObject[key])
);
