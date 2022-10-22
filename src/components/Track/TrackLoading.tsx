import React, { FC } from 'react';
import { View } from 'react-native';
import { useTheme } from '@emotion/react';
import { css } from '@emotion/native';

import { TextPlaceholderLoader } from '../PlaceholderLoader';

export const TrackLoading: FC = () => {
  const theme = useTheme();

  return (
    <View
      style={css({
        padding: 16,
        borderWidth: 2,
        opacity: 1,
        backgroundColor: 'transparent',
        borderColor: theme.colors.main50,
        alignItems: 'center',
      })}
    >
      <TextPlaceholderLoader width={115} height={14} />
      <TextPlaceholderLoader
        width={180}
        height={14}
        style={css({ marginTop: 12 })}
      />
    </View>
  );
};
