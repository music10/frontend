import React from 'react';
import { act, fireEvent, render } from '@testing-library/react-native';
import {
  Api,
  WS,
  GameContext,
  GameScreen,
  PLAYLISTS_MOCK,
  NetworkContextProvider,
} from '@music10/ui-common';

import { Playlists } from './Playlists';

describe('Playlists', () => {
  const api = new Api();
  const ws = new WS();

  beforeEach(async () => {
    jest
      .spyOn(api, 'getPlaylists')
      .mockImplementation(async () => PLAYLISTS_MOCK);
    jest.spyOn(ws, 'setPlaylist');
  });

  it('Should render', async () => {
    act(async () => {
      const screen = render(
        <NetworkContextProvider api={api} ws={ws}>
          <Playlists />
        </NetworkContextProvider>,
      );

      expect(api.getPlaylists).toHaveBeenCalled();
      expect(screen.getAllByRole('button')).toHaveLength(17);
      expect(screen.getAllByRole('button')[0]).toContain('Русский рэп');
    });
  });

  it('Should select playlist', async () => {
    const setScreen = jest.fn();
    const setResult = jest.fn();
    const setGameState = jest.fn();
    act(async () => {
      const screen = render(
        <NetworkContextProvider api={api} ws={ws}>
          <GameContext.Provider
            value={{
              screen: GameScreen.PLAYLIST,
              setScreen,
              result: { progress: [], isEnd: false },
              setResult,
              gameState: { isSelectTrack: false, playlistName: '' },
              setGameState,
            }}
          >
            <Playlists />
          </GameContext.Provider>
        </NetworkContextProvider>,
      );

      await fireEvent.press(screen.getAllByRole('button')[0]);
      expect(setScreen).toHaveBeenCalled();
      expect(setScreen).toBeCalledTimes(1);
      expect(setScreen).toBeCalledWith(GameScreen.GAME);
      expect(ws.setPlaylist).toBeCalledTimes(1);
      expect(ws.setPlaylist).toBeCalledWith(PLAYLISTS_MOCK[0].id);
    });
  });
});
