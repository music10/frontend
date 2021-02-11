import React, { useCallback, useContext } from 'react';
import { useQuery } from 'react-query';

import {
  Button,
  PlaylistGrid,
  Loader,
  ErrorMessage,
  ButtonText,
} from '../../components';
import { ApiContext, GameContext, GameScreen, WsContext } from '../../contexts';
import { IPlaylist } from '../../interfaces';

interface PlaylistsListProps {
  query?: string;
}

export const PlaylistsList: React.FC<PlaylistsListProps> = ({ query }) => {
  const api = useContext(ApiContext);
  const ws = useContext(WsContext);
  const { setScreen, setGameState, gameState } = useContext(GameContext);
  const { isLoading, isError, isSuccess, error, data } = useQuery<
    IPlaylist[],
    Error
  >(['loadPlaylists', query], () => api.getPlaylists(query));

  const choosePlaylist = useCallback(
    async (playlist: IPlaylist) => {
      setGameState({ ...gameState, playlistName: playlist.name });
      await ws.setPlaylist(playlist.id);
      setScreen(GameScreen.GAME);
    },
    [setScreen, ws],
  );

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage>Ошибка: {error?.message}</ErrorMessage>}
      {isSuccess && (
        <PlaylistGrid>
          {data?.map((p) => (
            <Button key={p.id} onPress={() => choosePlaylist(p)}>
              <ButtonText>{p.name}</ButtonText>
            </Button>
          ))}
        </PlaylistGrid>
      )}
    </>
  );
};
