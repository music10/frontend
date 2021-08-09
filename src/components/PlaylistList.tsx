import React, { FC } from 'react';
import { UseQueryResult } from 'react-query';
import { ScrollView } from 'react-native';

import { Components } from '../api/api.types';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import { PlaylistItem } from './PlaylistItem';

export const PlaylistList: FC<
  UseQueryResult<Components.Schemas.PlaylistDto[], Error>
> = ({ isLoading, isError, isSuccess, error, data }) => (
  <>
    {isLoading && <Loader />}
    {isError && <ErrorMessage>Ошибка: {error?.message}</ErrorMessage>}
    {isSuccess && (
      <ScrollView>
        {data?.map((playlist) => (
          <PlaylistItem key={playlist.id} {...playlist} />
        ))}
      </ScrollView>
    )}
  </>
);
