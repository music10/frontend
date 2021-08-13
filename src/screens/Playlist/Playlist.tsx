import React, { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { StyleProp, View, ViewStyle } from 'react-native';

import {
  BottomMenu,
  Link,
  Loader,
  MenuItem,
  PlaylistHeader,
  PlaylistTracks,
} from '../../components';
import { PlayIcon } from '../../components/icons';
import { ROUTES } from '../../routes/Routes.types';
import { ApiContext } from '../../contexts';
import { Header } from './components/Header';
import { OpenInSpotify } from './components/OpenInSpotify';

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export const Playlist: FC = () => {
  const { t } = useTranslation();
  const api = useContext(ApiContext);
  const { playlistId } = useParams<{ playlistId: string }>();
  const { data: playlist } = useQuery(['getPlaylist', playlistId], () =>
    api.getPlaylist(playlistId),
  );

  const { data: tracks } = useQuery(
    ['findTracksByPlaylistId', playlistId],
    () => api.findTracksByPlaylistId(playlistId),
  );

  return playlist && tracks ? (
    <View style={layoutStyle}>
      <Header />
      <PlaylistHeader {...playlist} />
      <PlaylistTracks tracks={tracks} />
      <BottomMenu>
        <Link
          to={`${ROUTES.Game}/${playlist.id}`}
          component={MenuItem}
          primary
          icon={PlayIcon}
          text={t('Play')}
        />
        <OpenInSpotify id={playlist.id} />
      </BottomMenu>
    </View>
  ) : (
    <Loader />
  );
};
