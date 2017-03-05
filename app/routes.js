// @flow
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { App, Library } from './pages';
// import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/library" />
    <Route path="/library" component={Library} />
    {/*<Route path="/counter" component={CounterPage} />*/}
  </Route>
);
