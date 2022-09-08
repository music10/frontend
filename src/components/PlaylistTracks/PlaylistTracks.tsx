import React, { FC } from 'react';
import { ScrollView } from 'react-native';

import { PlaylistDto } from '../../api/api.types';
import {
  Artist,
  Description,
  Name,
  Number,
  Track,
  Wrapper,
} from './PlaylistTracks.styled';

export const PlaylistTracks: FC<Pick<PlaylistDto, 'tracks'>> = ({ tracks }) => (
  <ScrollView>
    <Wrapper>
      {tracks?.map((track, index) => (
        <Track key={`${index}.${track.id}`}>
          <Number>{index + 1}</Number>
          <Description>
            <Name>{track.name}</Name>
            <Artist>{track.artist}</Artist>
          </Description>
        </Track>
      ))}
    </Wrapper>
  </ScrollView>
);
