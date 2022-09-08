import React, { FC } from 'react';
import styled from '@emotion/native';
import { PlaceholderLoader } from './PlaceholderLoader';

const TextStyled = styled(PlaceholderLoader)`
  margin-left: 24px;
`;

const PlaylistItemLoadingStyled = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
  margin: 0 8px;
  border: 2px solid transparent;
  background-color: transparent;
`;

export const PlaylistItemLoading: FC = () => (
  <PlaylistItemLoadingStyled>
    <PlaceholderLoader width={48} height={48} />
    <TextStyled width={200} height={14} />
  </PlaylistItemLoadingStyled>
);
