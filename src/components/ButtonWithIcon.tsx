import React, { FC } from 'react';
import {
  InteractionState,
  Platform,
  Pressable,
  PressableProps,
} from 'react-native';
import { useTheme } from '@emotion/react';
import styled, { css } from '@emotion/native';

import { IconProps } from './icons/Icon.props';
import { Text } from './Text';

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

export const ButtonWithIcon: FC<Props> = ({
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
          fontSize: 14,
          paddingLeft: 24,
          paddingRight: 24,
          width: '100%',
          backgroundColor: hovered
            ? pressed
              ? theme.colors.main10
              : theme.colors.main20
            : theme.colors.main5,
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
