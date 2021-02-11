import React from 'react';
import { Text } from 'react-native';
import { act, fireEvent, render } from '@testing-library/react-native';
import {
  GameContext,
  GameScreen,
  WsContext,
  WS,
  PROGRESS_MOCK,
  WS_ANSWER_NEXT_MOCK,
} from '@music10/ui-common';

import { Tracks } from './Tracks';

describe('Tracks', () => {
  const ws = new WS();
  const socket = {} as WebSocket;
  const setScreen = jest.fn();
  const setResult = jest.fn();
  const setGameState = jest.fn();
  it('Should render', async () => {
    const screen = render(
      <WsContext.Provider value={ws}>
        <GameContext.Provider
          value={{
            screen: GameScreen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS_MOCK, isEnd: true },
            setResult,
            gameState: { isSelectTrack: false, playlistName: '' },
            setGameState,
          }}
        >
          <Tracks tracks={WS_ANSWER_NEXT_MOCK.tracks} />
        </GameContext.Provider>
      </WsContext.Provider>,
    );
    expect(screen.getAllByRole('button')).toHaveLength(4);
    expect(
      screen.getAllByRole('button')[0].findAllByType(Text)[0].props,
    ).toMatchObject({ children: 'Вокруг шум' });
    expect(
      screen.getAllByRole('button')[0].findAllByType(Text)[1].props,
    ).toMatchObject({
      children: 'Каста',
    });
  });

  it('Should select', async () => {
    jest.spyOn(ws, 'choose').mockImplementation(
      async () =>
        (({
          ...socket,
          on: jest.fn(),
        } as unknown) as SocketIOClient.Socket),
    );

    const screen = render(
      <WsContext.Provider value={ws}>
        <GameContext.Provider
          value={{
            screen: GameScreen.PLAYLIST,
            setScreen,
            result: { progress: PROGRESS_MOCK, isEnd: true },
            setResult,
            gameState: { isSelectTrack: false, playlistName: '' },
            setGameState,
          }}
        >
          <Tracks tracks={WS_ANSWER_NEXT_MOCK.tracks} />
        </GameContext.Provider>
      </WsContext.Provider>,
    );

    expect(screen.getAllByRole('button')).toHaveLength(4);
    await act(async () => {
      await fireEvent.press(screen.getAllByRole('button')[0]);
    });
    expect(ws.choose).toHaveBeenCalledTimes(1);
    expect(ws.choose).toHaveBeenCalledWith(WS_ANSWER_NEXT_MOCK.tracks[0].id);
  });
});
