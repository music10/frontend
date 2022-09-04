import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './Icon.props';

export const HeartIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.73483 7.70112C9.04793 5.43296 12.7982 5.43296 15.1113 7.70112L16 8.57253L16.8887 7.70112C19.2018 5.43296 22.9521 5.43296 25.2652 7.70112C27.5783 9.96928 27.5783 13.6467 25.2652 15.9149L16 25L6.73483 15.9149C4.42172 13.6467 4.42172 9.96928 6.73483 7.70112Z"
      fill={fill}
    />
  </Svg>
);
