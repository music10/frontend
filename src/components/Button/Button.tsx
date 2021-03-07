import React, { FC } from 'react';
import { InteractionState, Pressable, PressableProps } from 'react-native';
import { css } from '@emotion/native';
import { useTheme } from '@emotion/react';

export const Button: FC<PressableProps> = (props) => {
  const theme = useTheme();

  return (
    <Pressable
      style={({ focused }: InteractionState) => css`
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px 24px;
        background-color: ${theme.colors.bg};
        border: ${focused
          ? `2px solid ${theme.colors.main}`
          : `2px solid ${theme.colors.bg}`};
      `}
      {...props}
    />
  );
};
