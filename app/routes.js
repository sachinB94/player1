// @flow
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import { App, Library } from './pages';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/library" />
    <Route path="/library" component={Library} />
  </Route>
);
