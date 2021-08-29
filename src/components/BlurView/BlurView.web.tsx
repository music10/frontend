import React, { FC } from 'react';
import { Platform, ViewProps } from 'react-native';
import { BlurViewProperties } from '@react-native-community/blur';

interface Props extends BlurViewProperties, ViewProps {}

export const BlurView: FC<Props> = ({
  children,
  blurRadius = 5,
  style,
  ...props
}) => (
  <div
    // @ts-ignore
    style={Platform.select({
      web: {
        backdropFilter: `blur(${blurRadius}px)`,
        ...(typeof style === 'object' ? style : {}),
      },
      default: style,
    })}
    {...props}
  >
    {children}
  </div>
);
