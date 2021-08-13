import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { theme } from '../../themes';

export const Loader: FC = () => (
  <View
    style={{
      alignSelf: 'center',
      width: 200,
      height: 200,
      margin: 'auto',
    }}
  >
    <ActivityIndicator size="large" color={theme.colors.accent} />
  </View>
);
