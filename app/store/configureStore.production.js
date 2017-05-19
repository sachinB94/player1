// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import type { musicStateType } from '../reducers/music';
import type { queueStateType } from '../reducers/queue';
import type { settingsStateType } from '../reducers/settings';

const router = routerMiddleware(hashHistory);

const enhancer = applyMiddleware(thunk, router);

export default function configureStore(
  initialState?: {
    music: musicStateType,
    queue: queueStateType,
    settings: settingsStateType
  }
) {
  return createStore(rootReducer, initialState, enhancer); // eslint-disable-line
}
