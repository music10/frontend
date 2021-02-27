import React from 'react';

import { Route, Switch } from 'react-router';
import { Playlists, Search, Start } from './screens';

export enum ROUTES {
  Start = '/',
  Playlists = '/playlists',
  Search = '/search',
  Game = '/game',
}

export default function Routes() {
  return (
    <Switch>
      <Route path={ROUTES.Playlists} component={Playlists} />
      <Route path={ROUTES.Search} component={Search} />
      <Route path={ROUTES.Start} component={Start} />
    </Switch>
  );
}
