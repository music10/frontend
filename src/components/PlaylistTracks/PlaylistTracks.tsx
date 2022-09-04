import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from '../Text';
import { PlaylistDto } from '../../api/api.types';
import {
  artistStyle,
  descriptionStyle,
  nameStyle,
  numberStyle,
  trackStyle,
  wrapperStyle,
} from './PlaylistTracks.style';

export const PlaylistTracks: FC<Pick<PlaylistDto, 'tracks'>> = ({ tracks }) => (
  <ScrollView>
    <View style={wrapperStyle}>
      {tracks?.map((track, index) => (
        <View style={trackStyle} key={`${index}.${track.id}`}>
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
