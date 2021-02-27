import React, { FC } from 'react';
import { UseQueryResult } from 'react-query';
import { IPlaylist } from '../interfaces';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import { PlaylistItem } from './PlaylistItem/PlaylistItem';

export const PlaylistList: FC<UseQueryResult<IPlaylist[], Error>> = ({
  isLoading,
  isError,
  isSuccess,
  error,
  data,
}) => (
  <>
    {isLoading && <Loader />}
    {isError && <ErrorMessage>Ошибка: {error?.message}</ErrorMessage>}
    {isSuccess &&
      data?.map((playlist) => <PlaylistItem key={playlist.id} {...playlist} />)}
  </>
);
