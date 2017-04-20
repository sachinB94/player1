// @flow
export type musicItemType = {
  key: string,
  file: string,
  title: string,
  album: string,
  artist: string[],
  year: number | null,
  genre: string[]
};

export type musicListType = { [key: string]: musicItemType };

export type musicStateType = {
  list: musicListType,
  loading: boolean
};

type actionType = {
  type: string,
  data: any
};

export const DIRECTORY_SELECT = 'DIRECTORY_SELECT';
export const DIRECTORY_SELECT_START = 'DIRECTORY_SELECT_START';
export const DIRECTORY_SELECT_SUCCESS = 'DIRECTORY_SELECT_SUCCESS';
export const DIRECTORY_SELECT_FAIL = 'DIRECTORY_SELECT_FAIL';

const initialState = {
  list: {},
  loading: false
};

export default function music(
  state: musicStateType = initialState,
  action: actionType
) {
  const { type, data } = action;
  switch (type) {
    case DIRECTORY_SELECT_START:
      return { ...state, loading: true };
    case DIRECTORY_SELECT_SUCCESS:
      return { ...state, loading: false, list: { ...state.list, ...data } };
    case DIRECTORY_SELECT_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
}
