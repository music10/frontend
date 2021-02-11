import React, { useCallback, useContext } from 'react';
import { Text, View } from 'react-native';
import { css } from '@emotion/native';
import { GameContext, GameScreen, WsContext } from '../../contexts';
import { HeaderLogo, StyledHeader } from './Header.styled';

export const Header: React.FC = (props) => {
  const { setScreen, setResult } = useContext(GameContext);
  const ws = useContext(WsContext);

  const goToStart = useCallback(async () => {
    setResult({ isEnd: false, progress: [] });
    setScreen(GameScreen.PLAYLIST);
    await ws.reconnect();
  }, [setResult, setScreen, ws]);

  return (
    <StyledHeader {...props}>
      <HeaderLogo onPress={goToStart}>
        <View
          style={css`
            align-items: flex-start;
            flex-direction: row;
            display: flex;
            justify-content: flex-start;
          `}
        >
          <Text
            style={css`
              font-size: 24px;
              font-weight: 500;
            `}
          >
            Musiq{' '}
          </Text>
          <Text
            style={css`
              font-size: 12px;
              position: relative;
              top: -12px;
            `}
          >
            β
          </Text>
        </View>
      </HeaderLogo>
    </StyledHeader>
  );
};
