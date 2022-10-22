import React, { PureComponent } from 'react';
import { IconProps } from './Icon.props';
import Svg, { Circle, Path } from 'react-native-svg';

export class CoinsIcon extends PureComponent<IconProps> {
  render() {
    return (
      <Svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        {...this.props}
      >
        <Circle cx="13.5" cy="18.5" r="5.5" fill={this.props.fill} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.8462 15.9104C22.6491 15.5223 24.0004 13.9189 24.0004 12C24.0004 9.79086 22.2095 8 20.0004 8C18.0815 8 16.4781 9.35125 16.09 11.1542C18.291 11.9619 20.0385 13.7094 20.8462 15.9104Z"
          fill={this.props.fill}
        />
      </Svg>
    );
  }
}
