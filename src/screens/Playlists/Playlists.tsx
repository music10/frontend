import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { ScrollView } from 'react-native';

import styled from '@emotion/native';

import { PlaylistList, Search } from '../../components';
import { ApiContext } from '../../contexts';
import { IPlaylist } from '../../interfaces';

const PlaylistsLayout = styled.View`
  display: flex;
  flex-direction: column;
  padding: 80px 0 16px;
  justify-content: space-between;
  height: 100%;
`;

export const Playlists: React.FC = () => {
  const api = useContext(ApiContext);
  const request = useQuery<IPlaylist[], Error>(
    'getCherryPickPlaylists',
    api.getCherryPickPlaylists,
  );

  return (
    <PlaylistsLayout>
      <ScrollView>
        <Search />
        <PlaylistList {...request} />
      </ScrollView>
    </PlaylistsLayout>
  );
};
