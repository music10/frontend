import React from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

import { Text } from './Text';
import { theme } from '../themes';
import { Loader } from './Loader';

interface Props {
  guess: number;
  text: string;
}

const layoutStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const totalStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilyExtraBoldItalic,
  fontSize: 64,
  lineHeight: 78,
  textAlign: 'center',
  color: theme.colors.accent,
};

const textStyle: StyleProp<TextStyle> = {
  fontStyle: 'italic',
  fontFamily: theme.fontFamilyExtraBoldItalic,
  fontSize: 24,
  lineHeight: 29,
  textAlign: 'center',
  color: theme.colors.accent,
};

export const Result: React.FC<Props> = ({ guess, text }) => (
  <View style={layoutStyle}>
    {guess || text ? (
      <>
        <Text style={totalStyle}>{guess} / 10</Text>
        <Text style={textStyle}>{text}</Text>
      </>
    ) : (
      <Loader />
    )}
  </View>
);
