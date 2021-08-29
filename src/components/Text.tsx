import React, { FC } from 'react';
import { TextProps, StyleSheet, Text as RNText } from 'react-native';
import { theme } from '../themes';

export const Text: FC<TextProps> = ({ style, ...props }) => (
  <RNText
    style={StyleSheet.compose(
      {
        fontFamily: theme.fontFamilyMedium,
        textDecorationLine: 'none',
      },
      style,
    )}
    {...props}
  />
);
