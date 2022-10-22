import React, { FC, useCallback, useEffect } from 'react';
import { InteractionState, Platform } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import usePageVisibility from '../../../utils/usePageVisibility';
import { PauseIcon, PlayIcon } from '../../../components/icons';
import { Button } from '../../../components';
import { Coins } from '../../../components/Coins';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setGameState } from '../../../actions';

const HeaderStyled = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

export const Header: FC = () => {
  const theme = useTheme();

  const dispatch = useAppDispatch();
  const { state } = useAppSelector((state) => state.game);

  const togglePause = useCallback(() => {
    state === 'game'
      ? dispatch(setGameState('pause'))
      : dispatch(setGameState('game'));
  }, [state]);

  const isVisible = usePageVisibility();
  useEffect(() => {
    !isVisible &&
      Platform.OS === 'web' &&
      dispatch(setGameState(isVisible ? 'game' : 'pause'));
  }, [isVisible]);

  return (
    <>
      <HeaderStyled>
        <Button onPress={togglePause}>
          {({ hovered, focused }: InteractionState) =>
            state === 'game' ? (
              <PauseIcon
                fill={
                  focused
                    ? theme.colors.main
                    : hovered
                    ? theme.colors.main80
                    : theme.colors.main50
                }
              />
            ) : (
              <PlayIcon
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
