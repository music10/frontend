import React, { FC, useContext } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { StyleProp, View, ViewStyle } from 'react-native';

import {
  BottomMenu,
  Loader,
  MenuItem,
  PlaylistHeader,
  PlaylistTracks,
} from '../../components';
import { PlayIcon } from '../../components/icons';
import { ROUTES } from '../../routes/Routes.types';
import { ApiContext } from '../../contexts';
import { PlaylistDto, Type } from '../../api/api.types';
import { Header } from './components/Header';
import { OpenInYaMusic } from './components/OpenInYaMusic';

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
};

export const Playlist: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const api = useContext(ApiContext);
  const { id, type } = useParams<{
    id: string;
    type: Type;
  }>();
  const { data: playlist } = useQuery<PlaylistDto>(
    ['getPlaylist', type, id],
    () => api.getPlaylist(type ?? Type.playlist, id ?? ''),
  );

  return playlist ? (
    <View style={layoutStyle}>
      <Header />
      <PlaylistHeader {...playlist} />
      <PlaylistTracks tracks={playlist.tracks} />
      <BottomMenu>
        <MenuItem
          primary
          icon={PlayIcon}
          text={t('Play')}
          onPress={() =>
            navigate(`${ROUTES.Game}/${playlist.type}/${playlist.id}`)
          }
        />
        <OpenInYaMusic url={playlist.url} />
      </BottomMenu>
    </View>
  ) : (
    <Loader />
  );
};
