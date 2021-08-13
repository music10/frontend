import React, { FC } from 'react';
import { TextProps, StyleSheet } from 'react-native';

import { Text } from '../Text';
import { theme } from '../../themes';

export const ErrorMessage: FC<TextProps> = ({ style, ...props }) => (
  <Text
    style={StyleSheet.compose(
      {
        paddingVertical: 24,
        paddingHorizontal: 48,
        fontSize: 12,
        color: theme.colors.main,
        borderWidth: 2,
        borderColor: theme.colors.danger,
        fontFamily: theme.fontFamilySemiBold,
        position: 'relative',
        textAlign: 'center',
      },
      style,
    )}
    {...props}
  />
);
