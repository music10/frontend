import React, { FC } from 'react';
import Svg, { Rect } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const FiftyFiftyIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="48" viewBox="0 0 48 48" fill="none" {...props}>
    <Rect
      x="6"
      y="11"
      width="16"
      height="12"
      fill={fill}
      stroke={fill}
      strokeWidth="2"
    />
    <Rect x="26" y="11" width="16" height="12" stroke={fill} strokeWidth="2" />
    <Rect x="6" y="27" width="16" height="12" stroke={fill} strokeWidth="2" />
    <Rect
      x="26"
      y="27"
      width="16"
      height="12"
      fill={fill}
      stroke={fill}
      strokeWidth="2"
    />
  </Svg>
);
