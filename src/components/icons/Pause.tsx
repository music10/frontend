import React, { FC } from 'react';
import { Rect, Svg } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const PauseIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Rect x="10" y="9" width="3" height="14" fill={fill} />
    <Rect x="19" y="9" width="3" height="14" fill={fill} />
  </Svg>
);
