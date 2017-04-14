// @flow
import type { queueStateType } from '../reducers/queue';

import {
  SET_QUEUE,
  PLAY_CURRENT,
  PLAY_FROM,
  PAUSE_QUEUE,
  NEXT_QUEUE,
  PREVIOUS_QUEUE,
  SET_VOLUME,
  CURRENT_AND_LAST_REMOVED,
  CURRENT_REMOVED
} from '../reducers/queue';

const playCurrent = () => ({ type: PLAY_CURRENT });

export const set = (list: string[]) => ({ type: SET_QUEUE, data: list });
export const playFrom = (id: string) => ({ type: PLAY_FROM, data: id });

export const pause = () => ({ type: PAUSE_QUEUE });
export const next = () => ({ type: NEXT_QUEUE });
export const previous = () => ({ type: PREVIOUS_QUEUE });
export const setVolume = (volume: number) => ({
  type: SET_VOLUME,
  data: volume
});
export const currentAndLastRemoved = () => ({ type: CURRENT_AND_LAST_REMOVED });
export const currentRemoved = (id: string) => ({
  type: CURRENT_REMOVED,
  data: id
});

export const play = () =>
  (dispatch: () => void, getState: () => { queue: queueStateType }) => {
    const { queue } = getState();

    if (queue.current) {
      dispatch(playCurrent());
    } else if (queue.list.length) {
      dispatch(playFrom(queue.list[0]));
    }
  };

export const remove = (id: string) =>
  (dispatch: () => void, getState: () => { queue: queueStateType }) => {
    const { queue } = getState();

    const queueList = [...queue.list];
    const removeIndex = queueList.findIndex(key => key === id);

    if (removeIndex !== -1) {
      queueList.splice(removeIndex, 1);
    }

    dispatch(set(queueList));
    if (queue.current === id) {
      if (removeIndex === queue.list.length - 1) {
        dispatch(currentAndLastRemoved());
      } else {
        dispatch(currentRemoved(queue.list[removeIndex + 1]));
      }
    }
  };
