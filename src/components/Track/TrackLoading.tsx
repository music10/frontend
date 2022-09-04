import React, { FC } from 'react';
import { View } from 'react-native';

import { theme } from '../../themes';
import { PlaceholderLoader } from '../PlaceholderLoader';

export const TrackLoading: FC = () => (
  <View
    style={{
      padding: 16,
      opacity: 1,
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: theme.colors.main50,
      alignItems: 'center',
    }}
  >
    <PlaceholderLoader width={115} height={14} style={{ marginVertical: 2 }} />
    <PlaceholderLoader
      width={180}
      height={14}
      style={{ marginTop: 12, marginBottom: 2 }}
    />
  </View>
);
