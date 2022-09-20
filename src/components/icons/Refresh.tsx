import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './Icon.props';

export const RefreshIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M8.20575 20.5C7.31573 18.9585 6.90283 17.1876 7.01925 15.4114C7.13567 13.6352 7.77618 11.9334 8.8598 10.5212C9.94341 9.10898 11.4215 8.04982 13.107 7.47765C14.7926 6.90548 16.61 6.84598 18.3293 7.30669"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
    />
    <Path
      d="M23.7942 11.5C24.6842 13.0416 25.0971 14.8124 24.9807 16.5887C24.8643 18.3649 24.2238 20.0667 23.1401 21.4789C22.0565 22.8911 20.5785 23.9502 18.8929 24.5224C17.2073 25.0946 15.39 25.1541 13.6706 24.6934"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
    />
    <Path
      d="M17.7163 3.71924L20.2513 7.97058L15.9999 10.5056"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M14.9959 28.5049L12.2968 24.3559L16.4458 21.6568"
      stroke={fill}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
