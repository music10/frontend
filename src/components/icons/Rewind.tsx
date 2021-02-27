import { Path, Svg } from 'react-native-svg';
import { FC } from 'react';
import { IconProps } from './Icon.props';

export const RewindIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path d="M26 23V9L15 16L26 23Z" fill={fill} />
    <Path d="M16 23V9L5 16L16 23Z" fill={fill} />
  </Svg>
);
