import React, { FC } from 'react';
import { Image, Platform } from 'react-native';

interface Props {
  size: number;
  cover: string;
}

const borderRadiusStyle = {
  borderRadius: 4,
};

export const PlaylistCover: FC<Props> = ({ cover, size }) => {
  if (!cover) {
    return null;
  }
  return Platform.OS === 'web' ? (
    <img
      alt=""
      src={cover}
      height={size}
      width={size}
      style={borderRadiusStyle}
    />
  ) : (
    <Image
      source={{ uri: cover, height: size, width: size }}
      style={borderRadiusStyle}
    />
  );
};
