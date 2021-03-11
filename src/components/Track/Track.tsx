import React, { FC } from 'react';
import styled, { css } from '@emotion/native';
import { InteractionState, Pressable, PressableProps } from 'react-native';

import { useTheme } from '@emotion/react';
import { ITrack } from '../../interfaces';
import { Text } from '../Text';

interface Props extends ITrack, PressableProps {
  success?: boolean;
  selected?: boolean;
}

const Artist = styled(Text)<Partial<Props>>(
  ({ theme, disabled, success, selected }) => `
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: ${
    success
      ? theme.colors.accent
      : disabled && !selected
      ? theme.colors.main80
      : theme.colors.main
  };
`,
);

const TrackName = styled(Text)<Partial<Props>>(
  ({ theme, disabled, success, selected }) => `
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  color: ${
    success
      ? theme.colors.accent
      : disabled && !selected
      ? theme.colors.main80
      : theme.colors.main
  };
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
      style={({ hovered, focused, pressed }: InteractionState) => css`
        padding: 16px;
        background: ${!disabled && (hovered || focused || pressed)
          ? theme.colors.main10
          : 'transparent'};
        border: ${success
          ? `2px solid ${theme.colors.accent}`
          : disabled && !selected
          ? `2px solid ${theme.colors.main20}`
          : focused && !selected
          ? `2px solid ${theme.colors.main}`
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
