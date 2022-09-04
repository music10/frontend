import React, { FC, useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

import { PlaylistDto, Type } from '../api/api.types';
import { ApiContext } from '../contexts';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import { PlaylistItem } from './PlaylistItem';

interface Props {
  request?: UseQueryResult<PlaylistDto[], Error>;
  items?: PlaylistDto[];
  withRandom?: boolean;
}

export const PlaylistList: FC<Props> = ({ request, items, withRandom }) => {
  const api = useContext(ApiContext);
  const { isLoading: randomIsLoading, data: randomPlaylist } = useQuery<
    PlaylistDto,
    Error
  >('getRandomPlaylist', api.getRandomPlaylist, {
    enabled: withRandom,
    refetchOnWindowFocus: 'always',
  });

  if (request?.isError) {
    return <ErrorMessage>Ошибка: {request?.error?.message}</ErrorMessage>;
  }

  return (
    <>
      {(request?.isLoading || (withRandom && randomIsLoading)) && <Loader />}
      {withRandom && randomPlaylist && (
        <PlaylistItem
          withoutMenu
          id={randomPlaylist?.id ?? ''}
          cover="https://musiq.dergunov.net/images/random.svg"
          name="Случайный плейлист"
          type={randomPlaylist?.type ?? Type.playlist}
        />
      )}

      {(request?.data ?? items ?? [])?.map((playlist) => (
        <PlaylistItem key={playlist.id} {...playlist} />
      ))}
    </>
  );
};
