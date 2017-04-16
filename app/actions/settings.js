// @flow
import { CHANGE_THEME } from '../reducers/settings';

export const changeTheme = (theme: string) => ({
  type: CHANGE_THEME,
  data: theme
});
