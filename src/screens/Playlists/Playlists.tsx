import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import styled from '@emotion/native';

import {
  BackHeader,
  FavoritePlaylistList,
  PlaylistList,
  Search,
} from '../../components';
import { ApiContext } from '../../contexts';
import { PlaylistDto } from '../../api/api.types';
import { ROUTES } from '../../routes/Routes.types';
import { useNavigate } from 'react-router';
import { Coins } from '../../components/Coins';

const Layout = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0 0 16px;
  justify-content: space-between;
  height: 100%;
`;

const ScrollViewStyled = styled.ScrollView`
  height: 80%;
`;

export const Playlists: React.FC = () => {
  const navigate = useNavigate();
  const api = useContext(ApiContext);
  const request = useQuery<PlaylistDto[], Error>(
    'getCherryPickPlaylists',
    api.getCherryPickPlaylists,
  );

  return (
    <Layout>
      <BackHeader onPress={() => navigate(ROUTES.Start)} text="меню">
        <Coins />
      </BackHeader>
      <Search />
      <ScrollViewStyled>
        <PlaylistList withRandom request={request} />
        <FavoritePlaylistList />
      </ScrollViewStyled>
    </Layout>
  );
};
