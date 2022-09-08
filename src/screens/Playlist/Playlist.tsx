import React, { FC, useContext, useMemo } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/native';

import {
  BottomMenu,
  MenuItem,
  PlaylistHeader,
  PlaylistHeaderLoading,
  PlaylistTracks,
  PlaylistTracksLoading,
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

const Layout = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

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

  return (
    <Layout>
      <Header />
      {playlist ? <PlaylistHeader {...playlist} /> : <PlaylistHeaderLoading />}
      {playlist ? (
        <PlaylistTracks tracks={playlist.tracks} />
      ) : (
        <PlaylistTracksLoading />
      )}
      <BottomMenu>
        <MenuItem
          primary
          icon={PlayIcon}
          text={t('Play')}
          onPress={() =>
            playlist &&
            navigate(`${ROUTES.Game}/${playlist.type}/${playlist.id}`)
          }
        />
        <MenuItem
          icon={isFavoritePlaylist ? HeartBrokenIcon : HeartOutlinedIcon}
          text={isFavoritePlaylist ? 'Удалить из сохраненного' : 'Сохранить'}
          onPress={() =>
            playlist &&
            (isFavoritePlaylist && id
              ? remove(id)
              : add({
                  id: playlist.id,
                  name: playlist.name,
                  cover: playlist.cover,
                  type: playlist.type,
                }))
          }
        />
        <OpenInYaMusic url={playlist?.url} />
      </BottomMenu>
    </Layout>
  );
};
