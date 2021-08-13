import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { StyleProp, View, ViewStyle } from 'react-native';

import { PlaylistList, Search } from '../../components';
import { ApiContext } from '../../contexts';
import { PlaylistDto } from '../../api/api.types';

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 80,
  paddingHorizontal: 0,
  paddingBottom: 16,
  justifyContent: 'space-between',
  height: '100%',
};

export const Playlists: React.FC = () => {
  const api = useContext(ApiContext);
  const request = useQuery<PlaylistDto[], Error>(
    'getCherryPickPlaylists',
    api.getCherryPickPlaylists,
  );

  return (
    <View style={layoutStyle}>
      <Search />
      <PlaylistList {...request} />
    </View>
  );
};
