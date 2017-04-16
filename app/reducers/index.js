// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import settings from './settings';
import music from './music';
import queue from './queue';

const rootReducer = combineReducers({
  routing,
  settings,
  music,
  queue
});

export default rootReducer;
