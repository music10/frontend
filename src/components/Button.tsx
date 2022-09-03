import React, { FC } from 'react';
import { Pressable, PressableProps, StyleSheet } from 'react-native';

import { theme } from '../themes';

export const Button: FC<PressableProps> = ({ style, ...props }) => (
  <Pressable
    style={(state) =>
      StyleSheet.compose(
        {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 16,
          paddingHorizontal: 24,
          backgroundColor: theme.colors.bg,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: theme.colors.bg,
        },
        style instanceof Function ? style(state) : style,
      )
    }
    {...props}
  />
);
