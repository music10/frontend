import React, { FC } from 'react';
import { InteractionState, Pressable, PressableProps } from 'react-native';
import styled, { css } from '@emotion/native';
import { useTheme } from '@emotion/react';
import { Text } from '../Text';

import { IconProps } from '../icons/Icon.props';

interface Props extends PressableProps {
  text: string;
  icon: React.FC<IconProps>;
  primary?: boolean;
}

const StyledText = styled(Text)<Partial<Props>>(
  ({ primary, theme }) => `
  color: ${primary ? theme.colors.bg : theme.colors.main};
  font-weight: 600;
  font-size: 14px;
  margin-left: 24px;
  line-height: 24px;
`,
);

export const MenuItem: FC<Props> = ({
  primary,
  text,
  icon: Icon,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Pressable
      style={({ hovered, pressed }: InteractionState) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: ${hovered || pressed ? '16px 24px 16px 32px' : '16px 24px'};
        background-color: ${primary ? theme.colors.accent : theme.colors.bg};
        border: ${primary
          ? `2px solid ${theme.colors.accent}`
          : `2px solid ${theme.colors.bg}`};
        box-shadow: ${!primary || !(hovered || pressed)
          ? 'none'
          : hovered
          ? '0px 24px 48px rgba(0, 0, 0, 0.75);'
          : '0px 8px 16px rgba(0, 0, 0, 0.75)'};
      `}
      {...props}
    >
      <Icon
        fill={primary ? theme.colors.bg : theme.colors.main}
        height={24}
        width={24}
      />
      <StyledText primary={primary}>{text}</StyledText>
    </Pressable>
  );
};
