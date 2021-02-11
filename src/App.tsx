import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { ThemeProvider } from '@emotion/react';

import { YandexMetrica } from 'react-native-appmetrica-yandex';

import { Game, Playlists, Result } from './screens';
import { Header, NetworkContextProvider } from './components';
import { GameContext, GameScreen, IGameState } from './contexts';
import { IResult } from './utils';
import { theme } from './themes';

export default function App() {
  const [screen, setScreen] = useState<GameScreen>(GameScreen.PLAYLIST);
  const [result, setResult] = useState<IResult>({} as IResult);
  const [gameState, setGameState] = useState<IGameState>({} as IGameState);

  useEffect(() => {
    if (Platform.OS === 'android' && process.env.APP_METRIKA_API_KEY) {
      YandexMetrica.activateWithApiKey(process.env.APP_METRIKA_API_KEY);
    }
  });

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
