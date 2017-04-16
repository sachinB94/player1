// @flow
export type settingsStateType = {
  theme: string
};

type actionType = {
  type: string,
  data: any
};

export const CHANGE_THEME = 'CHANGE_THEME';

const initialState = {
  theme: 'cyanOnLight'
};

export default function settings(
  state: settingsStateType = initialState,
  action: actionType
) {
  const { type, data } = action;
  switch (type) {
    case CHANGE_THEME:
      return { ...state, theme: data };
    default:
      return state;
  }
}
