import React, { FC, useContext, useMemo } from 'react';
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
import {
  HeartBrokenIcon,
  HeartOutlinedIcon,
  PlayIcon,
} from '../../components/icons';
import { ROUTES } from '../../routes/Routes.types';
import { ApiContext, FavoritesContext } from '../../contexts';
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
  const { isFavorite, remove, add } = useContext(FavoritesContext);

  const api = useContext(ApiContext);
  const { id, type } = useParams<{
    id: string;
    type: Type;
  }>();
  const { data: playlist } = useQuery<PlaylistDto>(
    ['getPlaylist', type, id],
    () => api.getPlaylist(type ?? Type.playlist, id ?? ''),
  );

  const isFavoritePlaylist = useMemo(
    () => isFavorite(playlist?.id ?? ''),
    [playlist?.id, isFavorite],
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
        <MenuItem
          icon={isFavoritePlaylist ? HeartBrokenIcon : HeartOutlinedIcon}
          text={isFavoritePlaylist ? 'Удалить из сохраненного' : 'Сохранить'}
          onPress={() =>
            isFavoritePlaylist && id
              ? remove(id)
              : add({
                  id: playlist.id,
                  name: playlist.name,
                  cover: playlist.cover,
                  type: playlist.type,
                })
          }
        />
        <OpenInYaMusic url={playlist.url} />
      </BottomMenu>
    </View>
  ) : (
    <Loader />
  );
};
