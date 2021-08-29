import React, { FC, useEffect, useState } from 'react';
import {
  InteractionState,
  Pressable,
  PressableProps,
  View,
  ViewStyle,
} from 'react-native';

import { Text } from '../Text';
import { theme } from '../../themes';
import { ShortTrackDto } from '../../api/api.types';
import { Confetti } from './confetti';

const confettiWrapperStyle: ViewStyle = {
  position: 'absolute',
  left: '50%',
  right: '50%',
  top: '50%',
  bottom: '50%',
};

const CONFETTI_CONFIG = {
  angle: 90,
  spread: 210,
  startVelocity: 75,
  elementCount: 75,
  dragFriction: 0.2,
  duration: 1500,
  stagger: 2,
  width: '10px',
  height: '10px',
  colors: ['#8DCE24', '#425B1C', '#2D3A1A'],
};

interface Props extends ShortTrackDto, PressableProps {
  success?: boolean;
  selected?: boolean;
}

export const Track: FC<Props> = ({
  id,
  name,
  artist,
  disabled,
  success,
  selected,
  ...props
}) => {
  const [isConfetti, setConfetti] = useState(false);

  useEffect(() => {
    if (success && selected) {
      setTimeout(() => {
        setConfetti(true);
      });
    }
  }, [selected, success]);

  return (
    <Pressable
      key={id}
      style={({ hovered, pressed }: InteractionState) => ({
        padding: 16,
        opacity: disabled && !selected ? 0.5 : 1,
        backgroundColor:
          !disabled && (hovered || pressed)
            ? theme.colors.main10
            : 'transparent',
        borderWidth: 2,
        borderColor: success ? theme.colors.accent : theme.colors.main50,
      })}
      disabled={disabled}
      {...props}
    >
      <Text
        style={{
          fontFamily: theme.fontFamilySemiBold,
          fontSize: 14,
          textAlign: 'center',
          color: success ? theme.colors.accent : theme.colors.main,
        }}
      >
        {artist}
      </Text>
      <Text
        style={{
          fontFamily: theme.fontFamilyMedium,
          fontSize: 14,
          textAlign: 'center',
          marginTop: 8,
          color: success ? theme.colors.accent : theme.colors.main80,
        }}
      >
        {name}
      </Text>
      <View style={confettiWrapperStyle}>
        <Confetti active={isConfetti} config={CONFETTI_CONFIG} />
      </View>
    </Pressable>
  );
};
