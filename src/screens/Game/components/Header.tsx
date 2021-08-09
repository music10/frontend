import React, { FC, useCallback, useContext, useEffect } from 'react';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { InteractionState, Platform } from 'react-native';
import usePageVisibility from '../../../utils/usePageVisibility';

import { GameContext, MusicContext } from '../../../contexts';
import { PauseIcon, PlayIcon } from '../../../components/icons';
import { Button } from '../../../components';

const HeaderLayout = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 64px;
`;

export const Header: FC = () => {
  const { isPause, setPause } = useContext(GameContext);
  const { play, pause, allowPlay } = useContext(MusicContext);
  const theme = useTheme();

  const playFunc = useCallback(() => {
    if (allowPlay) {
      play();
    }
  }, [allowPlay, play]);

  const pauseFunc = useCallback(() => {
    pause();
  }, [pause]);

  const togglePause = useCallback(() => {
    setPause((state) => !state);
  }, [setPause]);

  useEffect(() => {
    isPause ? pauseFunc() : playFunc();
  }, [isPause, pauseFunc, playFunc]);

  const isVisible = usePageVisibility();
  useEffect(() => {
    !isVisible && Platform.OS === 'web' && setPause(!isVisible);
  }, [isVisible, setPause]);

  return (
    <>
      <HeaderLayout>
        <Button onPress={togglePause}>
          {({ hovered, focused }: InteractionState) =>
            isPause ? (
              <PlayIcon
                fill={
                  focused
                    ? theme.colors.main
                    : hovered
                    ? theme.colors.main80
                    : theme.colors.main50
                }
              />
            ) : (
              <PauseIcon
                fill={
                  focused
                    ? theme.colors.main
                    : hovered
                    ? theme.colors.main80
                    : theme.colors.main50
                }
              />
            )
          }
        </Button>
      </HeaderLayout>
    </>
  );
};
