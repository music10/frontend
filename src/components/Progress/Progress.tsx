import React, { FC, useEffect, useMemo, useRef } from 'react';
import styled from '@emotion/native';
import { Animated, Easing } from 'react-native';
import { useTheme } from '@emotion/react';

interface Props {
  state: 'start' | 'stop';
}
const StyledProgress = styled.View`
  height: 14px;
`;
export const Progress: FC<Props> = ({ state }) => {
  const theme = useTheme();
  const animationValue = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const animation = useMemo(
    () =>
      Animated.timing(animationValue, {
        easing: Easing.linear,
        toValue: 1,
        duration: 10000,
        useNativeDriver: false,
      }),
    [animationValue],
  );

  useEffect(() => {
    animation[state]();
  }, [animation, state]);

  return (
    <StyledProgress>
      <Animated.View
        style={{
          height: 14,
          backgroundColor: theme.colors.main50,
          width: animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
        }}
      />
    </StyledProgress>
  );
};
