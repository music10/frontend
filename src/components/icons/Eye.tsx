import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const EyeIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M16 9C11 9 6.73 12.11 5 16.5C6.73 20.89 11 24 16 24C21 24 25.27 20.89 27 16.5C25.27 12.11 21 9 16 9ZM16 21.5C13.24 21.5 11 19.26 11 16.5C11 13.74 13.24 11.5 16 11.5C18.76 11.5 21 13.74 21 16.5C21 19.26 18.76 21.5 16 21.5ZM16 13.5C14.34 13.5 13 14.84 13 16.5C13 18.16 14.34 19.5 16 19.5C17.66 19.5 19 18.16 19 16.5C19 14.84 17.66 13.5 16 13.5Z"
      fill={fill}
    />
  </Svg>
);
