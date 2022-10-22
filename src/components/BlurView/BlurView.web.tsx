import React, { FC } from 'react';
import { Platform } from 'react-native';
import { BlurViewProps } from '@react-native-community/blur';

export const BlurView: FC<BlurViewProps & { blurRadius?: number }> = ({
  children,
  style,
  blurRadius,
  ...props
}) => (
  <div
    // @ts-ignore
    style={Platform.select({
      web: {
        backdropFilter: `blur(${blurRadius ?? 5}px)`,
        ...(typeof style === 'object' ? style : {}),
      },
      default: style,
    })}
    {...props}
  >
    {children}
  </div>
);
