import React, { FC, useCallback, useEffect, useMemo, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
// @ts-ignore
import { usePageVisibility } from 'react-page-visibility';

interface Props {
  state: 'start' | 'stop';
  callback?: Animated.EndCallback;
}
const StyledProgress = styled.View`
  height: 6px;
`;
export const Progress: FC<Props> = ({ state, callback }) => {
  const theme = useTheme();
  const animationValue = useRef(new Animated.Value(0)).current;

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

  const stopAnimation = useCallback(() => animation.stop(), [animation]);
  usePageVisibility(stopAnimation);

  useEffect(() => {
    if (state === 'start') {
      animation.start(callback);
    } else {
      animation.stop();
    }
  }, [animation, callback, state]);

  return (
    <StyledProgress>
      <Animated.View
        style={{
          height: 6,
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
