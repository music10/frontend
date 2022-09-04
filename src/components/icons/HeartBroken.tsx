import React, { FC } from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import { IconProps } from './Icon.props';

export const HeartBrokenIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.97948 9.60683C4.45746 11.8617 4.70925 14.9286 6.73483 16.9149L16 26L19.2176 22.8449L17.8033 21.4307L16 23.1989L8.1351 15.4868C6.90975 14.2853 6.67648 12.4902 7.4353 11.0626L5.97948 9.60683ZM21.4663 17.8388L23.8649 15.4868C25.3784 14.0028 25.3784 11.6132 23.8649 10.1291C22.3295 8.62362 19.8243 8.62362 18.2889 10.1291L16.0006 12.3731L10.6343 7.00686C12.2449 6.93026 13.8813 7.49501 15.1113 8.70112L16 9.57253L16.8887 8.70112C19.2018 6.43296 22.9521 6.43296 25.2652 8.70112C27.5783 10.9693 27.5783 14.6467 25.2652 16.9149L22.8806 19.2531L21.4663 17.8388Z"
      fill={fill}
    />
    <Rect
      x="6.05273"
      y="4.63867"
      width="27.2161"
      height="2"
      transform="rotate(45 6.05273 4.63867)"
      fill={fill}
    />
  </Svg>
);
