import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { GameContext, GameScreen, PROGRESS_MOCK } from '@music10/ui-common';

import { Result } from './Result';

describe('Result', () => {
  const setScreen = jest.fn();
  const setResult = jest.fn();
  const setGameState = jest.fn();

  it('Should render', async () => {
    const screen = render(
      <GameContext.Provider
        value={{
          screen: GameScreen.RESULT,
          setScreen,
          result: { progress: PROGRESS_MOCK, isEnd: true },
          setResult,
          gameState: { isSelectTrack: false, playlistName: '' },
          setGameState,
        }}
      >
        <Result />
      </GameContext.Provider>,
    );

    expect(screen.getAllByText('Вы угадали')).toBeDefined();
  });

  it('Should game again', async () => {
    const screen = render(
      <GameContext.Provider
        value={{
          screen: GameScreen.RESULT,
          setScreen,
          result: { progress: PROGRESS_MOCK, isEnd: true },
          setResult,
          gameState: { isSelectTrack: false, playlistName: '' },
          setGameState,
        }}
      >
        <Result />
      </GameContext.Provider>,
    );
    fireEvent.press(screen.getByRole('button'));

    expect(setScreen).toHaveBeenCalledTimes(1);
    expect(setScreen).toHaveBeenCalledWith(GameScreen.PLAYLIST);
  });
});
