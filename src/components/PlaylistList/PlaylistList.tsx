import React, { FC, useContext } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { ScrollView } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import { PlaylistDto } from '../../api/api.types';
import { ApiContext } from '../../contexts';
import { Loader } from '../Loader';
import { ErrorMessage } from '../ErrorMessage';
import { PlaylistItem } from '../PlaylistItem';

type Props = UseQueryResult<PlaylistDto[], Error> & { withRandom?: boolean };

export const PlaylistList: FC<Props> = ({
  isLoading,
  isError,
  error,
  data,
  withRandom,
}) => {
  const api = useContext(ApiContext);
  const { isLoading: randomIsLoading, data: randomPlaylist } = useQuery<
    PlaylistDto,
    Error
  >('getRandomPlaylist', api.getRandomPlaylist, { enabled: withRandom });

  if (isLoading || randomIsLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage>Ошибка: {error?.message}</ErrorMessage>;
  }

  return (
    <MenuProvider>
      <ScrollView>
        {randomPlaylist ? (
          <PlaylistItem
            withoutMenu
            id={randomPlaylist.id}
            cover="https://msq.app/images/random.svg"
            name="Случайный плейлист"
          />
        ) : null}
        {data?.map((playlist) => (
          <PlaylistItem key={playlist.id} {...playlist} />
        ))}
      </ScrollView>
    </MenuProvider>
  );
};
