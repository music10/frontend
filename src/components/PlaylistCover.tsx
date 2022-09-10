import React, { FC } from 'react';
import { Image, Platform, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { css } from '@emotion/native';

interface Props {
  size: number;
  cover: string;
}

const borderRadiusStyle = css({
  borderRadius: 4,
  overflow: 'hidden',
});

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
  ) : /\.svg$/.test(cover) && cover ? (
    <View style={borderRadiusStyle}>
      <SvgUri uri={cover} height={size} width={size} />
    </View>
  ) : (
    <Image
      source={{ uri: cover, height: size, width: size }}
      style={borderRadiusStyle}
    />
  );
};
