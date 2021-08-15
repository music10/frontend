import React, { FC } from 'react';
import { ActivityIndicator, View, ViewStyle } from 'react-native';

import { theme } from '../../themes';

const loaderStyle: ViewStyle = {
  alignSelf: 'center',
  width: 200,
  height: 200,
  margin: 'auto',
};

export const Loader: FC = () => (
  <View style={loaderStyle}>
    <ActivityIndicator size="large" color={theme.colors.accent} />
  </View>
);
