import React, { FC } from 'react';
import {
  ScrollView,
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { Text } from '../Text';
import { theme } from '../../themes';
import { PlaylistDto } from '../../api/api.types';

const wrapperStyle: StyleProp<ViewStyle> = {
  marginVertical: 16,
  marginHorizontal: 8,
  flexGrow: 0,
};

const trackStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexDirection: 'row',
  padding: 8,
};
const numberStyle: StyleProp<TextStyle> = {
  alignSelf: 'center',
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 40,
  fontFamily: theme.fontFamilyMedium,
  fontSize: 14,
  color: theme.colors.main50,
};
const descriptionStyle: StyleProp<ViewStyle> = {
  display: 'flex',
  flexGrow: 0,
  flexShrink: 1,
  flexBasis: 'auto',
};
const artistStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilyMedium,
  fontSize: 14,
  color: theme.colors.main50,
};
const nameStyle: StyleProp<TextStyle> = {
  fontFamily: theme.fontFamilySemiBold,
  fontSize: 14,
  color: theme.colors.main,
};

export const PlaylistTracks: FC<Pick<PlaylistDto, 'tracks'>> = ({ tracks }) => (
  <ScrollView>
    <View style={wrapperStyle}>
      {tracks?.map((track, index) => (
        <View style={trackStyle} key={track.id}>
          <Text style={numberStyle}>{index + 1}</Text>
          <View style={descriptionStyle}>
            <Text style={nameStyle}>{track.name}</Text>
            <Text style={artistStyle}>{track.artist}</Text>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
);
