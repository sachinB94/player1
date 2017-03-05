// @flow
export type queueStateType = {
  list: string[],
  status: string,
  current: string | null
};

type actionType = {
  type: string,
  data: any
};

export const ADD_QUEUE = 'ADD_QUEUE';
export const PLAY_CURRENT = 'PLAY_CURRENT';
export const PLAY_FROM = 'PLAY_FROM';
export const PAUSE_QUEUE = 'PAUSE_QUEUE';

const initialState = {
  list: [],
  status: 'STOPPED',
  current: null
};

export default function music(state: queueStateType = initialState, action: actionType) {
  const { type, data } = action;
  switch (type) {
    case ADD_QUEUE:
      return { ...state, list: data };
    case PLAY_CURRENT:
      return { ...state, status: 'PLAYING' };
    case PLAY_FROM:
      return { ...state, status: 'PLAYING', current: action.data };
    case PAUSE_QUEUE:
      return { ...state, status: 'PAUSED' };
    default:
      return state;
  }
}
