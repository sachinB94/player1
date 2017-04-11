// @flow
export type queueStateType = {
  list: string[],
  status: string,
  current: string | null,
  volume: number
};

type actionType = {
  type: string,
  data: any
};

export const ADD_QUEUE = 'ADD_QUEUE';
export const PLAY_CURRENT = 'PLAY_CURRENT';
export const PLAY_FROM = 'PLAY_FROM';
export const PAUSE_QUEUE = 'PAUSE_QUEUE';
export const NEXT_QUEUE = 'NEXT_QUEUE';
export const PREVIOUS_QUEUE = 'PREVIOUS_QUEUE';
export const SET_VOLUME = 'SET_VOLUME';

const initialState = {
  list: [],
  status: 'STOPPED',
  current: null,
  volume: 100
};

export default function music(
  state: queueStateType = initialState,
  action: actionType
) {
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
    case NEXT_QUEUE: {
      const currentIndex = state.list.indexOf(state.current);
      if (currentIndex === state.list.length) {
        return state;
      }
      return { ...state, current: state.list[currentIndex + 1] };
    }
    case PREVIOUS_QUEUE: {
      const currentIndex = state.list.indexOf(state.current);
      if (currentIndex === 0) {
        return state;
      }
      return { ...state, current: state.list[currentIndex - 1] };
    }
    case SET_VOLUME:
      return { ...state, volume: action.data };
    default:
      return state;
  }
}
