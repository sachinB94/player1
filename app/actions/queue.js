// @flow
import type { queueStateType } from '../reducers/queue';

import {
  ADD_QUEUE,
  PLAY_CURRENT,
  PLAY_FROM,
  PAUSE_QUEUE
} from '../reducers/queue';

export const add = (list: string[]) => ({ type: ADD_QUEUE, data: list });

export const play = () => (dispatch: () => void, getState: () => { queue: queueStateType }) => {
  const { queue } = getState();

  if (queue.current) {
    dispatch(playCurrent());
  } else if (queue.list.length) {
    dispatch(playFrom(queue.list[0]));
  }
};

const playCurrent = () => ({ type: PLAY_CURRENT });
const playFrom = id => ({ type: PLAY_FROM, data: id });

export const pause = () => ({ type: PAUSE_QUEUE });
