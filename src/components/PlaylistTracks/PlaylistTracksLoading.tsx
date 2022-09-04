import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

import { Text } from '../Text';
import { PlaceholderLoader } from '../PlaceholderLoader';
import {
  descriptionStyle,
  numberStyle,
  trackStyle,
  wrapperStyle,
} from './PlaylistTracks.style';
import { PlaceholderLoaderList } from '../PlaceholderLoaderList';

interface Props {
  items?: number;
}

export const PlaylistTracksLoading: FC<Props> = ({ items = 20 }) => (
  <ScrollView>
    <View style={wrapperStyle}>
      <PlaceholderLoaderList
        number={items}
        component={({ index }) => (
          <View style={trackStyle} key={index}>
            <Text style={numberStyle}>{index + 1}</Text>
            <View style={descriptionStyle}>
              <PlaceholderLoader
                width={180}
                height={14}
                borderRadius={2}
                style={{ marginVertical: 2 }}
              />
              <PlaceholderLoader
                width={115}
                height={14}
                borderRadius={2}
                style={{ marginVertical: 2 }}
              />
            </View>
          </View>
        )}
      />
    </View>
  </ScrollView>
);
