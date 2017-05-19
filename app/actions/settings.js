// @flow
import {
  CHANGE_THEME,
  SHOW_SNACKBAR,
  HIDE_SNACKBAR
} from '../reducers/settings';

export const changeTheme = (theme: string) => ({
  type: CHANGE_THEME,
  data: theme
});

export const showSnackbar = (message: string) => ({
  type: SHOW_SNACKBAR,
  data: message
});

export const hideSnackbar = () => ({ type: HIDE_SNACKBAR });
