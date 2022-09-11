import { FC } from 'react';
import Svg, { Rect } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const StatsIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Rect x="5" y="7" width="3" height="18" fill={fill} />
    <Rect x="11" y="14" width="3" height="11" fill={fill} />
    <Rect x="17" y="17" width="3" height="8" fill={fill} />
    <Rect x="23" y="11" width="3" height="14" fill={fill} />
  </Svg>
);
