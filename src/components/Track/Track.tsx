import React, { FC } from 'react';
import styled, { css } from '@emotion/native';
import { InteractionState, Pressable, PressableProps } from 'react-native';

import { useTheme } from '@emotion/react';
import { Text } from '../Text';
import { Components } from '../../api/api.types';

interface Props extends Components.Schemas.TrackDto, PressableProps {
  success?: boolean;
  selected?: boolean;
}

const Artist = styled(Text)<Partial<Props>>(
  ({ theme, success }) => `
  font-family: ${theme.fontFamilySemiBold};
  font-size: 14px;
  text-align: center;
  color: ${success ? theme.colors.accent : theme.colors.main};
`,
);

const TrackName = styled(Text)<Partial<Props>>(
  ({ theme, success }) => `
  font-family: ${theme.fontFamilyMedium};
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  color: ${success ? theme.colors.accent : theme.colors.main80};
`,
);

export const Track: FC<Props> = ({
  id,
  name,
  artist,
  disabled,
  success,
  selected,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Pressable
      key={id}
      style={({ hovered, pressed }: InteractionState) => css`
        padding: 16px;
        opacity: ${disabled && !selected ? '0.5' : '1'};
        background-color: ${!disabled && (hovered || pressed)
          ? theme.colors.main10
          : 'transparent'};
        border: ${success
          ? `2px solid ${theme.colors.accent}`
          : `2px solid ${theme.colors.main50}`};
      `}
      disabled={disabled}
      {...props}
    >
      <Artist disabled={disabled} selected={selected} success={success}>
        {artist}
      </Artist>
      <TrackName disabled={disabled} selected={selected} success={success}>
        {name}
      </TrackName>
    </Pressable>
  );
};
