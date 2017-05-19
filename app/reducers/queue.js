// @flow
export type queueStateType = {
  list: string[],
  status: string,
  current: string | null,
  repeat: string | null,
  volume: number
};

type actionType = {
  type: string,
  data: any
};

export const SET_QUEUE = 'SET_QUEUE';
export const PLAY_CURRENT = 'PLAY_CURRENT';
export const PLAY_FROM = 'PLAY_FROM';
export const REMOVE_QUEUE = 'REMOVE_QUEUE';
export const PAUSE_QUEUE = 'PAUSE_QUEUE';
export const NEXT_QUEUE = 'NEXT_QUEUE';
export const PREVIOUS_QUEUE = 'PREVIOUS_QUEUE';
export const SET_VOLUME = 'SET_VOLUME';
export const CURRENT_AND_LAST_REMOVED = 'CURRENT_AND_LAST_REMOVED';
export const CURRENT_REMOVED = 'CURRENT_REMOVED';
export const SET_REPEAT = 'SET_REPEAT';
export const REMOVE_ALL = 'REMOVE_ALL';

const initialState = {
  list: [],
  status: 'STOPPED',
  current: null,
  repeat: null,
  volume: 100
};

export default function music(
  state: queueStateType = initialState,
  action: actionType
) {
  const { type, data } = action;
  switch (type) {
    case SET_QUEUE:
      return { ...state, list: data };
    case PLAY_CURRENT:
      return { ...state, status: 'PLAYING' };
    case PLAY_FROM:
      return { ...state, status: 'PLAYING', current: data };
    case PAUSE_QUEUE:
      return { ...state, status: 'PAUSED' };
    case NEXT_QUEUE: {
      // No Song is being played
      if (!state.current) {
        return state;
      }

      // If single repeat is selected, set current to current again
      if (state.repeat === 'ONE') {
        return { ...state, current: state.current };
      }

      const currentIndex = state.list.indexOf(state.current);

      // If end of queue is reached
      if (currentIndex === state.list.length - 1) {
        // If all repeat is selected, set current to first item
        if (state.repeat === 'ALL') {
          return { ...state, current: state.list[0] };
        }

        // Queue ended
        return { ...state, status: 'STOPPED', current: null };
      }

      // If everything is alright, play the next song
      return { ...state, current: state.list[currentIndex + 1] };
    }
    case PREVIOUS_QUEUE: {
      if (!state.current) {
        return state;
      }
      if (state.repeat === 'ONE') {
        return { ...state, current: state.current };
      }
      const currentIndex = state.list.indexOf(state.current);
      if (currentIndex === 0) {
        if (state.repeat === 'ALL') {
          return { ...state, current: state.list[state.list.length - 1] };
        }
        return { ...state, status: 'STOPPED', current: null };
      }
      return { ...state, current: state.list[currentIndex - 1] };
    }
    case SET_VOLUME:
      return { ...state, volume: data };
    case CURRENT_AND_LAST_REMOVED:
      return { ...state, status: 'PAUSED', current: null };
    case CURRENT_REMOVED:
      return { ...state, current: data };
    case SET_REPEAT:
      return { ...state, repeat: data };
    case REMOVE_ALL:
      return { ...state, list: [], status: 'STOPPED', current: null };
    default:
      return state;
  }
}
