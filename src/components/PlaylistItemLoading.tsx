import React, { FC } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { PlaceholderLoader } from './PlaceholderLoader';

const textStyle: StyleProp<ViewStyle> = {
  marginLeft: 24,
};

export const PlaylistItemLoading: FC = () => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 4,
      paddingVertical: 8,
      paddingHorizontal: 8,
      marginVertical: 0,
      marginHorizontal: 8,
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: 'transparent',
    }}
  >
    <PlaceholderLoader width={48} height={48} />
    <PlaceholderLoader width={200} height={14} style={textStyle} />
  </View>
);
