import { createSelector } from 'reselect';

const musicSelector = state => state.music;

export const musicListSelector = createSelector(
  musicSelector,
  ({ list }) => list
);
