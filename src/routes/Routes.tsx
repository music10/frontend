import React from 'react';
import { Route } from 'react-router';

import { Game, Playlists, Result, Search, Start } from '../screens';
import { ROUTES } from './Routes.types';

export default function Routes() {
  return (
    <>
      <Route exact path={ROUTES.Results} component={Result} />
      <Route exact path={ROUTES.Playlists} component={Playlists} />
      <Route exact path={ROUTES.Search} component={Search} />
      <Route exact path={ROUTES.Game + '/:playlistId'} component={Game} />
      <Route exact path={ROUTES.Start} component={Start} />
    </>
  );
}
