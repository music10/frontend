import React, { useContext } from 'react';
import { useQuery } from 'react-query';

import styled from '@emotion/native';

import { Link, Search, PlaylistList } from '../../components';
import { ROUTES } from '../../routes/Routes.types';
import { ApiContext } from '../../contexts';
import { IPlaylist } from '../../interfaces';

const PlaylistsLayout = styled.View`
  display: flex;
  flex-direction: column;
  padding: 80px 0 16px;
  justify-content: space-between;
  height: 100%;
`;

const ListLayout = styled.ScrollView`
  margin-top: 32px;
`;

export const Playlists: React.FC = () => {
  const api = useContext(ApiContext);
  const request = useQuery<IPlaylist[], Error>(
    'getCherryPickPlaylists',
    api.getCherryPickPlaylists,
  );

  return (
    <PlaylistsLayout>
      <Link to={ROUTES.Search} component={Search} />
      <ListLayout>
        <PlaylistList {...request} />
      </ListLayout>
    </PlaylistsLayout>
  );
};
