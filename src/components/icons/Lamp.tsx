import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const LampIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.5714 19H13.4286H10.5714ZM7 9.9C7 8.60044 7.52679 7.3541 8.46447 6.43518C9.40215 5.51625 10.6739 5 12 5C13.3261 5 14.5979 5.51625 15.5355 6.43518C16.4732 7.3541 17 8.60044 17 9.9C17.0005 10.689 16.8058 11.4663 16.4326 12.1653C16.0593 12.8644 15.5188 13.4643 14.8571 13.9138L14.47 15.71C14.4187 16.0411 14.2481 16.3432 13.989 16.5615C13.7299 16.7798 13.3996 16.8999 13.0579 16.9H10.9421C10.6004 16.8999 10.2701 16.7798 10.011 16.5615C9.75191 16.3432 9.58126 16.0411 9.53 15.71L9.14286 13.9215C8.48101 13.4704 7.94041 12.8691 7.56725 12.1688C7.1941 11.4685 6.99947 10.69 7 9.9V9.9Z"
      stroke={fill}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
