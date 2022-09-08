import React, { FC, useEffect, useState } from 'react';
import {
  InteractionState,
  Pressable,
  PressableProps,
  View,
} from 'react-native';
import styled, { css } from '@emotion/native';

import { Text } from '../Text';
import { ShortTrackDto } from '../../api/api.types';
import { Confetti } from './confetti';
import { useTheme } from '@emotion/react';

const ConfettiWrapper = styled.View`
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  bottom: 50%;
`;
const Artist = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.colors.main};
`;

const Name = styled(Text)`
  font-family: ${({ theme }) => theme.fontFamilyMedium};
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.main80};
`;

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
  name,
  artist,
  disabled,
  success,
  selected,
  ...props
}) => {
  const [isConfetti, setConfetti] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    if (success && selected) {
      setTimeout(() => {
        setConfetti(true);
      });
    }
  }, [selected, success]);

  console.log('Track', success ? theme.colors.accent : theme.colors.main50);
  return (
    <Pressable disabled={disabled} {...props}>
      {({ hovered, pressed }: InteractionState) => (
        <View
          style={css({
            borderColor: success ? theme.colors.accent : theme.colors.main50,
            padding: 16,
            opacity: disabled && !selected ? 0.5 : 1,
            backgroundColor:
              !disabled && (hovered || pressed)
                ? theme.colors.main10
                : 'transparent',
            borderWidth: 2,
          })}
        >
          <Artist
            style={css({
              color: success ? theme.colors.accent : theme.colors.main,
            })}
          >
            {artist}
          </Artist>
          <Name
            style={css({
              color: success ? theme.colors.accent : theme.colors.main80,
            })}
          >
            {name}
          </Name>
          <ConfettiWrapper>
            <Confetti active={isConfetti} config={CONFETTI_CONFIG} />
          </ConfettiWrapper>
        </View>
      )}
    </Pressable>
  );
};
