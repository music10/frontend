import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const ExitIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M21.2 18.5V16H14.8667V13.5H21.2V11L25 14.75L21.2 18.5ZM19.9333 17.25V22.25H13.6V26L6 22.25V6H19.9333V12.25H18.6667V7.25H8.53333L13.6 9.75V21H18.6667V17.25H19.9333Z"
      fill={fill}
    />
  </Svg>
);
