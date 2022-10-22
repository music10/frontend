import React, { FC } from 'react';
import { ScrollView } from 'react-native';
import { TextPlaceholderLoader } from '../PlaceholderLoader';
import { PlaceholderLoaderList } from '../PlaceholderLoaderList';

import { Description, Number, Track, Wrapper } from './PlaylistTracks.styled';

interface Props {
  items?: number;
}

const MockTrack: FC<{ index: number }> = ({ index }) => (
  <Track key={index}>
    <Number>{index + 1}</Number>
    <Description>
      <TextPlaceholderLoader width={180} height={14} borderRadius={2} />
      <TextPlaceholderLoader width={115} height={14} borderRadius={2} />
    </Description>
  </Track>
);

export const PlaylistTracksLoading: FC<Props> = ({ items = 20 }) => (
  <ScrollView>
    <Wrapper>
      <PlaceholderLoaderList number={items} component={MockTrack} />
    </Wrapper>
  </ScrollView>
);
