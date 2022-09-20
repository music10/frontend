import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Text } from './Text';
import { formatNumber } from '../utils';
import { CoinsContext } from '../contexts';
import { CoinsIcon } from './icons/Coins';

const CoinsStyled = styled.View`
  margin: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
`;

const StyledText = styled(Text)`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  color: ${({ theme }) => theme.colors.main};
`;

const AnimatedText = Animated.createAnimatedComponent(StyledText);
const ACoinsIcon = Animated.createAnimatedComponent(CoinsIcon);

export const Coins: FC = () => {
  const { coins } = useContext(CoinsContext);
  const theme = useTheme();
  const animationValue = useRef(new Animated.Value(0)).current;
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (!firstRender) {
      Animated.timing(animationValue, {
        isInteraction: true,
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start(() => animationValue.setValue(0));
    }
    setFirstRender(false);
  }, [animationValue, coins]);

  const color = animationValue.interpolate({
    inputRange: [0, 0.1, 1],
    outputRange: [theme.colors.main, theme.colors.accent, theme.colors.main],
  });

  return (
    <CoinsStyled>
      <AnimatedText style={StyleSheet.flatten({ color })}>
        {formatNumber(coins ?? 0)}
      </AnimatedText>
      <ACoinsIcon fill={color} />
    </CoinsStyled>
  );
};
