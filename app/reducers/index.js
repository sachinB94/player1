// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import music from './music';
import queue from './queue';

const rootReducer = combineReducers({
  queue,
  music,
  routing
});

export default rootReducer;
