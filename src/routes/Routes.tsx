import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { Game, Playlist, Playlists, Result, Search, Start } from '../screens';
import { AmplitudeContext } from '../contexts';
import { ROUTES } from './Routes.types';

export default () => {
  const amp = useContext(AmplitudeContext);

  useEffect(() => {
    amp.logEvent('App Started');
  }, [amp]);

  return (
    <Routes>
      <Route path={ROUTES.Results} element={<Result />} />
      <Route path={ROUTES.Playlists} element={<Playlists />} />
      <Route path={ROUTES.Search} element={<Search />} />
      <Route path={`${ROUTES.Game}/:type/:id`} element={<Game />} />
      <Route path={`${ROUTES.Playlist}/:type/:id`} element={<Playlist />} />
      <Route path={ROUTES.Start} element={<Start />} />
      <Route path="/" element={<Navigate to={ROUTES.Start} />} />
    </Routes>
  );
};
