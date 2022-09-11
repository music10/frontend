import React, { FC, useCallback, useContext, useEffect } from 'react';
import { InteractionState, Platform } from 'react-native';
import styled from '@emotion/native';

import usePageVisibility from '../../../utils/usePageVisibility';
import { GameContext } from '../../../contexts';
import { PauseIcon, PlayIcon } from '../../../components/icons';
import { Button } from '../../../components';
import { useTheme } from '@emotion/react';
import { Coins } from '../../../components/Coins';

const HeaderStyled = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 64px;
`;

export const Header: FC = () => {
  const { isPause, setPause } = useContext(GameContext);
  const theme = useTheme();

  const togglePause = useCallback(() => {
    setPause((state) => !state);
  }, [setPause]);

  const isVisible = usePageVisibility();
  useEffect(() => {
    !isVisible && Platform.OS === 'web' && setPause(!isVisible);
  }, [isVisible, setPause]);

  return (
    <>
      <HeaderStyled>
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
        <Coins />
      </HeaderStyled>
    </>
  );
};
