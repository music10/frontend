import React from 'react';

import { StyledTrack, TrackAuthor, TrackName } from './Track.styled';
import { TrackProps } from './Track.types';

export const Track: React.FC<TrackProps> = ({ track, author, ...props }) => (
  <StyledTrack {...props} accessibilityRole="button">
    <TrackName>{track}</TrackName>
    <TrackAuthor>{author}</TrackAuthor>
  </StyledTrack>
);
