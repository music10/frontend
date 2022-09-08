import styled from '@emotion/native';
import React, { FC } from 'react';

interface Props {
  size: number;
  cover: string;
}

const ImageStyled = styled.Image`
  border-radius: 4px;
`;

export const PlaylistCover: FC<Props> = ({ cover, size }) => {
  if (!cover) {
    return null;
  }
  return <ImageStyled source={{ uri: cover, height: size, width: size }} />;
};
