import React, { FC, useEffect, useRef } from 'react';
import { Animated, View, ViewProps } from 'react-native';

import { theme } from '../themes';

interface Props extends ViewProps {
  width: number;
  height: number;
  borderRadius?: number;
}

export const PlaceholderLoader: FC<Props> = ({
  width,
  height,
  borderRadius = 4,
  ...props
}) => {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
        delay: 1000,
      }),
    ).start();
  }, [animationValue]);

  const color = animationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [
      theme.colors.main10,
      theme.colors.main20,
      theme.colors.main10,
    ],
  });

  return (
    <View {...props}>
      <Animated.View
        style={{
          height,
          width,
          backgroundColor: color,
          borderRadius,
        }}
      />
    </View>
  );
};