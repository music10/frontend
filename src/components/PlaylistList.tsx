import React, { FC } from 'react';
import { UseQueryResult } from 'react-query';
import { ScrollView } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import { PlaylistDto } from '../api/api.types';
import { Loader } from './Loader';
import { ErrorMessage } from './ErrorMessage';
import { PlaylistItem } from './PlaylistItem';

export const PlaylistList: FC<UseQueryResult<PlaylistDto[], Error>> = ({
  isLoading,
  isError,
  isSuccess,
  error,
  data,
}) => (
  <>
    {isLoading && <Loader />}
    {isError && <ErrorMessage>Ошибка: {error?.message}</ErrorMessage>}
    {isSuccess && (
      <MenuProvider>
        <ScrollView>
          {data?.map((playlist) => (
            <PlaylistItem key={playlist.id} {...playlist} />
          ))}
        </ScrollView>
      </MenuProvider>
    )}
  </>
);
