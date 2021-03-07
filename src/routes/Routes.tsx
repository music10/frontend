import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { Game, Playlists, Result, Search, Start } from '../screens';
import { ROUTES } from './Routes.types';

export default () => (
  <Switch>
    <Route exact path={ROUTES.Results} component={Result} />
    <Route exact path={ROUTES.Playlists} component={Playlists} />
    <Route exact path={ROUTES.Search} component={Search} />
    <Route exact path={ROUTES.Game + '/:playlistId'} component={Game} />
    <Route exact path={ROUTES.Start} component={Start} />
    <Redirect to={ROUTES.Start} />
  </Switch>
);
