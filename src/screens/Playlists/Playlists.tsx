import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/native';

import { FavoritePlaylistList, PlaylistList, Search } from '../../components';
import { ApiContext } from '../../contexts';
import { PlaylistDto } from '../../api/api.types';

const Layout = styled.View`
  display: flex;
  flex-direction: column;
  padding: 80px 0 16px;
  justify-content: space-between;
  height: 100%;
`;

const ScrollViewStyled = styled.ScrollView`
  height: 80%;
`;

export const Playlists: React.FC = () => {
  const api = useContext(ApiContext);
  const request = useQuery<PlaylistDto[], Error>(
    'getCherryPickPlaylists',
    api.getCherryPickPlaylists,
  );

  return (
    <Layout>
      <Search />
      <ScrollViewStyled>
        <PlaylistList withRandom request={request} />
        <FavoritePlaylistList />
      </ScrollViewStyled>
    </Layout>
  );
};
