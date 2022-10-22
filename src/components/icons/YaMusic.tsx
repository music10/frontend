import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './Icon.props';

export const YaMusicIcon: FC<IconProps> = (props) => (
  <Svg width="165" height="165" viewBox="0 0 165 165" fill="none" {...props}>
    <Path
      opacity="0.6"
      d="M33.3784 16.8654C45.5173 7.87059 59.8645 2.43314 74.8175 1.08203V25.8256C65.1516 27.0787 55.9204 30.7794 48.0241 36.6305C38.1368 43.9569 30.8658 54.2669 27.2835 66.0399C23.7013 77.8129 23.9974 90.4254 28.1283 102.017C32.2592 113.609 40.0062 123.567 50.2265 130.421C60.4468 137.275 72.5993 140.663 84.8917 140.086C97.184 139.508 108.965 134.995 118.498 127.213C128.03 119.43 134.809 108.79 137.835 96.8622C139.946 88.542 140.152 79.9024 138.499 71.5733L159.277 54.8691L159.263 54.7344C164.872 70.1632 165.729 86.9485 161.68 102.911C157.357 119.951 147.673 135.151 134.055 146.269C120.437 157.386 103.607 163.833 86.0464 164.658C68.4859 165.483 51.1251 160.643 36.5246 150.851C21.9242 141.06 10.8571 126.835 4.95585 110.275C-0.945446 93.7153 -1.36854 75.6974 3.74896 58.8789C8.86647 42.0603 19.2536 27.3317 33.3784 16.8654Z"
      fill="white"
    />
    <Path
      d="M143.61 28.4102L143.697 28.6282L129.812 50.6814C124.762 43.1987 117.996 36.9704 110.077 32.5619V82.748C110.077 98.1457 97.5949 110.628 82.1973 110.628C66.7996 110.628 54.3174 98.1457 54.3174 82.748C54.3174 67.3504 66.7996 54.8681 82.1973 54.8681C87.9679 54.8681 93.3291 56.6214 97.7772 59.6242V2.22656C115.878 5.7081 131.861 15.1414 143.61 28.4102Z"
      fill="white"
    />
  </Svg>
);
