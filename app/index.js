import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import storage from 'electron-json-storage';

import routes from './routes';
import configureStore from './store/configureStore';
import './app.global.css';

import { getInitialState } from './utils/helpers';

injectTapEventPlugin();

getInitialState()
  .then(initialState => {
    const store = configureStore(initialState);
    const history = syncHistoryWithStore(hashHistory, store);

    store.subscribe(() => {
      const { music, queue, settings } = store.getState();
      storage.set(
        'state',
        { music, queue, settings },
        err => err && console.log(err)
      );
    });

    render(
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>,
      document.getElementById('root')
    );

    return true;
  })
  .catch(err => console.log(err));
