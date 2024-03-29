import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, Easing, View } from 'react-native';
import { theme } from '../../themes';

interface Props {
  state: 'start' | 'stop';
  callback?: Animated.EndCallback;
}

export const Progress: FC<Props> = ({ state, callback }) => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const [duration, setDuration] = useState(10000);

  const animation = useMemo(
    () =>
      Animated.timing(animationValue, {
        easing: Easing.linear,
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }),
    [animationValue, duration],
  );
  useEffect(() => animation.start(), [animation]);

  useEffect(() => {
    if (state === 'start') {
      animation.start(callback);
    } else {
      animationValue.stopAnimation((a) => {
        setDuration((1 - a) * 10000);
      });
      animation.stop();
    }
  }, [animation, animationValue, callback, state]);

  return (
    <View style={{ height: 6 }}>
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
    </View>
  );
};
