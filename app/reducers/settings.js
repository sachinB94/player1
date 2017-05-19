// @flow
export type settingsStateType = {
  theme: string
};

type actionType = {
  type: string,
  data: any
};

export const CHANGE_THEME = 'CHANGE_THEME';
export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';

export const initialState = {
  theme: 'cyanOnBlueGrey',
  snackbar: { open: false, message: '' }
};

export default function settings(
  state: settingsStateType = initialState,
  action: actionType
) {
  const { type, data } = action;
  switch (type) {
    case CHANGE_THEME:
      return { ...state, theme: data };
    case SHOW_SNACKBAR:
      return { ...state, snackbar: { open: true, message: data } };
    case HIDE_SNACKBAR:
      return { ...state, snackbar: { open: false, message: '' } };
    default:
      return state;
  }
}
