import React, { useCallback, useContext, useMemo } from 'react';
import { Text } from 'react-native';
import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Button, ButtonText, Result as ResultDiagram } from '../../components';
import { Progress } from '../Game/Progress/Progress';
import { GameContext, GameScreen, WsContext } from '../../contexts';
import { ResultLayout } from './ResultLayout';
import { ShareButton } from './ShareButton';

export const Result: React.FC = () => {
  const { result, setScreen, setResult, gameState } = useContext(GameContext);
  const ws = useContext(WsContext);
  const theme = useTheme();

  const replay = useCallback(async () => {
    setResult({ isEnd: false, progress: [] });
    setScreen(GameScreen.PLAYLIST);
    await ws.reconnect();
  }, [setResult, setScreen, ws]);

  const guess = useMemo(() => result.progress.filter((r) => r).length, [
    result.progress,
  ]);
  const all = useMemo(() => result.progress.length, [result.progress.length]);

  return (
    <ResultLayout>
      <Text
        style={css`
          font-size: 48px;
          color: ${theme.colors.main};
          text-align: center;
        `}
      >
        {gameState.playlistName}
      </Text>
      <Text
        style={css`
          font-size: 48px;
          color: ${theme.colors.main};
        `}
      >
        Вы угадали
      </Text>
      <ResultDiagram guess={guess} all={all} />
      <Progress />

      <ShareButton guess={guess} all={all} />
      <Button onPress={replay} primary accessibilityRole="button">
        <ButtonText>Играть снова</ButtonText>
      </Button>
    </ResultLayout>
  );
};
