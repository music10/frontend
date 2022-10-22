import React, { FC } from 'react';
import {
  InteractionState,
  Platform,
  Pressable,
  PressableProps,
} from 'react-native';

import styled, { css } from '@emotion/native';
import { useTheme } from '@emotion/react';

import { Text } from './Text';
import { IconProps } from './icons/Icon.props';

interface Props extends PressableProps {
  text: string;
  icon: FC<IconProps>;
  primary?: boolean;
}

const TextStyled = styled(Text)<{ primary?: boolean }>`
  color: ${({ primary, theme }) =>
    primary ? theme.colors.bg : theme.colors.main};
  font-family: ${({ theme }) => theme.fontFamilySemiBold};
  font-size: 14px;
  text-decoration-line: none;
  margin-left: 24px;
  line-height: 24px;
`;

export const MenuItem: FC<Props> = ({
  primary,
  text,
  icon: Icon,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Pressable
      style={({ hovered, pressed }: InteractionState) =>
        css({
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
              elevation:
                !primary || !(hovered || pressed) ? 0 : hovered ? 10 : 5,
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
        })
      }
      {...props}
    >
      <Icon
        fill={primary ? theme.colors.bg : theme.colors.main}
        height={24}
        width={24}
      />
      <TextStyled primary={primary}>{text}</TextStyled>
    </Pressable>
  );
};
