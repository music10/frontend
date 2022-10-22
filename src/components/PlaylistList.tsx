import React, { FC, useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import { PlaylistDto, Type } from '../api/api.types';
import { ApiContext } from '../contexts';
import { ErrorMessage } from './ErrorMessage';
import { PlaylistItem } from './PlaylistItem';
import { PlaylistItemLoading } from './PlaylistItemLoading';
import { PlaceholderLoaderList } from './PlaceholderLoaderList';

interface Props {
  request?: UseQueryResult<PlaylistDto[], Error>;
  items?: PlaylistDto[];
  withRandom?: boolean;
}

export const PlaylistList: FC<Props> = ({ request, items, withRandom }) => {
  const api = useContext(ApiContext);
  const { data: randomPlaylist } = useQuery<PlaylistDto, Error>(
    'getRandomPlaylist',
    api.getRandomPlaylist,
    {
      enabled: withRandom,
      refetchOnWindowFocus: 'always',
    },
  );

  if (request?.isError) {
    return <ErrorMessage>Ошибка: {request?.error?.message}</ErrorMessage>;
  }

  return (
    <>
      {withRandom &&
        (randomPlaylist ? (
          <PlaylistItem
            withoutMenu
            id={randomPlaylist?.id ?? ''}
            cover="https://musiq.dergunov.net/images/random.svg"
            name="Случайный плейлист"
            type={randomPlaylist?.type ?? Type.playlist}
          />
        ) : (
          <PlaylistItemLoading />
        ))}
      {request?.isLoading && (
        <PlaceholderLoaderList number={6} component={PlaylistItemLoading} />
      )}
      {(request?.data ?? items ?? [])?.map((playlist) => (
        <PlaylistItem key={playlist.id} {...playlist} />
      ))}
    </>
  );
};
