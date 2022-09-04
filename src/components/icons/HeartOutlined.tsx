import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './Icon.props';

export const HeartOutlinedIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 8.57253L15.1113 7.70112C12.7982 5.43296 9.04793 5.43296 6.73483 7.70112C4.42172 9.96928 4.42172 13.6467 6.73483 15.9149L16 25L25.2652 15.9149C27.5783 13.6467 27.5783 9.96928 25.2652 7.70112C22.9521 5.43296 19.2018 5.43296 16.8887 7.70112L16 8.57253ZM16 22.1989L23.8649 14.4868C25.3784 13.0028 25.3784 10.6132 23.8649 9.12914C22.3295 7.62362 19.8243 7.62362 18.2889 9.12914L16 11.3736L13.7111 9.12914C12.1757 7.62362 9.67045 7.62362 8.1351 9.12914C6.62163 10.6132 6.62163 13.0028 8.1351 14.4868L16 22.1989Z"
      fill={fill}
    />
  </Svg>
);
