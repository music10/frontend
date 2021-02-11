import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';

import { Game, Playlists, Result } from './screens';
import { Header, NetworkContextProvider } from './components';
import { GameContext, GameScreen, IGameState } from './contexts';
import { IResult } from './utils';
import { theme } from './themes';

export default function App() {
  const [screen, setScreen] = useState<GameScreen>(GameScreen.PLAYLIST);
  const [result, setResult] = useState<IResult>({} as IResult);
  const [gameState, setGameState] = useState<IGameState>({} as IGameState);

  return (
    <ThemeProvider theme={theme}>
      <NetworkContextProvider>
        <GameContext.Provider
          value={{
            screen,
            setScreen,
            result,
            setResult,
            gameState,
            setGameState,
          }}
        >
          <Header />
          {screen === GameScreen.PLAYLIST && <Playlists />}
          {screen === GameScreen.GAME && <Game />}
          {screen === GameScreen.RESULT && <Result />}
        </GameContext.Provider>
      </NetworkContextProvider>
    </ThemeProvider>
  );
}
