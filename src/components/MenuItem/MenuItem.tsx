import React, { FC } from 'react';
import {
  InteractionState,
  Platform,
  Pressable,
  PressableProps,
} from 'react-native';

import { Text } from '../Text';
import { IconProps } from '../icons/Icon.props';
import { theme } from '../../themes';

interface Props extends PressableProps {
  text: string;
  icon: React.FC<IconProps>;
  primary?: boolean;
}

export const MenuItem: FC<Props> = ({
  primary,
  text,
  icon: Icon,
  ...props
}) => (
  <Pressable
    style={({ hovered, pressed }: InteractionState) => ({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingLeft: hovered || pressed ? 32 : 24,
      paddingRight: 24,
      backgroundColor: primary ? theme.colors.accent : 'transparent',
      borderWidth: 2,
      borderColor: primary ? theme.colors.accent : 'transparent',
      ...Platform.select({
        android: {
          elevation: !primary || !(hovered || pressed) ? 0 : hovered ? 10 : 5,
        },
        web: {
          boxShadow:
            !primary || !(hovered || pressed)
              ? 'none'
              : hovered
              ? '0px 24px 48px rgba(0, 0, 0, 0.75),'
              : '0px 8px 16px rgba(0, 0, 0, 0.75)',
        },
      }),
    })}
    {...props}
  >
    <Icon
      fill={primary ? theme.colors.bg : theme.colors.main}
      height={24}
      width={24}
    />
    <Text
      style={{
        color: primary ? theme.colors.bg : theme.colors.main,
        fontFamily: theme.fontFamilySemiBold,
        fontSize: 14,
        marginLeft: 24,
        lineHeight: 24,
      }}
    >
      {text}
    </Text>
  </Pressable>
);
