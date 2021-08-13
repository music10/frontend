import React, { FC } from 'react';
import { InteractionState, Pressable, PressableProps } from 'react-native';

import { Text } from '../Text';
import { theme } from '../../themes';
import { ShortTrackDto } from '../../api/api.types';

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
}) => (
  <Pressable
    key={id}
    style={({ hovered, pressed }: InteractionState) => ({
      padding: 16,
      opacity: disabled && !selected ? 0.5 : 1,
      backgroundColor:
        !disabled && (hovered || pressed) ? theme.colors.main10 : 'transparent',
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
  </Pressable>
);
