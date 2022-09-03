import React, { FC } from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';

import { theme } from '../themes';

export const BottomMenu: FC<ViewProps> = ({ children, style, ...props }) => (
  <View
    style={StyleSheet.compose(
      {
        paddingVertical: 32,
        paddingHorizontal: 16,
        backgroundColor: theme.colors.bg,
        position: 'relative',
      },
      style,
    )}
    {...props}
  >
    {children}
  </View>
);
