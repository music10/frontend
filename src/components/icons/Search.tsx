import React, { FC } from 'react';
import { Path, Svg } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const SearchIcon: FC<IconProps> = ({ fill, ...props }) => (
  <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <Path
      d="M26.8146 25.3159L19.7508 18.2521C20.847 16.835 21.44 15.1024 21.44 13.28C21.44 11.0985 20.5886 9.0531 19.0491 7.51086C17.5096 5.96863 15.4587 5.12 13.28 5.12C11.1013 5.12 9.05041 5.97135 7.5109 7.51086C5.96866 9.05038 5.12003 11.0985 5.12003 13.28C5.12003 15.4587 5.97138 17.5095 7.5109 19.0491C9.05041 20.5913 11.0986 21.4399 13.28 21.4399C15.1024 21.4399 16.8323 20.847 18.2494 19.7535L25.3132 26.8146C25.3339 26.8353 25.3585 26.8518 25.3856 26.863C25.4127 26.8742 25.4417 26.88 25.471 26.88C25.5003 26.88 25.5293 26.8742 25.5564 26.863C25.5834 26.8518 25.608 26.8353 25.6287 26.8146L26.8146 25.6314C26.8354 25.6107 26.8518 25.5861 26.863 25.5591C26.8743 25.532 26.88 25.503 26.88 25.4737C26.88 25.4444 26.8743 25.4154 26.863 25.3883C26.8518 25.3612 26.8354 25.3366 26.8146 25.3159ZM17.5885 17.5884C16.4352 18.739 14.9065 19.3727 13.28 19.3727C11.6534 19.3727 10.1248 18.739 8.97153 17.5884C7.82097 16.4351 7.18722 14.9065 7.18722 13.28C7.18722 11.6534 7.82097 10.1221 8.97153 8.9715C10.1248 7.82094 11.6534 7.18719 13.28 7.18719C14.9065 7.18719 16.4379 7.81822 17.5885 8.9715C18.739 10.1248 19.3728 11.6534 19.3728 13.28C19.3728 14.9065 18.739 16.4379 17.5885 17.5884Z"
      fill={fill}
    />
  </Svg>
);
