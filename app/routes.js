// @flow
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { App, Library, Queue } from './pages';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/library" />
    <Route path="/library" component={Library} />
    <Route path="/queue" component={Queue} />
  </Route>
);
