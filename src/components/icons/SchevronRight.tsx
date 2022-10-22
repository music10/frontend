import React, { FC } from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const SchevronRightIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.8787 16L10.9393 9.06065L13.0607 6.93933L22.1213 16L13.0607 25.0606L10.9393 22.9393L17.8787 16Z"
      fill={fill}
    />
  </Svg>
);
