import React, { FC, useCallback, useContext, useEffect } from 'react';
import {
  InteractionState,
  Platform,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

import usePageVisibility from '../../../utils/usePageVisibility';
import { GameContext, MusicContext } from '../../../contexts';
import { PauseIcon, PlayIcon } from '../../../components/icons';
import { Button } from '../../../components';
import { theme } from '../../../themes';

const headerStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 0,
  paddingHorizontal: 16,
  height: 64,
};

export const Header: FC = () => {
  const { isPause, setPause } = useContext(GameContext);
  const { play, pause, allowPlay } = useContext(MusicContext);

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
      <View style={headerStyle}>
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
      </View>
    </>
  );
};
