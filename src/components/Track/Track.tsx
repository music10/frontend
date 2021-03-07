import React, { FC } from 'react';
import styled, { css } from '@emotion/native';
import { InteractionState, Pressable, PressableProps } from 'react-native';

import { useTheme } from '@emotion/react';
import { ITrack } from '../../interfaces';
import { Text } from '../Text';

interface Props extends ITrack, PressableProps {
  success?: boolean;
}

const Artist = styled(Text)<Partial<Props>>(
  ({ theme, disabled, success }) => `
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: ${
    disabled
      ? theme.colors.main80
      : success
      ? theme.colors.accent
      : theme.colors.main
  };
`,
);

const TrackName = styled(Text)<Partial<Props>>(
  ({ theme, disabled, success }) => `
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  color: ${
    disabled
      ? theme.colors.main80
      : success
      ? theme.colors.accent
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
  ...props
}) => {
  const theme = useTheme();

  return (
    <Pressable
      key={id}
      style={({ hovered, focused, pressed }: InteractionState) => css`
        padding: 16px;
        background: ${hovered || focused || pressed
          ? theme.colors.main10
          : 'transparent'};
        border: ${focused
          ? `2px solid ${theme.colors.main}`
          : success
          ? `2px solid ${theme.colors.accent}`
          : disabled
          ? `2px solid ${theme.colors.main20}`
          : `2px solid ${theme.colors.main50}`};
      `}
      {...props}
    >
      <Artist disabled={disabled} success={success}>
        {artist}
      </Artist>
      <TrackName disabled={disabled} success={success}>
        {name}
      </TrackName>
    </Pressable>
  );
};
