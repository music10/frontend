import { Path, Svg } from 'react-native-svg';
import { FC } from 'react';
import { IconProps } from './Icon.props';

export const PlayIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path d="M11 23V9L22 16L11 23Z" fill={fill} />
  </Svg>
);
